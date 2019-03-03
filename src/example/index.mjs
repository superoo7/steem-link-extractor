// change "from" to from "steem-link-extractor";
import {
  extractPostLink,
  generateProfileLink,
  generatePostLink
} from "../../lib/steem-link-extractor.umd.js";
const {
  extractPostLink,
  generateProfileLink,
  generatePostLink
} = LinkExtractor;

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
