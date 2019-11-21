var AipImageClassifyClient = require('baidu-aip-sdk').imageClassify; //图片分类
var fs = require('fs'); //文件模块
var APP_ID = "17706972";
var API_KEY = "KsWm1Pq1DGOvvVqGXLAl7xwK";
var SECRET_KEY = "tbo4yOhBsFuuDCpD4GT9j7zyLo04OuTH";
// 内存  -> I/O
var image = fs.readFileSync('car.jpg').toString("base64"); //同步

var client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);

client.carDetect(image)
  .then(function(result) {
    console.log(result);
  })
  .catch(function(err) {
    console.log(err);
  })
// console.log(image);
