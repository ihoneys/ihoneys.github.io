---
title: 设计模式之-策略模式
date: 2020-09-23
categories:
  - 前端基础
tags:
  - 设计模式
---

### 策略模式

> 根据不同的参数命中不同的策略。

先来做一个题目，很简单，根据不同的评级（S、A、B、C）对应不同的绩效

相信大家都写过，那不简单直接`if-else` 梭哈，改改单单~，有了下面的代码

```javascript
function calculateBonus(level, salary) {
  if (level === "S") {
    return salary * 2;
  }
  if (level === "A") {
    return salary * 1.2;
  }
  if (level === "B") {
    return salary * 1;
  }
  if (level === "C") {
    return salary * 0;
  }
}
```

有的朋友就说了，这不是挺好的吗？简单明了，又不是不能用。哈哈哈

但是这样写会有什么问题？

- calculateBonus 函数会塞得满满的
- 策略项无法复用
- 大量的 if 语句
- 违反开闭原则

下面就到了用到的策略模式来改造一下上面这段逻辑：

```javascript
const stratgy = {
  S: function (salary) {
    return salary * 2;
  },
  A: function (salary) {
    return salary * 1.2;
  },
  B: function (salary) {
    return salary * 1;
  },
  C: function (salary) {
    return salary * 0;
  },
};

const calculateBonus = function (level, salary) {
  return stratgy[level](salary);
};

calculateBonus("C", 3000);
```

相对于疯狂的写 `if-else` 不是好太多？还有些什么例子可以使用呢？表单验证，根据不同下拉框对应选择不同的内容，等等等都可以使用策略模式去设计优化它。

下面有一个两个对象合并，相当于`axios` 接收的对象参数相互互补，有的则覆盖，没有的取有的，下面看看代码，如何使用策略模式进行合并：

```javascript
const config1 = {
  url: "11",
  data: {
    id: 123,
  },
  params: {
    name: "config1",
  },
};

const config2 = {
  url: "11",
  headers: "xxx",
  data: {
    id: 123444,
  },
  params: {
    name: "config1",
  },
};

const strats = Object.create(null);

function defaultStrat(val1: any, val2: any): any {
  // config2中有的就直接取config2的属性，否则取config1的属性
  return typeof val2 !== "undefined" ? val2 : val1;
}

function formVal2Strat(val1: any, val2: any): any {
  // 优先取val2
  if (typeof val2 !== "undefined") {
    return val2;
  }
}

const stratKeysFormVal2 = ["url", "params", "data"];

stratKeysFormVal2.forEach((key) => {
  strats[key] = formVal2Strat;
});

function mergeConfig(config1?: any, config2?: any): any {
  const config = Object.create(null);

  for (const key in config2) {
    // 循环config2 如果config2有优先取2
    mergeFiled(key);
  }

  for (const key in config1) {
    // 循环config1 如果config2没拿到就去config1
    if (!config2[key]) {
      mergeFiled(key);
    }
  }

  function mergeFiled(key: string): void {
    const strat = strats[key] || defaultStrat;
    config[key] = strat(config1[key], config2[key]);
  }
  return config;
}

console.log(mergeConfig(config1, config2), "合并策略模式");
```

#### 什么时候用的策略模式呢？

- 各判断条件下的策略相互独立且可服用
- 内部逻辑相对复杂
- 策略需要灵活组合

策略模式在的日常工作中还是用得挺多的，赶快思考下自己的项目，那些可以使用，用起来吧!~
