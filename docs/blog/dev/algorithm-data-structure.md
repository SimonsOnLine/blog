时间复杂度
O(1) 常数复杂度
   ```js
   let n = 1000
   console.log(n)
   ```
O(n) 线性时间复杂度
```js
for(let i = 0; i < n; i++) {
    console.log(i)
}
```

O(log n) 对数复杂度
```js
for(let i = 0; i < n; i = i * 2) {
    console.log(i)
}
```
O(n^2) 平方
```js
for(let i = 0; i < n; i++) {
    for(let j = 1; j < n j++) {
        console.log(j)
    }
}
```
O(n^3) 立方
O(2^n) 指数
```js
function Index() {
    if(n < 2) return n
    return Index(n - 1) + Index(n - 2)
}
```
O(n!) 阶乘

如何分析一个程序的时间复杂度

![](/Users/liujiantao/Dev/Project/my-blog/docs/img/lion.webp)