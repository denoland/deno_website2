/* eslint-env jest */
import React from "react";

import Org from "./Org";

function getHTML(elt: React.ReactElement | null) {
  if (elt) {
    return elt.props.dangerouslySetInnerHTML.__html;
  }
}

const sampleURL = "https://deno.land/x/orgreadmetest";

function sampleOrg(orgText: string) {
  return {
    source: orgText,
    displayURL: `${sampleURL}/README.org`,
    sourceURL: `${sampleURL}/README.org`,
    baseURL: sampleURL,
  };
}

function htmlFromOrg(orgText: string) {
  return getHTML(Org(sampleOrg(orgText), true));
}

function testOrgToHTML(testName: string, orgText: string, expected: string) {
  test(testName, () => {
    expect(htmlFromOrg(orgText)).toEqual(expected);
  });
}

testOrgToHTML("regular text", "Test", "<p>Test</p>");

testOrgToHTML(
  "regular text (multiple lines)",
  `First line
Second line

Fourth (after gap)`,
  `<p>First line
Second line</p><p>Fourth (after gap)</p>`
);

describe("text styling", () => {
  for (const [testName, markupSym, htmlTag] of [
    ["bold", "*", "strong"],
    ["strikethrough", "+", "del"],
    ["italic", "/", "em"],
    ["verbatim", "=", "code"],
    ["code (inline)", "~", "code"],
  ]) {
    testOrgToHTML(
      testName,
      `${markupSym}Test${markupSym}`,
      `<p><${htmlTag}>Test</${htmlTag}></p>`
    );
  }

  testOrgToHTML(
    "underline",
    "_Test_",
    '<p><span style="text-decoration: underline;">Test</span></p>'
  );

  // NOTE: this currently is not supported by the parser. Expected result is '<p><del>Te <strong>st</strong> ing</del></p>' (2021-06-23)
  testOrgToHTML(
    "[BUG IN ORGAJS] strikethrough and bold",
    "+Te *st* ing+",
    "<p><del>Te *st* ing</del></p>"
  );
});

testOrgToHTML("horizontal rule", "-----", "<hr>");

describe("lists", () => {
  testOrgToHTML(
    "flat bullet list",
    `- this
- is
- a
- *bullet*
- list`,
    "<ul><li>this</li><li>is</li><li>a</li><li><strong>bullet</strong></li><li>list</li></ul>"
  );

  testOrgToHTML(
    "flat numbered list",
    `1. this
2. is
3. a
4. *numbered*
5. list`,
    "<ol><li>this</li><li>is</li><li>a</li><li><strong>numbered</strong></li><li>list</li></ol>"
  );
});

testOrgToHTML(
  "title",
  "#+TITLE: Document Title",
  mkHeaderHTML(1, "Document Title", "document-title")
);

describe("comments", () => {
  testOrgToHTML("comment, one line", "# a comment", "");

  testOrgToHTML(
    "comment, multi-line",
    `# first line of comment
# second line`,
    ""
  );

  testOrgToHTML(
    "paragraph with comment character inside",
    "this is not # a comment",
    "<p>this is not # a comment</p>"
  );
});

describe("embedding HTML", () => {
  testOrgToHTML(
    "HTML in regular text",
    "<p>&Test</p>",
    "<p>&lt;p&gt;&amp;Test&lt;/p&gt;</p>"
  );

  testOrgToHTML(
    "HTML in HTML export",
    "#+HTML: <div><p>Test</p></div>",
    "<div><p>Test</p></div>"
  );

  testOrgToHTML(
    "HTML in HTML export with XSS",
    "#+HTML: <img src=x onerror=alert(1) //>",
    '<img src="x">'
  );

  testOrgToHTML(
    "HTML in HTML export block",
    `
#+BEGIN_EXPORT html
<div>
    <p>Content</p>
</div>
#+END_EXPORT`,
    `<div>
    <p>Content</p>
</div>`
  );

  testOrgToHTML(
    "HTML in HTML export block with XSS",
    `
#+BEGIN_EXPORT html
<div>
    <img src=x onerror=alert(1) />
</div>
#+END_EXPORT`,
    `<div>
    <img src="x">
</div>`
  );
});

