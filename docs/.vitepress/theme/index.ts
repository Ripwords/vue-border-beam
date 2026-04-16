import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { BorderBeam } from "../../../src/index";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("BorderBeam", BorderBeam);
  },
} satisfies Theme;
