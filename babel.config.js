module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "babel-plugin-root-import",
      {
        paths: [
          { rootPathSuffix: "src", rootPathPrefix: "~" },
          { rootPathSuffix: "src/assets", rootPathPrefix: "@assets" },
          { rootPathSuffix: "src/components", rootPathPrefix: "@components" },
          { rootPathSuffix: "src/styles", rootPathPrefix: "@styles" },
        ],
      },
    ],
    "@babel/plugin-proposal-private-property-in-object",
  ],
};
