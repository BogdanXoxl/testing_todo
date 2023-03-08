import "../styles/globals.css";
import * as NextImage from "next/image";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

initialize();

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const customViewports = {
  kindleFire2: {
    name: "Kindle Fire 2",
    styles: {
      width: "600px",
      height: "963px",
    },
  },
  kindleFireHD: {
    name: "Kindle Fire HD",
    styles: {
      width: "533px",
      height: "801px",
    },
  },
};

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
  grid: {
    // gridOn: true,
    // columns: 12,
    // gap: '20px',
    // gutter: '50px',
    // maxWidth: '1024px',
  },
  viewport: {
    viewports: { ...customViewports, ...INITIAL_VIEWPORTS },
    defaultViewport: "iphone6",
  },
};

export const decorators = [mswDecorator];
