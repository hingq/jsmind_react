## nginx安装

创建nginx目录`mkdir nginx && cd nginx`

### 安装nginx依赖：pcre



- 下载pcre

```bash
wget http://downloads.sourceforge.net/project/pcre/pcre/8.37/pcre-8.37.tar.gz
```

- 解压pcre

```bash
tar -xzpvf pcre-8.37.tar.gz
```

- 进入 pcre-8.37 执行命令

```bash
./configure
```

- 执行命令

```bash
make && make install
```

- 验证pcre是否成功

```bash
pcre-config --version
# 出现版本号就是安装成功了
```



### 安装 openssl 、zlib 、 gcc 依赖



运行命令

```bash
安装gcc

apt-get install gcc
#查看gcc的版本
gcc -v

第三步：安装zlib
apt-get install zlib1g-dev

第四步：安装openssl
apt-get install openssl libssl-dev

#查看openssl的版本

openssl version

```

### 安装nginx



- 进入之前创建的nginx目录：下载nginx

```bash
[root@bogon src]# cd /usr/local/src/
[root@bogon src]# wget http://nginx.org/download/nginx-1.20.1.tar.gz
//或
sudo apt-get install nginx

```

- 解压nginx

```bash
tar -zxvf nginx-1.20.1.tar.gz
```

- 进入nginx-1.20.1目录，执行

```bash
./configure
```

- 编译

```bash
make && make install
```

- 测试是否成功

```
sudo nginx -t
```

- 查看进程

```bash
ps -ef | grep nginx
进程组成
Nginx在启动以后，会有一个父进程master和很多个子进程。而子进程又分为两类，一类为工作进程worker，一类为和Cache相关的进程。对于master进程来说，其主要是用于管理worker进程的。换句话说，则是监控每个worker进程的运行状态。对于请求的处理都是通过子进程worker处理，就算是使用的缓存也依旧是用worker进程来处理。
```



## 常用命令

```
find / -name httpd.conf　　#在根目录下查找文件httpd.conf，表示在整个硬盘查找
```



```bash
/usr/sbin/nginx -s reload            # 重新载入配置文件
/usr/sbin/nginx -s reopen            # 重启 Nginx
/usr/sbin/nginx -s stop               # 停止 Nginx

```

## nginx.conf