function mkHeaderHTML(level: number, headerText: string, anchorText: string) {
  return `<h${level}>
  <a name="${anchorText}" class="anchor" href="#${anchorText}">
    <span class="octicon-link"></span>
  </a>
  ${headerText}
</h${level}>`;
}

function testHeading(
  testName: string,
  headerText: string,
  expected: { level: number; text: string; anchor: string }
) {
  testOrgToHTML(
    testName,
    headerText,
    mkHeaderHTML(expected.level, expected.text, expected.anchor)
  );
}

describe("headings", () => {
  // up to heading level 6
  describe("heading levels", () => {
    for (let level = 1; level <= 6; level++) {
      testHeading(
        `heading ${level}`,
        `${new Array(level).fill("*").join("")} Test`,
        {
          level: level,
          text: "Test",
          anchor: "test",
        }
      );
    }
  });

  testHeading("heading 1 multiword", "* Test title", {
    level: 1,
    text: "Test title",
    anchor: "test-title",
  });

  testHeading("heading with markup", "* Test *title* /italic/", {
    level: 1,
    text: "Test <strong>title</strong> <em>italic</em>",
    anchor: "test-title-italic",
  });

  testOrgToHTML(
    "nested headings with content",
    `* First heading

Some content.

** Nested heading

More content.

* Outer heading again.`,
    `${mkHeaderHTML(
      1,
      "First heading",
      "first-heading"
    )}<p>Some content.</p>${mkHeaderHTML(
      2,
      "Nested heading",
      "nested-heading"
    )}<p>More content.</p>${mkHeaderHTML(
      1,
      "Outer heading again.",
      "outer-heading-again"
    )}`
  );

  describe("with keywords", () => {
    testOrgToHTML(
      "TODO",
      "* TODO Test",
      mkHeaderHTML(1, '<span class="heading-kw-todo">TODO</span> Test', "test")
    );
    testOrgToHTML(
      "DONE",
      "* DONE Test",
      mkHeaderHTML(1, '<span class="heading-kw-done">DONE</span> Test', "test")
    );
    testOrgToHTML(
      "OTHER",
      "* OTHER Test",
      mkHeaderHTML(1, "OTHER Test", "other-test")
    );
  });
  describe("with tags", () => {
    testOrgToHTML(
      "single tag",
      "* Test :a_tag:",
      mkHeaderHTML(1, 'Test <span class="tags">a_tag</span>', "test")
    );
    testOrgToHTML(
      "multiple tags",
      "* Test :a_tag:another_tag:",
      mkHeaderHTML(
        1,
        'Test <span class="tags">a_tag another_tag</span>',
        "test"
      )
    );
    testOrgToHTML(
      "multiple tags with a heading keyword",
      "* TODO Test :a_tag:another_tag:",
      mkHeaderHTML(
        1,
        '<span class="heading-kw-todo">TODO</span> Test <span class="tags">a_tag another_tag</span>',
        "test"
      )
    );
  });
});

