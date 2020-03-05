const dotenv = require('dotenv');
const {connect } = require('./app/database/init');
const mongoose = require('mongoose');

dotenv.config('./env');

(async() => {
  connect(); // init database
})();