import {
  generateProfileLink,
  generatePostLink,
  extractPostLink
} from "../linkExtractor";

describe("Link Alias test", () => {
  const steemitLink =
    "https://steemit.com/cloud/@superoo7/side-to-side-comparison-of-digital-ocean-and-aws-lightsail";
  const steemitRes = {
    name: "steemit",
    author: "superoo7",
    permlink: "side-to-side-comparison-of-digital-ocean-and-aws-lightsail",
    category: "cloud"
  };

  it("gets steemit link", () => {
    // Condition #1: Normal
    const link1 = extractPostLink(steemitLink);
    expect(link1).toEqual(steemitRes);
    // Condition #2: http
    const link2 = extractPostLink(
      "http://steemit.com/cloud/@superoo7/side-to-side-comparison-of-digital-ocean-and-aws-lightsail"
    );
    expect(link2).toEqual(steemitRes);
    // Condition #2: www
    const link3 = extractPostLink(
      "https://www.steemit.com/cloud/@superoo7/side-to-side-comparison-of-digital-ocean-and-aws-lightsail"
    );
    expect(link3).toEqual(steemitRes);
    // Condition #4: throw error on ban
    try {
      extractPostLink(
        "https://www.steemit.com/cloud/@superoo7/side-to-side-comparison-of-digital-ocean-and-aws-lightsail",
        { automatic: true }
      );
      throw new Error("ERROR");
    } catch (err) {
      expect(err.message).toBe("Platform steemit is banned");
    }
  });

  it("gest partiko link", () => {
    const url = "https://partiko.app/@coingecko/did-steem-just-shot-up-by-20";
    const res = {
      author: "coingecko",
      name: "partiko",
      permlink: "did-steem-just-shot-up-by-20"
    };
    const partikoPost1 = extractPostLink(url);
    expect(partikoPost1).toEqual(res);
    const partikoPost2 = extractPostLink(url, {
      automatic: true
    });
    expect(partikoPost2).toEqual(res);
  });

  it("gets link automatically", () => {
    // steemit
    const link = extractPostLink(steemitLink, {
      automatic: true
    });
    const copyRes = steemitRes;
    delete copyRes.category;
    expect(link).toEqual(copyRes);
    // steemhunt
    const shRes = {
      name: "steemhunt",
      author: "superoo7",
      permlink: "tailwind-css-utility-first-css-framework"
    };
    const shLink1 = extractPostLink(
      "https://steemhunt.com/author/@superoo7/tailwind-css-utility-first-css-framework",
      { automatic: true }
    );
    const shLink2 = extractPostLink(
      "https://steemhunt.com/@superoo7/tailwind-css-utility-first-css-framework",
      { automatic: true }
    );
    expect(shLink1).toEqual(shRes);
    expect(shLink2).toEqual(shRes);
  });

  // Steemit
  it("generate profile link for steemit", () => {
    const profileLink = generateProfileLink("steemit", "superoo7");
    expect(profileLink).toEqual("https://steemit.com/@superoo7");
  });
  it("generate post link", () => {
    const postLink = generatePostLink(
      "steemit",
      "superoo7",
      "side-to-side-comparison-of-digital-ocean-and-aws-lightsail",
      "cloud"
    );
    expect(postLink).toEqual(
      "https://steemit.com/cloud/@superoo7/side-to-side-comparison-of-digital-ocean-and-aws-lightsail"
    );
  });

  // Busy
  it("generate profile link for steemit", () => {
    const profileLink = generateProfileLink("busy", "superoo7");
    expect(profileLink).toEqual("https://busy.org/@superoo7");
  });
  it("generate post link", () => {
    const postLink = generatePostLink(
      "busy",
      "superoo7",
      "side-to-side-comparison-of-digital-ocean-and-aws-lightsail"
    );
    expect(postLink).toEqual(
      "https://busy.org/@superoo7/side-to-side-comparison-of-digital-ocean-and-aws-lightsail"
    );
  });
});
