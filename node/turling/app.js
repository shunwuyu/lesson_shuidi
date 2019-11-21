const TULING = require('tuling');

const aiTuling = new TULING({
  key: 'b912dec315b44dab8269afca48f80502'
});
// 立即即行函数
(async () => {
  // 机器人
  // console.log('arrow function')
  const result = await aiTuling.send({
    userid:1,
    info: '今天的天气',
    loc: '南昌市'
  });
  console.log(result);
})()
// console.log(func);
// func();