const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');

const parseConfig = require('./core/parseConfig');
const mergeConfig = require('./core/mergeConfig');
const initData = require('./core/initData');
const dbConnect = require('./core/dbConnect');
const log = require('./core/log');

let mongoose = {};

module.exports = async function create(folderName, options) {
  let projectFolderPath = path.resolve(folderName);
  console.log('\n');
  if (fs.existsSync(projectFolderPath)) {
    log('error', `This directory '${projectFolderPath}' already exists.`);
  }
  let config = parseConfig(options.config);
  try {
    mongoose = await dbConnect(config);
    log('info', `The database connection is successful.`);
  } catch (e) {
    log('error', `The mongodb database connection failed.`);
  }
  log('info', `The current path to the console tool is '${__dirname}'`);
  fs.copySync(__dirname + '/latest', projectFolderPath);
  log('processing', `Directory '${folderName}' was created successfully.`);
  log('processing', `The source code of the application has been deployed.`);
  mergeConfig(projectFolderPath, config);
  log('processing', `The configuration file has been rewritten.`);
  let domain = config.domain;
  fs.writeFileSync(path.join(projectFolderPath, `ssl/1_www.${domain}_bundle.crt`), '');
  fs.writeFileSync(path.join(projectFolderPath, `ssl/2_www.${domain}.key`), '');
  log('processing', `An empty ssl certificate file was created.`);
  await initData(mongoose, projectFolderPath, config);
  log('processing', `The initialization data has been created.`);
  console.log(`\n${chalk.bgGreen(chalk.black((' DONE ')))} ${chalk.green(`Jscms was installed successfully to ${projectFolderPath}`)}\n`);
  process.exit();
}
