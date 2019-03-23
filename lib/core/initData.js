const path = require('path');
const fs = require('fs-extra');
const modelman = require('modelman');
const chalk = require('chalk');
const log = require('./log');
const bcrypt = require('bcryptjs');

const dataUser = fs.readJSONSync(__dirname + '/../data/user.json');

function requireModel(name, modelPath) {
  let model = new modelman.Model({
    name: name,
    displayName: name
  });
  model.assign(require(modelPath));
  let mongooseModel = model.to.mongoose();
  return mongooseModel;
}

async function initData(mongoose, projectFolderPath, config) {
  let modelUser = requireModel('user', projectFolderPath + '/app/modelman/user.js');
  let models = {
    User: {
      model: mongoose.model(dataUser.name, new mongoose.Schema(modelUser)),
      data: dataUser.data,
      handler: function(data) {
        data[0].email = config.superEmail;
        data[0].password = bcrypt.hashSync(config.superPassword, 10);
        return data;
      }
    }
  }
  for (const key in models) {
    if (models.hasOwnProperty(key)) {
      const item = models[key];
      data = item.handler(item.data);
      await item.model.insertMany(data);
      log('info', `The initialization data of '${chalk.blue(key)}' is inserted.`, 4);
    }
  }
}

module.exports = initData;
