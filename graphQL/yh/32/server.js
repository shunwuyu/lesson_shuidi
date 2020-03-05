var { graphql, buildSchema } = require('graphql');
// 协议
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
  hello: () => {
    return 'hello world!';
  }
}

// 请求参数


module.exports = function(query) {
  return graphql(schema, query, root).then((response) => {
    return response
  })
}

