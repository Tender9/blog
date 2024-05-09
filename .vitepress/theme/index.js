/** @format */
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import "./styles/default.css";
import "./styles/var.css";

import TimeLine from "./compements/TimeLine.vue";

const themeConfig = {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {});
    },
    enhanceApp({ app, router, siteData }) {
        // ...
        app.component("TimeLine", TimeLine);
    },
};

export default themeConfig;
