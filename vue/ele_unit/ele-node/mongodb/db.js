// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const config = require('config-lite')(__dirname);
const chalk = require('chalk');
// import config from 'config-lite';
// import chalk from 'chalk';
console.log(config.url);
mongoose.connect(config.url);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once('open' ,() => {
	console.log(
    chalk.green('连接数据库成功')
  );
})


db.on('error', function(error) {
  console.error(
    chalk.red('Error in MongoDb connection: ' + error)
  );
  mongoose.disconnect();
});

db.on('close', function() {
  console.log(
    chalk.red('数据库断开，重新连接数据库')
  );
  mongoose.connect(config.url, {server:{auto_reconnect:true}});
});

module.exports = db;