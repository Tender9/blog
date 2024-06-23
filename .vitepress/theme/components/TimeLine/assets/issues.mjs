/** @format */

import { nanoid } from "nanoid";
import prototype_chain from "./原型链.png";
import event_loop from "./事件循环.png";
import HTTP_CODE from "./HTTP_CODE.png";

const data = [
  {
    time: "2021/02/29",
    title: "理解原型链",
    imgUrl: prototype_chain,
  },
  {
    time: "2021/04/06",
    title: "浏览器渲染",
    description: `
    1、网络请求：DNS解析域名 → 建立 TCP 连接 → 响应数据；
    2、浏览器渲染：HTML字符串 → 解析HTML → 样式计算 → 布局 → 分层 → 绘制 → 分块 → 光栅化 → 画 → 像素信息；
    `,
    link: "https://blog.csdn.net/didadidadidadida/article/details/136912002",
  },
  {
    time: "2021/06/30",
    title: "事件循环 >>> 执行顺序 栈 微 宏",
    imgUrl: event_loop,
  },
  {
    time: "2021/06/30",
    title: "HTTP 状态码",
    imgUrl: HTTP_CODE,
    description: "",
  },
  {
    time: "2024/02/30",
    title:
      "React 生命周期 ：https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",
  },
];

data.forEach((item) => {
  item.id = nanoid();
  item.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});

export default data;
