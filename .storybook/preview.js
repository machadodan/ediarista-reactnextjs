import '../src/UI/styles/globals.css'
import storyThemeProvider from "../src/UI/themes/storyThemeProvider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [storyThemeProvider];