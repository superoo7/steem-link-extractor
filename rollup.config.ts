import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";
import json from "rollup-plugin-json";

const pkg = require("./package.json");

const libraryName = pkg.name;

export default [
  // steem-link-extractor Library
  {
    input: `src/lib/index.ts`,
    output: [
      {
        file: pkg.browser,
        name: libraryName,
        format: "umd",
        sourcemap: true
      },
      { file: pkg.module, name: libraryName, format: "es", sourcemap: true },
      {
        file: pkg.main,
        name: libraryName,
        format: "cjs",
        sourcemap: true
      }
    ],
    external: ["dsteem/lib"],
    watch: {
      include: "src/lib/**"
    },
    plugins: [
      json(), // Allow json resolution
      typescript({ useTsconfigDeclarationDir: true }), // Compile TypeScript files
      commonjs(), // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
      resolve(), // Allow node_modules resolution, so you can use 'external' to control which external modules to include in the bundle
      sourceMaps() // Resolve source maps to the original source
    ]
  }
];
