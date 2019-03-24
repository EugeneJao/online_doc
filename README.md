# online_doc
> 基于vuepress的文档工具

## 运行命令

```bash
#先确保安装好nodejs和npm
#确保npm的prefix（全局包安装路径）已经设置到环境变量中
#通过以下指令可以查询npm的prefix（全局包安装路径）
npm config get prefix

#全局安装yarn
npm i yarn -g

#通过yarn安装项目依赖包
yarn install

#通过以下指令在开发环境运行文档
npm run docs:dev

#通过下命令编译生产部署包
npm run docs:build

```

## 具体使用方法，请在开发环境启动文档工具后，在首页查看

## PS.

1. 运行前需要注释node_modules/webpack-dev-middleware/lib/middleware.js的第82行和第83行，效果如下：
  ```javascript
    // if (!res.getHeader('Content-Type')) {
      res.setHeader('Content-Type', contentType);
    // }
  ```
