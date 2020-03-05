const Service = require('egg').Service;
const crypto = require('crypto');
class UserService extends Service {
  async register(user) {
    const { ctx } = this;
    console.log(user, 'service');
    // 密码绝对不成存明文 单向加密
    user.password = crypto.createHmac('sha256', 'cxk1728cn')
      .update(user.password)
      .digest('hex');
    
    

    ctx.body = {
      user,
      msg: '注册成功',
      user_id: 10001
    }
  }
}

module.exports = UserService