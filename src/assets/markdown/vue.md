## vue3在原型挂载方法

```javascript
app.config.globalPrperties.$test=test
app.use(store).use(router).mount('#app')


import {getCurrentInstance} from 'vue'
const {proxy} = getCurrentInstance() //开发环境及生产环境皆可
const {ctx} = getCurrentInstance() //只能在开发环境使用
proxy.$test()
```

## 邮箱校验

```js
// 非下划线的单词字符 + 2个以上单词字符 + @ + 2位以上单词字符域名 + .2位以上小写字母做域名后缀 + (.2位以上二重域名后缀)?
  // var reg = /^(用户名)@(组织名)\.(一级域名后缀)(二级域名后缀)?$/
  var reg = /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/

```

## insertBefore

```
insertBefore() 方法可在已有的子节点前插入一个新的子节点。
document.getElementById("myList").insertBefore(newItem,existingItem);
```

## nextTick

```
Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。

简单来说，Vue 在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。

同步里执行的方法，每个方法里做的事情组成一个事件循环；接下来再次调用的是另一个事件循环。

nextTick：在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，会获取更新后的 DOM。

proxy.$nextTick(function(){
    console.log() //可以到'changed'
})

```

## vue自定义指令

```js
app,directive('directiveName',myDirective)
const myDirective = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode, prevVnode) {
    // 下面会介绍各个参数的细节
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) {}
}

指令的钩子会传递以下几种参数：

el：指令绑定到的元素。这可以用于直接操作 DOM。

binding：一个对象，包含以下属性。

value：传递给指令的值。例如在 v-my-directive="1 + 1" 中，值是 2。
oldValue：之前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否更改，它都可用。
arg：传递给指令的参数 (如果有的话)。例如在 v-my-directive:foo 中，参数是 "foo"。
modifiers：一个包含修饰符的对象 (如果有的话)。例如在 v-my-directive.foo.bar 中，修饰符对象是 { foo: true, bar: true }。
instance：使用该指令的组件实例。
dir：指令的定义对象。
vnode：代表绑定元素的底层 VNode。

prevNode：代表之前的渲染中指令所绑定元素的 VNode。仅在 beforeUpdate 和 updated 钩子中可用。

除了 el 外，其他参数都是只读的
```



## vite中import使用

```js
    
	Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块：
const modules = import.meta.glob('./dir/*.js')

和 glob 导入 类似，Vite 也支持带变量的动态导入。
// 只能以。/ 或。。/ 开头
const module = await import(`./dir/${file}.js`)

link:
	https://cn.vitejs.dev/guide/features#glob-import
```

## scoped()

```js
//scoped 会使得样式只作用于当前组件，需要使用：deep（）进行穿透·

//作为子组件时，可以取消，
```

## 事件总线

> 可以实现不同组件之间的通信

```js
/
export default class EventBus{
    constructor(){
        this.events = {};
    }
    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(function(fn) {
                fn(data);
            });
        }
    }
    on(eventName, fn) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    }

    off(eventName, fn) {
        if (this.events[eventName]) {
            for (var i = 0; i < this.events[eventName].length; i++) {
                if (this.events[eventName][i] === fn) {
                    this.events[eventName].splice(i, 1);
                    break;
                }
            }
        }
    }
}
```

## 父组件获取子组件元素

> 使用ref,绑定在子组件，获取实例
>
> 能访问到子组件实例的公开方法和属性。私有方法和属性是无法通过 `ref` 直接访问的。

```js
	console.log(algor.value.$options);
	//已解析的用于实例化当前组件的组件选项。
    console.log(algor.value.$parent);
    //当前组件可能存在的父组件实例，
    console.log(algor.value.$slots);
   // 一个表示父组件所传入插槽的对象。
    console.log(algor.value.$refs);
    //一个包含 DOM 元素和组件实例的对象
    console.log(algor.value.$el);//dom
	console.log(algor.value.$props);
	//表示组件当前已解析的 props 对象。
```

watch 与watchEffect

> watch 可以进行更精细的配置，如deep,需要指定监听的对象，
>
> watchEffect会立即监听一次，相当于立即执行一次回调，等同于默认开启immediate，同时watchEffect不用指定监听的属性，会自动进行
>
> 
