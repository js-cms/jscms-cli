const fs = require('fs-extra');
const path = require('path');

/**
 * @description 覆盖类
 */
class Cover {
  constructor(options = {
    projectFolderPath: '',
    config: {}
  }) {
    this.config = options.config;
    this.projectFolderPath = options.projectFolderPath;
    this.FILE_PACKAGE = path.join(options.projectFolderPath, '/package.json');
    this.FILE_CONFIG_DB = path.join(options.projectFolderPath, '/config/db.js');
    this.FILE_NGINX_CONFIG = path.join(options.projectFolderPath, `/jscms.conf`);

    this.owPackageJson();
    this.owDbJs();
    this.owNginxConfig();
  }

  /**
   * @description 重写nginx配置文件
   */
  owNginxConfig() {
    let nginxConf = fs.readFileSync(this.FILE_NGINX_CONFIG, 'utf-8');
    let appName = this.config.name;
    let domain = this.config.domain;
    let port = this.config.port;
    let appRoot = this.projectFolderPath;
    let newContent = eval('(`' + nginxConf + '`)');
    fs.writeFileSync(this.FILE_NGINX_CONFIG, newContent);
  }

  /**
   * @description 重写项目package.json
   */
  owPackageJson() {
    let packageJson = JSON.parse(fs.readFileSync(this.FILE_PACKAGE, 'utf-8')); 
    packageJson.name = this.config.name.toLowerCase();;
    packageJson.description = this.config.description;
    packageJson.scripts.start = packageJson.scripts.start.replace('--port=7011', `--port=${this.config.port}`);
    packageJson.scripts.stop = packageJson.scripts.stop.replace('--port=7011', `--port=${this.config.port}`);
    packageJson.scripts.backup = packageJson.scripts.backup;
    packageJson.scripts.restore = packageJson.scripts.restore;
    fs.writeFileSync(this.FILE_PACKAGE, JSON.stringify(packageJson, null, 2));
  }

  /**
   * @description 重写项目数据库配置文件。
   */
  owDbJs() {
    let dbJs = fs.readFileSync(this.FILE_CONFIG_DB, 'utf-8');
    dbJs = this._rwVar(dbJs, {
      'dbUser': '',
      'dbPass': '',
      'dbHost': '127.0.0.1',
      'dbPort': '27017',
      'dbName': 'jscms'
    });
    fs.writeFileSync(this.FILE_CONFIG_DB, dbJs); 
  }

  /**
   * @description 覆盖js变量
   * @param {String} string 
   * @param {Object} keysObject 
   */
  _rwVar(string, keysObject) {
    for (const key in keysObject) {
      if (keysObject.hasOwnProperty(key)) {
        const defalutValue = keysObject[key];
        string = string.replace(`const ${key} = '${defalutValue}';`, `const ${key} = '${this.config[key]}';`);
      }
    }
    return string;
  }
}

/**
 * @description 重写配置入口函数
 * @param {String} projectFolderPath 
 * @param {Object} _config 
 */
function mergeConfig(projectFolderPath, _config) {
  new Cover({
    projectFolderPath,
    config: _config
  });
}

module.exports = mergeConfig;
