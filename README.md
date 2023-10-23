# uTools-post

方便快速的发送、接受数据包（例如 tcp/udp）


## 功能

- [x] 客户端管理
- [x] UDP server/client
- [x] TCP server/client
- [x] 自定义发送数据内容
- [x] 自定义接收数据内容
- [x] 持续发送
- [x] 附带时间的日志输出


## 安装

1. 通过 uTools 插件市场搜索 “udp”、“tcp”、“post” 安装
2. 通过 [发布页面](https://github.com/pfeak/utools-post/releases) 下载 `UPX` 文件手动拖拽到 utools 弹框安装


## 界面展示

![1](./images/1.png)

![2](./images/2.png)

![3](./images/3.png)

![4](./images/4.png)


## 开发

克隆仓库，在代码根目录执行：

```shell
npm install
npm run dev
```

根据 [uTools 开发者文档](https://u.tools/docs/developer/welcome.html#plugin-json) 介绍开发

开发完成后，打包生成 `dist` 目录及文件
```
npm run build
```

最后通过 `uTools 开发者工具` 打包成 `UPX（utools package Extension）` 文件


## 数据结构

```json
{
    "uuid": "70150c51-98d4-4f76-9da3-70fb967afb61",
    "name": "机房-服务器1",
    "ipv4": "192.168.1.10",
    "port": "8080",
    "interval": 0,
    "client": "嗨，我是 TCP/UDP 发送的消息!",
    "server": "你好，这里是 TCP/UDP 服务器!"
}
```