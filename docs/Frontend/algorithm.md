---
title: 算法
date: 2020-12-31
 
categories:
 - 前端基础
tags:
 - 算法
 - algorithm

---

## leetcode 练习

### 1. 移除元素

给你一个数组 `nums` 和一个值 `val`，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 `O(1)` 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

eg:

> 输入：nums = [0,1,2,2,3,0,4,2], val = 2
>
> 输出：5, nums = [0,1,4,0,3]
>
> 解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
>
>
> 输入：nums = [3,2,2,3], val = 3
>
> 输出：2, nums = [2,2]
>
> 解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
。

```js
var removeElement = function(nums, val) {
   for(let i=nums.length;i--;){
       if(nums[i]==val){
           nums.splice(i ,1)
       }
   }
   return nums.length
};
```

### 2. 两数之和

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

eg:

> 输入：nums = [2,7,11,15], target = 9
>
> 输出：[0,1]
>
> 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
>
> 输入：nums = [3,2,4], target = 6
>
> 输出：[1,2]
>
> 输入：nums = [3,3], target = 6
>
> 输出：[0,1]

```js
var twoSum = function(nums, target) {
for(let key in nums){
    for(let key2 in nums){
        if((nums[key] + nums[key2] == target)&&( key!=key2)){
            return [key,key2]
        }
    }
}

};
```

### 3. 重新排列数组

给你一个数组 nums ，数组中有 2n 个元素，按 [x1,x2,...,xn,y1,y2,...,yn] 的格式排列。

请你将数组按 [x1,y1,x2,y2,...,xn,yn] 格式重新排列，返回重排后的数组。

eg:

> 输入：nums = [2,5,1,3,4,7], n = 3
>
> 输出：[2,3,5,4,1,7]
>
> 解释：由于 x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 ，所以答案为 [2,3,5,4,1,7]
>
> 输入：nums = [1,2,3,4,4,3,2,1], n = 4
>
> 输出：[1,4,2,3,3,2,4,1]
>
> 输入：nums = [1,1,2,2], n = 2
>
> 输出：[1,2,1,2]

```js
var shuffle = function(nums, n) {
var inarr = []
 nums.splice(0 , n).map((item,index)=>{
     inarr.push(item)
     inarr.push(nums[index])
 })
 return inarr
};
```
