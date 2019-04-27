# JsCms cli

安装jscms使用它就对了。

## 安装cli

```
npm install jscms-cli -g
```

## Jscms的安装前提

你必须确保你的计算机/服务器安装了如下软件：

- nodejs&npm （nodejs >= 8.9）
- mongodb （jscms所使用的数据库软件，请确保mongdb已经运行，如果不懂mongodb的安装，推荐看菜鸟教程的mongodb教程。）

## cli使用方法

首先你要在你的项目文件夹里新建一个配置文件，它是一个js文件。

**方法一**：你可以直接使用命令行工具先创建一个配置文件。

```bash
jscms config .
```

**方法二**：或者，你也可以手动创建配置文件；文件名``必须命名为：jscms.config.js``，文件内容如下：

```javascript
module.exports = {
  // This configuration item is used to indicate the language of the configuration file.
  // 此配置项用于表示你所使用的语言，zh表示中文，en表示英文。
  'lang': 'zh',
  // This is the English name of the Jscms application, and the first letter needs to be capitalized.
  // Jscms应用程序的英文名称，首字母需要大写。
  'name': 'Jscms',
  // The description of the application.
  // 应用程序的描述。
  'description': 'This is a site created using jscms.',
  // This is the username of the super administrator.
  // 这是超级管理员的用户名。
  'username': 'super@jscms.top',
  // This is the password of the super administrator.
  // 这是超级管理员的密码。
  'password': 'superadmin',
  // This is the host of the MongoDB database.
  // 这是MongoDB数据库所在机器的ip地址。
  'dbHost': '127.0.0.1',
  // This is the port of the MongoDB database.
  // 这是MongoDB数据库的端口。
  'dbPort': '27017',
  // This is the database name of the MongoDB database.
  // 这是MongoDB数据库的数据库名称。
  'dbName': 'jscms',
  // This is the administrator username for the MongoDB database. If not, you can leave it blank.
  // 这是MongoDB数据库的管理员用户名。 如果没有，您可以将其留空。
  'dbUser': '',
  // This is the administrator password for the MongoDB database. If not, you can leave it blank.
  // 这是MongoDB数据库的管理员密码。 如果没有，您可以将其留空。
  'dbPass': '',
  // This is the exposed port of the nodejs application, required.
  // 这是nodejs应用程序的端口，必填。
  'port': '7654',
  // This fills in your domain name, please note that you cannot bring www.
  // 绑定的域名，请注意不要带上www。
  'domain': 'jscms.top'
}
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
