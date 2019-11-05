let obj = {
  name: '林家豪',
  leetcode: 90
}

const changeLeetcode = (o) => {
  o.leetcode = 100;
}
changeLeetcode(obj); //引用式赋值 o obj内存空间一致
console.log(obj);