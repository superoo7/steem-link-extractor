# steem-link-extractor

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

**ES5 import / TS Import**

```js
import {
  extractPostLink,
  generateProfileLink,
  generatePostLink
} from "steem-link-extractor";

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

**CommonJS**

```js
const {
  extractPostLink,
  generateProfileLink,
  generatePostLink
} = require("steem-link-extractor");
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

// generateProfileLink

console.log(generateProfileLink("musing", "superoo7"));
/** Output
 * https://musing.io/profile/superoo7
 */
```

## LICENSE

MIT
