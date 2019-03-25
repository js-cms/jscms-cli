# JsCms cli

安装jscms使用它就对了。

## 安装cli

```
npm install jscms-cli -g
```

## jscms安装前提

你必须确保你的计算机/服务器安装了如下软件：

- nodejs&npm （nodejs >= 8.9）
- mongodb （jscms所使用的数据库软件，请确保mongdb已经运行，如果不懂mongodb的安装，推荐看菜鸟教程的mongodb教程。）

## cli使用方式

首先你要在你的项目文件夹李新建一个配置文件，文件名``必须命名为：jscms.install.config.cn.txt``。

文件内容如下：

```
应用名称：jscms-application
应用描述：a jscms application
网站管理员用户名（邮箱）：test@jscms.top
网站管理员密码：test
mongoodb主机（host）：127.0.0.1
mongoodb端口（port）：27017
mongoodb数据库名(dbname)：jscms
mongoodb数据库用户名（username）：root
mongoodb数据库密码（password）：root
nodejs服务端端口：7011
```

然后在配置文件所在目录，运行jscms-cli的创建项目命令：

```
$ jscms create project
```

等待项目创建完毕之后进入project并安装依赖：

```
$ cd project
$ npm install
```

最后启动项目：

```
$ npm start
```

停止命令：

```
$ npm stop
```

## 其他

测试待完善，欢迎贡献👏。
