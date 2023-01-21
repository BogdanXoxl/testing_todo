module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint"],
  "*.{js,ts,tsx,scss,json}": "pretty-quick --staged",
  "**/*.ts?(x)": () => "npm run check-types",
};
