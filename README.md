# vinext-router

A project to use `thrift`, `koa2`.

## What is vinext？

`vinext` means **video/vision next**. By the way, I prefer **vision**.

Some future projects of [Videojj](http://videojj.com) will name after `vinext`.

## Quick start

### develop

```bash
# install dependecies
$ npm install

# start business server
$ npm run business

# start router server
$ npm start
```

## Structure

```
vinext-router
│
└───api
│   │   ... 路由分发逻辑
│
└───config
│   │
│   ├───routers.js 路由主文件
│   │
│   └───server
│       │   ... 服务器配置参数
│
└───thrift_desc
│   │   ... thrift描述文件
│
└───demo
│   │   ... 业务服务器样例
│
└───app.js 中间件 配置
│
└───start.js 启动文件
```