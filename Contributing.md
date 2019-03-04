# Contributing

## Introduction

First of all, thank you for your interest to contribute to the steem-link-extractor project.

## Pull Request Process

- Suggest or Open and issue before contributing.
- Make sure all test pass. (CI is added into this project)
- Submit a PR on our github.
- Wait for Reviewer to approve for the PR.

## How to Contribute?

Below, I will explain how to contribute to this project:

- [Adding new project to link.json](#m1)
- [Contribute to codes](#m2)

<a href="#m1" />

### Adding new project to link.json

Contributings can be as simple as updating [link.json](src/lib/link.json).

Make sure to follow the following style in JSON.

```ts
interface Link {
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
```

- If the app does not have "category_loc", simply leave it as an empty string.
- "profile_link", "post_link" and "category_loc" are following handlerbar style of injecting variables, namely: "{{author}}", "{{category}}" and "{{permlink}}"
- Index of "author_loc", "category_loc" and "permlink_loc" are starting from 1.

e.g. https://steemit.com/cloud/@superoo7/side-to-side-comparison-of-digital-ocean-and-aws-lightsail

```
pathname = ["", "cloud", "@superoo7", "side-to-side-comparison-of-digital-ocean-and-aws-lightsail"]
"author_loc": "2",
"permlink_loc": "3",
"category_loc": "1"
```

[Refer to model.ts](src/lib/model.ts)

```json
"partiko": {
    "name": "partiko",
    "profile_link": "https://partiko.app/@{{author}}",
    "post_link": "https://partiko.app/@{{author}}/{{permlink}}",
    "base_url": "partiko.app",
    "author_loc": "1",
    "category_loc": "",
    "permlink_loc": "2"
}
```

<a href="#m2" />

### Contribute to codes

#### Installation

**Requirement**

- Node version 10+ (Support `new URL()`)
- NPM installed

```sh
# Clone this project
$ git clone https://github.com/superoo7/steem-link-extractor
$ cd steem-link-extractor
# Install dependencies
$ npm i # or yarn install
# Start dev
$ npm run dev
# Run test
$ npm run test
# Build for production
$ npm run build
```
