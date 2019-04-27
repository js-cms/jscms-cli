const path = require('path');
const defaultConfig = require('./defaultConfig');

function mergeConfig(config) {
  for (const key in defaultConfig) {
    if (defaultConfig.hasOwnProperty(key)) {
      let newValue = config[key];
      if (newValue) {
        defaultConfig[key] = newValue;
      }
    }
  }
  return defaultConfig;
}

function getConfig(configPath) {
  let config = require(path.resolve(configPath));
  return mergeConfig(config);
}

function parseConfig(configPath) {
  const _configPath = configPath || './jscms.config.js';
  const config = getConfig(_configPath);
  return config;
}

module.exports = parseConfig;
