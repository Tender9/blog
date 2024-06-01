### CSS书写规范

```css
css{
    1.位置属性(position, top, right, z-index, display, float等)
    2.大小(width, height, padding, margin)
    3.文字系列(font， line-height, letter-spacing, color-text-align等)
    4.背景(background, border等)
    5.其他(animation, transition等)
}
```



### 尺寸大小以及单位

绝对单位 

- px：像素 
- vw：浏览器可视区域的宽度
- em：根据父元素的`font-size`
- rem：根据根元素（html）的 `font-size`

相对单位 

- %：相对于父元素的宽度或字体大小

`width` 和 `height` 的默认值是auto

`auto` 和 `%`的区别：

- `auto` ：会将元素撑开至整个父元素 width，但是会减去 `margin padding border` 
- `%`：会强制将元素变成父元素样的宽度， 并且额外的空间  `margin padding border` 会加到width上

```css
[Move] {
    padding: 20px;
    margin: 20px;
    height: 100px;
    background-color: red;
    border: 10px solid #000;
}

<div Move></div>
```



### [补充的选择器知识](https://juejin.cn/search?query=CSS%E9%80%89%E6%8B%A9%E5%99%A8&fromSeo=1&fromHistory=0&fromSuggest=0)



### CSS 画三角形

```css
[Triangle] {
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-bottom-color: red;
}

<div Triangle></div>
```



### 清除浮动

清除浮动主要是为了解决，父元素因为子元素开启了浮动，父元素高度为0的问题

```css
.parent {
    border: 2px solid #000;
}
.parent div {
    float: left;
    background-color: pink;
}

.clearfix:after,
.clearfix:before {
    content: "";
    display: table;
}
.clearfix:after {
    clear: both;
}
.clearfix {
    zoom: 1;
}

<div class="parent clearfix">
    <div>Float Left</div>
    <div>Float Right</div>
</div>
```



`BFC`：块格式化上下文   →  BFC 相当于一块独立的容器，不影响外部的布局

触发`BFC`：

- position 为 absolute 或 fixed
- display: inline-block，table-cell, table-caption, flex, inline-flex
- overflow != visible



### 自适应布局、响应式布局区别

响应式布局：使用 `媒体查询 @media` 对设备的尺寸进行适配

- only：可以排除不支持媒体查询的浏览器
- scrren：设备类型
- max-width：小于这个width生效、min-width：大于这个width生效


自适应：使用 `flexible.js`



相关博文：https://www.cnblogs.com/codc-5117/p/7097351.html 



