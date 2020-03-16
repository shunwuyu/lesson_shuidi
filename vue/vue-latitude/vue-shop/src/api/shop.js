const axios = require('axios')
module.exports = {
  getShops(cb) {
    axios.get('/api/shops', {       // 还可以直接把参数拼接在url后
    })
    .then(res => {
      cb(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }
}