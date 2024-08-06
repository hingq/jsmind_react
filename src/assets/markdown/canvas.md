## canvas标签

```javascript
width ,height 属性是可选的,当没有设置宽度和高度的时候，canvas会初始化
width：300px  height：150px

```

canvas可以创造一个固定大小的画布，它公开了一个或多个渲染上下文。可以用来绘制和处理要展示的内容。

```javascript
var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');

//检查支持格式
if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  // drawing code here
        // ctx.fillStyle='color'  //填充颜色
        // ctx.strokeStyle='color' //边框颜色
        // ctx.linewidth=50 //边宽
          // ctx.linejoin='' //线的连接方式

} else {
  // canvas-unsupported code here
}
getContext()方法接受一个参数，即上下文的类型。对于2d图像而言，可以使用CanvasRenderingContext2D

```

## 绘制矩形

```javascript
fillRect(x,y,width,height) 
绘制一个填充的矩形

strokeRect(x, y, width, height)
绘制一个矩形边框

clearRect(x, y, width, height)
清除指定矩形区域
```

上述的方法中每个都包含相同的参数，x,y指定在canvas画布上所绘制的矩形的左上角的坐标，width，height设置矩形的尺寸。

## 绘制路径

1. 创建路径起始点
2. 使用命令画出路径
3. 把路径封闭
4. 可以通过描边或者填充路径来渲染图形

```
beginPath()
新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。

moveTo(x,y)
将笔移动到指定位置,会将画笔抬起

lineTo(x,y)
绘制一条从当前位置到x,y的点

stroke();
绘制线条

closePath();
闭合路径之后图形绘制命令又指向上下文。
会自动合并路径

stroke();
通过线条来绘制图形轮廓。 不会自动调用closepath()

fill();
填充路径的内容生成实心图形。
自动合并路径

lineCap() ,设置首末两端的线帽的样式

save(),restore()
save()和restore()是用来保存和恢复canvas状态的，都没有参数。 Canvas的状态就是当前画面应用的所有样式和变形的一个快照。
使用栈的方式储存。

```

## 曲线绘制

```javascript
角度与弧度：radius=(Math.PI/180)*degrees

arc(x,y,radius,startAngle,endAngle,anticlockwise)
radius:半径
画一个x,y为圆心的圆弧，从start到end，按照anticlkwise的方向来生成
true：逆时针
false:顺时针

arcTo(x1,y1,x2,y2,50)
arcTo() 方法在画布上创建介于两个切线之间的弧/曲线
此圆弧与当前点到第一个点（x1,y1）的连线相切，而且第一个点到第二点（x2,y2）的连线也相切。

ctx.strokeStyle = 
`rgba(${81 + 171 * Math.abs(1 - progress * 2)}, ${160 - 160 * Math.abs(1 - progress * 2)}, ${255},1)`


## canvas变换

translate(x,y)移动



rotate(angle) 旋转



scale(x,y)缩放

drawImage(image,x,y,width,height) //绘制图片，必需先等图片加载完成
image，表示canvas对象或image，x,y表示起始坐标

createPattern(image,repeation) //图片，平铺方式
//ctx.createPattern(img,"no-repeat")

geadlient=new createLineGradient(x1,y1,x2,y2)
//渐变
gradlient.addColorStop(position,color) //添加渐变色
position，相对位置，0~1之间
color：颜色

filltext(''，x,y) //填充文本

stroke('',x,y) //描绘文字

ctx.font='40px sans-self '

ctx.textBaseline='top/middle/bottom' , //基线
    
ctx.meaureText();//返回一个对象，包含文本信息
    
ctx.getImageData(x,y,width,height) //获取像素点，返回对象,date数组存储每个像素点的rgba() ,此处透明度0~255

ctx.putImageData(imageData，x,y) //设置像素点

ctx.createImageData(width,height) //创建一个像素对象

ctx.globalAlpha=1 //透明度，0~1

ctx.gobalCompositeOperation=""
    source-over:源在上面
	source-in：只留下源与目标重叠部分
    source-out：只留下源超过目标的部分
	source-atop：砍掉溢出的部分

 	destination-over:源在上面
	destination-in：只留下源与目标重叠部分
    destination-out：只留下源超过目标的部分
	destination-atop：砍掉溢出的部分
```

## measureText()

```
返回一个关于被测量文本TextMetrics 对象包含的信息（例如它的宽度）。

```

[TextMetrics](https://developer.mozilla.org/zh-CN/docs/Web/API/TextMetrics)

## 解决图像不清晰

```js
const canvas_ = document.querySelector('canvas')
    let radio = util.creatHiDPI()
    const ctx = canvas_.getContext('2d')
    console.log(radio);
    canvas_.width=500*radio
    canvas_.height=500*radio
    canvas_.style.width = 500 + "px";
    canvas_.style.height = 500 + "px";
    ctx.scale(2,2)
https://www.cnblogs.com/nzbin/p/9447882.html
```

