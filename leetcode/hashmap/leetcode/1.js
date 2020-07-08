// // 一定刷过的
// // 两次之和 
// 形成散列表   
// [2, 7, 11, 15] 9

// [0, 1] 
// leetcode 思想前， 逻辑 两重循环， 暴力偿试， 
// for i  0 .. nums.length
//   for  j 1 .. nums.length
//     nums[i] + nums[j] == target
//     return [i,j] 
// O(n^2)
// O(n)  用了空间复杂度来换时间 

// for i 0 .. nums.length 
//   dic [i] = nums[i]; O(n)
  
//   target-nums[i] in dic 
//   [i, target-nums[i] ]

// 散？  

let arr = new Array(90); // 数组 O(1) 下标查找
// 散
arr[40] = "13.23";  //散开的坑位上 查找到物理地址
// start + 40  -> O（1） &address  
let studentObj = {};
studentObj['030340'] = "13.23";

