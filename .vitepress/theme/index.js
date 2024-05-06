/** @format */
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import "./styles/default.css";
import "./styles/var.css";

const themeConfig = {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {});
    },
    enhanceApp({ app, router, siteData }) {
        // ...
    },
};

export default themeConfig;
