import { LinkJson } from "../model";

describe("link.json test", () => {
  it("contains all required json", async () => {
    await Promise.all(
      Object.keys(LinkJson).map(app => {
        const appObj = LinkJson[app];
        const appObjKey = Object.keys(appObj);
        expect(appObjKey).toEqual([
          "name",
          "profile_link",
          "post_link",
          "base_url",
          "author_loc",
          "category_loc",
          "permlink_loc"
        ]);
        appObjKey.forEach(key => {
          expect(typeof (appObj as any)[key]).toEqual("string");
        });
      })
    );
  });
});
