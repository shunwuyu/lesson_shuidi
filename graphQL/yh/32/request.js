const query = require('./server');

// query('{ hello }').then(res => { console.log(res)});
app.use(async ctx => {
  const res = await query('{ hello }')
  ctx.body = res;
});