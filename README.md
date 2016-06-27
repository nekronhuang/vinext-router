# vinext-router

A project to use `thrift`, `koa2`.

## What is vinext？

`vinext` means **video/vision next**. By the way, I prefer **vision**.

Some future projects of [Videojj](http://videojj.com) will name after `vinext`.

## Quick start

#### business-node
```bash
$ cd thrift_desc
$ thrift -gen js:node *.thrift
```

#### business-go
```bash
$ cd thrift_desc
# important! everything on web is fucking useless
$ thrift -gen go:thrift_import=git-wip-us.apache.org/repos/asf/thrift.git/lib/go/thrift *.thrift
```

### develop

```bash
# install dependecies
$ npm install
$ go get git-wip-us.apache.org/repos/asf/thrift.git/lib/go/thrift

# start business server
# 1) node server
$ npm run business-node

# 2) golang server
$ npm run business-go

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
└───test
│   │   ... 测试文件
│
└───thrift_desc
│   │   ... thrift描述文件
│
└───demo
│   │   ... 业务服务器样例
│
└───app.js 中间件配置
│
└───start.js 启动文件
```