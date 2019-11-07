const fs = require('fs');
const image = fs.readFileSync('./cp.jpg').toString("base64");

const AipOcrClient = require('baidu-aip-sdk').ocr;

const client = new AipOcrClient('17707054', 'gl5HwHimkR1SgE5iaZCN4sql', 'j6Ij5blUCP7Zg8jMxDeUfk0eG88rW3qw');

const options = {};
options["multi_detect"] = "true";

client.licensePlate(image, options)
  .then(function(result) {
    console.log(result);
  })

