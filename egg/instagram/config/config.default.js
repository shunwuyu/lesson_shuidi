/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575010093497_9290';

  // add your middleware config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    password: '1234567890',
    database: 'instagram'
  }
  
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  
  config.password_secret = 'ps1234secr'
  return {
    ...config,
    ...userConfig,
  };
};
