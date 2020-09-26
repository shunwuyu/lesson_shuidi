// LHS RHS 变量查找， 就在那一行相关
function foo(a) {
  var b = a;
  return a + b;
} 

// Left Hand Search
var c = foo(2);
LHS 行号 3处 c=... a=2 b = 
RHS 行号 return a + b; 
return a + b; a   b.
3  var b = a  a  
foo   4次RHS 
