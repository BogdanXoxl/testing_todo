import "../styles/globals.css";
import * as NextImage from "next/image";
import { initialize, mswDecorator } from "msw-storybook-addon";

initialize();

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "dark",
        value: "rgb(17 24 39)",
      },
    ],
  },
  a11y: {
    manual: false,
  },
};

export const decorators = [mswDecorator];
