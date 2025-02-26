## git命令

```text
git init //把这个目录变成Git可以管理的仓库
git add README.md //文件添加到仓库
git add . //不但可以跟单一文件，还可以跟通配符，更可以跟目录。一个点就把当前目录下所有未追踪的文件全部add了 
git commit -m "first commit" //把文件提交到仓库
git branch -M main
git@github.com:wangjiax9/practice.git //关联远程仓库
git push -u origin master //把本地库的所有内容推送到远程库上
```

## 向已有仓库添加

```
git remote add origin git@github.com:hingq/C-C-.git
git branch -M main
git push -u origin main
```

### 生成密钥

```text
ssh-keygen -t rsa -C “amazyko@foxmail.com”
```

测试

```
$ ssh -T git@github.com

```

```
git log - 查看历史提交记录。
```

