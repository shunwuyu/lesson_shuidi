const app = new (require('koa'));
// const mount = require('koa-mount');
const static = require('koa-static');
const graphqlHTTP = require('koa-graphql');

app.use(
  graphqlHTTP({
    schema: require('./schema')
  })
)
app.listen(3000);