describe("links", () => {
  testOrgToHTML(
    "link (to external resource)",
    "[[https://duckduckgo.com][DuckDuckGo!]]",
    '<p><a href="https://duckduckgo.com">DuckDuckGo!</a></p>'
  );

  test("link (no description)", () => {
    expect(htmlFromOrg("[[https://duckduckgo.com]]")).toEqual(
      '<p><a href="https://duckduckgo.com">https://duckduckgo.com</a></p>'
    );
  });

  test("link (internal - to heading)", () => {
    expect(htmlFromOrg("[[Heading Link]]")).toEqual(
      '<p><a href="#heading-link">Heading Link</a></p>'
    );
  });

  test("link (relative, file)", () => {
    expect(htmlFromOrg("[[./CHANGELOG.org]]")).toEqual(
      `<p><a href="${sampleURL}/CHANGELOG.org">./CHANGELOG.org</a></p>`
    );
  });

  test("link (absolute, file)", () => {
    expect(htmlFromOrg("[[/CHANGELOG.org]]")).toEqual(
      `<p><a href="${sampleURL}/CHANGELOG.org">/CHANGELOG.org</a></p>`
    );
  });

  testOrgToHTML(
    "[BUG IN ORGAJS] link with markup in description",
    "[[https://duckduckgo.com][Duck *Duck* _Duck_ /Duck/ ~Go~ =Go= +Go+ Go!]]",
    // NOTE: bug in orgajs gives the below result.
    //
    // Expected result is: '<p><a href="https://duckduckgo.com">Duck *Duck* _Duck_ /Duck/ <code>Go</code> <code>Go</code> <del>Go</del> Go!</a></p>' (2021-06-24)
    '<p><a href="https://duckduckgo.com">Duck *Duck* _Duck_ /Duck/ ~Go~ =Go= +Go+ Go!</a></p>'
  );

  testOrgToHTML("unclosed link", "[[", "<p>[[</p>");
});

describe("code", () => {
  testOrgToHTML(
    "simple typescript",
    `#+BEGIN_SRC typescript
function foo() {}
#+END_SRC`,
    '<pre><pre style="color: rgb(36, 41, 46); background-color: #f6f8fa;" class="prism-code language-typescript flex overflow-y-auto ">' +
      '<code><div style="color: rgb(36, 41, 46);" class="token-line text-xs"><span style="color: #e3116c;" class="token keyword">' +
      'function</span><span class="token plain"> </span><span style="color: rgb(111, 66, 193);" class="token function">foo</span>' +
      '<span style="color: rgb(36, 41, 46);" class="token punctuation">(</span><span style="color: rgb(36, 41, 46);" class="token punctuation">)' +
      '</span><span class="token plain"> </span><span style="color: rgb(36, 41, 46);" class="token punctuation">' +
      '{</span><span style="color: rgb(36, 41, 46);" class="token punctuation">}</span></div></code></pre></pre>'
  );
});

