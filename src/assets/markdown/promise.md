# promise

#### promise是js中进行异步编程的新方案（旧方案为回调函数）

## 为什么使用promise?

1. 指定回调函数的方式更灵活

2. 支持链式调用，解决回调地狱问题（不便于阅读，异常处理）

   回调函数的嵌套使用，外部回调函数异步执行结果是嵌套的回调执行条件

## promise状态改变

1.pending(未定义时)变为resovled

2.pending变为rejected

说明：只有这2种，且promise对象只能改变一次， 无论成功或者失败，都会有一个数据结果，成功的数据一般称为value，失败的结果一般称为reason。

```javascript
实列对象的属性，PromissState
实例对象的值：PromiseResult
			保存【成功或者失败】的值。
            通过resovled或rejected可以修改。
```

------



### Promise.protype.then方法：(onResolved,onRejected=>{})

###### onResolved:成功的的会回调函数（value）=>{}

###### onRejectes:失败的回调函数（reason）=>{}

------

### Promise.protype.catch(onRejected)=>{}

###### onRejected:失败的回调函数

------

### Promise.resolve方法：（value）=>{}

value:成功的数据或Promise对象

说明：返回一个成功或者失败的Promise对象

​			传入的参数为 非Promise对象，则返回对象为成功的Promise对象

​			反之，参数的结果决定resolve的结果。

------

### Promise.reject：（reason）=>{}

reason:失败的原因

说明：返回一个失败的Promise对象

------

### Promise.all:(Promises)=>{}

promises:包含n个Promise的数组

说明：返回一个新的的Promise对象，只有所有的Promise都成功才成功。一个失败，直接失败。

------

### Promise.race:（Promises）=>{}

Promises:包含n个Promise的数组

说明：返回一个心得Promise，第一个完成的结果状态就是最终的结果状态。

------

### 如何改变Promise对象的状态

1.resovle()函数

```javascript
resovle('ok')  	panding=>fulfilled(resovle)
```

2.rejected()

```
reject('error') panding=>rejected
```

3.抛出错误

```javascript
throw('error') pending=>rejected
```

------

### Promise指定多个成功/失败回调函数

当状态改变后，都会调用对应的回调函数

```javascript
p.then(value=>{console.log(value)})
p.then(value=>{alert(value)})
//两个回调都会执行
```

------

### 改变状态与指定回调函数的先后问题

1.两者都有可能，正常情况先指定回调，在改变状态，但也可以先改变状态在指定回调。

2.如何先改变状态在指定回调

​	执行器中直接调用resolve(),reject().d

​	使用定时器延长事件调用then()

3.什么时候可以得到数据

​	如果先指定回调，当状态发生改变时，回调函数就会调用，得到数据

​	如果先改变状态，那么指定回调时，回调函数就会调用，得到数据。

------

### then方法

返回结果：一个Promise对象，由指定的回调函数的执行结果决定。

1.抛出错误，新的promise为rejected，reason为抛出异常

2.返回非Promise对象，新的Promise变为resolved，value为返回值

3.如果返回的是另一个新的Promise，此promise的结果就会成为新promise的结果。

------

### 串联多个操作任务，异常穿透

1.通过then的链式调用

```
p.then().then()
```

使用Promise的then链式调用时，可以最后指定失败的回调，前面出现任何异常，都会传到最后失败的回调中处理。

```javascript
p.then(value=>{}).then(value=>{}).catch(reason=>{console.log(value)})
```



------

### 中断promise链

在回调函数中返回一个pendding状态的promise对象

```javascript
p.then(value=>{return new Promise(()=>{})})
```

### async函数 ，await

返回值是Promise对象，与then()方法规则一致

await函数 需要放在async中

await会返回右侧的值，如果为Promise对象，

如果是失败的Promise对象，用try catch接受。
