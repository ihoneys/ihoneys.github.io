/*
自定义Promise函数模块 (ES5模块语法) :立即执行函数/匿名函数自调用/自调用函数表达式/函数表达式自调用 / IIFE
*/
(function (window) {
    /* Promise 构造函数
       executor： 执行器函数
    */
    function Promise(executor) {


        this.status = 'pending' //给promise对象指定status，初始值为pending
        this.data = undefined //给promise对象指定一个用于存储结果数据的属性
        this.callbacks = [] //每个元素的结构{ onResolved() {},onRejected() {} }
        // 立即同步执行executor
        function resolve(value) {
            // 如果当前状态不是pending，直接结束
            if (this.status != pending) {
                return
            }
            // 将状态改为 resolved
            this.status = 'resolved'
            // 保存value数据
            this.data = value
            // 如果有待执行的callback函数，立即异步执行回调 onResolved
            if (this.callbacks.length > 0) {
                this.callbacks.forEach(callbacksObj => {
                    callbacksObj.onResolved(value)
                });
            }
        };
        function reject(reason) {
            // 如果当前状态不是pending，直接结束
            if (this.status != pending) {
                return
            }
            // 将状态改为rejected
            this.status = 'rejected'
            // 保存value数据
            this.data = reason
            // 如果有待执行的callback函数，立即异步执行回调 onRejected
            if (this.callbacks.length > 0) {
                this.callbacks.forEach(callbacksObj => {
                    callbacksObj.onRejected(reason)
                });
            }
        };
        try {
            executor(resolve, reject)
        } catch (error) { //如果执行器抛出异常，promise对象变为rejected状态
            reject(error)
        }
    }
    /* Promise 的then() 方法
    指定成功和失败的回调函数
    返回一个新的promise对象
    */
    Promise.prototype.then = function (onResolved, onRejected) {

    }

    /* Promise 的catch() 方法
    指定失败的回调函数
    返回一个新的promise对象
    */
    Promise.prototype.catch = function (onRejected) {

    }

    /* Promse 函数对象的resolve方法
    返回一个指定结果的成功的promise
    */
    Promise.resolve = function (value) {

    }

    /* Promse 函数对象的reject方法
    返回一个指定结果的失败的promise
    */
    Promise.reject = function (reason) {

    }

    /* Promse 函数对象的all方法
    返回一个promise，只有当所有promise都成功时才成功，否则只有一个失败，都失败
    */
    Promise.all = function (promise) {


    }

    /* Promse 函数对象的race方法
    返回一个promise，其结果有第一个完成的 promise 决定
    */
    Promise.race = function (promise) {

    }


    /* 向外暴露Promise */
    window.Promise = Promise;
})()