// NOTE: orgajs currently doesn't support inline footnotes (anonymous or named) (see https://github.com/orgapp/orgajs/issues/94) (2021-06-25)
describe("footnotes", () => {
  function mkFootnoteRef(fnum: number) {
    return `<sup><a href="#fn.${fnum}">${fnum}</a></sup>`;
  }

  const unknownFootnoteRef = "<sup><strong>?</strong></sup>";

  function mkFootnoteDef(fnum: number, fdesc: string) {
    return `<div class="footdef"><sup><a id="fn.${fnum}" href="#fnr.${fnum}">${fnum}</a></sup> <div class="footpara"><p>${fdesc}</p></div></div>`;
  }

  testOrgToHTML(
    "reference to unknown footnote",
    "Reference to a footnote[fn:1]",
    `<p>Reference to a footnote${unknownFootnoteRef}</p>`
  );

  testOrgToHTML(
    "unused footnotes are excluded",
    "[fn:1] Numbered footnote definition.",
    ""
  );

  testOrgToHTML(
    "numbered footnote with reference",
    "Reference to a footnote[fn:1]\n\n[fn:1] A numbered footnote.",
    `<p>Reference to a footnote${mkFootnoteRef(1)}</p><hr>
${mkFootnoteDef(1, "A numbered footnote.")}`
  );

  testOrgToHTML(
    "named footnote with reference",
    "Reference to a footnote[fn:fname]\n\n[fn:fname] A named footnote.",
    `<p>Reference to a footnote${mkFootnoteRef(1)}</p><hr>
${mkFootnoteDef(1, "A named footnote.")}`
  );

  testOrgToHTML(
    "correct order of footnotes",
    `Footnote 2[fn:2]. Footnote 1[fn:1]. Footnote named[fn:named].

[fn:named] Used as third footnote.
[fn:1] Used as second footnote.
[fn:2] Used as first footnote.`,
    `<p>Footnote 2${mkFootnoteRef(1)}. Footnote 1${mkFootnoteRef(
      2
    )}. Footnote named${mkFootnoteRef(3)}.</p><hr>
${mkFootnoteDef(1, "Used as first footnote.")}
${mkFootnoteDef(2, "Used as second footnote.")}
${mkFootnoteDef(3, "Used as third footnote.")}`
  );

  testOrgToHTML(
    "footnotes are collected at end",
    `* Heading 1

With reference to[fn:2].

* Heading 2

[fn:2] Actually first footnote.

* Heading 3

Ref to footnote[fn:1].

[fn:1] Second footnote (though it is used as 1).

* Heading 4`,
    `${mkHeaderHTML(
      1,
      "Heading 1",
      "heading-1"
    )}<p>With reference to${mkFootnoteRef(1)}.</p>${mkHeaderHTML(
      1,
      "Heading 2",
      "heading-2"
    )}${mkHeaderHTML(
      1,
      "Heading 3",
      "heading-3"
    )}<p>Ref to footnote${mkFootnoteRef(2)}.</p>${mkHeaderHTML(
      1,
      "Heading 4",
      "heading-4"
    )}<hr>
${mkFootnoteDef(1, "Actually first footnote.")}
${mkFootnoteDef(2, "Second footnote (though it is used as 1).")}`
  );
});

describe("images", () => {
  const extImgURL =
    "https://duckduckgo.com/assets/logo_homepage.normal.v108.svg";
  const intImgRelPath = "assets/icon.svg";
  const intImgURL = `./${intImgRelPath}`;
  const intImgFull = `${sampleURL}/${intImgRelPath}`;

  testOrgToHTML(
    "External image (in brackets)",
    `[[${extImgURL}]]`,
    `<p><img src="${extImgURL}" alt="${extImgURL}" style="max-width:100%;"></p>`
  );

  testOrgToHTML(
    "External image with alt text",
    `[[${extImgURL}][The image]]`,
    `<p><img src="${extImgURL}" alt="The image" style="max-width:100%;"></p>`
  );

  testOrgToHTML(
    "Internal image (in brackets)",
    `[[${intImgURL}]]`,
    `<p><img src="${intImgFull}" alt="${intImgURL}" style="max-width:100%;"></p>`
  );

  testOrgToHTML(
    "Internal image with alt text",
    `[[${intImgURL}][The image]]`,
    `<p><img src="${intImgFull}" alt="The image" style="max-width:100%;"></p>`
  );
});

describe("injection safety", () => {
  const testIn = "<p>&Test</p>";
  const testOut = "&lt;p&gt;&amp;Test&lt;/p&gt;";

  testOrgToHTML(
    "HTML in heading",
    `* ${testIn}`,
    mkHeaderHTML(1, testOut, "ptestp")
  );
  testOrgToHTML(
    "HTML in list item",
    `- ${testIn}`,
    `<ul><li>${testOut}</li></ul>`
  );
  testOrgToHTML(
    "HTML in link description",
    `[[https://duckduckgo.com][${testIn}]]`,
    `<p><a href="https://duckduckgo.com">${testOut}</a></p>`
  );
  testOrgToHTML(
    "HTML in link URL",
    `[[${testIn}]]`,
    `<p><a href="#ptestp">${testOut}</a></p>`
  );
  testOrgToHTML(
    "HTML in image URL",
    `[[${testIn}.png]]`,
    `<p><img src="#ptestppng" alt="${testOut}.png" style="max-width:100%;"></p>`
  );
});
