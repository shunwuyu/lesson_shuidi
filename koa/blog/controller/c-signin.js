// module.exports = 
exports.getSignin = async (ctx) => {
  await ctx.render('signin', {
    
  })
} 

exports.postSignin = async (ctx) => {
  ctx.body = {
    mes: '登录成功'
  }
}