[entry](https://blog.csdn.net/aiwangtingyun/article/details/118823582)

```text
...              	# 全局块

events {         	# events块
   ...
}

http {							# http块
    ...   						# http全局块
    server { 					# server块
        ...       				# server全局块
        location [PATTERN] { 	# location块
            ...
        }
        location [PATTERN] {
            ...
        }
    }
    server { 
        ...      
    }
    ...				# http全局块
}


```

- 全局块： 配置影响 nginx 全局的指令。一般有运行 nginx 服务器的用户组、nginx 进程 pid 存放路径、日志存放路径、配置文件引入、允许生成 worker process 数等；
- Events 块： 配置影响 nginx 服务器或与用户的网络连接。有每个进程的最大连接数、选取哪种事件驱动模型处理连接请求、是否允许同时接受多个网路连接、开启多个网络连接序列化等；
- Http 块： 可以嵌套多个 server、配置代理、缓存、日志定义等绝大多数功能和第三方模块的配置。如文件引入、mime-type 定义、日志自定义、是否使用 sendfile 传输文件、连接超时时间、单连接请求数等；
- Server 块： 配置虚拟主机的相关参数，一个 http 中可以有多个 server；
- Location 块： 配置请求的路由，以及各种页面的处理情况。

### `全局块`

```
# 用户组
user myUsr myGroup;

# 工作进程数
worker_processes  1;

# 进程文件路径
pid /user/local/nginx/nginx.pid;

# 日志路径和日志级别
error_log logs/error.log debug;


用户或用户组默认为 nobody；
工作进程数可以设置为CPU的核心数；
日志级别有：debug|info|notice|warn|error|crit|alert|emerg
```

`*Nginx* 配置中，以 `/` 开头的路径表示绝对路径，不以 `/` 开头的路径表示相对路径，相对路径的根目录为 *Nginx* 的根目录。`



### `event`

```
events {
	# 设置网路连接序列化
	accept_mutex on;
	
	# 一个进程是否同时接受多个网络连接
	multi_accept on;
	
	# 事件驱动模型
	use epoll;
	
	# 最大连接数
	worker_connections  1024;
}

设置网路连接序列化是为了防止惊群现象发生，默认为 on；
是否同时接受多个网络连接指令默认值为 off；
事件驱动模型的可选项有：select|poll|kqueue|epoll|resig|/dev/poll|eventport。

```



### HTTP 全局块

所有写在 http{} 块中，但不写在 http{ } 内的子模块中的所有指定就是 HTTP 全局块，会影响 http{ } 及其子模块的内容：


​	
	http {
		# 文件扩展名与文件类型映射表
		include mime.types;
	# 默认文件类型
	default_type  application/octet-stream;
	
	# 是否开启服务日志
	access_log off;
	
	# 自定义服务日志格式
	log_format myLogFormat '$remote_addr–$remote_user [$time_local] $request $status $body_bytes_sent $http_referer $http_user_agent $http_x_forwarded_for';
	
	# 设置日志的格式
	access_log log/access.log myLogFormat;
	
	# 是否开启高效文件传输模式
	sendfile on;
	
	# 每个进程每次最大传输值
	sendfile_max_chunk 100k;
	
	# 长连接超时时间
	keeplive_timeout 100;
	
	# 响应客户端的超时时间
	send_timeout 75;
	
	# 客户端请求头的区缓冲区大小
	client_header_buffer_size 32k;
	
	# 客户端请求头的最大缓冲区数量和大小
	large_client_header_buffers 8 32k;
	
	# 允许客户端请求的最大字节数
	client_max_body_size  10m;
	
	# 客户端请求体的缓冲区大小
	client_body_buffer_size  128k;


```
# 配置 https_proxy 反向代理
    proxy_connect_timeout  75;
    proxy_read_timeout  75;
    proxy_send_timeout 100;
    proxy_buffer_size  4k;
    proxy_buffers  4  32k;
    proxy_busy_buffers_size  64k;
    proxy_max_temp_file_size  64k;
    proxy_temp_file_write_size 64k;
    proxy_temp_path  proxy_temp;
————————————————
proxy_connect_timeout ：表示 Nginx 跟代理服务器连接超时时间；
proxy_read_timeout ：表示 Nginx 与代理服务器两个成功的响应操作之间超时时间；
proxy_send_timeout ：表示 Nginx 传输文件至代理服务器的超时时间；
proxy_buffer_size ：用于设置从代理服务器读取并保存用户头信息的缓冲区大小；
proxy_buffers ：设置代理缓冲区大小，Nginx 针对单个连接，缓存来自代理服务器的响应，网页平均在32k以下的话，可以设置为 4 32K ；
proxy_busy_buffers_size ：设置高负荷下的缓冲大小，一般为 proxy_buffers 的两倍；
proxy_max_temp_file_size ：的用途介绍：当 proxy_buffers 放不下后端服务器的响应内容时，会将一部分保存到硬盘的临时文件中，这个值用来设置最大临时文件大小，默认1024M，它与 proxy_cache 没有关系；大于这个值，将从 upstream 服务器传回，设置为 0 禁用；
proxy_temp_file_write_size ：当缓存被代理的服务器响应到临时文件时，这个选项限制每次写临时文件的大小；
proxy_temp_path ：用于指定临时文件所在的目录。
————————————————

```

#### 负载均衡

```
upstream backend {
	server 192.168.56.10:8080 max_fails=2 fail_timeout=30s backup; # 热备
	server 192.168.56.11:8080 max_fails=2 fail_timeout=30s;
}

```

### server

```
server {
    # 监听端口
    listen 8080;
    
    # 监听服务器地址
    server_name 192.168.56.10;
    
    # 每个连接请求上限次数
    keepalive_requests 120;
    
    # 字符集
    charset utf-8;
    
    # 服务日志所在目录以及日志格式
    access_log logs/host80.log myLogFormat;
    
    # 错误页
    error_page  404  /404.html;
	error_page  500 502 503 504  /50x.html;
}
监听的端口，默认80，小于1024的要以root启动；
监听的服务器地址可以是 IP 或者域名，并且可以使用正则表达式进行匹配；
日志格式的定义和 http 模块的定义方式相同；
错误页的地址为：server_name + error_page。
```

#### ssl

在请求方式中，如果使用 *https* 进行请求的话是需要证书，这时就要对 *https* 请求设置 *ssl*：

```
server {
	# 开启 ssl
	ssl on;
	
	# ssl 证书路径
	ssl_certificate /opt/ssl/nginx.crt;
	
	# ssl 证书秘钥
	ssl_certificate_key /opt/ssl/nginx.key;
	
	# ssl 会话超时时间
	ssl_session_timeout 1d;
	
	# ssl 缓存
	ssl_session_cache shared:SSL:50m;
	
	# ssl 会话票据
	ssl_session_tickets off;
	
	# ssl 协议版本
	ssl_protocols TLSv1.2;
	
	# ssl 密码套件
	ssl_ciphers  'HIGH:!aNULL:!MD5';
	
	# 开启 ssl 服务密码套件
	ssl_prefer_server_ciphers on;
}

```

### location

```
location  ~*  ^.+$ {
	# 服务器的默认网站根目录位置
    root /var/www/html;
    
    # 默认访问的文件名
    index  index.html index.htm index.jsp;

	# 拒绝的 IP
	deny 192.168.56.21;
	deny all;

	# 允许的 IP 
	allow 192.168.56.10;
	allow all;
}
紧跟在 location 后面的是 location 模块监听的 url 地址，也就是 location 块的匹配规则，只有匹配正确的地址才会进入该 location 块，可以使用正则表达式进行匹配（~表示区分大小写，~* 表示不区分大小写）；
root ：定义服务器的默认网站根目录位置，如果 LocationURL 匹配的是子目录或文件，root 指令没什么作用，一般放在 server 指令里面或 LocationURL 为 / 的 location 块下；
index ：定义该 location 路径下默认访问的文件名，一般跟 root 的路径放在一起。
————————————————
```

#### 设置响应头

```
location {
    # 设置允许跨域类型
    add_header Access-Control-Allow-Origin * always;
    
    # 是否允许信任证书
    add_header Access-Control-Allow-Credentials 'true' always;
    
    # 允许的请求头类型
    add_header Access-Control-Allow-Headers * always;
    
    # 设置允许的请求方式
    add_header Access-Control-Allow-Methods 'PUT, GET, POST, DELETE, OPTIONS' always;
    
    # 处理 OPTIONS 请求
    if ($request_method = 'OPTIONS') {
        return 204;
    }
}

为了避免出现失效问题，一般在都在最后面添加 always ；
允许的请求头类型包括：Origin、X-Requested-With、content-Type、Accept、Authorization、uuid 等
```

#### 设置代理服务器

```
location {
    # 反向代理服务器地址
    proxy_pass  http://192.168.56.33;
        
    # 是否重定向代理服务器地址
    proxy_redirect off;
}
设置向代理服务器发送请求时的请求头数据：
location {
    # cookie
    proxy_pass_header  Set-Cookie;
    # 主机名
    proxy_set_header Host $host;
    # 真实 IP
    proxy_set_header X-Real-Ip $remote_addr;
    # 表示 HTTP 请求端真实 IP
    proxy_set_header X-Forwarded-For $remote_addr;
}

```

**更多关于 Nginx 配置文档可以参考 Nginx 官方文档**：http://nginx.org/en/docs/

### 配置样例

```
# 工作进程数
worker_processes  1;

# 日志文件路径
error_log  logs/error.log;

# 进程运行文件路径
pid        logs/nginx.pid;


events {
	# 使用 epoll 事件驱动
	use epoll;

	# 最大连接数
    worker_connections  1024;
}


http {
	# 文件类型设置
    include       mime.types;
    default_type  application/octet-stream;

    # 日志格式
    log_format  mainFromat  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    # 服务日志
    access_log  logs/access.log  mainFromat;

    # 开启高效文件传输模式
    sendfile        on;

    # 配置 tcp 发送模式
    tcp_nopush     on;
    tcp_nodelay on;

	# 长连接超时时间
    keepalive_timeout  65;

    # 请求头
    client_header_buffer_size 32k;
    large_client_header_buffers 4 32k;

    # 请求体
    client_body_buffer_size  128k;
    client_max_body_size  10m;

    # 设置 gzip
    gzip  on;
    gzip_disable "msie6";
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_buffers 16 8k;
    gzip_http_version 1.1;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # 代理服务器相关设置
    proxy_connect_timeout  75;
    proxy_read_timeout  75;
    proxy_send_timeout  100;


    # 监听http服务
    server {

    	# 服务器端口地址
        listen       80;
        server_name  192.168.56.10;

        # 字符集
        charset utf-8;

        # 服务日志路径
        access_log  logs/host.access.log  mainFromat;

        # 地址定位模块
        location / {
            root   html;
            index  index.html index.htm index.jsp;
        }

        location /demo {
        	# 添加反向代理服务器
        	proxy_pass  http://192.168.56.10:8080;
        	proxy_redirect off;
			proxy_pass_header  Set-Cookie;
			proxy_set_header Host $host;
			proxy_set_header X-Real-Ip $remote_addr;
			proxy_set_header X-Forwarded-For $remote_addr;

			# 添加请求头
			add_header Access-Control-Allow-Origin * always;
			add_header Access-Control-Allow-Credentials 'true' always;
			add_header Access-Control-Allow-Methods 'PUT, GET, POST, DELETE, OPTIONS' always;
			add_header Access-Control-Allow-Headers * always;

			# 处理 OPTION 请求
			if ($request_method = 'OPTIONS') {
				return 204;
			}
        }

        
        # 重定向错误页到静态页
        error_page   404              /404.html;
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

    }

    # 监听https服务
    server {
        listen       443   ssl;
        server_name  192.168.56.10;

        # ssl 设置
    	ssl_certificate /opt/ssl/nginx.crt;
    	ssl_certificate_key /opt/ssl/nginx.key;
    	ssl_session_timeout 1d;
    	ssl_session_cache shared:SSL:50m;
    	ssl_session_tickets off;
    	ssl_protocols TLSv1.2;
        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;
        ssl_stapling on;
        ssl_stapling_verify on;

       location / {
           root   html;
           index  index.html index.htm;
       }
    }

    # 监听其他端口服务
    server {
       listen       8081;
       server_name  localhost;

       location / {
           root   html;
           index  index.html index.htm;
       }
    }
}
```

