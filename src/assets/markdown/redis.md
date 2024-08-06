# redis

## incr

```

Redis Incr 命令将 key 中储存的数字值增一。

如果 key 不存在，那么 key 的值会先被初始化为 0 ，然后再执行 INCR 操作。

如果值包含错误的类型，或字符串类型的值不能表示为数字，那么返回一个错误。

本操作的值限制在 64 位(bit)有符号数字表示之内。
```

集合

```javascript
SADD key member1 [member2]
//向集合添加一个或多个成员

SSCAN key cursor [MATCH pattern] [COUNT count]
//迭代集合中的元素

SMEMBERS key
//返回集合中的所有成员
```

有序集合

```javascript
ZADD key score1 member1 [score2 member2]
//向有序集合添加一个或多个成员，或者更新已存在成员的分数

ZRANGE key start stop [WITHSCORES]
//通过索引区间返回有序集合指定区间内的成员

ZSCAN key cursor [MATCH pattern] [COUNT count]
//迭代有序集合中的元素（包括元素成员和元素分值）
```

#### req.query & req.body &req.params

```
req.query 
 查询url '?' 后的参数 /getid?id=3
 req.body
 查询post请求的参数
 req.params
 /url:username 查询‘:’后面的参数
 查询username
```



## webSocket

```js
var expressWs = require('express-ws')(app);

请确保在加载或定义路由器之前`express-ws`像上面一样设置模块！否则，`express-ws`将没有机会设置对 Express 路由器的支持，并且您可能会遇到类似`router.ws is not a function`

var router = express.Router();

router.ws('/echo', function(ws, req) {
  ws.on('message', function(msg) {
    ws.send(msg);
  });
});
```

## zadd 新增有序集合（键，成员，分值）

```js

//新增有序集合（键，成员，分值）
redis.zadd = (key, member, num) => {
    if (key !== undefined && member !== undefined) {
        redis_client.zAdd(key, [{ score: num, value: member }], (err, res) => {
            if (err) throw err;
        })
    }
}
```

