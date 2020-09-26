# 作用域是什么 

https://resources.jointjs.com/demos/javascript-ast 

- react mvvm setState state 状态机制 
  变量  程序的状态 声名空间（闭包， 作用域， 变量查找， 变量提升， ） 存储值
  值修改  
- 赋值过程 
  var a = 2; 它是怎么运行的？
  var 关键字 a  identifier 标识符  = 运算符  2 value literal
  ; 
  1. 高级语言
    无法理解，及无法执行 
  2.  

## 编译原理 
  语言执行的底层 
  操作系统-> 编译原理 
  引擎 V8 编译器， 解译器 
  1. 分词/词法分析阶段
  [var, a , = , 2];
  token 语法错误  
  最后成为二进制文件
  2. 语法分析阶段 
  语法树 
  数据结构+算法
  编译器也是一段代码 运行 
  HTML <div></div> DOM树
  AST Abstract Syntax Tree 
  3. 代码生成 
  JS 运行时编译 
  JAVA C++ 预编译
  编译器 (Compiler)
  解释器 (Interpreter)
  
  JIT 即时编译器

何为作用域 链？

执行 上下文
函数是一等对象
每一个函数执行时， 会先在自己
创建的AO对象上找对应属性值。
AO 函数的管理理
若找不到则往父函数AO上找， 
再找不到， 再上一层的AO，
直到大boss window(全局
作用域) 
AO链 就是Javascript中的作
用域链

AO上如果有与函数同名的属性， 则会被此函数覆盖 

编译阶段  AO生成 
比喻于propotype 原型链，

LHS和RHS 都是出现在引擎对变量进行查询的时候 
左查询， 右查询发生了多少次？

= 

LHS： 变量赋值或写入内存，
想象为将文本文件保存到硬盘中。
RHS 变量查找或从内容中读取 想像为从硬盘打开文本文件。




LHS RHS 特性
都会在所有作用域中查询
严格模式下, 找不到所需的变量， 引擎会ReferenceError异常
非严格模式下， LHS会自动创建一个全局变量
查询成功后， 如果对变量的wghgfj行不合理的操作， TypeError

