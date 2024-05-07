/** @format */

import path from "node:path";
import fs from "node:fs";
import dataTree from "../FolderMappings.mjs";

// 白名单,过滤不是文章的文件和文件夹
const WHITE_LIST = ["index.md", ".vitepress", "node_modules", ".idea", "assets"];

// 取差值
const intersections = (arr1, arr2) => Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))));

const set_sidebar = (pathname) => {
    // 文件根目录
    const DIR_PATH = path.resolve();

    // 获取pathname的路径
    const dirPath = path.join(DIR_PATH, pathname);

    let files;

    try {
        // 读取pathname下的所有文件或者文件夹
        files = fs.readdirSync(dirPath);
    } catch (err) {
        // 处理目录不存在的情况
        return;
    }

    const items = intersections(files, WHITE_LIST);

    // getList 函数后面会讲到
    return getList(items, dirPath, pathname);
};

// 把方法导出直接使用
// params = ['react.md', 'vue.md'],path1="E:\...\front-end", pathname = "docs/front-end"
function getList(params, path1, pathname) {
    // 存放结果
    const res = [];
    // 判断是否是文件夹
    const isDirectory = (path) => fs.lstatSync(path).isDirectory();

    // 开始遍历params
    for (let file in params) {
        // 完整文件路径
        const dir = path.join(path1, params[file]);

        // 判断是否是文件夹
        const isDir = isDirectory(dir);

        if (isDir) {
            // 如果是文件夹,读取之后作为下一次递归参数
            const files = fs.readdirSync(dir);
            res.push({
                text: params[file],
                collapsible: true, // 开启折叠
                collapsed: true,
                items: getList(files, dir, `${pathname}/${params[file]}`),
            });
        } else {
            // 获取名字
            const name = path.basename(params[file]);

            // 是否是以 .md 结尾文件
            const suffix = path.extname(params[file]);

            if (suffix !== ".md") continue;

            const filename = path.basename(params[file], ".md");

            res.push({
                text: filename,
                link: `${pathname}/${name}`,
            });
        }
    }
    return res;
}

// 生成 sidebars
const sidebars = {};
dataTree.forEach((item) => {
    sidebars[item.dir] = set_sidebar(item.dir);
});

export default sidebars;