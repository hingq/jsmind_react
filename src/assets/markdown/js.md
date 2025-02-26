

## 判断是否为数组

```js
     // 判断是否为数组
      
 Object.prototype.toString.call(rules)  		  [symbol.toStringTag]:'abe 可以指定toString的行为
Array.isArray(rules) 推荐
rules instanceof Array 原型链判断
             
```

## blur事件和click事件冲突解决方案

```js
使用mousedown事件
同时，e.preventDefault()
```

## js获取动态标签的方式

```javascript
//获取父元素 通过children属性拿到
示例：
        console.log(document.body.children[4].textContent);
```

## Blob()

```js
Blob 对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换成 ReadableStream 来用于数据操作。

const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});
```

## 数组

```
Array.prototype.forEach()
对调用数组中的每个元素调用给定的函数。

Array.prototype.filter()
返回一个新数组，其中包含调用所提供的筛选函数返回为 true 的所有数组元素。


Array.prototype.every()
如果调用数组中的每个元素都满足测试函数，则返回 true。

Array.prototype.entries()
返回一个新的数组迭代器对象，其中包含数组中每个索引的键/值对。

Array.prototype.indexOf()
返回在调用数组中可以找到给定元素的第一个（最小）索引。

Array.prototype.map()
返回一个新数组，其中包含对调用数组中的每个元素调用函数的结果。

Array.prototype.reduce()
对数组的每个元素（从左到右）执行用户提供的“reducer”回调函数，将其简化为单个值。

Array.prototype.some()
如果调用数组中至少有一个元素满足提供的测试函数，则返回 true。

Array.prototype.splice()
从数组中添加和/或删除元素。
```

## this

```
在箭头函数中，this 关键字绑定到定义该函数的词法上下文，而不是调用它的对象。因此，在箭头函数中使用 this 时，它将指向外部作用域的 this 值，而不是 util 对象本身。
```



## 通用函数的封装

```js
//通用函数的封装
function get(getfun) {
    const key = getfun(arr[i], i, arr);
    return key; // 返回 getfun 函数的调用结果
}

get((p) => `${p.sex}-${p.age}`);
```

## 隐式转换

- 当一侧为`String`类型，被识别为字符串拼接，并会优先将另一侧转换为字符串类型。
- 当一侧为`Number`类型，另一侧为原始类型，则将原始类型转换为`Number`类型。
- 当一侧为`Number`类型，另一侧为引用类型，将引用类型和`Number`类型转换成字符串后拼接。

只有 `null` `undefined` `''` `NaN` `0` `false` 这几个是 `false`，其他的情况都是 `true`，比如 `{}` , `[]`。

### 使用 == 比较中的5条规则

```js
NaN == NaN // false

```

### Boolean 和其他任何类型比较

```js
Boolean首先被转换为 Number 类型。

true == 1  // true 
true == '2'  // false, 先把 true 变成 1，而不是把 '2' 变成 true
true == ['1']  // true, 先把 true 变成 1， ['1']拆箱成 '1', 再参考规则3
true == ['2']  // false, 同上
undefined == false // false ，首先 false 变成 0，然后参考规则4
null == false // false，同上
```

### `String`和`Number`比较，

```js
先将`String`转换为`Number`类型。
123 == '123' // true, '123' 会先变成 123
'' == 0 // true, '' 会首先变成 0
```

### null == undefined`比较结果是`true

```js
除此之外，null、undefined和其他任何结果的比较值都为false。

null == undefined // true
null == '' // false
null == 0 // false
null == false // false
undefined == '' // false
undefined == 0 // false
undefined == false // false
```

## undefined 与 null 的区别

> null 表示`没有对象`，表示函数的参数不是对象
>
> 作为原型链的终点

> undefined表示`缺少值`，即应该有值，但还未定义

## 原始类型引用类型

```js
做比较时，引用类型会依照`ToPrimitive`规则转换为原始类型
// valueof 后 toString

```

## 取整

```js
Math.floor() 向下取整
Math.floor(3.141592654) // 3

Math.ceil() 向上取整
Math.ceil(3.141592654) // 4

Math.round() 四舍五入
Math.round(3.141592654) // 3

parseInt() 去掉小数点和小数点后的部分
parseInt(3.141592654) // 3
~~ 将数据转化为Number类型
```

## 使用已有的变量解构

```js
//解构语法出现在语句的开始位置，JavaScript 将其视为块级作用域，而不是对象的解构语法。所以为了避免 JavaScript 将其视为块级作用域，需要将其放在圆括号中。
({ data, yAxisLabel, xAxisLabel } = obj);
```

## 数组对象的深拷贝

```js
//使用递归的思路

function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}


```

## yield 

```js
// 生成器是一次性的
yield 关键字用于暂停和恢复生成器函数。

function* foo(index) {
  while (index < 2) {
    yield i x;
    index++;
  }
}

const iterator = foo(0);

console.log(iterator.next().value);
// Expected output: 0

console.log(iterator.next().value);
// Expected output: 1
```



## Number 与 parseInt

```js
//number构造器传入数字与字符混合，返回NAN
Number('123bo') //NAN
//paeseInt() 传入数字与字符混合，返回数字
parseInt('123bo') //123
```

## 循环体内的异步操作

> 在 JavaScript 中，循环体内的异步操作会在循环结束之前进行。这是因为异步操作（如 Promise）会被放入事件队列中，而不会阻塞主线程的执行。因此，当循环内的异步操作（如 Promise）被触发后，它们会被放入事件队列中，而循环会继续执行。这就导致了在循环结束之前，异步操作已经开始执行，导致赋值操作提前执行。

解决方案：async（asynchronous） await（）
