// nb email 正则表达式
//  754211506@qq.com
//  shunwu2001@163.com
// 一定要匹配到. +   (\.[0-9a-zA-Z_-]+)+
// shunwu2001@sina.com.cn
console.log(/^[\w-]+@[\w-]+(\.[0-9a-zA-Z_-]+)+$/.test("754211506@sina.com.cn"));