---
title: 算法
date: 2020-09-20
 
categories:
 - 小知识
tags:
 - 面试题

---

- 二分查找

```js
  let arr = [1, 5, 6, 8, 22, 44, 1, 0, 65, 45, 88, 7, 6, 4]
        function quieck(arr) {
            if (arr.length <= 1) {
                return arr
            }
            let left = []
            let right = []
            let indexs = parseInt(arr.length / 2)
            let contentVal = arr[indexs]
            for (let i = 0; i < arr.length; i++) {
                if (i === indexs) continue
                if (arr[i] < contentVal) {
                    left.push(arr[i])
                } else {
                    right.push(arr[i])
                }
            }
            return quieck(left).concat(contentVal, quieck(right))
        }
        console.log(quieck(arr))
```
