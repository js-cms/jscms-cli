const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');
const log = require('./core/log');

module.exports = async function config(folderName, options) {
  let targetConfigPath = path.resolve(folderName) + '/jscms.config.js';
  console.log('\n');
  if ( fs.existsSync(targetConfigPath) ) {
    log('error',`This config file '${projectFolderPath}' already exists.`);
  } else {
    let configContent = fs.readFileSync(__dirname + '/core/defaultConfig.js', 'utf-8');
    fs.writeFileSync(targetConfigPath, configContent);
    console.log(`\n${chalk.bgGreen(chalk.black((' DONE ')))} ${chalk.green(`The configuration file ${targetConfigPath} has been created.`)}\n`);
    process.exit();
  }
}
