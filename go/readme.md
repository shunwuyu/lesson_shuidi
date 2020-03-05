Golang  云开发时代的c语言 

node  -> go 
koa -> gin web 框架

# go初体验
1. 每个文件都是一个独立的模块
  package main  func main(){  程序开始了}
2. go 内置模块 
  import (
    "fmt"
    "net/http"
  )
3. if  不要括号 
4. 变量直接写  := 定义和赋值
5. resp, err := http.Get("http://baidu.com")
  <!-- 同步 没看到回调函数 性能？  GO 开生多核 -->
   <!-- resp, err   node 语法？es6 -->解构

Go  koa 一样来写全栈
koa + vue /react   平常
Go/Java spring boot  + vue/react 现在需要的