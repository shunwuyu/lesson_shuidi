// 单点入口
const Koa = require('koa');
const config = require('./config/default.js');
const app = new Koa();
app.listen(config.port);
// ? use 应答模式 矿泉水 中间件是处理应用请求的核心
//启用路由中间件 
app.use(require('./routers/posts.js').routes());
console.log(`listening on port ${config.port}`);
