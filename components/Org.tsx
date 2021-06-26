/* Copyright 2021 the Deno authors. All rights reserved. MIT license. */

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import dompurify from "dompurify";

import unified from "unified";
import parse from "reorg-parse";

import {
  markup,
  MarkupProps,
  scrollEffect,
  slugify,
  transformImageUri,
  transformLinkUri,
} from "./Markup";
import { RawCodeBlock } from "./CodeBlock";
import { fileTypeFromURL } from "../util/registry_utils";

import {
  Block,
  Document,
  Drawer,
  Footnote,
  FootnoteReference,
  HTML,
  Headline,
  HorizontalRule,
  Keyword,
  List,
  ListItem,
  Paragraph,
  PhrasingContent,
  Planning,
  Section,
  StyledText,
  Table,
  Token,
} from "orga/dist/types";

import { Node, Parent } from "unist";

function foreachTree(tree: Node, iteratee: (node: Node) => void) {
  iteratee(tree);
  if ("children" in tree) {
    (tree as Parent).children.forEach((c) => foreachTree(c, iteratee));
  }
}

function parseSource(source: string): Document {
  return unified().use(parse).parse(source) as Document;
}

type TopLevelContent = Content | Keyword | Footnote;
type Content =
  | Section
  | Paragraph
  | Block
  | Drawer
  | Planning
  | List
  | Table
  | HorizontalRule
  | Headline
  | HTML;

