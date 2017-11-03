# vuedemo

> A Vue.js project

## 一 项目打包启动步骤

``` bash
# 安装包
npm install

# 项目启动可以热更新  localhost:8080
npm run dev

# 打包压缩
npm run build

# 打包压缩分析报告
npm run build --report
```

## 二 项目打包启动步骤

``` bash

    |- build webpack打包配置文件夹

    |- config 开发生产webpack配置

    |- src 业务代码

    |    |- assets 图片资源

    |    |- lib 需要用到的第三方js类库

    |    |- page 业务模块代码

    |    |- router 页面路由

    |    |- scss 共同样式scss

    |    |- App.vue 如果做pc端网站的入口vue组件

    |    |- main.js 主的入口js文件

    |    |- Weixin.vue 如果做微网站的入口vue组件

    |- 代码规范.txt  代码规范

    |- package.json  npm包配置json

    |- index.html   主页的index.html


```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
