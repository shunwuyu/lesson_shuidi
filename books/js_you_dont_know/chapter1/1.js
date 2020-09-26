知识点? 
编译 

AO { a: 1  } Active Object
JS 基于原型的面向对象 

变量查找？冒泡 


a.__proto__  =    b 
b.__proto__ = c   

var b = 3;

function func() {
  var a = 2;
  var a = 1;
  console.log(b);
}

func();