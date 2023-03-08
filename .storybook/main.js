module.exports = {
  stories: ["../app/**/*.stories.mdx", "../app/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    // general addons by sb
    "@storybook/addon-essentials",
    // play functions
    "@storybook/addon-interactions",
    // accessibility
    "@storybook/addon-a11y",
    // show component code in sb
    "@storybook/addon-storysource",
    "@storybook/addon-jest",
    // suggestions how improve UX to be more mobile-friendly.
    "storybook-mobile",
    // for tailwind
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    // for grid columns
    "storybook-addon-grid",
    "storybook-addon-grid/chromatic",
    // for figma,
    "storybook-addon-designs",
    // dark mode
    "storybook-dark-mode",
    // for test coverage
    {
      name: "@storybook/addon-coverage",
      options: {
        istanbul: {
          exclude: ["**/index.ts"],
          excludeNodeModules: true,
        },
      },
    },
  ],
  staticDirs: ["../public"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    interactionsDebugger: true,
  },
};
