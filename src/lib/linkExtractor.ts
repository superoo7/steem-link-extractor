import { ExtractPost, ExtractPostOption, LinkJson } from "./model";

export const extractPostLink = (
  link: string,
  options: ExtractPostOption = { automatic: false }
) => {
  // bypass checking from link.json
  // Presuming author name comes first which startsWith @, name is the base domain name, and permlink comes after author
  // e.g. https://steemhunt.com/@superoo7/tailwind-css-utility-first-css-framework
  const formattedUrl = new URL(link);
  const { host, pathname } = formattedUrl;
  const formattedHost = host.replace("www.", "");
  const formattedPathname = pathname.split("/");
  if (options.automatic) {
    const authorLoc = formattedPathname.findIndex(pn => pn.startsWith("@"));

    return {
      name: formattedHost.split(".")[0],
      author: formattedPathname[authorLoc].replace("@", ""),
      permlink: formattedPathname[authorLoc + 1]
    };
  }
  const selectedAppName = Object.keys(LinkJson).find(
    app => LinkJson[app].base_url === formattedHost
  );
  if (!selectedAppName) {
    throw new Error(`Unable to find host ${formattedHost}`);
  }
  const selectedApp = LinkJson[selectedAppName];
  const formattedAuthorLoc = parseInt(selectedApp.author_loc, 10);
  const formattedPermlinkLoc = parseInt(selectedApp.permlink_loc, 10);
  const formattedCategoryLoc = parseInt(selectedApp.category_loc, 10);

  const extractedData: ExtractPost = {
    name: selectedApp.name,
    author: formattedPathname[formattedAuthorLoc].replace("@", ""),
    permlink: formattedPathname[formattedPermlinkLoc]
  };

  if (selectedApp.category_loc && selectedApp.category_loc.length > 0) {
    extractedData.category = formattedPathname[formattedCategoryLoc];
  }

  return extractedData;
};

export const generateProfileLink = (platform: string, author: string) => {
  let profileLink = LinkJson[platform].profile_link;
  profileLink = profileLink.replace("{{author}}", author);
  return profileLink;
};

export const generatePostLink = (
  platform: string,
  author: string,
  permlink: string,
  category?: string
) => {
  let profileLink = LinkJson[platform].post_link;
  if (category && category.length > 0) {
    profileLink = profileLink.replace("{{category}}", category);
  }
  profileLink = profileLink.replace("{{permlink}}", permlink);
  profileLink = profileLink.replace("{{author}}", author);
  return profileLink;
};
