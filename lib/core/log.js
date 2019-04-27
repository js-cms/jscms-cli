const chalk = require('chalk');

function repeatString(string, time) {
  return Array.from({length: time}).map(i => string).join("");
}

function log(type, content, indent = 2) {
  if (type === 'error') {
    console.log(`${chalk.red(`${repeatString(' ', indent)}[jscms-cli error]`)}  ${content}\n`);
    process.exit();
    return false;
  } else if (type === 'info') {
    console.log(`${chalk.blue(`${repeatString(' ', indent)}[jscms-cli info]`)}  ${content}`);
  } else if (type === 'processing') {
    console.log(`${chalk.green(`${repeatString(' ', indent)}[jscms-cli processing]`)}  ${content}`);
  }
}

module.exports = log;
