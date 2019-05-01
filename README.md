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
  'password': 'superadmin888',
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

## 默认数据

**安装完成后请自行删除默认数据。**

### 默认分类

- 创业投资，ObjectId(5c9791a22ef9cff7d524a126)
- 科技创新，ObjectId(5c9791a22ef9cff7d524a127)
- 企业服务，ObjectId(5c9791a22ef9cff7d524a128)
- 生活娱乐，ObjectId(5c9791a22ef9cff7d524a129)
- 职场管理，ObjectId(5c9791a22ef9cff7d524a130)
- 便捷出行，ObjectId(5c9791a22ef9cff7d524a131)
- 创新创业，ObjectId(5c9791a22ef9cff7d524a132)
- 房屋产业，ObjectId(5c9791a22ef9cff7d524a133)

### 默认文章，转载自36k

#### 创业投资

- [如何找到“完美”的联合创始人？](https://36kr.com/p/5200268)，ObjectId(5c9791a22ef9cff7d524a12c)
- [为什么大公司终于开始用SaaS了？](https://36kr.com/p/5199646)，ObjectId(5c9791a22ef9cff7d524a13c)

#### 科技创新

- [揭秘亚马逊的38条成功原则](https://36kr.com/p/5197301)，ObjectId(5c9791a22ef9cff7d524a14c)
- [消失的手机玩家](https://36kr.com/p/5199713)，ObjectId(5c9791a22ef9cff7d524a15c)

#### 企业服务

- [阿里云不做的Saas，微软云为何要押重注？](https://36kr.com/p/5198937)，ObjectId(5c9791a22ef9cff7d524a16c)
- [企业服务真的热吗？99% 的 VC 都投错了](https://36kr.com/p/5190303)，ObjectId(5c9791a22ef9cff7d524a17c)

#### 生活娱乐

- [死在摄像头面前的网红们](https://36kr.com/p/5200202)，ObjectId(5c9791a22ef9cff7d524a18c)
- [拆解《复联4》票房奇迹](https://36kr.com/p/5199541)，ObjectId(5c9791a22ef9cff7d524a19c)

#### 职场管理

- [在员工眼里，你是一位“真实型领导”吗？](https://36kr.com/p/5200130)，ObjectId(5c9791a22ef9cff7d524a20c)
- [面对晋升机会居然想后退？投资个人职业生涯的5种策略](https://36kr.com/p/5200031)，ObjectId(5c9791a22ef9cff7d524a21c)

#### 便捷出行

- [易到生死倒计时 | 小败局](https://36kr.com/p/5199488)，ObjectId(5c9791a22ef9cff7d524a22c)
- [无人驾驶汽车成Uber最大威胁，将冲击依赖乘客司机的商业模式](https://36kr.com/p/5199059)，ObjectId(5c9791a22ef9cff7d524a23c)

#### 创新创业

- [“干掉”冰箱](https://36kr.com/p/5199529)，ObjectId(5c9791a22ef9cff7d524a24c)
- [科技巨头转变业务模式，苹果和Facebook同时进入新时代](https://36kr.com/p/5199059)，ObjectId(5c9791a22ef9cff7d524a25c)

#### 房屋产业

- [北京万科宣布开启墅区3.0，做邻里友善社区](https://36kr.com/p/5200487)，ObjectId(5c9791a22ef9cff7d524a26c)
- [楼市迈过四月，信号已经很微妙了](https://36kr.com/p/5199090)，ObjectId(5c9791a22ef9cff7d524a27c)

## 其他

测试待完善，欢迎贡献👏。
