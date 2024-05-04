/** @format */

import path from "node:path";
import fs from "node:fs";

const set_sidebar = (pathname) => {
    // 文件根目录
    const DIR_PATH = path.resolve();

    // 获取pathname的路径
    const dirPath = path.join(DIR_PATH, pathname);

    // 读取pathname下的所有文件或者文件夹
    const files = fs.readdirSync(dirPath);

    // getList 函数后面会讲到
    return getList(files, dirPath, pathname);
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

export default set_sidebar;
