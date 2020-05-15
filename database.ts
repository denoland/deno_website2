import type { GithubDatabaseEntry } from "./util/registries/github";
import type { DenoStdDatabaseEntry } from "./util/registries/deno_std";
import type { NPMDatabaseEntry } from "./util/registries/npm";
import type { URLDatabaseEntry } from "./util/registries/url";

type DatabaseEntry =
  | GithubDatabaseEntry
  | DenoStdDatabaseEntry
  | NPMDatabaseEntry
  | URLDatabaseEntry
  ;

/* eslint-disable @typescript-eslint/camelcase */
const database: Record<string, DatabaseEntry> = {
  abc: {
    type: "github",
    owner: "zhmushan",
    repo: "abc",
    desc: "A better Deno framework to create web application"
  },
  alosaur: {
    type: "github",
    owner: "irustm",
    repo: "alosaur",
    desc: "Alosaur - Deno web framework 🦖."
  },
  amqp: {
    type: "github",
    owner: "lenkan",
    repo: "deno-amqp",
    desc: "AMQP 0.9.1"
  },
  aqua: {
    type: "github",
    owner: "l2ig",
    repo: "aqua",
    desc: "A minimal and fast web framework for Deno 🏃"
  },
  argon2: {
    type: "github",
    owner: "fdionisi",
    repo: "deno-argon2",
    desc: "Deno library for hashing passwords using Argon2"
  },
  args: {
    type: "github",
    owner: "KSXGitHub",
    repo: "deno-args",
    path: "/lib",
    desc: "Extensible CLI arguments parser for Deno with intelligent TypeScript inference"
  },
  arkoren: {
    type: "github",
    owner: "arkoren",
    repo: "framework",
    desc: "The next-generation type-safe web framework."
  },
  await_mutex: {
    type: "github",
    owner: "Matthew-Smith",
    repo: "awaitable_mutex",
    desc: "Blocking execution of a section of code to one at a time"
  },
  azure_functions: {
    type: "github",
    owner: "anthonychu",
    repo: "azure-functions-deno-worker",
    desc: "Deno on Azure Functions"
  },
  base64: {
    type: "github",
    owner: "chiefbiiko",
    repo: "base64",
    desc: "base64 strings from/to Uint8Arrays"
  },
  bb64: {
    type: "github",
    owner: "denjucks",
    repo: "bb64",
    desc: "A better base64 encoder and decoder for Deno for easily encoding strings, Uint8Arrays, and files, including MIME types into encoding"
  },
  bcrypt: {
    type: "github",
    owner: "jamesbroadberry",
    repo: "deno-bcrypt",
    desc: "BCrypt support for hashing and checking passwords"
  },
  berror: {
    type: "github",
    owner: "baptistemarchand",
    repo: "berror",
    desc: "Rich Errors including chain of causes, metadata and easy logging"
  },
  bigfloat: {
    type: "github",
    owner: "davidmartinez10",
    repo: "bigfloat-deno",
    desc: "A library for arbitrary precision decimal floating point arithmetic that can exactly represent all decimal fractions, unlike JavaScript's number data type which is 64-bit binary floating point."
  },
  blake2b: {
    type: "github",
    owner: "chiefbiiko",
    repo: "blake2b",
    desc: "BLAKE2b implemented in WebAssembly."
  },
  bls12_381: {
    type: "github",
    owner: "paulmillr",
    repo: "noble-bls12-381",
    desc: "bls12-381, a pairing-friendly elliptic curve construction."
  },
  buffer: {
    type: "github",
    owner: "socket-deno",
    repo: "buffer",
    desc: "Extreme buffer module for deno"
  },
  bump: {
    type: "github",
    owner: "iamnathanj",
    repo: "bump",
    desc: "Versioning and tagging tool for Deno projects"
  },
  bwt: {
    type: "github",
    owner: "chiefbiiko",
    repo: "bwt",
    desc: "Better Web Token,  a web token format, generation, and verification scheme"
  },
  bytes_formater: {
    type: "github",
    owner: "manyuanrong",
    repo: "bytes_formater",
    desc: "Deno Bytes Formater"
  },
  case: {
    type: "github",
    owner: "justjavac",
    repo: "deno-change-case",
    desc: "Convert strings between camelCase, PascalCase, Title Case, snake_case, lowercase, UPPERCASE, CONSTANT_CASE and more."
  },
  case_style: {
    type: "github",
    owner: "zekth",
    repo: "deno_case_style",
    desc: "A string validator and formater for case Style"
  },
  cat_you: {
    type: "github",
    owner: "SuperC03",
    repo: "CatYou-Deno",
    desc: "Every Framework Needs a Cat API"
  },
  caught: {
    type: "github",
    owner: "rsp",
    repo: "deno-caught",
    desc: "This module lets you attach empty rejection handlers to promises to avoid errors when we want to handle rejections asynchronously."
  },
  chacha20: {
    type: "github",
    owner: "chiefbiiko",
    repo: "chacha20",
    desc: "ChaCha20 as defined by RFC 8439"
  },
  chacha20_poly1305: {
    type: "github",
    owner: "chiefbiiko",
    repo: "chacha20-poly1305",
    desc: "ChaCha20-Poly1305 as defined by RFC 8439"
  },
  checksum: {
    type: "github",
    owner: "manyuanrong",
    repo: "deno-checksum",
    desc: "deno-checksum"
  },
  chunked: {
    type: "github",
    owner: "aynik",
    repo: "deno-chunked",
    desc: "A set of functions to read ArrayBuffer chunk by chunk or buffered until eof."
  },
  ci: {
    type: "github",
    owner: "justjavac",
    repo: "deno-ci",
    desc: "Get details about the current Continuous Integration environment."
  },
  cli_spinners: {
    type: "github",
    owner: "ameerthehacker",
    repo: "cli-spinners",
    desc: "Awesome deno terminal spinners"
  },
  cliffy: {
    type: "github",
    owner: "c4spar",
    repo: "deno-cliffy",
    desc: "Command line framework for Deno."
  },
  clipboard: {
    type: "github",
    owner: "rsp",
    repo: "deno-clipboard",
    desc: "Deno clipboard library"
  },
  clone: {
    type: "github",
    owner: "ekaragodin",
    repo: "clone",
    desc: "A simple utility for the convenient clone."
  },
  collections: {
    type: "github",
    owner: "hayd",
    repo: "deno-collections",
    desc: "A utility to handle collections"
  },
  compose: {
    type: "github",
    owner: "KSXGitHub",
    repo: "deno-compose",
    desc: "pipe, pipeline, and compose functions with 64 overloads per function"
  },
  core: {
    type: "github",
    owner: "denoland",
    repo: "deno",
    desc: "A secure runtime for JavaScript and TypeScript."
  },
  coward: {
    type: "github",
    owner: "fox-cat",
    repo: "coward",
    desc: "🐔 Coward is a Deno module for easy interaction with the Discord API. "
  },
  cowsay: {
    type: "github",
    owner: "fakoua",
    repo: "cowsay",
    desc: "Configurable talking cow for Deno"
  },
  crone: {
    type: "github",
    owner: "wrzonki",
    repo: "deno-crone",
    desc: "Simple crone scheduler for Deno"
  },
  cross_env: {
    type: "github",
    owner: "axetroy",
    repo: "deno_cross_env",
    desc: "A tool for setting environment variables across platforms"
  },
  csv: {
    type: "github",
    owner: "vslinko",
    repo: "deno-csv",
    desc: "Streaming CSV file reader for Deno"
  },
  cursor: {
    type: "github",
    owner: "iamnathanj",
    repo: "cursor",
    desc: "ANSI control sequences for your terminal cursor"
  },
  cursornext: {
    type: "github",
    owner: "clitetailor",
    repo: "cursornext",
    path: "/deno",
    desc: "A minimalist library for parsing"
  },
  curve25519: {
    type: "github",
    owner: "chiefbiiko",
    repo: "curve25519",
    desc: "djb's Curve25519 in TypeScript"
  },
  dash: {
    type: "github",
    owner: "xpyxel",
    repo: "dash",
    desc: "Fast, simple, and efficient LRU cache library for Deno."
  },
  databatcher: {
    type: "github",
    owner: "allain",
    repo: "deno-databatcher",
    desc: "The ideas of DataLoader but applied to both loading and saving."
  },
  dataformsjs: {
    type: "github",
    owner: "dataformsjs",
    repo: "dataformsjs",
    desc: "A minimal JavaScript Framework and standalone components for rapid development of high quality websites and single page applications."
  },
  datauri: {
    type: "github",
    owner: "data-uri",
    repo: "datauri-deno",
    desc: "Generate Data URI schemes."
  },
  date_fns: {
    type: "github",
    owner: "date-fns",
    repo: "date-fns",
    path: "/src",
    desc: "Modern JavaScript date utility library"
  },
  "dblapi.ts": {
    type: "github",
    owner: "zSnails",
    repo: "dblapi.ts",
    desc: "TypeScript top.gg api wrapper"
  },
  deamon: {
    type: "github",
    owner: "manyuanrong",
    repo: "deno-deamon",
    desc: "Make the Deno program run in the background"
  },
  debuglog: {
    type: "github",
    owner: "rista404",
    repo: "deno-debug",
    desc: "Debug utility for deno. Under development."
  },
  dedupe: {
    type: "github",
    owner: "Sab94",
    repo: "dedupe",
    desc: "removes duplicates from your array."
  },
  dejs: {
    type: "github",
    owner: "syumai",
    repo: "dejs",
    desc: "ejs template engine for deno."
  },
  deku: {
    type: "github",
    owner: "yisar",
    repo: "deku",
    desc: "No bundle dev server for es modules."
  },
  delay: {
    type: "github",
    owner: "vincentvictoria",
    repo: "delay",
    desc: "delay - ES Module for Deno, Node and Web"
  },
  dem: {
    type: "github",
    owner: "syumai",
    repo: "dem",
    desc: "A module version manager for Deno."
  },
  denjucks: {
    type: "github",
    owner: "denjucks",
    repo: "denjucks",
    desc: "A powerful and easy to use templating engine ported from Mozilla's Nunjucks"
  },
  deno: {
    type: "github",
    owner: "denoland",
    repo: "deno",
    desc: "A secure runtime for JavaScript and TypeScript."
  },
  deno_gui: {
    type: "github",
    owner: "fakoua",
    repo: "deno_gui",
    desc: "Deno Web GUI"
  },
  deno_init: {
    type: "github",
    owner: "maxuuell",
    repo: "deno_init",
    desc: "The executable to set up a deno project 🦕"
  },
  deno_scripts: {
    type: "github",
    owner: "PabloSzx",
    repo: "deno_scripts",
    desc: "Type-safe centralized Deno project scripts 🦕"
  },
  deno_search: {
    type: "github",
    owner: "etopiei",
    repo: "deno_search",
    desc: "A CLI tool to search for third party packages on deno.land"
  },
  denodate: {
    type: "github",
    owner: "t-heu",
    repo: "denodate",
    desc: "Deno module for Intl-based dates"
  },
  denoenv: {
    type: "github",
    owner: "rubiin",
    repo: "deno-env",
    desc: "Deno module for reading env files with added options"
  },
  denoforge: {
    type: "github",
    owner: "denjucks",
    repo: "denoforge",
    desc: "Deno data science library similar to Python's Pandas. Port of the NodeJS library data-forge"
  },
  denofun: {
    type: "github",
    owner: "galkowskit",
    repo: "denofun",
    path: "/lib",
    desc: "Small utility library for Deno containing functions, monads and other fun stuff."
  },
  denoget: {
    type: "github",
    owner: "syumai",
    repo: "denoget",
    desc: "denoget installs executable deno script."
  },
  denomander: {
    type: "github",
    owner: "siokas",
    repo: "denomander",
    desc: "Deno command-line interfaces inspired from commander.js"
  },
  denon: {
    type: "github",
    owner: "eliassjogreen",
    repo: "denon",
    desc: "Like nodemon but made in and for deno. Also a deno style file watcher"
  },
  denotrain: {
    type: "github",
    owner: "Caesar2011",
    repo: "denotrain",
    desc: "An easy to use webserver engine like express in nodejs fully written in Typescript."
  },
  denotrie: {
    type: "github",
    owner: "silver-xu",
    repo: "deno-trie",
    desc: "Deno implementation of Trie for faster string searches."
  },
  denoversion: {
    type: "github",
    owner: "lucascaro",
    repo: "denoversion",
    desc: "Deno cli to manage and bump release versions."
  },
  denox: {
    type: "github",
    owner: "bentoumitech",
    repo: "denox",
    desc: "DenoX is a script runner and workspace wrapper for Deno"
  },
  denv: {
    type: "github",
    owner: "crowlKats",
    repo: "denv",
    desc: "A module similar to dotEnv, but for Deno"
  },
  dev_server: {
    type: "github",
    owner: "zhmushan",
    repo: "dev_server",
    desc: "Feel free to import TypeScript files in the script tag!"
  },
  dex: {
    type: "github",
    owner: "denjucks",
    repo: "dex",
    desc: "An SQL query builder port of Knex for Deno"
  },
  dinja: {
    type: "github",
    owner: "denjucks",
    repo: "dinja",
    desc: "An scalable, Rails-like web framework for Deno"
  },
  dinocord: {
    type: "github",
    owner: "sunsetkookaburra",
    repo: "dinocord",
    desc: "A Discord API Library for Deno."
  },
  dirname: {
    type: "github",
    owner: "rsp",
    repo: "deno-dirname",
    desc: "Node-style __dirname and __filename polyfill for Deno"
  },
  discordeno: {
    type: "github",
    owner: "skillz4killz",
    repo: "discordeno",
    desc: "Discord API library wrapper for Deno https://discordeno.js.org"
  },
  djwt: {
    type: "github",
    owner: "timonson",
    repo: "djwt",
    desc: "The absolute minimum to make JSON Web Tokens on deno. Based on JWT and JWS specifications."
  },
  docable: {
    type: "github",
    owner: "crookse",
    repo: "docable",
    desc: "An open-source doc block parser for generating documenation as JSON."
  },
  docopt: {
    type: "github",
    owner: "eyal-shalev",
    repo: "docopt.js",
    desc: "The command line option parser, that will make you smile."
  },
  dotenv: {
    type: "github",
    owner: "pietvanzoen",
    repo: "deno-dotenv",
    desc: "Dotenv handling for deno."
  },
  drake: {
    type: "github",
    owner: "srackham",
    repo: "drake",
    desc: "Drake, a Make-like task runner for Deno inspired by Make, Rake and Jake."
  },
  drash: {
    type: "github",
    owner: "drashland",
    repo: "deno-drash",
    desc: "A REST microframework for Deno."
  },
  drun: {
    type: "github",
    owner: "MarcHanin",
    repo: "drun",
    desc: "Drun helps to restart automatically your deno application during development"
  },
  dso: {
    type: "github",
    owner: "manyuanrong",
    repo: "dso",
    desc: "dso is a simple ORM Library based on deno_mysql"
  },
  dynamodb: {
    type: "github",
    owner: "chiefbiiko",
    repo: "dynamodb",
    desc: "DynamoDB client."
  },
  eaisercolors: {
    type: "github",
    owner: "herohamp",
    repo: "EaiserColors",
    desc: "Eaiser colors is a wrapper for the std/colors module with the goal of making it much eaiser to see what is happening"
  },
  easy_soap_request: {
    type: "github",
    owner: "circa10a",
    repo: "easy-soap-request",
    desc: "A small library to make SOAP requests easier via Node.js, Deno, and your browser"
  },
  easypath: {
    type: "github",
    owner: "zekth",
    repo: "deno_easypath",
    desc: "Path wrapper to manipulate Filesystem using Deno. Mostly inspired by Path.swift"
  },
  ed25519: {
    type: "github",
    owner: "paulmillr",
    repo: "noble-ed25519",
    desc: "ed25519, an elliptic curve that could be used for assymetric encryption and EDDSA signature scheme."
  },
  ende: {
    type: "github",
    owner: "rsp",
    repo: "deno-ende",
    desc: "Text encoder and decoder exported as simple functions."
  },
  endianess: {
    type: "github",
    owner: "denolibs",
    repo: "endianness",
    desc: "A very simple Deno module to determine the endianness of the host"
  },
  ensure: {
    type: "github",
    owner: "eankeen",
    repo: "ensure",
    desc: "Ensure you are running on a minimum version of Deno, Typescript, or V8"
  },
  enum: {
    type: "github",
    owner: "adrai",
    repo: "enum",
    desc: "Enum is a javascript module that introduces the Enum Type. It works for node.js, in the browser and for deno."
  },
  escape_string_regexp: {
    type: "github",
    owner: "Sab94",
    repo: "escape-string-regexp",
    desc: "Escape RegExp special characters"
  },
  espresso: {
    type: "github",
    owner: "disizali",
    repo: "espresso",
    desc: "deno minimal web framework"
  },
  event_emitter: {
    type: "github",
    owner: "denolibs",
    repo: "event_emitter",
    desc: "A NodeJS-like EventEmitter for Deno written in 100% Typescript."
  },
  evt: {
    type: "github",
    owner: "garronej",
    repo: "evt",
    desc: "💧A type safe replacement for Node's EventEmitter💧"
  },
  expect: {
    type: "github",
    owner: "allain",
    repo: "expect",
    desc: "A deno implementation of expect in order to write tests in a more jest like style."
  },
  fen: {
    type: "github",
    owner: "fen-land",
    repo: "deno-fen",
    desc: "A simple web framework for deno."
  },
  filesize: {
    type: "github",
    owner: "davidjamesstone",
    repo: "deno_modules",
    path: "/filesize",
    desc: "filesize provides a simple way to get a human readable file size string from a number."
  },
  fiona: {
    type: "github",
    owner: "billymoon",
    repo: "fiona",
    path: "/src",
    desc: "A tool for creating large sets of pseudo random data."
  },
  fox: {
    type: "github",
    owner: "eankeen",
    repo: "fox",
    desc: "A cute little utility to help you bootstrap and sample Deno libraries"
  },
  free_port: {
    type: "github",
    owner: "axetroy",
    repo: "deno_free_port",
    desc: "get free port for Deno"
  },
  gardens: {
    type: "github",
    owner: "partheseas",
    repo: "gardens",
    desc: "Using gardens makes it easier to handle your log output and debugging code by giving you the ability to break your output into named scopes"
  },
  gentleRpc: {
    type: "github",
    owner: "timonson",
    repo: "gentleRpc",
    desc: "JSON-RPC 2.0 TypeScript library for deno and browser."
  },
  handlebars: {
    type: "github",
    owner: "alosaur",
    repo: "handlebars",
    desc: "Handlebars template engine"
  },
  hchacha20: {
    type: "github",
    owner: "chiefbiiko",
    repo: "hchacha20",
    desc: "Special-purpose hashing, such as X25519 key derivation, or XChacha20 initialization. If in doubt, do not use."
  },
  heap: {
    type: "github",
    owner: "gobengo",
    repo: "heap",
    desc: "Heap data structure"
  },
  hmac: {
    type: "github",
    owner: "chiefbiiko",
    repo: "hmac",
    desc: "Convenience function for macing singular data. hash should be one of sha1, sha256, or sha512"
  },
  html_entities: {
    type: "github",
    owner: "matschik",
    repo: "deno_html_entities",
    desc: "Fast html entities decode & encode library"
  },
  http_server: {
    type: "github",
    owner: "SkoshRG",
    repo: "http-server",
    desc: "http-server is a tiny and zero-configuration HTTP server with useful features to serve static files with Deno"
  },
  http_wrapper: {
    type: "github",
    owner: "lindsaykwardell",
    repo: "http-wrapper",
    desc: "Simple Server/Router wrapper around Deno's existing HTTP module"
  },
  "humanizer.ts": {
    type: "github",
    owner: "fakoua",
    repo: "Humanizer.ts",
    desc: "Humanizer meets all your TypeScript needs for manipulating and displaying strings, dates, times, timespans, numbers and quantities."
  },
  i18next: {
    type: "github",
    owner: "i18next",
    repo: "i18next",
    path: "/src",
    desc: "i18next: learn once - translate everywhere"
  },
  i18next_fs_backend: {
    type: "github",
    owner: "i18next",
    repo: "i18next-fs-backend",
    desc: "A simple i18next backend for i18next used in Node.js and for Deno to load translations from the filesystem."
  },
  i18next_http_backend: {
    type: "github",
    owner: "i18next",
    repo: "i18next-http-backend",
    desc: "A simple i18next backend to be used in Node.js, in the browser and for Deno. It will load resources from a backend server using the XMLHttpRequest or the fetch API."
  },
  i18next_http_middleware: {
    type: "github",
    owner: "i18next",
    repo: "i18next-http-middleware",
    desc: "A simple i18next middleware to be used with Node.js web frameworks like express or Fastify and also for Deno."
  },
  i18next_locize_backend: {
    type: "github",
    owner: "locize",
    repo: "i18next-locize-backend",
    desc: "A simple i18next backend for locize.com which can be used in Node.js, in the browser and for Deno."
  },
  ini: {
    type: "github",
    owner: "chances",
    repo: "ini",
    desc: "INI configuration serializer for the Deno runtime"
  },
  ink: {
    type: "github",
    owner: "fakoua",
    repo: "ink",
    desc: "HTML like terminal string color for Deno"
  },
  install: {
    type: "github",
    owner: "denoland",
    repo: "deno_install",
    desc: "One-line commands to install Deno on your system."
  },
  interpreter: {
    type: "github",
    owner: "lynellf",
    repo: "Interpreter",
    desc: "Interprets a description of your application and handles the rest."
  },
  invert_kv: {
    type: "github",
    owner: "denorg",
    repo: "invert-kv",
    desc: "Invert key-value pairs in an object"
  },
  is: {
    type: "github",
    owner: "justjavac",
    repo: "deno-is",
    desc: "Detect the running environment and context of the current script."
  },
  is_exe: {
    type: "github",
    owner: "eankeen",
    repo: "is_exe",
    desc: "detect if a file is executable or not"
  },
  jbq: {
    type: "github",
    owner: "krnik",
    repo: "jbq",
    desc: "This repository has been archived by the owner. It is now read-only."
  },
  "jpeg.ts": {
    type: "github",
    owner: "fakoua",
    repo: "jpeg.ts",
    desc: "A pure TypeScript JPEG encoder and decoder for deno."
  },
  js_yaml_port: {
    type: "github",
    owner: "KSXGitHub",
    repo: "simple-js-yaml-port-for-deno",
    desc: "A simple port of JS-YAML for Deno"
  },
  json_rpc: {
    type: "github",
    owner: "ondras",
    repo: "deno-json-rpc",
    desc: "JSON-RPC interface"
  },
  jszip: {
    type: "github",
    owner: "hayd",
    repo: "deno-zip",
    desc: "A wrapper around JSZip for handling zipfiles in deno"
  },
  keycode: {
    type: "github",
    owner: "kabirbaidhya",
    repo: "keycode-js",
    desc: "A minimal JavaScript package with key code constants."
  },
  kia: {
    type: "github",
    owner: "HarryPeach",
    repo: "kia",
    desc: "Simple terminal spinners for Deno 🦕 (Based on Ora)"
  },
  ky: {
    type: "github",
    owner: "sindresorhus",
    repo: "ky",
    desc: "Ky is a tiny and elegant HTTP client based on the browser Fetch API"
  },
  lambda: {
    type: "github",
    owner: "hayd",
    repo: "deno_lambda",
    path: "/runtime",
    desc: "deno on AWS Lambda"
  },
  lazy: {
    type: "github",
    owner: "luvies",
    repo: "lazy",
    path: "/lib",
    desc: "This module is meant to provide memory-efficient lazy-evaluation iteration for iterable objects. The aim of this project is to support deno, node and browser, and support all native JavaScript systems for iteration (for-of, for-await-of, etc)."
  },
  lib: {
    type: "github",
    owner: "brandonkal",
    repo: "deno-lib",
    desc: "A collection of useful Typescript libraries for Deno"
  },
  libhydrogen: {
    type: "github",
    owner: "chiefbiiko",
    repo: "deno-libhydrogen",
    desc: "deno plugin 2 libhydrogen"
  },
  license_checker: {
    type: "github",
    owner: "kt3k",
    repo: "deno_license_checker",
    desc: "This tool checks the license headers in the files in a git repository. You can configure which files should have which license texts with .licenserc.json."
  },
  lodash: {
    type: "github",
    owner: "lodash",
    repo: "lodash",
    desc: "A modern JavaScript utility library delivering modularity, performance & extras."
  },
  lodash_require: {
    type: "github",
    owner: "TokenChingy",
    repo: "lodash_require",
    desc: "Lodash for the Deno runtime."
  },
  luhn: {
    type: "github",
    owner: "howlowck",
    repo: "deno-luhn",
    desc: "Luhn Algorithm Validator"
  },
  machine_id: {
    type: "github",
    owner: "axetroy",
    repo: "deno_machine_id",
    desc: "Get the unique ID of the current machine"
  },
  match: {
    type: "github",
    owner: "gustavofsantos",
    repo: "match-ts",
    desc: "A helper module to match expressions"
  },
  math: {
    type: "github",
    owner: "axetroy",
    repo: "deno_math",
    desc: "The math module is used to provide a helper for high-precision calculations and scientific computing."
  },
  md5: {
    type: "github",
    owner: "halvardssm",
    repo: "deno-md5",
    desc: "MD5 for deno."
  },
  media_types: {
    type: "github",
    owner: "oakserver",
    repo: "media_types",
    desc: "A module that assists in resolving media types and extensions."
  },
  memoize: {
    type: "github",
    owner: "rubiin",
    repo: "memoize",
    desc: "A simple and easy to use memoize lib for deno."
  },
  minimatch: {
    type: "github",
    owner: "chrisdothtml",
    repo: "deno-minimatch",
    desc: "A deno port of minimatch"
  },
  mixins: {
    type: "github",
    owner: "udibo",
    repo: "mixins",
    desc: "This module provides a few basic functions to help combine objects or build up classes from partial classes."
  },
  mock: {
    type: "github",
    owner: "udibo",
    repo: "mock",
    desc: "This module provides utilities to help mock behavior and spy on function calls for tests."
  },
  moment: {
    type: "github",
    owner: "lisniuse",
    repo: "deno_moment",
    desc: "The Moment.ts library for Deno that was ported from moment@2.24.0, Hope you like it."
  },
  mongo: {
    type: "github",
    owner: "manyuanrong",
    repo: "deno_mongo",
    desc: "MongoDB driver for Deno."
  },
  mqtt: {
    type: "github",
    owner: "jdiamond",
    repo: "MQTT.ts",
    desc: "MQTT for Deno."
  },
  ms: {
    type: "github",
    owner: "denolib",
    repo: "ms",
    desc: "Use this package to easily convert various time formats to milliseconds. It is ported from https://github.com/zeit/ms to work with Deno."
  },
  murmurhash: {
    type: "github",
    owner: "justjavac",
    repo: "deno-murmurhash",
    desc: "An incremental implementation of MurmurHash3 for JavaScript"
  },
  mustache: {
    type: "github",
    owner: "alosaur",
    repo: "mustache",
    desc: "Mustache template renderer"
  },
  mysql: {
    type: "github",
    owner: "manyuanrong",
    repo: "deno_mysql",
    desc: "MySQL and MariaDB (5.5 and 10.2+) database driver for Deno."
  },
  nanoid: {
    type: "github",
    owner: "ianfabs",
    repo: "nanoid",
    desc: "A tiny, secure, URL-friendly, unique string ID generator for JavaScript."
  },
  nessie: {
    type: "github",
    owner: "halvardssm",
    repo: "deno-nessie",
    desc: "A database migration tool for deno."
  },
  normalize_diacritics: {
    type: "github",
    owner: "motss",
    repo: "deno_mod",
    path: "/normalize_diacritics",
    desc: "Simple deno module to remove any accents/ diacritics found in a string."
  },
  novelcovid_wrapper: {
    type: "github",
    owner: "Joralmo",
    repo: "deno-wrapper-novelcovid",
    desc: "Wrapper of NovelCOVID/API for Deno"
  },
  oak: {
    type: "github",
    owner: "oakserver",
    repo: "oak",
    desc: "A middleware framework for Deno's http server, including a router middleware."
  },
  observable: {
    type: "github",
    owner: "bsunderhus",
    repo: "deno-observable",
    desc: "tc39 proposal spec compatible observable"
  },
  once: {
    type: "github",
    owner: "KSXGitHub",
    repo: "deno-once",
    desc: "Create a function that calls and cache a function once"
  },
  online: {
    type: "github",
    owner: "denorg",
    repo: "online",
    desc: "Check if you're currently online and connected to the internet"
  },
  open: {
    type: "github",
    owner: "SkoshRG",
    repo: "deno-open",
    desc: "A package for opening URLs, files and executables."
  },
  panoptes: {
    type: "github",
    owner: "TokenChingy",
    repo: "panoptes",
    desc: "A simple array and object watcher function for Deno."
  },
  parry: {
    type: "github",
    owner: "eliassjogreen",
    repo: "parry",
    desc: "A simple way of running functions in their own WebWorkers"
  },
  parseargs: {
    type: "github",
    owner: "bartlomieju",
    repo: "parseargs",
    desc: "Migrated to denoland/deno_std."
  },
  pbkdf2: {
    type: "github",
    owner: "chiefbiiko",
    repo: "pbkdf2",
    desc: "Password-Based Key Derivation Function 2"
  },
  perlinnoise: {
    type: "github",
    owner: "herohamp",
    repo: "PerlinNoise-Deno",
    desc: "A simple to use perlin noise module for typescript."
  },
  pipeline: {
    type: "github",
    owner: "Focinfi",
    repo: "deno-pipeline",
    desc: "Configurable data pipeline in Deno."
  },
  plugin_prepare: {
    type: "github",
    owner: "manyuanrong",
    repo: "deno-plugin-prepare",
    desc: "A library for managing deno native plugin dependencies."
  },
  pogo: {
    type: "github",
    owner: "sholladay",
    repo: "pogo",
    desc: "Pogo is an easy to use, safe, and expressive framework for writing web servers and applications. It is inspired by hapi."
  },
  poly1305: {
    type: "github",
    owner: "chiefbiiko",
    repo: "poly1305",
    desc: "Poly1305 as defined by RFC 8439."
  },
  pool: {
    type: "github",
    owner: "axetroy",
    repo: "deno_pool",
    desc: "A generic resource pool management library"
  },
  portl: {
    type: "github",
    owner: "FalkZ",
    repo: "portl",
    desc: "0 configuration backend, for serving js functions and generators"
  },
  postgres: {
    type: "github",
    owner: "buildondata",
    repo: "deno-postgres",
    desc: "PostgreSQL driver for Deno."
  },
  prettier: {
    type: "github",
    owner: "denolib",
    repo: "prettier",
    desc: "Prettier for Deno. Formerly std/prettier"
  },
  pretty_assert: {
    type: "github",
    owner: "bokuweb",
    repo: "deno-pretty-assert",
    desc: "This package has already moved to https://github.com/denoland/deno_std/tree/master/testing."
  },
  pretty_bytes: {
    type: "github",
    owner: "brunnerlivio",
    repo: "deno-pretty-bytes",
    desc: "The Deno implementation of sindresorhus/pretty-bytes. Convert bytes to a human readable string: 1337 → 1.34 kB"
  },
  prettystring: {
    type: "github",
    owner: "OnikurYH",
    repo: "deno-prettystring",
    desc: "A deno module for trim and remove extra spaces between characters. Make paragraph looks organised."
  },
  prio_queue: {
    type: "github",
    owner: "Sourcico",
    repo: "deno-queueing",
    desc: "A priority queue implemented using binary heap"
  },
  process: {
    type: "github",
    owner: "axetroy",
    repo: "deno_process",
    desc: "process module for Deno"
  },
  protobuf: {
    type: "github",
    owner: "seishun",
    repo: "deno-protobuf",
    path: "/runtime",
    desc: "Protocol Buffers - Google's data interchange format"
  },
  prove: {
    type: "github",
    owner: "Pingid",
    repo: "ts-prove",
    desc: "Decode and validate unknown data"
  },
  purify: {
    type: "github",
    owner: "aynik",
    repo: "deno-purify",
    desc: "A deno port of purify-ts."
  },
  rad: {
    type: "github",
    owner: "cdaringe",
    repo: "rad",
    desc: "General purpose build tool. statically typed, batteries included. command, function, and make-style tasks supported"
  },
  rand: {
    type: "github",
    owner: "rsp",
    repo: "deno-rand",
    desc: "Deno rand library"
  },
  random: {
    type: "github",
    owner: "vincentvictoria",
    repo: "random",
    desc: "Random - ES Module for Deno, Node and Web"
  },
  random_interval: {
    type: "github",
    owner: "zekth",
    repo: "deno_random_interval",
    desc: "deno random interval"
  },
  readline: {
    type: "github",
    owner: "vslinko",
    repo: "deno-readline",
    desc: "Read lines from Deno.Reader"
  },
  recursive_readdir: {
    type: "github",
    owner: "denorg",
    repo: "recursive-readdir",
    desc: "Recursively read a directory"
  },
  redis: {
    type: "github",
    owner: "keroxp",
    repo: "deno-redis",
    desc: "An experimental implementation of redis client for deno"
  },
  reno: {
    type: "github",
    owner: "reno-router",
    repo: "reno",
    desc: "A thin, testable routing library designed to sit on top of Deno's standard HTTP module"
  },
  rimu: {
    type: "github",
    owner: "srackham",
    repo: "rimu",
    desc: "Rimu, a readable text markup language inspired by AsciiDoc and Markdown."
  },
  ripemd160: {
    type: "github",
    owner: "paulmillr",
    repo: "noble-ripemd160",
    desc: "RIPEMD160, a cryptographic hash function."
  },
  rubico: {
    type: "github",
    owner: "richytong",
    repo: "rubico",
    desc: "a functional promise library"
  },
  run_exclusive: {
    type: "github",
    owner: "garronej",
    repo: "run_exclusive",
    desc: "⚡🔒 Generate functions that do not allow parallel executions 🔒 ⚡"
  },
  rute: {
    type: "github",
    owner: "jabernardo",
    repo: "rute",
    desc: "A Simple Router for Deno"
  },
  saur: {
    type: "github",
    owner: "tubbo",
    repo: "saur",
    desc: "Deno Saur is a full-stack web application framework with a focus on rapid development, similar to Django or Ruby on Rails."
  },
  secp256k1: {
    type: "github",
    owner: "paulmillr",
    repo: "noble-secp256k1",
    desc: "secp256k1, an elliptic curve that could be used for assymetric encryption and ECDSA signature scheme."
  },
  semver: {
    type: "github",
    owner: "justjavac",
    repo: "deno-semver",
    desc: "A fork of node-semver using TypeScript"
  },
  serializexml: {
    type: "github",
    owner: "olaven",
    repo: "serialize-xml",
    desc: "Serialize (i.e. stringify) XML"
  },
  servicr: {
    type: "github",
    owner: "astanciu",
    repo: "deno_servicr",
    desc: "⚙️ Small app/script/service manager to manage startup and shutdown gracefully ⚙️"
  },
  sha1: {
    type: "github",
    owner: "chiefbiiko",
    repo: "sha1",
    desc: "SHA1 for deno."
  },
  sha256: {
    type: "github",
    owner: "chiefbiiko",
    repo: "sha256",
    desc: "SHA2-256 for deno."
  },
  sha512: {
    type: "github",
    owner: "chiefbiiko",
    repo: "sha512",
    desc: "SHA2-512 for deno."
  },
  shell_escape: {
    type: "github",
    owner: "KSXGitHub",
    repo: "deno-shell-escape",
    path: "/lib",
    desc: "Escape and stringify an array of arguments to be executed on the shell."
  },
  short_uuid: {
    type: "github",
    owner: "jeanlescure",
    repo: "short_uuid",
    desc: "Generate random or sequential UUID of any length."
  },
  simple_type_assert: {
    type: "github",
    owner: "KSXGitHub",
    repo: "deno_simple_type_assert",
    desc: "Simple type assertion library for Deno."
  },
  siphash24: {
    type: "github",
    owner: "chiefbiiko",
    repo: "siphash24",
    desc: "SipHash24 implemented in WebAssembly."
  },
  skimming: {
    type: "github",
    owner: "petruki",
    repo: "skimming",
    desc: "Skimming is a search engine module for Deno."
  },
  slash: {
    type: "github",
    owner: "justjavac",
    repo: "deno-slash",
    desc: "Convert Windows backslash paths to slash paths: foo\\\\bar ? foo/bar"
  },
  slugify: {
    type: "github",
    owner: "jcardama",
    repo: "deno_slugify",
    desc: "A string slugifier"
  },
  smtp: {
    type: "github",
    owner: "manyuanrong",
    repo: "deno-smtp",
    desc: "Deno SMTP mail client"
  },
  soxa: {
    type: "github",
    owner: "fakoua",
    repo: "soxa",
    desc: "Promise based HTTP client for deno"
  },
  sparkpost: {
    type: "github",
    owner: "hayd",
    path: "/lib",
    repo: "deno-sparkpost",
    desc: "SparkPost email client library for deno"
  },
  specosaur: {
    type: "github",
    owner: "sachacr",
    repo: "specosaur",
    desc: "Specification pattern library for Deno."
  },
  sql_builder: {
    type: "github",
    owner: "manyuanrong",
    repo: "sql-builder",
    desc: "Deno SQL QueryBuilder"
  },
  sqlite: {
    type: "github",
    owner: "dyedgreen",
    repo: "deno-sqlite",
    desc: "JavaScript SQLite Module"
  },
  std: {
    type: "deno_std",
    desc: "Deno Standard Modules"
  },
  std_old: {
    type: "github",
    owner: "denoland",
    repo: "deno_std",
    desc: "NOTICE: The deno_std repository has been moved to the main Deno repo https://github.com/denoland/deno/tree/master/std"
  },
  suzhou_numerals: {
    type: "github",
    owner: "weakish",
    repo: "suzhou-numerals",
    desc: "Encoding and decoding Suzhou numerals."
  },
  swissKnife: {
    type: "github",
    owner: "fakoua",
    repo: "SwissKnife",
    desc: "SwissKnife is a Deno module that allows you to do some useful tasks on Windows OS using NirCmd v2.86"
  },
  take_five: {
    type: "github",
    owner: "toddself",
    repo: "take-five",
    desc: "A minimal (no external dependency) REST framework"
  },
  talk_lib: {
    type: "github",
    owner: "jipfr",
    repo: "talk-lib",
    desc: "A send & receive library for Nextcloud Talk"
  },
  task_runner: {
    type: "github",
    owner: "jinjor",
    repo: "deno-task-runner",
    desc: "deno-task-runner"
  },
  task_runner_v2: {
    type: "github",
    owner: "ebebbington",
    repo: "deno-task-runner-v2",
    desc: "deno-task-runner-v2"
  },
  tcr: {
    type: "github",
    owner: "AlexVagrant",
    repo: "tcr",
    desc: "tcr will complie and run with deno when typescript file change, you can direct run tstypescript file"
  },
  test_on_localhost: {
    type: "github",
    owner: "KSXGitHub",
    repo: "deno_run_tests_on_localhost",
    desc: "Create a localhost server and run tests"
  },
  text_clipper: {
    type: "github",
    owner: "arendjr",
    repo: "text-clipper",
    desc: "Fast and correct clip functions for HTML and plain text"
  },
  tiny_templates: {
    type: "github",
    owner: "zekth",
    repo: "deno_tiny_templates",
    desc: "Deno Tiny Templates"
  },
  tokenizer: {
    type: "github",
    owner: "eliassjogreen",
    repo: "deno_tokenizer",
    desc: "A simple tokenizer for deno."
  },
  tree: {
    type: "github",
    owner: "KSXGitHub",
    repo: "deno-tree",
    desc: "Traverse filesystem tree"
  },
  types: {
    type: "github",
    owner: "Soremwar",
    repo: "deno_types",
    desc: "Definition files for JavaScript libraries compatible with Deno"
  },
  udd: {
    type: "github",
    owner: "hayd",
    repo: "deno-udd",
    desc: "Update Deno Dependencies to their latest published versions"
  },
  unexpected: {
    type: "npm",
    package: "unexpected",
    desc: "Extensible BDD assertion toolkit"
  },
  up: {
    type: "github",
    owner: "denorg",
    repo: "up",
    desc: "Check if a website is currently up"
  },
  username: {
    type: "github",
    owner: "justjavac",
    repo: "deno-username",
    desc: "Get the username of the current user"
  },
  using: {
    type: "github",
    owner: "hayd",
    repo: "deno-using",
    desc: "A python-style with statement for deno."
  },
  uuid: {
    type: "github",
    owner: "lucascaro",
    repo: "deno-uuid",
    desc: "Warning: the library code of this module has been moved to https://deno.land/std/testing/mod.ts."
  },
  uwuifier: {
    type: "github",
    owner: "schotsl",
    repo: "uwuifier",
    desc: "This very lightweight package allows you to uwuify any sentence or word (excluding URL's) with many configurable parameters while giving you access to many vewy kawaii sentences and faces"
  },
  velociraptor: {
    type: "github",
    owner: "umbopepato",
    repo: "velociraptor",
    desc: "An npm-style script runner for Deno"
  },
  vscode_languageserver_protocol: {
    type: "github",
    owner: "denodev",
    repo: "deno_vscode_languageserver",
    path: "/protocol",
    desc: "The VSCode language server protocol definition in TypeScript."
  },
  vscode_languageserver_textdocument: {
    type: "github",
    owner: "denodev",
    repo: "deno_vscode_languageserver",
    path: "/textdocument",
    desc: "Implement text documents usable in a LSP server using Deno as a runtime."
  },
  vscode_languageserver_types: {
    type: "github",
    owner: "denodev",
    repo: "deno_vscode_languageserver",
    path: "/types",
    desc: "Data types used by the VSCode language server client and server."
  },
  watch: {
    type: "github",
    owner: "jinjor",
    repo: "deno-watch",
    desc: "A pure deno file watcher."
  },
  watch_v2: {
    type: "github",
    owner: "ebebbington",
    repo: "deno-watch-v2",
    desc: "deno-watch-v2"
  },
  webview: {
    type: "github",
    owner: "eliassjogreen",
    repo: "deno_webview",
    desc: "Deno bindings for webview, a tiny library for creating web-based desktop GUIs "
  },
  x_name: {
    type: "github",
    owner: "denorg",
    repo: "x-name",
    desc: "Check if a package name is available in deno.land/x"
  },
  xchacha20: {
    type: "github",
    owner: "chiefbiiko",
    repo: "xchacha20",
    desc: "XChaCha20 as defined by the XChaCha20 IRTF CFRG draft."
  },
  xchacha20_poly1305: {
    type: "github",
    owner: "chiefbiiko",
    repo: "xchacha20-poly1305",
    desc: "XChaCha20-Poly1305 as defined by the XChaCha20 IRTF CFRG draft, and IETF RFC 8439"
  },
  xrange: {
    type: "github",
    owner: "parzh",
    repo: "xrange",
    desc: "Python-esque iterator for number ranges"
  },
  yaml_wasm: {
    type: "github",
    owner: "KSXGitHub",
    repo: "yaml-wasm",
    desc: "WebAssembly module to parse YAML"
  },
  youtube_deno: {
    type: "github",
    owner: "akshgpt7",
    repo: "youtube-deno",
    desc: "A Deno client for the YouTube Data API v3. Lets you incorporate core YouTube features and almost any interaction with YouTube in your application."
  },
  zstd: {
    type: "github",
    owner: "xpyxel",
    repo: "deno-zstd",
    desc: "Zstd compression library bindings for Deno"
  }
};
/* eslint-enable @typescript-eslint/camelcase */

export default database;
