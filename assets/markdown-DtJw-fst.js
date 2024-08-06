const u=`# html\r
\r
[html](https://developer.mozilla.org/en-US/)\r
`,i=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),F=`# promise\r
\r
#### promise是js中进行异步编程的新方案（旧方案为回调函数）\r
\r
## 为什么使用promise?\r
\r
1. 指定回调函数的方式更灵活\r
\r
2. 支持链式调用，解决回调地狱问题（不便于阅读，异常处理）\r
\r
   回调函数的嵌套使用，外部回调函数异步执行结果是嵌套的回调执行条件\r
\r
## promise状态改变\r
\r
1.pending(未定义时)变为resovled\r
\r
2.pending变为rejected\r
\r
说明：只有这2种，且promise对象只能改变一次， 无论成功或者失败，都会有一个数据结果，成功的数据一般称为value，失败的结果一般称为reason。\r
\r
\`\`\`javascript\r
实列对象的属性，PromissState\r
实例对象的值：PromiseResult\r
			保存【成功或者失败】的值。\r
            通过resovled或rejected可以修改。\r
\`\`\`\r
\r
------\r
\r
\r
\r
### Promise.protype.then方法：(onResolved,onRejected=>{})\r
\r
###### onResolved:成功的的会回调函数（value）=>{}\r
\r
###### onRejectes:失败的回调函数（reason）=>{}\r
\r
------\r
\r
### Promise.protype.catch(onRejected)=>{}\r
\r
###### onRejected:失败的回调函数\r
\r
------\r
\r
### Promise.resolve方法：（value）=>{}\r
\r
value:成功的数据或Promise对象\r
\r
说明：返回一个成功或者失败的Promise对象\r
\r
​			传入的参数为 非Promise对象，则返回对象为成功的Promise对象\r
\r
​			反之，参数的结果决定resolve的结果。\r
\r
------\r
\r
### Promise.reject：（reason）=>{}\r
\r
reason:失败的原因\r
\r
说明：返回一个失败的Promise对象\r
\r
------\r
\r
### Promise.all:(Promises)=>{}\r
\r
promises:包含n个Promise的数组\r
\r
说明：返回一个新的的Promise对象，只有所有的Promise都成功才成功。一个失败，直接失败。\r
\r
------\r
\r
### Promise.race:（Promises）=>{}\r
\r
Promises:包含n个Promise的数组\r
\r
说明：返回一个心得Promise，第一个完成的结果状态就是最终的结果状态。\r
\r
------\r
\r
### 如何改变Promise对象的状态\r
\r
1.resovle()函数\r
\r
\`\`\`javascript\r
resovle('ok')  	panding=>fulfilled(resovle)\r
\`\`\`\r
\r
2.rejected()\r
\r
\`\`\`\r
reject('error') panding=>rejected\r
\`\`\`\r
\r
3.抛出错误\r
\r
\`\`\`javascript\r
throw('error') pending=>rejected\r
\`\`\`\r
\r
------\r
\r
### Promise指定多个成功/失败回调函数\r
\r
当状态改变后，都会调用对应的回调函数\r
\r
\`\`\`javascript\r
p.then(value=>{console.log(value)})\r
p.then(value=>{alert(value)})\r
//两个回调都会执行\r
\`\`\`\r
\r
------\r
\r
### 改变状态与指定回调函数的先后问题\r
\r
1.两者都有可能，正常情况先指定回调，在改变状态，但也可以先改变状态在指定回调。\r
\r
2.如何先改变状态在指定回调\r
\r
​	执行器中直接调用resolve(),reject().d\r
\r
​	使用定时器延长事件调用then()\r
\r
3.什么时候可以得到数据\r
\r
​	如果先指定回调，当状态发生改变时，回调函数就会调用，得到数据\r
\r
​	如果先改变状态，那么指定回调时，回调函数就会调用，得到数据。\r
\r
------\r
\r
### then方法\r
\r
返回结果：一个Promise对象，由指定的回调函数的执行结果决定。\r
\r
1.抛出错误，新的promise为rejected，reason为抛出异常\r
\r
2.返回非Promise对象，新的Promise变为resolved，value为返回值\r
\r
3.如果返回的是另一个新的Promise，此promise的结果就会成为新promise的结果。\r
\r
------\r
\r
### 串联多个操作任务，异常穿透\r
\r
1.通过then的链式调用\r
\r
\`\`\`\r
p.then().then()\r
\`\`\`\r
\r
使用Promise的then链式调用时，可以最后指定失败的回调，前面出现任何异常，都会传到最后失败的回调中处理。\r
\r
\`\`\`javascript\r
p.then(value=>{}).then(value=>{}).catch(reason=>{console.log(value)})\r
\`\`\`\r
\r
\r
\r
------\r
\r
### 中断promise链\r
\r
在回调函数中返回一个pendding状态的promise对象\r
\r
\`\`\`javascript\r
p.then(value=>{return new Promise(()=>{})})\r
\`\`\`\r
\r
### async函数 ，await\r
\r
返回值是Promise对象，与then()方法规则一致\r
\r
await函数 需要放在async中\r
\r
await会返回右侧的值，如果为Promise对象，\r
\r
如果是失败的Promise对象，用try catch接受。\r
`,l=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),n=`## canvas标签\r
\r
\`\`\`javascript\r
width ,height 属性是可选的,当没有设置宽度和高度的时候，canvas会初始化\r
width：300px  height：150px\r
\r
\`\`\`\r
\r
canvas可以创造一个固定大小的画布，它公开了一个或多个渲染上下文。可以用来绘制和处理要展示的内容。\r
\r
\`\`\`javascript\r
var canvas = document.getElementById('tutorial');\r
var ctx = canvas.getContext('2d');\r
\r
//检查支持格式\r
if (canvas.getContext){\r
  var ctx = canvas.getContext('2d');\r
  // drawing code here\r
        // ctx.fillStyle='color'  //填充颜色\r
        // ctx.strokeStyle='color' //边框颜色\r
        // ctx.linewidth=50 //边宽\r
          // ctx.linejoin='' //线的连接方式\r
\r
} else {\r
  // canvas-unsupported code here\r
}\r
getContext()方法接受一个参数，即上下文的类型。对于2d图像而言，可以使用CanvasRenderingContext2D\r
\r
\`\`\`\r
\r
## 绘制矩形\r
\r
\`\`\`javascript\r
fillRect(x,y,width,height) \r
绘制一个填充的矩形\r
\r
strokeRect(x, y, width, height)\r
绘制一个矩形边框\r
\r
clearRect(x, y, width, height)\r
清除指定矩形区域\r
\`\`\`\r
\r
上述的方法中每个都包含相同的参数，x,y指定在canvas画布上所绘制的矩形的左上角的坐标，width，height设置矩形的尺寸。\r
\r
## 绘制路径\r
\r
1. 创建路径起始点\r
2. 使用命令画出路径\r
3. 把路径封闭\r
4. 可以通过描边或者填充路径来渲染图形\r
\r
\`\`\`\r
beginPath()\r
新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。\r
\r
moveTo(x,y)\r
将笔移动到指定位置,会将画笔抬起\r
\r
lineTo(x,y)\r
绘制一条从当前位置到x,y的点\r
\r
stroke();\r
绘制线条\r
\r
closePath();\r
闭合路径之后图形绘制命令又指向上下文。\r
会自动合并路径\r
\r
stroke();\r
通过线条来绘制图形轮廓。 不会自动调用closepath()\r
\r
fill();\r
填充路径的内容生成实心图形。\r
自动合并路径\r
\r
lineCap() ,设置首末两端的线帽的样式\r
\r
save(),restore()\r
save()和restore()是用来保存和恢复canvas状态的，都没有参数。 Canvas的状态就是当前画面应用的所有样式和变形的一个快照。\r
使用栈的方式储存。\r
\r
\`\`\`\r
\r
## 曲线绘制\r
\r
\`\`\`javascript\r
角度与弧度：radius=(Math.PI/180)*degrees\r
\r
arc(x,y,radius,startAngle,endAngle,anticlockwise)\r
radius:半径\r
画一个x,y为圆心的圆弧，从start到end，按照anticlkwise的方向来生成\r
true：逆时针\r
false:顺时针\r
\r
arcTo(x1,y1,x2,y2,50)\r
arcTo() 方法在画布上创建介于两个切线之间的弧/曲线\r
此圆弧与当前点到第一个点（x1,y1）的连线相切，而且第一个点到第二点（x2,y2）的连线也相切。\r
\r
ctx.strokeStyle = \r
\`rgba(\${81 + 171 * Math.abs(1 - progress * 2)}, \${160 - 160 * Math.abs(1 - progress * 2)}, \${255},1)\`\r
\r
\r
## canvas变换\r
\r
translate(x,y)移动\r
\r
\r
\r
rotate(angle) 旋转\r
\r
\r
\r
scale(x,y)缩放\r
\r
drawImage(image,x,y,width,height) //绘制图片，必需先等图片加载完成\r
image，表示canvas对象或image，x,y表示起始坐标\r
\r
createPattern(image,repeation) //图片，平铺方式\r
//ctx.createPattern(img,"no-repeat")\r
\r
geadlient=new createLineGradient(x1,y1,x2,y2)\r
//渐变\r
gradlient.addColorStop(position,color) //添加渐变色\r
position，相对位置，0~1之间\r
color：颜色\r
\r
filltext(''，x,y) //填充文本\r
\r
stroke('',x,y) //描绘文字\r
\r
ctx.font='40px sans-self '\r
\r
ctx.textBaseline='top/middle/bottom' , //基线\r
    \r
ctx.meaureText();//返回一个对象，包含文本信息\r
    \r
ctx.getImageData(x,y,width,height) //获取像素点，返回对象,date数组存储每个像素点的rgba() ,此处透明度0~255\r
\r
ctx.putImageData(imageData，x,y) //设置像素点\r
\r
ctx.createImageData(width,height) //创建一个像素对象\r
\r
ctx.globalAlpha=1 //透明度，0~1\r
\r
ctx.gobalCompositeOperation=""\r
    source-over:源在上面\r
	source-in：只留下源与目标重叠部分\r
    source-out：只留下源超过目标的部分\r
	source-atop：砍掉溢出的部分\r
\r
 	destination-over:源在上面\r
	destination-in：只留下源与目标重叠部分\r
    destination-out：只留下源超过目标的部分\r
	destination-atop：砍掉溢出的部分\r
\`\`\`\r
\r
## measureText()\r
\r
\`\`\`\r
返回一个关于被测量文本TextMetrics 对象包含的信息（例如它的宽度）。\r
\r
\`\`\`\r
\r
[TextMetrics](https://developer.mozilla.org/zh-CN/docs/Web/API/TextMetrics)\r
\r
## 解决图像不清晰\r
\r
\`\`\`js\r
const canvas_ = document.querySelector('canvas')\r
    let radio = util.creatHiDPI()\r
    const ctx = canvas_.getContext('2d')\r
    console.log(radio);\r
    canvas_.width=500*radio\r
    canvas_.height=500*radio\r
    canvas_.style.width = 500 + "px";\r
    canvas_.style.height = 500 + "px";\r
    ctx.scale(2,2)\r
https://www.cnblogs.com/nzbin/p/9447882.html\r
\`\`\`\r
\r
`,c=Object.freeze(Object.defineProperty({__proto__:null,default:n},Symbol.toStringTag,{value:"Module"})),r=`## text-inent\r
\r
\`\`\`css\r
/*设置区块元素中文本行前面空格（缩进）的长度。*/\r
/* <length> 值 */\r
text-indent: 3mm;\r
text-indent: 40px;\r
\r
/* <percentage> 值，相对于包含区块的宽度 */\r
text-indent: 15%;\r
\r
/* 关键字值 */\r
text-indent: 5em each-line;\r
text-indent: 5em hanging;\r
text-indent: 5em hanging each-line;\r
\r
/* 全局值 */\r
text-indent: inherit;\r
text-indent: initial;/*原始值*/\r
text-indent: revert;/* 还原成浏览器内置的样式*/\r
text-indent: revert-layer;\r
text-indent: unset;\r
/* 如果该属性是默认继承属性，该值等同于 inherit\r
如果该属性是非继承属性，该值等同于 initial*/\r
each-line\r
缩进会影响区块容器的第一行以及强制换行后的每一行，但不影响软换行后的行。\r
\r
hanging\r
反转缩进行。除第一行外，所有行都将缩进\r
\`\`\`\r
\r
## mix-blend-mode\r
\r
> 描述了元素的内容应该与元素的直系父元素的内容和元素的背景如何混合。\r
\r
\`\`\`js\r
\r
normal：正常\r
multiply：正片叠底\r
screen：滤色\r
overlay：叠加\r
darken：变暗\r
lighten：变亮\r
color-dodge：颜色减淡\r
color-burn：颜色加深\r
hard-light：强光\r
soft-light：柔光\r
difference：差值\r
exclusion：排除\r
hue：色相\r
saturation：饱和度\r
color：颜色\r
luminosity：亮度\r
initial：初始\r
inherit：继承\r
unset：复原\r
\r
\r
\`\`\`\r
\r
## position：stickly\r
\r
## box-decoration-break\r
\r
> 处理行盒样式的截断问题\r
\r
\`\`\`css\r
box-decoration-break:clone ；/*与首尾样式保持一致*/\r
-webikt-box-decoration-break:clone;\r
\`\`\`\r
\r
## 隐藏滚动条\r
\r
\`\`\`\r
\r
::-webkit-scrollbar {\r
  display: none;\r
}\r
\`\`\`\r
\r
## 元素隐藏\r
\r
| 属性       | 提示                                                         |\r
| ---------- | ------------------------------------------------------------ |\r
| opacity    | 透明度，占据文档位置并不是真的隐藏，设置为0时是可以触发事件的 |\r
| visibility | visibility 属性规定元素是否可见，即使不可见的元素也会占据页面上的空间,不会触发事件 |\r
\r
display：none不触发过渡的原因是产生了回流，相当于重新绘制页面\r
\r
## 遮罩层\r
\r
\`\`\`css\r
.mask {\r
    top: 0;\r
    left: 0;\r
    position: fixed;\r
    display: none;\r
    width: 100vw;\r
    height: 100vh;\r
    background-color: rgba(255, 255, 255, 0.1);\r
    /* 半透明白色背景 */\r
    pointer-events: none;\r
    /* 确保不阻止鼠标事件 */\r
    z-index: 7;\r
    /* 确保遮罩层在最前面 */\r
        backdrop-filter: blur(0.3px);\r
\r
}\r
\`\`\`\r
\r
`,p=Object.freeze(Object.defineProperty({__proto__:null,default:r},Symbol.toStringTag,{value:"Module"})),E=`\r
\r
## 判断是否为数组\r
\r
\`\`\`js\r
     // 判断是否为数组\r
      \r
 Object.prototype.toString.call(rules)  		  [symbol.toStringTag]:'abe 可以指定toString的行为\r
Array.isArray(rules) 推荐\r
rules instanceof Array 原型链判断\r
             \r
\`\`\`\r
\r
## blur事件和click事件冲突解决方案\r
\r
\`\`\`js\r
使用mousedown事件\r
同时，e.preventDefault()\r
\`\`\`\r
\r
## js获取动态标签的方式\r
\r
\`\`\`javascript\r
//获取父元素 通过children属性拿到\r
示例：\r
        console.log(document.body.children[4].textContent);\r
\`\`\`\r
\r
## Blob()\r
\r
\`\`\`js\r
Blob 对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换成 ReadableStream 来用于数据操作。\r
\r
const obj = { hello: "world" };\r
const blob = new Blob([JSON.stringify(obj, null, 2)], {\r
  type: "application/json",\r
});\r
\`\`\`\r
\r
## 数组\r
\r
\`\`\`\r
Array.prototype.forEach()\r
对调用数组中的每个元素调用给定的函数。\r
\r
Array.prototype.filter()\r
返回一个新数组，其中包含调用所提供的筛选函数返回为 true 的所有数组元素。\r
\r
\r
Array.prototype.every()\r
如果调用数组中的每个元素都满足测试函数，则返回 true。\r
\r
Array.prototype.entries()\r
返回一个新的数组迭代器对象，其中包含数组中每个索引的键/值对。\r
\r
Array.prototype.indexOf()\r
返回在调用数组中可以找到给定元素的第一个（最小）索引。\r
\r
Array.prototype.map()\r
返回一个新数组，其中包含对调用数组中的每个元素调用函数的结果。\r
\r
Array.prototype.reduce()\r
对数组的每个元素（从左到右）执行用户提供的“reducer”回调函数，将其简化为单个值。\r
\r
Array.prototype.some()\r
如果调用数组中至少有一个元素满足提供的测试函数，则返回 true。\r
\r
Array.prototype.splice()\r
从数组中添加和/或删除元素。\r
\`\`\`\r
\r
## this\r
\r
\`\`\`\r
在箭头函数中，this 关键字绑定到定义该函数的词法上下文，而不是调用它的对象。因此，在箭头函数中使用 this 时，它将指向外部作用域的 this 值，而不是 util 对象本身。\r
\`\`\`\r
\r
\r
\r
## 通用函数的封装\r
\r
\`\`\`js\r
//通用函数的封装\r
function get(getfun) {\r
    const key = getfun(arr[i], i, arr);\r
    return key; // 返回 getfun 函数的调用结果\r
}\r
\r
get((p) => \`\${p.sex}-\${p.age}\`);\r
\`\`\`\r
\r
## 隐式转换\r
\r
- 当一侧为\`String\`类型，被识别为字符串拼接，并会优先将另一侧转换为字符串类型。\r
- 当一侧为\`Number\`类型，另一侧为原始类型，则将原始类型转换为\`Number\`类型。\r
- 当一侧为\`Number\`类型，另一侧为引用类型，将引用类型和\`Number\`类型转换成字符串后拼接。\r
\r
只有 \`null\` \`undefined\` \`''\` \`NaN\` \`0\` \`false\` 这几个是 \`false\`，其他的情况都是 \`true\`，比如 \`{}\` , \`[]\`。\r
\r
### 使用 == 比较中的5条规则\r
\r
\`\`\`js\r
NaN == NaN // false\r
\r
\`\`\`\r
\r
### Boolean 和其他任何类型比较\r
\r
\`\`\`js\r
Boolean首先被转换为 Number 类型。\r
\r
true == 1  // true \r
true == '2'  // false, 先把 true 变成 1，而不是把 '2' 变成 true\r
true == ['1']  // true, 先把 true 变成 1， ['1']拆箱成 '1', 再参考规则3\r
true == ['2']  // false, 同上\r
undefined == false // false ，首先 false 变成 0，然后参考规则4\r
null == false // false，同上\r
\`\`\`\r
\r
### \`String\`和\`Number\`比较，\r
\r
\`\`\`js\r
先将\`String\`转换为\`Number\`类型。\r
123 == '123' // true, '123' 会先变成 123\r
'' == 0 // true, '' 会首先变成 0\r
\`\`\`\r
\r
### null == undefined\`比较结果是\`true\r
\r
\`\`\`js\r
除此之外，null、undefined和其他任何结果的比较值都为false。\r
\r
null == undefined // true\r
null == '' // false\r
null == 0 // false\r
null == false // false\r
undefined == '' // false\r
undefined == 0 // false\r
undefined == false // false\r
\`\`\`\r
\r
## undefined 与 null 的区别\r
\r
> null 表示\`没有对象\`，表示函数的参数不是对象\r
>\r
> 作为原型链的终点\r
\r
> undefined表示\`缺少值\`，即应该有值，但还未定义\r
\r
## 原始类型引用类型\r
\r
\`\`\`js\r
做比较时，引用类型会依照\`ToPrimitive\`规则转换为原始类型\r
// valueof 后 toString\r
\r
\`\`\`\r
\r
## 取整\r
\r
\`\`\`js\r
Math.floor() 向下取整\r
Math.floor(3.141592654) // 3\r
\r
Math.ceil() 向上取整\r
Math.ceil(3.141592654) // 4\r
\r
Math.round() 四舍五入\r
Math.round(3.141592654) // 3\r
\r
parseInt() 去掉小数点和小数点后的部分\r
parseInt(3.141592654) // 3\r
~~ 将数据转化为Number类型\r
\`\`\`\r
\r
## 使用已有的变量解构\r
\r
\`\`\`js\r
//解构语法出现在语句的开始位置，JavaScript 将其视为块级作用域，而不是对象的解构语法。所以为了避免 JavaScript 将其视为块级作用域，需要将其放在圆括号中。\r
({ data, yAxisLabel, xAxisLabel } = obj);\r
\`\`\`\r
\r
## 数组对象的深拷贝\r
\r
\`\`\`js\r
//使用递归的思路\r
\r
function deepCopy(obj) {\r
    if (obj === null || typeof obj !== 'object') {\r
        return obj;\r
    }\r
\r
    let copy = Array.isArray(obj) ? [] : {};\r
    for (let key in obj) {\r
        if (obj.hasOwnProperty(key)) {\r
            copy[key] = deepCopy(obj[key]);\r
        }\r
    }\r
    return copy;\r
}\r
\r
\r
\`\`\`\r
\r
## yield \r
\r
\`\`\`js\r
// 生成器是一次性的\r
yield 关键字用于暂停和恢复生成器函数。\r
\r
function* foo(index) {\r
  while (index < 2) {\r
    yield i x;\r
    index++;\r
  }\r
}\r
\r
const iterator = foo(0);\r
\r
console.log(iterator.next().value);\r
// Expected output: 0\r
\r
console.log(iterator.next().value);\r
// Expected output: 1\r
\`\`\`\r
\r
\r
\r
## Number 与 parseInt\r
\r
\`\`\`js\r
//number构造器传入数字与字符混合，返回NAN\r
Number('123bo') //NAN\r
//paeseInt() 传入数字与字符混合，返回数字\r
parseInt('123bo') //123\r
\`\`\`\r
\r
## 循环体内的异步操作\r
\r
> 在 JavaScript 中，循环体内的异步操作会在循环结束之前进行。这是因为异步操作（如 Promise）会被放入事件队列中，而不会阻塞主线程的执行。因此，当循环内的异步操作（如 Promise）被触发后，它们会被放入事件队列中，而循环会继续执行。这就导致了在循环结束之前，异步操作已经开始执行，导致赋值操作提前执行。\r
\r
解决方案：async（asynchronous） await（）\r
`,d=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),e=`## interface \r
\r
interface 是对象的模板，可以看作是一种类型约定\r
\r
\`\`\`ts\r
interface Person {\r
  firstName: string;\r
  lastName: string;\r
  age: number;\r
}\r
\`\`\`\r
\r
### 对象的方法共有三种写法\r
\r
\`\`\`ts\r
// 写法一\r
interface A {\r
  f(x: boolean): string;\r
}\r
\r
// 写法二\r
interface B {\r
  f: (x: boolean) => string;\r
}\r
\r
// 写法三\r
interface C {\r
  f: { (x: boolean): string };\r
}\r
\`\`\`\r
\r
\r
\r
## nterface 与 type 的区别有下面几点。\r
\r
（1）\`type\`能够表示非对象类型，而\`interface\`只能表示对象类型（包括数组、函数等）。\r
\r
（2）\`interface\`可以继承其他类型，\`type\`不支持继承。\r
\r
继承的主要作用是添加属性，\`type\`定义的对象类型如果想要添加属性，只能使用\`&\`运算符，重新定义一个类型。`,m=Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"})),C=`## nginx安装\r
\r
创建nginx目录\`mkdir nginx && cd nginx\`\r
\r
### 安装nginx依赖：pcre\r
\r
\r
\r
- 下载pcre\r
\r
\`\`\`bash\r
wget http://downloads.sourceforge.net/project/pcre/pcre/8.37/pcre-8.37.tar.gz\r
\`\`\`\r
\r
- 解压pcre\r
\r
\`\`\`bash\r
tar -xzpvf pcre-8.37.tar.gz\r
\`\`\`\r
\r
- 进入 pcre-8.37 执行命令\r
\r
\`\`\`bash\r
./configure\r
\`\`\`\r
\r
- 执行命令\r
\r
\`\`\`bash\r
make && make install\r
\`\`\`\r
\r
- 验证pcre是否成功\r
\r
\`\`\`bash\r
pcre-config --version\r
# 出现版本号就是安装成功了\r
\`\`\`\r
\r
\r
\r
### 安装 openssl 、zlib 、 gcc 依赖\r
\r
\r
\r
运行命令\r
\r
\`\`\`bash\r
安装gcc\r
\r
apt-get install gcc\r
#查看gcc的版本\r
gcc -v\r
\r
第三步：安装zlib\r
apt-get install zlib1g-dev\r
\r
第四步：安装openssl\r
apt-get install openssl libssl-dev\r
\r
#查看openssl的版本\r
\r
openssl version\r
\r
\`\`\`\r
\r
### 安装nginx\r
\r
\r
\r
- 进入之前创建的nginx目录：下载nginx\r
\r
\`\`\`bash\r
[root@bogon src]# cd /usr/local/src/\r
[root@bogon src]# wget http://nginx.org/download/nginx-1.20.1.tar.gz\r
//或\r
sudo apt-get install nginx\r
\r
\`\`\`\r
\r
- 解压nginx\r
\r
\`\`\`bash\r
tar -zxvf nginx-1.20.1.tar.gz\r
\`\`\`\r
\r
- 进入nginx-1.20.1目录，执行\r
\r
\`\`\`bash\r
./configure\r
\`\`\`\r
\r
- 编译\r
\r
\`\`\`bash\r
make && make install\r
\`\`\`\r
\r
- 测试是否成功\r
\r
\`\`\`\r
sudo nginx -t\r
\`\`\`\r
\r
- 查看进程\r
\r
\`\`\`bash\r
ps -ef | grep nginx\r
进程组成\r
Nginx在启动以后，会有一个父进程master和很多个子进程。而子进程又分为两类，一类为工作进程worker，一类为和Cache相关的进程。对于master进程来说，其主要是用于管理worker进程的。换句话说，则是监控每个worker进程的运行状态。对于请求的处理都是通过子进程worker处理，就算是使用的缓存也依旧是用worker进程来处理。\r
\`\`\`\r
\r
\r
\r
## 常用命令\r
\r
\`\`\`\r
find / -name httpd.conf　　#在根目录下查找文件httpd.conf，表示在整个硬盘查找\r
\`\`\`\r
\r
\r
\r
\`\`\`bash\r
/usr/sbin/nginx -s reload            # 重新载入配置文件\r
/usr/sbin/nginx -s reopen            # 重启 Nginx\r
/usr/sbin/nginx -s stop               # 停止 Nginx\r
\r
\`\`\`\r
\r
## nginx.conf\r
\r
[entry](https://blog.csdn.net/aiwangtingyun/article/details/118823582)\r
\r
\`\`\`text\r
...              	# 全局块\r
\r
events {         	# events块\r
   ...\r
}\r
\r
http {							# http块\r
    ...   						# http全局块\r
    server { 					# server块\r
        ...       				# server全局块\r
        location [PATTERN] { 	# location块\r
            ...\r
        }\r
        location [PATTERN] {\r
            ...\r
        }\r
    }\r
    server { \r
        ...      \r
    }\r
    ...				# http全局块\r
}\r
\r
\r
\`\`\`\r
\r
- 全局块： 配置影响 nginx 全局的指令。一般有运行 nginx 服务器的用户组、nginx 进程 pid 存放路径、日志存放路径、配置文件引入、允许生成 worker process 数等；\r
- Events 块： 配置影响 nginx 服务器或与用户的网络连接。有每个进程的最大连接数、选取哪种事件驱动模型处理连接请求、是否允许同时接受多个网路连接、开启多个网络连接序列化等；\r
- Http 块： 可以嵌套多个 server、配置代理、缓存、日志定义等绝大多数功能和第三方模块的配置。如文件引入、mime-type 定义、日志自定义、是否使用 sendfile 传输文件、连接超时时间、单连接请求数等；\r
- Server 块： 配置虚拟主机的相关参数，一个 http 中可以有多个 server；\r
- Location 块： 配置请求的路由，以及各种页面的处理情况。\r
\r
### \`全局块\`\r
\r
\`\`\`\r
# 用户组\r
user myUsr myGroup;\r
\r
# 工作进程数\r
worker_processes  1;\r
\r
# 进程文件路径\r
pid /user/local/nginx/nginx.pid;\r
\r
# 日志路径和日志级别\r
error_log logs/error.log debug;\r
\r
\r
用户或用户组默认为 nobody；\r
工作进程数可以设置为CPU的核心数；\r
日志级别有：debug|info|notice|warn|error|crit|alert|emerg\r
\`\`\`\r
\r
\`*Nginx* 配置中，以 \`/\` 开头的路径表示绝对路径，不以 \`/\` 开头的路径表示相对路径，相对路径的根目录为 *Nginx* 的根目录。\`\r
\r
\r
\r
### \`event\`\r
\r
\`\`\`\r
events {\r
	# 设置网路连接序列化\r
	accept_mutex on;\r
	\r
	# 一个进程是否同时接受多个网络连接\r
	multi_accept on;\r
	\r
	# 事件驱动模型\r
	use epoll;\r
	\r
	# 最大连接数\r
	worker_connections  1024;\r
}\r
\r
设置网路连接序列化是为了防止惊群现象发生，默认为 on；\r
是否同时接受多个网络连接指令默认值为 off；\r
事件驱动模型的可选项有：select|poll|kqueue|epoll|resig|/dev/poll|eventport。\r
\r
\`\`\`\r
\r
\r
\r
### HTTP 全局块\r
\r
所有写在 http{} 块中，但不写在 http{ } 内的子模块中的所有指定就是 HTTP 全局块，会影响 http{ } 及其子模块的内容：\r
\r
\r
​	\r
	http {\r
		# 文件扩展名与文件类型映射表\r
		include mime.types;\r
	# 默认文件类型\r
	default_type  application/octet-stream;\r
	\r
	# 是否开启服务日志\r
	access_log off;\r
	\r
	# 自定义服务日志格式\r
	log_format myLogFormat '$remote_addr–$remote_user [$time_local] $request $status $body_bytes_sent $http_referer $http_user_agent $http_x_forwarded_for';\r
	\r
	# 设置日志的格式\r
	access_log log/access.log myLogFormat;\r
	\r
	# 是否开启高效文件传输模式\r
	sendfile on;\r
	\r
	# 每个进程每次最大传输值\r
	sendfile_max_chunk 100k;\r
	\r
	# 长连接超时时间\r
	keeplive_timeout 100;\r
	\r
	# 响应客户端的超时时间\r
	send_timeout 75;\r
	\r
	# 客户端请求头的区缓冲区大小\r
	client_header_buffer_size 32k;\r
	\r
	# 客户端请求头的最大缓冲区数量和大小\r
	large_client_header_buffers 8 32k;\r
	\r
	# 允许客户端请求的最大字节数\r
	client_max_body_size  10m;\r
	\r
	# 客户端请求体的缓冲区大小\r
	client_body_buffer_size  128k;\r
\r
\r
\`\`\`\r
# 配置 https_proxy 反向代理\r
    proxy_connect_timeout  75;\r
    proxy_read_timeout  75;\r
    proxy_send_timeout 100;\r
    proxy_buffer_size  4k;\r
    proxy_buffers  4  32k;\r
    proxy_busy_buffers_size  64k;\r
    proxy_max_temp_file_size  64k;\r
    proxy_temp_file_write_size 64k;\r
    proxy_temp_path  proxy_temp;\r
————————————————\r
proxy_connect_timeout ：表示 Nginx 跟代理服务器连接超时时间；\r
proxy_read_timeout ：表示 Nginx 与代理服务器两个成功的响应操作之间超时时间；\r
proxy_send_timeout ：表示 Nginx 传输文件至代理服务器的超时时间；\r
proxy_buffer_size ：用于设置从代理服务器读取并保存用户头信息的缓冲区大小；\r
proxy_buffers ：设置代理缓冲区大小，Nginx 针对单个连接，缓存来自代理服务器的响应，网页平均在32k以下的话，可以设置为 4 32K ；\r
proxy_busy_buffers_size ：设置高负荷下的缓冲大小，一般为 proxy_buffers 的两倍；\r
proxy_max_temp_file_size ：的用途介绍：当 proxy_buffers 放不下后端服务器的响应内容时，会将一部分保存到硬盘的临时文件中，这个值用来设置最大临时文件大小，默认1024M，它与 proxy_cache 没有关系；大于这个值，将从 upstream 服务器传回，设置为 0 禁用；\r
proxy_temp_file_write_size ：当缓存被代理的服务器响应到临时文件时，这个选项限制每次写临时文件的大小；\r
proxy_temp_path ：用于指定临时文件所在的目录。\r
————————————————\r
\r
\`\`\`\r
\r
#### 负载均衡\r
\r
\`\`\`\r
upstream backend {\r
	server 192.168.56.10:8080 max_fails=2 fail_timeout=30s backup; # 热备\r
	server 192.168.56.11:8080 max_fails=2 fail_timeout=30s;\r
}\r
\r
\`\`\`\r
\r
### server\r
\r
\`\`\`\r
server {\r
    # 监听端口\r
    listen 8080;\r
    \r
    # 监听服务器地址\r
    server_name 192.168.56.10;\r
    \r
    # 每个连接请求上限次数\r
    keepalive_requests 120;\r
    \r
    # 字符集\r
    charset utf-8;\r
    \r
    # 服务日志所在目录以及日志格式\r
    access_log logs/host80.log myLogFormat;\r
    \r
    # 错误页\r
    error_page  404  /404.html;\r
	error_page  500 502 503 504  /50x.html;\r
}\r
监听的端口，默认80，小于1024的要以root启动；\r
监听的服务器地址可以是 IP 或者域名，并且可以使用正则表达式进行匹配；\r
日志格式的定义和 http 模块的定义方式相同；\r
错误页的地址为：server_name + error_page。\r
\`\`\`\r
\r
#### ssl\r
\r
在请求方式中，如果使用 *https* 进行请求的话是需要证书，这时就要对 *https* 请求设置 *ssl*：\r
\r
\`\`\`\r
server {\r
	# 开启 ssl\r
	ssl on;\r
	\r
	# ssl 证书路径\r
	ssl_certificate /opt/ssl/nginx.crt;\r
	\r
	# ssl 证书秘钥\r
	ssl_certificate_key /opt/ssl/nginx.key;\r
	\r
	# ssl 会话超时时间\r
	ssl_session_timeout 1d;\r
	\r
	# ssl 缓存\r
	ssl_session_cache shared:SSL:50m;\r
	\r
	# ssl 会话票据\r
	ssl_session_tickets off;\r
	\r
	# ssl 协议版本\r
	ssl_protocols TLSv1.2;\r
	\r
	# ssl 密码套件\r
	ssl_ciphers  'HIGH:!aNULL:!MD5';\r
	\r
	# 开启 ssl 服务密码套件\r
	ssl_prefer_server_ciphers on;\r
}\r
\r
\`\`\`\r
\r
### location\r
\r
\`\`\`\r
location  ~*  ^.+$ {\r
	# 服务器的默认网站根目录位置\r
    root /var/www/html;\r
    \r
    # 默认访问的文件名\r
    index  index.html index.htm index.jsp;\r
\r
	# 拒绝的 IP\r
	deny 192.168.56.21;\r
	deny all;\r
\r
	# 允许的 IP \r
	allow 192.168.56.10;\r
	allow all;\r
}\r
紧跟在 location 后面的是 location 模块监听的 url 地址，也就是 location 块的匹配规则，只有匹配正确的地址才会进入该 location 块，可以使用正则表达式进行匹配（~表示区分大小写，~* 表示不区分大小写）；\r
root ：定义服务器的默认网站根目录位置，如果 LocationURL 匹配的是子目录或文件，root 指令没什么作用，一般放在 server 指令里面或 LocationURL 为 / 的 location 块下；\r
index ：定义该 location 路径下默认访问的文件名，一般跟 root 的路径放在一起。\r
————————————————\r
\`\`\`\r
\r
#### 设置响应头\r
\r
\`\`\`\r
location {\r
    # 设置允许跨域类型\r
    add_header Access-Control-Allow-Origin * always;\r
    \r
    # 是否允许信任证书\r
    add_header Access-Control-Allow-Credentials 'true' always;\r
    \r
    # 允许的请求头类型\r
    add_header Access-Control-Allow-Headers * always;\r
    \r
    # 设置允许的请求方式\r
    add_header Access-Control-Allow-Methods 'PUT, GET, POST, DELETE, OPTIONS' always;\r
    \r
    # 处理 OPTIONS 请求\r
    if ($request_method = 'OPTIONS') {\r
        return 204;\r
    }\r
}\r
\r
为了避免出现失效问题，一般在都在最后面添加 always ；\r
允许的请求头类型包括：Origin、X-Requested-With、content-Type、Accept、Authorization、uuid 等\r
\`\`\`\r
\r
#### 设置代理服务器\r
\r
\`\`\`\r
location {\r
    # 反向代理服务器地址\r
    proxy_pass  http://192.168.56.33;\r
        \r
    # 是否重定向代理服务器地址\r
    proxy_redirect off;\r
}\r
设置向代理服务器发送请求时的请求头数据：\r
location {\r
    # cookie\r
    proxy_pass_header  Set-Cookie;\r
    # 主机名\r
    proxy_set_header Host $host;\r
    # 真实 IP\r
    proxy_set_header X-Real-Ip $remote_addr;\r
    # 表示 HTTP 请求端真实 IP\r
    proxy_set_header X-Forwarded-For $remote_addr;\r
}\r
\r
\`\`\`\r
\r
**更多关于 Nginx 配置文档可以参考 Nginx 官方文档**：http://nginx.org/en/docs/\r
\r
### 配置样例\r
\r
\`\`\`\r
# 工作进程数\r
worker_processes  1;\r
\r
# 日志文件路径\r
error_log  logs/error.log;\r
\r
# 进程运行文件路径\r
pid        logs/nginx.pid;\r
\r
\r
events {\r
	# 使用 epoll 事件驱动\r
	use epoll;\r
\r
	# 最大连接数\r
    worker_connections  1024;\r
}\r
\r
\r
http {\r
	# 文件类型设置\r
    include       mime.types;\r
    default_type  application/octet-stream;\r
\r
    # 日志格式\r
    log_format  mainFromat  '$remote_addr - $remote_user [$time_local] "$request" '\r
                      '$status $body_bytes_sent "$http_referer" '\r
                      '"$http_user_agent" "$http_x_forwarded_for"';\r
\r
    # 服务日志\r
    access_log  logs/access.log  mainFromat;\r
\r
    # 开启高效文件传输模式\r
    sendfile        on;\r
\r
    # 配置 tcp 发送模式\r
    tcp_nopush     on;\r
    tcp_nodelay on;\r
\r
	# 长连接超时时间\r
    keepalive_timeout  65;\r
\r
    # 请求头\r
    client_header_buffer_size 32k;\r
    large_client_header_buffers 4 32k;\r
\r
    # 请求体\r
    client_body_buffer_size  128k;\r
    client_max_body_size  10m;\r
\r
    # 设置 gzip\r
    gzip  on;\r
    gzip_disable "msie6";\r
    gzip_vary on;\r
    gzip_proxied any;\r
    gzip_comp_level 6;\r
    gzip_buffers 16 8k;\r
    gzip_http_version 1.1;\r
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;\r
\r
    # 代理服务器相关设置\r
    proxy_connect_timeout  75;\r
    proxy_read_timeout  75;\r
    proxy_send_timeout  100;\r
\r
\r
    # 监听http服务\r
    server {\r
\r
    	# 服务器端口地址\r
        listen       80;\r
        server_name  192.168.56.10;\r
\r
        # 字符集\r
        charset utf-8;\r
\r
        # 服务日志路径\r
        access_log  logs/host.access.log  mainFromat;\r
\r
        # 地址定位模块\r
        location / {\r
            root   html;\r
            index  index.html index.htm index.jsp;\r
        }\r
\r
        location /demo {\r
        	# 添加反向代理服务器\r
        	proxy_pass  http://192.168.56.10:8080;\r
        	proxy_redirect off;\r
			proxy_pass_header  Set-Cookie;\r
			proxy_set_header Host $host;\r
			proxy_set_header X-Real-Ip $remote_addr;\r
			proxy_set_header X-Forwarded-For $remote_addr;\r
\r
			# 添加请求头\r
			add_header Access-Control-Allow-Origin * always;\r
			add_header Access-Control-Allow-Credentials 'true' always;\r
			add_header Access-Control-Allow-Methods 'PUT, GET, POST, DELETE, OPTIONS' always;\r
			add_header Access-Control-Allow-Headers * always;\r
\r
			# 处理 OPTION 请求\r
			if ($request_method = 'OPTIONS') {\r
				return 204;\r
			}\r
        }\r
\r
        \r
        # 重定向错误页到静态页\r
        error_page   404              /404.html;\r
        error_page   500 502 503 504  /50x.html;\r
        location = /50x.html {\r
            root   html;\r
        }\r
\r
    }\r
\r
    # 监听https服务\r
    server {\r
        listen       443   ssl;\r
        server_name  192.168.56.10;\r
\r
        # ssl 设置\r
    	ssl_certificate /opt/ssl/nginx.crt;\r
    	ssl_certificate_key /opt/ssl/nginx.key;\r
    	ssl_session_timeout 1d;\r
    	ssl_session_cache shared:SSL:50m;\r
    	ssl_session_tickets off;\r
    	ssl_protocols TLSv1.2;\r
        ssl_ciphers  HIGH:!aNULL:!MD5;\r
        ssl_prefer_server_ciphers  on;\r
        ssl_stapling on;\r
        ssl_stapling_verify on;\r
\r
       location / {\r
           root   html;\r
           index  index.html index.htm;\r
       }\r
    }\r
\r
    # 监听其他端口服务\r
    server {\r
       listen       8081;\r
       server_name  localhost;\r
\r
       location / {\r
           root   html;\r
           index  index.html index.htm;\r
       }\r
    }\r
}\r
\`\`\`\r
\r
`,g=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),B=`# react

## 列表渲染

> 使用Array.map()

\`\`\`react
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
\`\`\`

## 组件的返回

>  标签和 \`return\` 关键字不在同一行，则必须把它包裹在一对括号中，如下所示：

\`\`\`react
return (
  <div>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
);
\`\`\`

任何在 \`return\` 下一行的代码都将被忽略

### 顶层定义每个组件：

\`\`\`
export default function Gallery() {

  // ...

}



// ✅ 在顶层声明组件

function Profile() {

  // ...

}
\`\`\`

当子组件需要使用父组件的数据时，你需要 [通过 props 的形式进行传递](https://zh-hans.react.dev/learn/passing-props-to-a-component)，而不是嵌套定义。

## JSX 规则 

### 1. 只能返回一个根元素 

如果想要在一个组件中包含多个元素，**需要用一个父标签把它们包裹起来**。

不想在标签中增加一个额外的 \`<div>\`，可以用 \`<>\` 和 \`</>\` 元素来代替：

空标签被称作 *[Fragment](https://zh-hans.react.dev/reference/react/Fragment)*。React Fragment 允许你将子元素分组，而不会在 HTML 结构中添加额外节点。

> JSX 虽然看起来很像 HTML，但在底层其实被**转化为了 JavaScript 对象**，你**不能在一个函数中返回多个对象**，除非用一个数组把他们包装起来。这就是为什么多个 JSX 标签必须要用一个父元素或者 Fragment 来包裹。

### 2. 标签必须闭合 

JSX 要求标签必须正确闭合。像 \`<img>\` 这样的自闭合标签必须书写成 \`<img />\`，而像 \`<li>oranges\` 这样只有开始标签的元素必须带有闭合标签，需要改为 \`<li>oranges</li>\`。

### 3. 使用驼峰式命名法给 大部分属性命名！ 

> 例如，需要用 \`strokeWidth\` 代替 \`stroke-width\`。由于 \`class\` 是一个保留字，所以在 React 中需要用 \`className\` 来代替。

## 在 JSX 中通过大括号使用 JavaScript

想要在标签中添加一些 JavaScript 逻辑或者引用动态的属性。这种情况下，你可以在 JSX 的大括号内来编写 JavaScript。

> 注意 \`className="avatar"\` 和 \`src={avatar}\` 之间的区别，\`className="avatar"\` 指定了一个就叫 \`"avatar"\` 的使图片在样式上变圆的 CSS 类名，而 \`src={avatar}\` 这种写法会去读取 JavaScript 中 \`avatar\` 这个变量的值。这是因为大括号可以使你直接在标签中使用 JavaScript！

## 使用 “双大括号”：JSX 中的 CSS 和 对象 

> 为了能在 JSX 中传递，你必须用另一对额外的大括号包裹对象：
>
> \`person={{ name: "Hedy Lamarr", inventions: 5 }}\`。

内联 \`style\` 属性 使用驼峰命名法编写。

## 将 Props 传递给组件

> 组件使用 *props* 来互相通信。每个父组件都可以提供 props 给它的子组件，从而将一些信息传递给它。通过它们传递任何 JavaScript 值，包括对象、数组和函数。

 React 组件函数接受一个参数，一个 \`props\` 对象：

\`\`\`react
function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}
\`\`\`

### 给 prop 指定一个默认值

想在没有指定值的情况下给 prop 一个默认值，你可以通过在参数后面写 \`=\` 和默认值来进行解构：

\`\`\`react
function Avatar({ person, size = 100 }) {

  // ...

}
\`\`\`

props 是 不可变的

>  渲染过程中发生了 mutation — 严格模式调用两次组件，

## state

> 在 React 中，这种特定于组件的记忆被称为状态。

> 可以用 [\`useState\`](https://zh-hans.react.dev/reference/react/useState) Hook 为组件添加状态。*Hook* 是能让你的组件使用 React 功能的特殊函数（状态是这些功能之一）。\`useState\` Hook 让你声明一个状态变量。它接收初始状态并返回一对值：当前状态，以及一个让你更新状态的设置函数。

\`\`\`react
const [showMore, setShowMore] = useState(false);
\`\`\`

---



> 在 React 中，\`useState\` 以及任何其他以“\`use\`”开头的函数都被称为 **Hook**。
>
> Hook 是特殊的函数，只在 React [渲染](https://zh-hans.react.dev/learn/render-and-commit#step-1-trigger-a-render)时有效

## state 如同一张快照 

与普通 JavaScript 变量不同，React 状态的行为更像一个快照。设置它并不改变你已有的状态变量，而是触发一次重新渲染。这在一开始可能会让人感到惊讶！

\`\`\`react
console.log(count);  // 0

setCount(count + 1); // 请求用 1 重新渲染

console.log(count);  // 仍然是 0！
\`\`\`

## State 是隔离且私有的 

>  State 是屏幕上组件实例内部的状态。换句话说，**如果你渲染同一个组件两次，每个副本都会有完全隔离的 state**！改变其中一个不会影响另一个。

**State 变量仅用于在组件重渲染时保存信息。在单个事件处理函数中，普通变量就足够了。当普通变量运行良好时，不要引入 state 变量。**

## 事件传播

在 React 中所有事件都会传播，除了 \`onScroll\`，它仅适用于你附加到的 JSX 标签。

> - [\`e.stopPropagation()\`](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation) 阻止触发绑定在外层标签上的事件处理函数。
> - [\`e.preventDefault()\`](https://developer.mozilla.org/docs/Web/API/Event/preventDefault) 阻止少数事件的默认浏览器行为。

### **必须在条件语句外并且始终以相同的顺序调用 Hook！**

>  **React 会等到事件处理函数中的** 所有 **代码都运行完毕再处理你的 state 更新。** 这就是为什么重新渲染只会发生在所有这些 \`setNumber()\` 调用 **之后** 的原因。

---

如果你想在下次渲染之前多次更新同一个 state，你可以像 \`setNumber(n => n + 1)\` 这样传入一个根据队列中的前一个 state 计算下一个 state 的 **函数**，而不是像 \`setNumber(number + 1)\` 这样传入 **下一个 state 值**。这是一种告诉 React “用 state 值做某事”而不是仅仅替换它的方法。

## 将state是为可读

> 在严格模式下，React 会执行每个更新函数两次（但是丢弃第二个结果）以便帮助你发现错误。

修改一个你刚刚创建的对象就不会出现任何问题，因为 **还没有其他的代码引用它**。改变它并不会意外地影响到依赖它的东西。这叫做“局部 mutation”。你甚至可以 [在渲染的过程中](https://zh-hans.react.dev/learn/keeping-components-pure#local-mutation-your-components-little-secret) 进行“局部 mutation”的操作。这种操作既便捷又没有任何问题！

\`\`\`
 \`...\` 展开语法本质是是“浅拷贝”——它只会复制一层。这使得它的执行速度很快，但是也意味着当你想要更新一个嵌套属性时，你必须得多次使用展开语法。
\`\`\`

## useRef

> 使用useRef获取真实dom或组件实例的方法

\`\`\`react
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
\`\`\`

>  这里需要注意: 我们日常中需要通过\`Ref\`获取组件的实例，但是只可以去获取类组件的实例，因为函数组件没有实例，不能使用\`Ref\`获取。类组件的写法，真的很头疼。这个时候官方为我们提供了 \`forwardRef\` \`useImperativeHandle\` 解决了\`useRef\`获取函数组件的问题。

## forwardRef

用于暴露子组件给父组件

\`\`\`react
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
\`\`\`

## useImperativeHandle

**子组件利用\`useImperativeHandle\`可以让父组件输出任意数据**。

\`\`\`react
// FancyInput组件作为子组件
const FancyInput = React.forwardRef(function FancyInput(props, ref) {
  const inputRef = useRef();

  // 命令式的给\`ref.current\`赋值个对象
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
\`\`\`

`,f=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"})),t=`# redis\r
\r
## incr\r
\r
\`\`\`\r
\r
Redis Incr 命令将 key 中储存的数字值增一。\r
\r
如果 key 不存在，那么 key 的值会先被初始化为 0 ，然后再执行 INCR 操作。\r
\r
如果值包含错误的类型，或字符串类型的值不能表示为数字，那么返回一个错误。\r
\r
本操作的值限制在 64 位(bit)有符号数字表示之内。\r
\`\`\`\r
\r
集合\r
\r
\`\`\`javascript\r
SADD key member1 [member2]\r
//向集合添加一个或多个成员\r
\r
SSCAN key cursor [MATCH pattern] [COUNT count]\r
//迭代集合中的元素\r
\r
SMEMBERS key\r
//返回集合中的所有成员\r
\`\`\`\r
\r
有序集合\r
\r
\`\`\`javascript\r
ZADD key score1 member1 [score2 member2]\r
//向有序集合添加一个或多个成员，或者更新已存在成员的分数\r
\r
ZRANGE key start stop [WITHSCORES]\r
//通过索引区间返回有序集合指定区间内的成员\r
\r
ZSCAN key cursor [MATCH pattern] [COUNT count]\r
//迭代有序集合中的元素（包括元素成员和元素分值）\r
\`\`\`\r
\r
#### req.query & req.body &req.params\r
\r
\`\`\`\r
req.query \r
 查询url '?' 后的参数 /getid?id=3\r
 req.body\r
 查询post请求的参数\r
 req.params\r
 /url:username 查询‘:’后面的参数\r
 查询username\r
\`\`\`\r
\r
\r
\r
## webSocket\r
\r
\`\`\`js\r
var expressWs = require('express-ws')(app);\r
\r
请确保在加载或定义路由器之前\`express-ws\`像上面一样设置模块！否则，\`express-ws\`将没有机会设置对 Express 路由器的支持，并且您可能会遇到类似\`router.ws is not a function\`\r
\r
var router = express.Router();\r
\r
router.ws('/echo', function(ws, req) {\r
  ws.on('message', function(msg) {\r
    ws.send(msg);\r
  });\r
});\r
\`\`\`\r
\r
## zadd 新增有序集合（键，成员，分值）\r
\r
\`\`\`js\r
\r
//新增有序集合（键，成员，分值）\r
redis.zadd = (key, member, num) => {\r
    if (key !== undefined && member !== undefined) {\r
        redis_client.zAdd(key, [{ score: num, value: member }], (err, res) => {\r
            if (err) throw err;\r
        })\r
    }\r
}\r
\`\`\`\r
\r
`,h=Object.freeze(Object.defineProperty({__proto__:null,default:t},Symbol.toStringTag,{value:"Module"})),D=`# 静态资源打包\r
\r
> 1. 标签页静态路经\r
> 2. css静态路径\r
> 3. 动态导入，import.meta.url\r
> 4. URL api, new URL('path',import.meta.url\r
\r
# 资源分包\r
\r
\`\`\`js\r
\r
  rollupOptions:{\r
      output: {\r
        entryFileNames: 'js/[name].js',//入口文件\r
        // entryFileNames: 'js/[name]-[hash].js',//入口文件\r
        chunkFileNames: 'js/[name].js',//分包引入文件\r
        // chunkFileNames: 'js/[name]-[hash].js',//分包引入文件\r
        // assetFileNames: '[ext]/[name]-[hash].[ext]',//静态文件\r
        assetFileNames(assetInfo){\r
          console.log(assetInfo)\r
          //文件名称\r
          if (assetInfo.name.endsWith('.css')) {\r
            return 'css/[name].css'\r
            // return 'css/[name]-[hash].css'\r
          }\r
          //图片名称\r
          //定义图片后缀\r
          const imgExts = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg','.ico']\r
          if(imgExts.some(ext => assetInfo.name.endsWith(ext))){\r
            return 'imgs/[name].[ext]'\r
            // return 'imgs/[name]-[hash].[ext]'\r
          }\r
          //剩余资源文件\r
          return 'assets/[name].[ext]'\r
          // return 'assets/[name]-[hash].[ext]'\r
        }\r
      },\r
\r
\`\`\`\r
\r
\r
\r
## autoimport配置项\r
\r
\`\`\`js\r
AutoImport({\r
  // 目标文件\r
  include: [\r
    /\\.[tj]sx?$/, // .ts, .tsx, .js, .jsx\r
    /\\.vue$/, /\\.vue\\?vue/, // .vue\r
    /\\.md$/, // .md\r
  ],\r
\r
  // 全局引入插件\r
  imports: [\r
    // presets\r
    'vue',\r
    'vue-router',\r
    // custom\r
    {\r
      '@vueuse/core': [\r
        // named imports\r
        'useMouse', // import { useMouse } from '@vueuse/core',\r
        // alias\r
        ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',\r
      ],\r
      'axios': [\r
        // default imports\r
        ['default', 'axios'], // import { default as axios } from 'axios',\r
      ],\r
      '[package-name]': [\r
        '[import-names]',\r
        // alias\r
        ['[from]', '[alias]'],\r
      ],\r
    },\r
  ],\r
\r
  // eslint报错解决\r
  eslintrc: {\r
    enabled: false, // Default \`false\`\r
    filepath: './.eslintrc-auto-import.json', // Default \`./.eslintrc-auto-import.json\`\r
    globalsPropValue: true, // Default \`true\`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')\r
  },\r
\r
  // 解析器，例如element-plus的ElementPlusResolver\r
  // see https://github.com/antfu/unplugin-auto-import/pull/23/\r
  resolvers: [\r
    /* ... */\r
  ],\r
  // 声明文件生成位置和文件名称\r
  dts: './auto-import.d.ts'\r
})\r
\`\`\`\r
\r
\r
\r
\r
\r
\r
\r
\`\`\`ts\r
\r
interface Plugin {\r
    // 插件名\r
    name: string;\r
    /**\r
     * 指定插件调用的顺序，见下文插件顺序调用\r
     */\r
    enforce?: 'pre' | 'post';\r
    /**\r
     * 默认情况下插件在开发（serve）和构建（build）模式中都会调用，通过用 apply 属性指定调用的时机\r
     */\r
    apply?: 'serve' | 'build' | ((config: UserConfig, env: ConfigEnv) => boolean);\r
    /**\r
     * 在解析 Vite 配置前调用。钩子接收原始用户配置（命令行选项指定的会与配置文件合并）和一个描述配置环境的变量，返回一个将被深度合并到现有配置中的部分配置对象\r
     */\r
    config?: (config: UserConfig, env: ConfigEnv) => UserConfig | null | void | Promise<UserConfig | null | void>;\r
    /**\r
     * 获取 vite 最终的配置，在解析合并 Vite 配置后调用\r
     */\r
    configResolved?: (config: ResolvedConfig) => void | Promise<void>;\r
    /**\r
     * 获取开发服务器实例，用于配置开发服务器，只在开发环境调用\r
     */\r
    configureServer?: ServerHook;\r
    /**\r
     * 配置预览服务器实例，用于预览本地打包完的页面\r
     */\r
    configurePreviewServer: ServerHook;\r
    /**\r
     * 获取 html 字符串和 bundle 产物，用于转换打包后的 html 页面\r
     */\r
    transformIndexHtml?: IndexHtmlTransform;\r
    /**\r
     * 获取开发环境构建产物，用于自定义 HMR 更新处理\r
     */\r
    handleHotUpdate?(ctx: HmrContext): Array<ModuleNode> | void | Promise<Array<ModuleNode> | void>;\r
}\r
\`\`\`\r
\r
\r
\r
## 通用钩子：\r
\r
### options\r
\r
> 这是构建阶段的第一个钩子，通常用于插件开发中的参数阅读选项\r
\r
### buildStart\r
\r
- 这是构建阶段的第二个钩子，读取到入口文件后开始构建。\r
\r
> **\`buildStart\` 钩子函数的主要作用包括但不限于以下几点：**\r
>\r
> 1. **自定义任务**：你可以在构建开始前执行自定义任务，例如清理临时文件、生成一些构建配置、执行前置操作等。\r
> 2. **日志记录**：你可以在构建开始前添加一些日志记录，以记录构建过程的开始时间、项目信息等，以便后续分析和调试。\r
> 3. **状态检查**：在构建开始前，你可以执行一些状态检查，确保构建所需的条件满足，如果有问题，可以提前终止构建并给出错误提示。\r
> 4. **设置环境变量**：你可以在构建开始前设置一些环境变量，以影响构建过程中的行为，例如根据不同的环境配置不同的构建选项。\r
\r
### resolveId\r
\r
> 主要用于自定义模块解析的行为。模块解析是指当你在代码中导入模块时，Vite 需要确定模块的位置和如何加载它。\r
\r
### transform\r
\r
 执行时间点：在模块代码构建期间。\r
\r
使用场景：用于修改模块的源代码，可以在构建期间对模块进行转换和处理，例如添加额外的代码、转换特定格式的文件等。\r
\r
> 比如：Vite 在加载到 Vue 项目中的 main.js 后我们可以在 transform 钩子中对 main.js的代码做一些修改\r
\r
### buildEnd\r
\r
- 作用：\`buildEnd\` 钩子函数在 Vite 构建结束后触发。\r
\r
> 使用场景：你可以使用 \`buildEnd\` 钩子来执行一些与构建结束相关的操作，例如生成构建报告、自动化部署、通知团队构建已完成等。这个钩子通常用于处理构建后的事务。\r
\r
### closeBundle\r
\r
- 作用：\`closeBundle\` 钩子函数在 Vite 打包生成 bundle 文件时触发。\r
\r
## 独有的钩子：\r
\r
### config\r
\r
> 允许你在 Vite 配置对象被创建之前对其进行修改和扩展。这个钩子函数在 Vite 配置加载过程中的早期阶段被触发，允许你动态地修改 Vite 的配置，以满足项目的特定需求。\r
\r
场景举例：\r
\r
**自定义配置**：你可以在 \`config\` 钩子中添加、修改或删除 Vite 配置的属性和选项，以适应项目的需求。例如，你可以修改构建输出目录、设置自定义别名、更改开发服务器的选项等。\r
\r
### configResolved\r
\r
-  用于在 Vite 配置对象被解析和应用后执行自定义操作。这个钩子函数在配置加载过程的较早阶段触发，允许你检查和修改已解析的 Vite 配置。\r
\r
> 场景举例：\r
>\r
> **配置检查与修改**：你可以在 \`configResolved\` 钩子函数中检查和修改 Vite 配置。这通常用于在配置加载后动态地调整配置选项，以适应不同的项目需求。\r
\r
### configureServer\r
\r
-  用于配置开发服务器。这个钩子函数在 Vite 开发服务器启动之前执行，允许你自定义开发服务器的行为。\r
\r
> 场景举例：\r
>\r
> **添加中间件**：你可以在 \`configureServer\` 中添加自定义中间件到开发服务器中。这使得你可以处理请求、修改响应、添加身份验证等。\r
\r
\`configurePreviewServer\`： 与 configureServer 相同，但用于预览服务器。\r
\r
### transformIndexHtml\r
\r
 允许你在构建过程中修改生成的 HTML 文件。这个钩子函数在生成最终的 \`index.html\` 文件之前执行，允许你自定义 HTML 内容或添加额外的标签、脚本等。\r
\r
### \`handleHotUpdate\`\r
\r
-  用于在模块发生热更新（Hot Module Replacement，HMR）时执行自定义逻辑。HMR 是一种开发工具，允许你在不刷新整个页面的情况下替换、添加或删除模块，以加快开发过程。\r
\r
> 场景举例： **动态加载模块**：你可以在热更新时动态加载新的模块，以实现按需加载或懒加载的效果。`,v=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),A=`## vitest\r
\r
## 常见的Vitest方法\r
\r
为了编写测试，我们需要利用以下常见的方法，这些方法可以从 Vitest 导入。\r
\r
- \`describe\`：这个函数接受一个名字和一个函数，用于将相关的测试组合在一起。当你为一个有多个测试点（如逻辑和外观）的组件编写测试时，它就会很方便。\r
- \`test/it\`：这个函数代表被测试的实际代码块。它接受一个字符串，通常是测试案例的名称或描述（例如，渲染成功的正确样式）和另一个函数，所有的检查和测试在这里进行。\r
- \`expect\`： 这个函数用于测试值或创建断言。它接受一个预期为实际值（字符串、数字、对象等）的参数**x**，并使用任何支持的方法对其进行评估（例如\`toEqual(y)\`，检查 x 是否与 y 相同）。\r
\r
作者：王大冶\r
链接：https://juejin.cn/post/7129667747134308389\r
来源：稀土掘金\r
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。`,_=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"})),o=`## vue3在原型挂载方法\r
\r
\`\`\`javascript\r
app.config.globalPrperties.$test=test\r
app.use(store).use(router).mount('#app')\r
\r
\r
import {getCurrentInstance} from 'vue'\r
const {proxy} = getCurrentInstance() //开发环境及生产环境皆可\r
const {ctx} = getCurrentInstance() //只能在开发环境使用\r
proxy.$test()\r
\`\`\`\r
\r
## 邮箱校验\r
\r
\`\`\`js\r
// 非下划线的单词字符 + 2个以上单词字符 + @ + 2位以上单词字符域名 + .2位以上小写字母做域名后缀 + (.2位以上二重域名后缀)?\r
  // var reg = /^(用户名)@(组织名)\\.(一级域名后缀)(二级域名后缀)?$/\r
  var reg = /^([a-zA-Z\\d][\\w-]{2,})@(\\w{2,})\\.([a-z]{2,})(\\.[a-z]{2,})?$/\r
\r
\`\`\`\r
\r
## insertBefore\r
\r
\`\`\`\r
insertBefore() 方法可在已有的子节点前插入一个新的子节点。\r
document.getElementById("myList").insertBefore(newItem,existingItem);\r
\`\`\`\r
\r
## nextTick\r
\r
\`\`\`\r
Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。\r
\r
简单来说，Vue 在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。\r
\r
同步里执行的方法，每个方法里做的事情组成一个事件循环；接下来再次调用的是另一个事件循环。\r
\r
nextTick：在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，会获取更新后的 DOM。\r
\r
proxy.$nextTick(function(){\r
    console.log() //可以到'changed'\r
})\r
\r
\`\`\`\r
\r
## vue自定义指令\r
\r
\`\`\`js\r
app,directive('directiveName',myDirective)\r
const myDirective = {\r
  // 在绑定元素的 attribute 前\r
  // 或事件监听器应用前调用\r
  created(el, binding, vnode, prevVnode) {\r
    // 下面会介绍各个参数的细节\r
  },\r
  // 在元素被插入到 DOM 前调用\r
  beforeMount(el, binding, vnode, prevVnode) {},\r
  // 在绑定元素的父组件\r
  // 及他自己的所有子节点都挂载完成后调用\r
  mounted(el, binding, vnode, prevVnode) {},\r
  // 绑定元素的父组件更新前调用\r
  beforeUpdate(el, binding, vnode, prevVnode) {},\r
  // 在绑定元素的父组件\r
  // 及他自己的所有子节点都更新后调用\r
  updated(el, binding, vnode, prevVnode) {},\r
  // 绑定元素的父组件卸载前调用\r
  beforeUnmount(el, binding, vnode, prevVnode) {},\r
  // 绑定元素的父组件卸载后调用\r
  unmounted(el, binding, vnode, prevVnode) {}\r
}\r
\r
指令的钩子会传递以下几种参数：\r
\r
el：指令绑定到的元素。这可以用于直接操作 DOM。\r
\r
binding：一个对象，包含以下属性。\r
\r
value：传递给指令的值。例如在 v-my-directive="1 + 1" 中，值是 2。\r
oldValue：之前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否更改，它都可用。\r
arg：传递给指令的参数 (如果有的话)。例如在 v-my-directive:foo 中，参数是 "foo"。\r
modifiers：一个包含修饰符的对象 (如果有的话)。例如在 v-my-directive.foo.bar 中，修饰符对象是 { foo: true, bar: true }。\r
instance：使用该指令的组件实例。\r
dir：指令的定义对象。\r
vnode：代表绑定元素的底层 VNode。\r
\r
prevNode：代表之前的渲染中指令所绑定元素的 VNode。仅在 beforeUpdate 和 updated 钩子中可用。\r
\r
除了 el 外，其他参数都是只读的\r
\`\`\`\r
\r
\r
\r
## vite中import使用\r
\r
\`\`\`js\r
    \r
	Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块：\r
const modules = import.meta.glob('./dir/*.js')\r
\r
和 glob 导入 类似，Vite 也支持带变量的动态导入。\r
// 只能以。/ 或。。/ 开头\r
const module = await import(\`./dir/\${file}.js\`)\r
\r
link:\r
	https://cn.vitejs.dev/guide/features#glob-import\r
\`\`\`\r
\r
## scoped()\r
\r
\`\`\`js\r
//scoped 会使得样式只作用于当前组件，需要使用：deep（）进行穿透·\r
\r
//作为子组件时，可以取消，\r
\`\`\`\r
\r
## 事件总线\r
\r
> 可以实现不同组件之间的通信\r
\r
\`\`\`js\r
/\r
export default class EventBus{\r
    constructor(){\r
        this.events = {};\r
    }\r
    emit(eventName, data) {\r
        if (this.events[eventName]) {\r
            this.events[eventName].forEach(function(fn) {\r
                fn(data);\r
            });\r
        }\r
    }\r
    on(eventName, fn) {\r
        this.events[eventName] = this.events[eventName] || [];\r
        this.events[eventName].push(fn);\r
    }\r
\r
    off(eventName, fn) {\r
        if (this.events[eventName]) {\r
            for (var i = 0; i < this.events[eventName].length; i++) {\r
                if (this.events[eventName][i] === fn) {\r
                    this.events[eventName].splice(i, 1);\r
                    break;\r
                }\r
            }\r
        }\r
    }\r
}\r
\`\`\`\r
\r
## 父组件获取子组件元素\r
\r
> 使用ref,绑定在子组件，获取实例\r
>\r
> 能访问到子组件实例的公开方法和属性。私有方法和属性是无法通过 \`ref\` 直接访问的。\r
\r
\`\`\`js\r
	console.log(algor.value.$options);\r
	//已解析的用于实例化当前组件的组件选项。\r
    console.log(algor.value.$parent);\r
    //当前组件可能存在的父组件实例，\r
    console.log(algor.value.$slots);\r
   // 一个表示父组件所传入插槽的对象。\r
    console.log(algor.value.$refs);\r
    //一个包含 DOM 元素和组件实例的对象\r
    console.log(algor.value.$el);//dom\r
	console.log(algor.value.$props);\r
	//表示组件当前已解析的 props 对象。\r
\`\`\`\r
\r
watch 与watchEffect\r
\r
> watch 可以进行更精细的配置，如deep,需要指定监听的对象，\r
>\r
> watchEffect会立即监听一次，相当于立即执行一次回调，等同于默认开启immediate，同时watchEffect不用指定监听的属性，会自动进行\r
>\r
> \r
`,x=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"})),s=`## git命令\r
\r
\`\`\`text\r
git init //把这个目录变成Git可以管理的仓库\r
git add README.md //文件添加到仓库\r
git add . //不但可以跟单一文件，还可以跟通配符，更可以跟目录。一个点就把当前目录下所有未追踪的文件全部add了 \r
git commit -m "first commit" //把文件提交到仓库\r
git branch -M main\r
git@github.com:wangjiax9/practice.git //关联远程仓库\r
git push -u origin master //把本地库的所有内容推送到远程库上\r
\`\`\`\r
\r
## push an existing repository from the command line\r
\r
\`\`\`\r
git remote add origin git@github.com:hingq/C-C-.git\r
git branch -M main\r
git push -u origin main\r
\`\`\`\r
\r
### 生成密钥\r
\r
\`\`\`text\r
ssh-keygen -t rsa -C “amazyko@foxmail.com”\r
\`\`\`\r
\r
测试\r
\r
\`\`\`\r
$ ssh -T git@github.com\r
\r
\`\`\`\r
\r
\`\`\`\r
git log - 查看历史提交记录。\r
\`\`\`\r
\r
`,y=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"})),a=`# webPack\r
\r
[webpack](https://icodex.me/docs/webpack5)\r
`,b=Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"}));export{p as C,h as a,_ as b,c,x as d,y as g,i as h,d as j,g as n,l as p,f as r,m as t,v,b as w};
