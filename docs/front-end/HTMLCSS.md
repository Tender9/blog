## Layout



### single-column layout

```HTML
<style>
    body {
        display: grid;
        place-items: center; /* place-items: <align-items> <justify-items>;简写 */
        height: 100vh;
        width: 100vw;
    }
    #app {
        background-color: cornflowerblue;
        width: 90%;
        height: 95%;
    }
</style>
<body>
    <div id="app"></div>
</body>
```

### left-side layout

```HTML
<style>
    body {
        display: grid;
        /* 。第一列最小宽度为150px，最大宽度为总宽度的25%，第二列为1fr */
        grid-template-columns: minmax(150px, 25%) 1fr;
        height: 100vh;
    }
</style>
<body>
    <div style="background-color: rebeccapurple; height: 90%"></div>
    <div style="background-color: red; height: 90%"></div>
</body>
```

### multi-column layout

```HTML
<style>
    body {
        display: flex;
        flex-wrap: wrap;
    }
    .item {
        /* flex: <flex-grow> <flex-shrink> <flex-basis>; */
        /* 当 flex值为 1 1 150px;  部分元素会自适应变化占满所有空间 */
        /* 项目的初始宽度是150px，且不可以扩大，但是当容器宽度不足150px时，项目可以缩小 */
        flex: 0 1 150px;
        margin: 5px;
        background-color: cornflowerblue;
        width: 40px;
        height: 60px;
        box-sizing: border-box;
    }
</style>
<body>
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
    <div class="item">9</div>
</body>
```

### sandwich layout

```HTML
<style>
    body {
        display: grid;
        /* 根据父级高度：第一行第三行高度auto,第二行占据剩余空间 */
        grid-template-rows: auto 1fr auto;
        height: 600px;
    }
</style>
<body>
    <div style="background-color: rebeccapurple">
        <h1>Header</h1>
    </div>
    <div style="background-color: red">Main</div>
    <div style="background-color: rgb(76, 155, 83)">
        <h6>Footer</h6>
    </div>
</body>
```



### Holy Grail layout

```HTML
<style>
    body {
        display: grid;
        /* grid-template 是grid-template-rows和grid-template-columns的简写形式 */
        grid-template: auto 1fr auto / auto 1fr auto;
        /* 
        页面在垂直方向和水平方向上，都分成三个部分：第一部分和第三部分都是本来的内容高度（或宽度），第二部分占满剩余的高度（或宽度） 
        */
        height: 500px;
    }
</style>
<body>
<!-- 
grid-column: grid-column-start / grid-column-end; 从哪一列开始显示项目 / 哪一条列前停止显示项目 
-->
    <header style="background-color: rgb(42, 143, 109); grid-column: 1 / 4">Header</header>
    <div style="background-color: rgb(201, 84, 156); grid-column: 1 / 2">Left</div>
    <main style="background-color: rgb(76, 85, 163); grid-column: 2 / 3">Main</main>
    <div style="background-color: rgb(92, 31, 153); grid-column: 3 / 4">Right</div>
    <footer style="background-color: rgb(59, 134, 59); grid-column: 1 / 4">Footer</footer>
</body>
```



瀑布流

1、准备容器

2、使用JS动态添加图片、确定其宽度

3、动态设置图片坐标（确定几列）

4、根据列数确定一个数组，存储其图片的整体高度值，判断较低的高度值来放置下一张图片

5、监听窗口Size变动，重新计算图片位置，注意使用防抖