function orgToHTML(props: MarkupProps, node: Document): string {
  function nonHTML(text: string) {
    return text
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  // Footnote handling: footnotes are grouped at end of document and numbered according to initial usage.

  function extractFootnotes(node: Document): [FootnoteReference[], Footnote[]] {
    const refs: FootnoteReference[] = [];
    const defs: Footnote[] = [];
    foreachTree(node, (n) => {
      if (n.type === "footnote") {
        defs.push(n as Footnote);
      } else if (n.type === "footnote.reference") {
        refs.push(n as FootnoteReference);
      }
    });
    return [refs, defs];
  }

  function buildFootnoteMap(
    refs: FootnoteReference[],
    defs: Footnote[]
  ): Map<string, number> {
    const res = new Map();
    let curr = 1;
    const definedLabels = defs.map((c) => c.label);
    refs.forEach((ref) => {
      const label = ref.label;
      if (res.has(label) || !definedLabels.includes(label)) {
        return;
      }
      res.set(label, curr);
      curr++;
    });
    return res;
  }

  const [footnoteUses, footnotes] = extractFootnotes(node);

  const fnmap = buildFootnoteMap(footnoteUses, footnotes);

  function orderFootnotes(
    fmap: Map<string, number>,
    defs: Footnote[]
  ): Footnote[] {
    const res: Footnote[] = [];
    const invMap = new Map(
      Array.from(fmap.entries()).map((kv) => [kv[1], kv[0]])
    );
    const defsMap = new Map(defs.map((v) => [v.label, v]));
    for (let fnum = 1; fnum < fmap.size + 1; fnum++) {
      res.push(defsMap.get(invMap.get(fnum)!)!);
    }
    return res;
  }

  function footnoteId(fnum: number): string {
    return `fn.${fnum}`;
  }

  function wrapped(tag: string, text: string) {
    return `<${tag}>${nonHTML(text)}</${tag}>`;
  }

  function isStyledText(node: { type: string }): node is StyledText {
    return [
      "text.plain",
      "text.bold",
      "text.code",
      "text.verbatim",
      "text.italic",
      "text.strikeThrough",
      "text.underline",
    ].includes(node.type);
  }

  function isPhrasingContent(node: { type: string }): node is PhrasingContent {
    return (
      ["link", "footnote.reference", "newline"].includes(node.type) ||
      isStyledText(node)
    );
  }

  function isToken(node: { type: string }): node is Token {
    return (
      [
        "keyword",
        "todo",
        "hr",
        "stars",
        "priority",
        "tags",
        "planning.keyword",
        "planning.timestamp",
        "list.item.tag",
        "list.item.checkbox",
        "list.item.bullet",
        "table.hr",
        "table.columnSeparator",
        "footnote.label",
        "block.begin",
        "block.end",
        "drawer.begin",
        "drawer.end",
      ].includes(node.type) || isPhrasingContent(node)
    );
  }

  function styledTextToHTML(node: StyledText): string {
    switch (node.type) {
      case "text.plain":
        return nonHTML(node.value);
      case "text.bold":
        return wrapped("strong", node.value);
      case "text.code":
      case "text.verbatim":
        return wrapped("code", node.value);
      case "text.italic":
        return wrapped("em", node.value);
      case "text.strikeThrough":
        return wrapped("del", node.value);
      case "text.underline":
        return `<span style="text-decoration: underline;">${nonHTML(
          node.value
        )}</span>`;
    }
  }

  function tokenToHTML(node: Token): string {
    if (isPhrasingContent(node)) {
      return phrasingContentToHTML(node);
    }
    switch (node.type) {
      case "todo": {
        const kw = node.keyword;
        switch (kw) {
          case "TODO":
            return '<span class="heading-kw-todo">TODO</span>';
          case "DONE":
            return '<span class="heading-kw-done">DONE</span>';
          default:
            return `<span class="heading-kw-unknown">${kw}</span>`;
        }
      }
      case "tags":
        return `<span class="tags">${node.tags.join(" ")}</span>`;
    }
    return `TODO: token: ${node.type}`;
  }

  function phrasingContentToHTML(node: PhrasingContent): string {
    if (isStyledText(node)) {
      return styledTextToHTML(node);
    }
    switch (node.type) {
      case "link": {
        // for links like [[https://duckduckgo.com]]
        const text = nonHTML(node.description ?? node.value);
        const urlRaw = node.value;
        const isImage = fileTypeFromURL(urlRaw) === "image";
        const url =
          node.protocol === "internal"
            ? "#" + slugify(urlRaw)
            : isImage
            ? transformImageUri(props.sourceURL)(urlRaw)
            : transformLinkUri(props.displayURL, props.baseURL)(urlRaw);
        const title = node.text;
        return isImage
          ? `<img${url ? ` src="${url}"` : ""}${text ? ` alt="${text}"` : ""}${
              title ? ` title="${title}"` : ""
            } style="max-width:100%;">`
          : `<a${url ? ` href="${url}"` : ""}${
              title ? ` title="${title}"` : ""
            }>${text}</a>`;
      }
      case "newline":
        return "";
      case "footnote.reference": {
        const resolvedLabel = fnmap.get(node.label);
        if (resolvedLabel === undefined) {
          // no definition for footnote
          return "<sup><strong>?</strong></sup>";
        }
        return `<sup><a href="#${footnoteId(
          resolvedLabel
        )}">${resolvedLabel}</a></sup>`;
      }
    }
  }

  function anyToHTML(node: Content | Token): string {
    if (isToken(node)) {
      return tokenToHTML(node);
    }
    return contentToHTML(node);
  }

  function listItemToHTML(node: ListItem): string {
    const content = node.children.slice(1);
    return `<li>${content
      .map((c) => anyToHTML(c as Content | Token))
      .join("")}</li>`;
  }

  function topLevelContentToHTML(node: TopLevelContent): string {
    switch (node.type) {
      case "keyword":
        return `TODO: topLevelContent: keyword`;
      case "footnote": {
        // footnotes handled elsewhere
        return "";
      }
    }
    return contentToHTML(node);
  }

  function mkHeaderHTML(level: number, text: string, slug: string): string {
    return `<h${level}>
  <a name="${slug}" class="anchor" href="#${slug}">
    <span class="octicon-link"></span>
  </a>
  ${text}
</h${level}>`;
  }

  function contentToHTML(node: Content): string {
    switch (node.type) {
      case "section": {
        // treating this as a headline, first child should be headline content
        return node.children.map(contentToHTML).join("");
      }
      case "paragraph": {
        const lines: string[] = node.children.map((c) =>
          phrasingContentToHTML(c)
        );
        return `<p>${lines.map((c) => (c === " " ? "\n" : c)).join("")}</p>`;
      }
      case "headline": {
        const level = node.level;
        const contentChildren = node.children.slice(1);
        const slug = slugify(contentChildren.map((c) => c.value).join(""));
        const headingContent: string = contentChildren
          .map(
            (c) =>
              (c.type === "tags" ? " " : "") +
              tokenToHTML(c as Token) +
              (c.type === "todo" ? " " : "")
          )
          .join("");
        return mkHeaderHTML(level, headingContent, slug);
      }
      case "hr": {
        return "<hr>";
      }
      case "html": {
        return dompurify.sanitize(node.value);
      }
      case "block": {
        if (node.name === "EXPORT" && node.params.includes("html")) {
          return dompurify.sanitize(node.value);
        }
        if (node.name === "SRC" && node.params.length > 0) {
          const language = node.params[0];
          const markup = renderToStaticMarkup(
            <RawCodeBlock
              code={node.value}
              language={language as any}
              disablePrefixes={true}
              enableLineRef={false}
            />
          );
          return `<pre>${markup}</pre>`;
        }
        return `TODO: content: block { name = ${node.name}; params = ${node.params} }`;
      }
      case "list": {
        const items: string[] = node.children.map(listItemToHTML);
        if (node.ordered) {
          return `<ol>${items.join("")}</ol>`;
        } else {
          return `<ul>${items.join("")}</ul>`;
        }
      }
    }
    return `TODO: content: ${node.type}`;
  }

  const res: string[] = [];

  if ("title" in node.properties) {
    const title = node.properties.title;
    res.push(mkHeaderHTML(1, title, slugify(title)));
  }

  res.push(node.children.map(topLevelContentToHTML).join(""));

  const orderedFootnotes = orderFootnotes(fnmap, footnotes);

  if (orderedFootnotes.length > 0) {
    const fnHTML = ["<hr>"];
    for (let fnum = 1; fnum <= orderedFootnotes.length; fnum++) {
      const description = orderedFootnotes[fnum - 1].children
        .map((c) => contentToHTML(c as Content))
        .join("");
      fnHTML.push(
        `<div class="footdef"><sup><a id="${footnoteId(
          fnum
        )}" href="#fnr.${fnum}">${fnum}</a></sup> <div class="footpara">${description}</div></div>`
      );
    }
    res.push(fnHTML.join("\n"));
  }

  return res.join("");
}

function Org(props: MarkupProps, testing = false): React.ReactElement | null {
  if (!testing) {
    scrollEffect();
  }

  if (!props.source) {
    return null;
  }

  try {
    const raw = orgToHTML(props, parseSource(props.source));
    return markup(props, raw);
  } catch (err) {
    console.log(err);
    return null;
  }
}

export default Org;
