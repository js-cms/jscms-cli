const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const bcrypt = require('bcryptjs');
const marked = require('marked');
const is = require('ispro');
const _ = require('lodash');
const requireModel = require('../util/requireModel');
const log = require('./log');
const JSON_DIR = __dirname + '/../data/json';
const RESOURCE_DIR = __dirname + '/../data/extra/resource';
const ARTICLE_MD_DIR = __dirname + '/../data/extra/article';

let config = {};

function getHandler(modelName) {
  return {
    'User': function (data) {
      data[0].email = config.username;
      data[0].password = bcrypt.hashSync(config.password, 10);
      return data;
    },
    'Resource': function (data) {
      let filesArray = fs.readdirSync(RESOURCE_DIR);
      filesArray.forEach((fileName, index) => {
        let baseTime = 1546300800000;
        data.push({
          "type": 1,
          "store": 1,
          "filename": fileName,
          "remarks": "初始图片" + index,
          "createTime": baseTime + index,
          "updateTime": baseTime + index
        });
      });
      return data;
    },
    'Article': function (data) {
      data.forEach((item) => {
        item.mdContent = fs.readFileSync(`${ARTICLE_MD_DIR}/${item._id}.md`, 'utf-8');
        item.content = marked(item.mdContent);
      });
      return data;
    },
    'Config': function (data) {
      let article = require(path.join(JSON_DIR, 'article.json'));
      let pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
      let tags = [];
      article.data.forEach(item => {
        item.keywords.forEach(key => {
          let _key = _.trim(key);
          if (is.valid(_key) && !pattern.test(_key) ){
            tags.push(_key);
          }
        });
      });
      if ( data[0].alias === 'tags' ) {
        data[0].info = _.uniq(tags);
      }
      return data;
    }
  }[modelName];
}

function readData(mongoose, projectFolderPath) {
  let jsonsArray = fs.readdirSync(JSON_DIR);
  let store = [];
  //基础json插入
  jsonsArray.forEach((fileName) => {
    let _path = path.join(JSON_DIR, fileName);
    let data = require(_path);
    let mongooseSchema = requireModel(projectFolderPath + '/app/model/proto/' + data.name.toLowerCase() + '.js', data.name.toLowerCase());
    let mongooseModel = mongoose.model(data.name, new mongoose.Schema(mongooseSchema));
    let handler = getHandler(data.name);
    store.push({
      name: data.name,
      data: handler ? handler(data.data, jsonsArray) : data.data,
      model: mongooseModel
    });
  });
  return store;
}

async function initData(mongoose, projectFolderPath, _config) {
  config = _config;
  let store = readData(mongoose, projectFolderPath);
  for (let index = 0; index < store.length; index++) {
    const item = store[index];
    const name = item.name;
    const data = item.data;
    await item.model.insertMany(data);
    log('info', `The initialization data of '${chalk.blue(name)}' is inserted.`, 4);
  }
}

module.exports = initData;
