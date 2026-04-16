import { defineConfig } from "vitepress";

export default defineConfig({
  title: "vue-border-beam",
  description: "Animated border beam effect for Vue 3",
  base: "/vue-border-beam/",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Examples", link: "/examples/basic" },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "Props Reference", link: "/guide/props" },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Basic", link: "/examples/basic" },
          { text: "Sizes", link: "/examples/sizes" },
          { text: "Colors", link: "/examples/colors" },
          { text: "Themes", link: "/examples/themes" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/Ripwords/vue-border-beam" }],
  },
});
