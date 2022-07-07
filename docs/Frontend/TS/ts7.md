---
title: TypeScript any 和 unknown 的区别
date: 2021-02-08
 
categories:
 - 前端基础
tags:
 - TypeScript
---

## 相同点：
any 和 unknown 都可以作为所有类型的父类

## 不同点：

- any 在对象上注释类型可以拿属性名，unknown 类型不能拿到对象属性。
- any 可以做所有类型的子类，而 unknown 不行

```typescript
let vAny: any = 10; // We can assign anything to any
let vUnknown: unknown = 10; // We can assign anything to unknown just like any

let s1: string = vAny; // Any is assignable to anything
let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)

vAny.method();     // Ok; anything goes with any
vUnknown.method(); // Not ok; we don't know anything about this variable
```