const env = process.env;
const mongoose = require('mongoose');

exports.connect = () => {
  const connectConfig = `mongodb://${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`;
  mongoose.connect(connectConfig,
    {
        useNewUrlParser: true
    }
  );
  let maxConnectTimes = 0;
  return new Promise((resolve, reject) => {
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection create error:'));
    db.once('open', () => {
        console.log('db connect success');
        resolve();
    });
  })
}