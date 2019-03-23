const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');

const parseConfig = require('./core/parseConfig');
const overwrittenConfig = require('./core/overwrittenConfig');
const initData = require('./core/initData');
const dbConnect = require('./core/dbConnect');
const log = require('./core/log');

let mongoose = {};

module.exports = async function create(folderName, options) {
  let projectFolderPath = path.resolve(folderName);
  console.log('\n');
  if ( fs.existsSync(projectFolderPath) ) {
    log('error',`This directory '${projectFolderPath}' already exists.`);
  } else {
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
    overwrittenConfig(projectFolderPath, config);
    log('processing', `The configuration item has been overwritten.`);
    log('processing', `Prepare to write initial data to the database.`);
    await initData(mongoose, projectFolderPath, config);
    console.log(`\n${chalk.bgGreen(chalk.black((' DONE ')))} ${chalk.green(`Jscms was installed successfully to ${projectFolderPath}`)}\n`);
    process.exit(1);
  }
}
