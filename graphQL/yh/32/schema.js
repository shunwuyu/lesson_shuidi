const { buildSchema } = require('graphql');
const schema = buildSchema(`
  type Comment {
    id: Int
    avatar: String
    name: String
    isTop: Boolean
    content: String
    publishDate: String
    commentNum: Int
    praiseNum: Int
  }
  type Query {
    comment: [Comment]
  }
`);

schema.getQueryType().getFields().comment.resolve = () => {
  return [{
    id: 1,
    avatar: 'http://statics.itc.cn/sports/basketball/NBA/teamicon/9.png',
    name: '僵尸浩',
    isTop: true,
    content: '哈哈哈哈',
    publishDate: '今天',
    commentNum: 10,
    praiseNum: 5
  }]
}

module.exports = schema;