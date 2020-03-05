# 大厂大型（核心）项目， 如何用面向对象规则来设计
- uuid npm  v1 方法 代表用户的唯一串码，字符串
  钱包  订单 商品id,  unique id 的地方都可以用它
  
  区块链， 钱在区块链就是一个不会被窜改的串 
  去中心化 uuid  对应 
- 私有属性不可改
  private 
  js  _id
  私有的属性  对它提交一个get方法
- 设计一下 balance 的修改？ 
  进钱， 出钱
  balance 钱， 改的？ 私有属性， 变化一下，  找个女朋友
  直接修改balance ? 
  js 使用_attribute 这种做法是一种约定 private
  一般情况下， 这么写就可以了。  getID
  increateBalance() 内部改这些属性 private 
  真正的私有， 到底怎么做？  闭包创建私有类， 红宝书里的内容
k x8efrtgbv  

