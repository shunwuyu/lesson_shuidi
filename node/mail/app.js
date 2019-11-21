const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'qq', //腾讯
  port: 465,
  secureConnection: true,
  auth: {
    user: '754211506@qq.com',
    pass: 'eeppuwcstytrbfgj'
  }
})

let mailOptions = {
  from: "光棍节前的呐喊<754211506@qq.com>",
  to: "shunwu2001@163.com",
  subject: '双11买什么？',
  html: '<b>淘宝京东拼多多</b>'
}

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message send: %s', info.messageId);
})