import * as _LinkJson from "./link.json";

export interface Link {
  [app: string]: {
    name: string;
    profile_link: string;
    post_link: string;
    base_url: string;
    author_loc: string;
    category_loc: string;
    permlink_loc: string;
  };
}

export interface ExtractPost {
  name: string;
  author: string;
  permlink: string;
  category?: string;
}

export interface ExtractPostOption {
  automatic: boolean;
}

export const LinkJson: Link = _LinkJson;
