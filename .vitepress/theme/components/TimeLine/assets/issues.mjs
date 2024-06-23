/** @format */

import { nanoid } from "nanoid";
import prototype_chain from "./原型链.png";
import event_loop from "./事件循环.png";

const data = [
  {
    time: "2021/02/29",
    description: "理解原型链",
    imgUrl: prototype_chain,
  },
  {
    time: "2021/04/06",
    description:
      "",
  },
  {
    time: "2021/06/30",
    description: "事件循环",
    imgUrl: event_loop,
  },
  {
    time: "2021/06/30",
    description: "HTTP 状态码",
    imgUrl: "",
  },
  {
    time: "2024/02/30",
    description:
      "React 生命周期 ：https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",
  },
];

data.forEach((item) => {
  item.id = nanoid();
  item.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});

export default data;
