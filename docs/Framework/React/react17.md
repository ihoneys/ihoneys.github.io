---
title: React 创建流程
date: 2022-10-14
tags:
  - react
---

createRootImpl 创建 fiberRoot 根节点

应用首次渲染的，希望用户尽早渲染页面呈现是调用 unbatchedUpdates ，如果调用批量更新 batchedUpdates 异步执行，页面不会马上层面出来。

**render 阶段：**

scheduleUpdateOnFiber 调度任务优先级高的任务。

performUnitOfWork 创建或者更新 fiber 节点。深度优先遍历 fiber 树，调用 beginWork 向下 和 completeWork 向上。

beginWork 函数中会调用一个 reconcileChildren 方法这个方法用来创建和对比 fiber 节点。

completeWork 函数中会调用一个 createInstance 创建真实的元素，再调用 setInitialProperties 方法为相应的元素赋值属性。

render 阶段的结尾还会创建一个的副作用链表 effectList 。

然后会将这个副作用链 表交给 commit 阶段处理。 把相应的副作用应用到相应的节点上。

** commit 阶段：**

首先会调用 commitRoot，
然后会调用一个叫 unstable_runWithPriority

会细分为有三个阶段：

- 执行 commitBeforeMutationEffects 方法 也就发生在 before mutation 阶段中。

还未操作正式节点还会获取快照，类组件中会调用 getSnapshotUpdate 生命周期。 还会调度 useEffect。

- 执行 commitMutationEffects 方法，也就是发生在 mutation 阶段中。

这个方法会操作正式节点。

- 执行 commitLayoutEffects 方法，也就是方法再 Layout 阶段中。

这个阶段会调用类组件生命周期 compontentDidUpdate ，useLayoutEffect。

React 分为三大模块

### 调度

### 协调

### 渲染

rootFiber

current

更新是否有变化 ，新旧 props 是否变化，tag 是否有变化，

bailout

beiginwork 判断是否存在 update

有 props 改变的情况下，会放到 updateQueue 数组中

updateQueue 存在的情况下，会进入 markUpdate

effectTag 标记为 Update

commit 阶段判断 effectTag 说明就知道是更新阶段了。

链表操作 fiber

...后续完善
