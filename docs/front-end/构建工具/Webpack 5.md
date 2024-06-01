### Webpack 5 的配置



```js
// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};

```

- `entry` 入口文件路径
- `output` 打包后的文件
- `module.rules` 定义不同类型文件处理规则



#### 代码拆分

通过动态导入（Dynamic Imports）实现代码拆分，将代码按需加载，提高页面加载速度：

```js
// 动态导入模块
import('./module.js')
  .then(module => {
    // 使用模块
  })
  .catch(err => {
    // 处理错误
  });
```



#### 模块热替换

在开发过程中修改代码后，无需刷新页面即可实时预览

```js
if (module.hot) {
  module.hot.accept('./module.js', () => {
    // 模块发生变化时的处理逻辑
  });
}
```



#### Tree Shaking

```
// 在代码中这样编写

import { func1, func2 } from './module.js';

// 仅导入 func1 和 func2，未使用的其他代码将被删除
```

