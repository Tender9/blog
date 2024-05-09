/** @format */

import { nanoid } from "nanoid";

const data = [
    {
        time: "2021/02/29",
        title: "当使用 display: inline-block; 样式时，元素会被视为内联元素，默认按照基线（baseline）对齐的，在顶部留有一定的空间",
        description: "解决这个问题的一种方法是设置 vertical-align: top; 样式，将元素的垂直对齐方式设置为顶部",
        imgUrl: "",
    },
    {
        time: "2021/02/29",
        title: "图片底侧会有一个空白缝隙，原因是行内块元素会和文字的基线对齐",
        description: "1. 给图片添加 vertical-align:middle | top| bottom 等。 （提倡使用的）\n 2. 把图片转换为块级元素 display: block;",
        imgUrl: "",
    },
    {
        time: "",
        title: "",
        description: "",
        imgUrl: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
];

data.forEach((item) => {
    item.id = nanoid();
    item.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});

export default data;
