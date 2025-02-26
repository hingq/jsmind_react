# react

## 列表渲染

> 使用Array.map()

```react
const musicList = [
    {name: '我是如此的相信' ,id: 1},
    {name: '烟灰易冷' ,id: 2},
    {name: '你算什么男人' ,id: 3},
    {name: '本草纲目' ,id: 4}
]
const playMusic = (
    // 这里的 Key 值也是必须要写的 有 id 可以用 id 没有的话可以用 index 下标
    // Key 在 HTML 结构中是看不到的，是 React 内部用来进行性能优化时使用
    <ul>
        { musicList.map(item => 
                        <li key={item.id} >{ item.name }</li>) }
    </ul>
)
```

## 组件的返回

>  标签和 `return` 关键字不在同一行，则必须把它包裹在一对括号中，如下所示：

```react
return (
  <div>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
);
```

任何在 `return` 下一行的代码都将被忽略

### 顶层定义每个组件：

```
export default function Gallery() {

  // ...

}



// ✅ 在顶层声明组件

function Profile() {

  // ...

}
```

当子组件需要使用父组件的数据时，你需要 [通过 props 的形式进行传递](https://zh-hans.react.dev/learn/passing-props-to-a-component)，而不是嵌套定义。

## JSX 规则 

### 1. 只能返回一个根元素 

如果想要在一个组件中包含多个元素，**需要用一个父标签把它们包裹起来**。

不想在标签中增加一个额外的 `<div>`，可以用 `<>` 和 `</>` 元素来代替：

空标签被称作 *[Fragment](https://zh-hans.react.dev/reference/react/Fragment)*。React Fragment 允许你将子元素分组，而不会在 HTML 结构中添加额外节点。

> JSX 虽然看起来很像 HTML，但在底层其实被**转化为了 JavaScript 对象**，你**不能在一个函数中返回多个对象**，除非用一个数组把他们包装起来。这就是为什么多个 JSX 标签必须要用一个父元素或者 Fragment 来包裹。

### 2. 标签必须闭合 

JSX 要求标签必须正确闭合。像 `<img>` 这样的自闭合标签必须书写成 `<img />`，而像 `<li>oranges` 这样只有开始标签的元素必须带有闭合标签，需要改为 `<li>oranges</li>`。

### 3. 使用驼峰式命名法给 大部分属性命名！ 

> 例如，需要用 `strokeWidth` 代替 `stroke-width`。由于 `class` 是一个保留字，所以在 React 中需要用 `className` 来代替。

## 在 JSX 中通过大括号使用 JavaScript

想要在标签中添加一些 JavaScript 逻辑或者引用动态的属性。这种情况下，你可以在 JSX 的大括号内来编写 JavaScript。

> 注意 `className="avatar"` 和 `src={avatar}` 之间的区别，`className="avatar"` 指定了一个就叫 `"avatar"` 的使图片在样式上变圆的 CSS 类名，而 `src={avatar}` 这种写法会去读取 JavaScript 中 `avatar` 这个变量的值。这是因为大括号可以使你直接在标签中使用 JavaScript！

## 使用 “双大括号”：JSX 中的 CSS 和 对象 

> 为了能在 JSX 中传递，你必须用另一对额外的大括号包裹对象：
>
> `person={{ name: "Hedy Lamarr", inventions: 5 }}`。

内联 `style` 属性 使用驼峰命名法编写。

## 将 Props 传递给组件

> 组件使用 *props* 来互相通信。每个父组件都可以提供 props 给它的子组件，从而将一些信息传递给它。通过它们传递任何 JavaScript 值，包括对象、数组和函数。

 React 组件函数接受一个参数，一个 `props` 对象：

```react
function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}
```

### 给 prop 指定一个默认值

想在没有指定值的情况下给 prop 一个默认值，你可以通过在参数后面写 `=` 和默认值来进行解构：

```react
function Avatar({ person, size = 100 }) {

  // ...

}
```

props 是 不可变的

>  渲染过程中发生了 mutation — 严格模式调用两次组件，

## state

> 在 React 中，这种特定于组件的记忆被称为状态。

> 可以用 [`useState`](https://zh-hans.react.dev/reference/react/useState) Hook 为组件添加状态。*Hook* 是能让你的组件使用 React 功能的特殊函数（状态是这些功能之一）。`useState` Hook 让你声明一个状态变量。它接收初始状态并返回一对值：当前状态，以及一个让你更新状态的设置函数。

```react
const [showMore, setShowMore] = useState(false);
```

---



> 在 React 中，`useState` 以及任何其他以“`use`”开头的函数都被称为 **Hook**。
>
> Hook 是特殊的函数，只在 React [渲染](https://zh-hans.react.dev/learn/render-and-commit#step-1-trigger-a-render)时有效

## state 如同一张快照 

与普通 JavaScript 变量不同，React 状态的行为更像一个快照。设置它并不改变你已有的状态变量，而是触发一次重新渲染。这在一开始可能会让人感到惊讶！

```react
console.log(count);  // 0

setCount(count + 1); // 请求用 1 重新渲染

console.log(count);  // 仍然是 0！
```

## State 是隔离且私有的 

>  State 是屏幕上组件实例内部的状态。换句话说，**如果你渲染同一个组件两次，每个副本都会有完全隔离的 state**！改变其中一个不会影响另一个。

**State 变量仅用于在组件重渲染时保存信息。在单个事件处理函数中，普通变量就足够了。当普通变量运行良好时，不要引入 state 变量。**

## 事件传播

在 React 中所有事件都会传播，除了 `onScroll`，它仅适用于你附加到的 JSX 标签。

> - [`e.stopPropagation()`](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation) 阻止触发绑定在外层标签上的事件处理函数。
> - [`e.preventDefault()`](https://developer.mozilla.org/docs/Web/API/Event/preventDefault) 阻止少数事件的默认浏览器行为。

### **必须在条件语句外并且始终以相同的顺序调用 Hook！**

>  **React 会等到事件处理函数中的** 所有 **代码都运行完毕再处理你的 state 更新。** 这就是为什么重新渲染只会发生在所有这些 `setNumber()` 调用 **之后** 的原因。

---

如果你想在下次渲染之前多次更新同一个 state，你可以像 `setNumber(n => n + 1)` 这样传入一个根据队列中的前一个 state 计算下一个 state 的 **函数**，而不是像 `setNumber(number + 1)` 这样传入 **下一个 state 值**。这是一种告诉 React “用 state 值做某事”而不是仅仅替换它的方法。

## 将state是为可读

> 在严格模式下，React 会执行每个更新函数两次（但是丢弃第二个结果）以便帮助你发现错误。

修改一个你刚刚创建的对象就不会出现任何问题，因为 **还没有其他的代码引用它**。改变它并不会意外地影响到依赖它的东西。这叫做“局部 mutation”。你甚至可以 [在渲染的过程中](https://zh-hans.react.dev/learn/keeping-components-pure#local-mutation-your-components-little-secret) 进行“局部 mutation”的操作。这种操作既便捷又没有任何问题！

```
 `...` 展开语法本质是是“浅拷贝”——它只会复制一层。这使得它的执行速度很快，但是也意味着当你想要更新一个嵌套属性时，你必须得多次使用展开语法。
```

## useRef

> 使用useRef获取真实dom或组件实例的方法

```react
    function App() {  
        const h1Ref = useRef(null)  
        useEffect(() => {    
            console.log(h1Ref)  
        },[])  
        return (    
            <div>      
                <h1 ref={ h1Ref }>this is h1</h1>    
            </div>  
        )
    }
```

>  这里需要注意: 我们日常中需要通过`Ref`获取组件的实例，但是只可以去获取类组件的实例，因为函数组件没有实例，不能使用`Ref`获取。类组件的写法，真的很头疼。这个时候官方为我们提供了 `forwardRef` `useImperativeHandle` 解决了`useRef`获取函数组件的问题。

## forwardRef

用于暴露子组件给父组件

```react
import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      <input {...otherProps} ref={ref} />
    </label>
  );
});
```

## useImperativeHandle

**子组件利用`useImperativeHandle`可以让父组件输出任意数据**。

```react
// FancyInput组件作为子组件
const FancyInput = React.forwardRef(function FancyInput(props, ref) {
  const inputRef = useRef();

  // 命令式的给`ref.current`赋值个对象
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    }
  }));
  
  return <input ref={inputRef} ... />
})

// Example组件作为父组件
function Example() {
  const fancyInputRef = useRef()

  const focus = () => {
    fancyInputRef.current.focus()
  }

  return (
    <>
      <FancyInput ref={fancyInputRef} />
    </>
  )
}
```

