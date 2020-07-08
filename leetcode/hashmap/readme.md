1. 10万条 URL 访问日志(Log node) 1万个用户 应用场景
  如何生成备忘录？ 

  10万条URL  访问日志， 按访问次数给URL 排序 
  解决问题 
  输出URL 排序， 访问次数来排序
  /  3万条 
  /detail/1221212  5K 
  /detail/55555    5K
  /comments/12121  2.1K
  output ['/', '/detail/1221212', '/detail/55555', '/comments/12121']
  input 日志的数组['/','/','/detail/1221212','/detail/1221212'......]

  数据结构 来解决这个问题。 
    ?   前端  JSON Object { } -> 散列表(HashMap)  键值对 数据结构， 语言内置的 
  算法   ?
    接触过什么样的排序算法 
  
  1. for  遍历一次 10万条  url  key , value   第一次  1 否则就加1  Dic HashMap 
  {
     '/detail/1221212': 5000
    '/': 30000,
   
    ......
  } 
   
  散 .... ?   
  2. 排序   怎么排？  数值类型， 一定可以排序    
    ['/','/detail/1221212', ]
    

  Word 有项目功能， 单词纠错功能，  好神奇， 
  wold  标红， 输错了， word 
  hello   hallo   
  
  单词千千万 终是有数的。 
  常用的英文单词 20万个左右， 
  word 拼写， 纠错的功能， word 启动时， 在内存中 几百Mb 内存， 
  { }    20万个 Key:value   hello:hello    1字节， 2MB 内存 
  hallo  key  hello   restrant: restraunt
  dict hashMap  时间复杂度是 O(1)   
  遍历， 通过输入做为key  去2MB  hashMap 找一下， 就出来了。


  Hash Table 哈希表
  key: value  O(1) 时间复杂度 
  两数相加 O(n^2)
  O(n)  形成一个hash table  
  key:value 

  HashTable O(1) 访问， 哪种更简单的数据结构中， 用过？ 
  数组中用过？ 
  数组 O（1）访问  

  运动会   89 同学 100m 跑步，  贴一个参赛号码 
  0 ... 88   
  [13.11, 12.11, 11.56, .....]
  散开来了， 聚到一起 一团子， 快速的区分 某个人O(1)
  大家都散开来， 坑...  数组的下标 下标的去快速的找到 44 
  存在哪里？ O(1)
  O(n)  第1个位置 。。。。。n 个位置
  o(1)   start(0) + 40偏移量(2个字节)  物理执行的本质
  内存的地址计算 

  散列表的概念  散开来， 列做为下标 key,  hashTable 
  O(1) key  立即可以给你。 

  40  数组中 下标  数值型  O(1) 40号选手， 
  key   hashMap 中下标
  年级？班？几号选手  谁？ O（1） key 比数值下标更有意义
  030340   学号一样  表达出来更多的函义
  030340   O(1)?   hashMap 是如何实现O(1)
  hashMap 基于数组的  array  hashMap 分开理解的， 错

  运动会，  030340    40   运动会在各个跑道上散开的占跑
  道位的运动员来说  是不是是一概念？ 
  散?   列 -》  interger i 的散列函数 
  物理上  key  =>  计算出来一个物理位置O(1)  把值返回 

  030340  40 位置?   


















