# book_handling_frontend
图书借还系统前端  
[demo](http://xichi.xyz/bookHandling)

## 技术栈
 
  Vue + axios + vuex + element-ui 


## HOW TO START?

确保安装[node](https://nodejs.org/en/)环境：

1. 安装依赖：`yarn install` or `npm install`
2. 本地运行：`yarn run serve` or `npm run serve`
3. 打包构建：`yarn run build` or `npm run build`


## API

+ api地址：http://47.106.250.72:8888/api/
+ 后端地址：https://github.com/ChenKS12138/book_handling_backend


## 目录结构
```
│  .gitignore
│  babel.config.js
│  package.json          npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
│  README.md
│  vue.config.js         配置
│  yarn.lock      
│  .env.development      开发环境配置
│  .env.production       生产环境配置
├─public                 纯静态资源，不会被wabpack构建。
│      favicon.ico
│      index.html
│      
└─src                    项目源码目录
    │  App.vue           根组件
    │  main.js           入口js文件
    │  router.js         前端路由
    │  store.js          应用级数据
    │  
    ├─api                API接口
    │      index.js
    │      
    ├─assets             资源目录，这里的资源会被wabpack构建
    │      common.styl
    │      logo.png
    │      
    ├─components         公共组件
    │      header.vue
    │      
    └─pages               页面目录
            detail.vue
            index.vue
            login.vue
```

## LEARN MORE
1. VUE GUIDE：https://cn.vuejs.org/v2/guide/  
   Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。
2. Vue CLI：https://cli.vuejs.org/zh/  
   脚手架 快速开发
3. Vuex：https://vuex.vuejs.org/zh/   
   Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
4. element-ui： https://element.eleme.cn/?tdsourcetag=s_pcqq_aiomsg#/zh-CN  
   一个组件库。需要的组件可以按需引入。
5. axios：https://www.kancloud.cn/yunye/axios/234845  
   请求
