# 循环效率
1. for1: 3.517ms  `for (let i = 0; i < arr.length; i++)`
1. for2: 3.140ms  `for (let i = 0, len = arr.length; i < len; i++)`
1. for3: 0.007ms  `for (let i = 0; arr[i] !== undefined; i++)`
1. forEach: 0.341ms
1. for of: 3.893ms
1. for in: 1.828ms
1. map: 2.672ms

# 数组赋值
1. Arr.lenght: 14.599ms  `arr.length = i;`
1. Arr.push: 3.288ms   `arr.push(i);`