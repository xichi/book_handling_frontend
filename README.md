# book_handling_frontend
图书借还系统前端  
[demo](http://xichi.xyz/bookHandling)

## 技术栈
 
  Vue + axios + vuex + element-ui 


## HOW TO START?

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

