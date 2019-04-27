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