# vue

- 字符串考题
  正则 核心能力
  正则  /-\w/g   replace function 
  x.slice(1).toUpperCase();

- vue 语法  
  - v-model  表单就用上它。 
  设计数据项    books:[]  book:{} 一个表单， 维护一个对象
  - methods: {} addBook
  - 数据驱动， {{单向}} v-model 
    数据 -> compile template -> html + methods + css -> html/css/js 
    需要花时间的 要时间， 
    v-cloak 没有准备好之前， 它会在，
    设置一个loading 正在准备中....
    