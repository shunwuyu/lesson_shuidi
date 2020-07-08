// hash  map
function hash(key) {
  let length = key.length; 
  return key.substr(length-2, length);
}

// 基于table 的散列 key:value

console.log(hash('030340')) // md5 