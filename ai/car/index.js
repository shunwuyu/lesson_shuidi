// fileSystem 内置模块
const fs = require('fs');
const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;

// console.log('hello node');
const image = fs.readFileSync("car.jpg").toString("base64");
// console.log(image);
const client = new AipImageClassifyClient('17706972',
  'KsWm1Pq1DGOvvVqGXLAl7xwK', 'tbo4yOhBsFuuDCpD4GT9j7zyLo04OuTH');

client
  .carDetect(image)
  .then(function(result) {
    console.log(result)
  })

// AipImageClassifyClient
// 回调函数
// 文件在哪？磁盘里
// js 在哪里运行？ 内存 I/O操作
// fs.readFile('./texfdfft.txt', function(err, data) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log(data.toString());
// })