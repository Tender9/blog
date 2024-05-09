/** @format */

import sidebars from "./auto_generate_bar.mjs";
import dataTree from "../FolderMappings.mjs";

/**
 ** @Author: Tender9
 ** @Date: 2024-05-07 01:25:09
 ** @Description：nav 错误的 link 会导致 404 无法访问目录下的文件，所以需要自动匹配第一个文件
 ** @Description：缺失 link 也会导致报错
 **/

const navList = [
    {
        text: "首页",
        link: "/",
    },
];

dataTree.forEach((item) => {
    let nav = {
        text: item.category,
        link: item.dir + "/index.md",
        activeMatch: `/${item.dir}/`,
    };

    let mapSidebar = sidebars[item.dir];

    // 空文件夹
    if (mapSidebar.length == 0) return navList.push(nav);

    const revLink = findFirstValidLink(mapSidebar);

    if (!revLink) return navList.push(nav);

    nav.link = revLink;

    return navList.push(nav);
});

function findFirstValidLink(array) {
    let res = array.find((item) => item.link);
    if (res) return res.link;

    for (const item of array) {
        if (item.link) {
            return item.link;
        } else if (item.items && item.items.length > 0) {
            const link = findFirstValidLink(item.items);
            if (link) return link;
        }
    }
}

navList.push({
    text: "指南",
    items: [
        { text: "配置", link: "/docs/info/config.md" },
        { text: "markdown语法", link: "/docs/info/markdown.md" },
        { text: "日常Q&A", link: "/docs/info/anyIssue.md" },
    ],
});

export default navList;
