## text-inent

```css
/*设置区块元素中文本行前面空格（缩进）的长度。*/
/* <length> 值 */
text-indent: 3mm;
text-indent: 40px;

/* <percentage> 值，相对于包含区块的宽度 */
text-indent: 15%;

/* 关键字值 */
text-indent: 5em each-line;
text-indent: 5em hanging;
text-indent: 5em hanging each-line;

/* 全局值 */
text-indent: inherit;
text-indent: initial;/*原始值*/
text-indent: revert;/* 还原成浏览器内置的样式*/
text-indent: revert-layer;
text-indent: unset;
/* 如果该属性是默认继承属性，该值等同于 inherit
如果该属性是非继承属性，该值等同于 initial*/
each-line
缩进会影响区块容器的第一行以及强制换行后的每一行，但不影响软换行后的行。

hanging
反转缩进行。除第一行外，所有行都将缩进
```

## mix-blend-mode

> 描述了元素的内容应该与元素的直系父元素的内容和元素的背景如何混合。

```js

normal：正常
multiply：正片叠底
screen：滤色
overlay：叠加
darken：变暗
lighten：变亮
color-dodge：颜色减淡
color-burn：颜色加深
hard-light：强光
soft-light：柔光
difference：差值
exclusion：排除
hue：色相
saturation：饱和度
color：颜色
luminosity：亮度
initial：初始
inherit：继承
unset：复原


```

## position：stickly

## box-decoration-break

> 处理行盒样式的截断问题

```css
box-decoration-break:clone ；/*与首尾样式保持一致*/
-webikt-box-decoration-break:clone;
```

## 隐藏滚动条

```

::-webkit-scrollbar {
  display: none;
}
```

## 元素隐藏

| 属性       | 提示                                                         |
| ---------- | ------------------------------------------------------------ |
| opacity    | 透明度，占据文档位置并不是真的隐藏，设置为0时是可以触发事件的 |
| visibility | visibility 属性规定元素是否可见，即使不可见的元素也会占据页面上的空间,不会触发事件 |

display：none不触发过渡的原因是产生了回流，相当于重新绘制页面

## 遮罩层

```css
.mask {
    top: 0;
    left: 0;
    position: fixed;
    display: none;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.1);
    /* 半透明白色背景 */
    pointer-events: none;
    /* 确保不阻止鼠标事件 */
    z-index: 7;
    /* 确保遮罩层在最前面 */
        backdrop-filter: blur(0.3px);

}
```

