# steem-link-extractor

[![npm version](https://badge.fury.io/js/steem-link-extractor.svg)](https://www.npmjs.com/package/steem-link-extractor)
[![Build Status](https://travis-ci.org/superoo7/steem-link-extractor.svg?branch=master)](https://travis-ci.org/superoo7/steem-link-extractor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A simple tools to extract links and generate links for different steem platform.

## About Steem Link Extractor

In Steem blockchain, there is so many apps that used different kind of pathname to keep track of profile and post. This project aims to unite them all.

**Technology Stack:**

- TypeScript
- Jest
- Rollup

## Installation

```sh
$ npm i --save steem-link-extractor
$ yarn add steem-link-extractor
```

## Usage

You can checkout example at [index.js](src/example/index.js) and [index.mjs](src/example/index.mjs)

### Import

**ES5 import / TS Import**

```js
import {
  extractPostLink,
  generateProfileLink,
  generatePostLink
} from "steem-link-extractor";
```

**CommonJS**

```js
const {
  extractPostLink,
  generateProfileLink,
  generatePostLink
} = require("steem-link-extractor");
```

### API

```js
// extractPostLink

// Extract with predefined link.json
console.log(
  extractPostLink(
    "https://steemit.com/cloud/@superoo7/side-to-side-comparison-of-digital-ocean-and-aws-lightsail"
  )
);
/** Output
 * {
 *   name: 'steemit',
 *   author: 'superoo7',
 *   permlink: 'side-to-side-comparison-of-digital-ocean-and-aws-lightsail',
 *   category: 'cloud'
 * }
 */

// Extract without predefined link.json (Assuming it is not yet being add into link.json)
// Currently presuming the site pathname is following format: `anything/anything/@{{author}}/{{permlink}}`
// author startsWith "@" and followed by permlink
console.log(
  extractPostLink(
    "https://steemit.com/cloud/@superoo7/side-to-side-comparison-of-digital-ocean-and-aws-lightsail",
    { automatic: true }
  )
);

// generateProfileLink

console.log(generateProfileLink("musing", "superoo7"));
/** Output
 * https://musing.io/profile/superoo7
 */

// generatePostLink

console.log(
  generatePostLink(
    "steemhunt",
    "superoo7",
    "tailwind-css-utility-first-css-framework"
  )
);
/** Output
 * https://steemhunt.com/@superoo7/tailwind-css-utility-first-css-framework
 */

// if you have category
console.log(
  generatePostLink(
    "steemit",
    "superoo7",
    "side-to-side-comparison-of-digital-ocean-and-aws-lightsail",
    "cloud"
  )
);
/** Output
 * https://steemit.com/cloud/@superoo7/side-to-side-comparison-of-digital-ocean-and-aws-lightsail
 */
```

## LICENSE

MIT
