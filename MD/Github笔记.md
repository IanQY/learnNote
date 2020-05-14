# Github笔记

## git安装过程
[链接](https://git-scm.com)
### 安装步骤

* 避免中文目录
* 集成到Windows菜单（保持默认）
* 默认文本编辑器 *vim编辑器*
* 调整PATH环境变量
* *  OpenSSL library（通用）
  *  Windows Secure Channel library
* Windows&Unix行末换行符转换方式
* 使用默认终端 MinTTY

## git结构
### 本地结构
#### 本地库
* 历史版本（git commit ↑）
#### 暂存区
* 临时存储
#### 工作区
* 写代码（git add ↑）

## 本地库和远程库交互
``` 
    pull
    push
    clone
    push 
```

## 本地库初始化

* 使用Linux命令
```bash
$ mkdir learngit
$ cd learngit
$ pwd
/Users/michael/learngit
```
* 命令：git init
```bash
$ git init
Initialized empty Git repository in /Users/michael/learngit/.git/
```

```bash
$ ll .git/
total 8
-rw-r--r-- 1 admin 197121 130  5月 12 18:32 config
-rw-r--r-- 1 admin 197121  73  5月 12 18:32 description
-rw-r--r-- 1 admin 197121  23  5月 12 18:32 HEAD
drwxr-xr-x 1 admin 197121   0  5月 12 18:32 hooks/
-rw-r--r-- 1 admin 197121 169  5月 13 10:01 index
drwxr-xr-x 1 admin 197121   0  5月 12 18:32 info/
drwxr-xr-x 1 admin 197121   0  5月 13 10:01 objects/
drwxr-xr-x 1 admin 197121   0  5月 12 18:32 refs/

```

## 设置签名

```bash
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```


* 作用:区分不同开发人员的身份

* 辨析:这里设置的签名和登录远程库(代码托管中心)的账号、密码没有任何关系。
* 命令
*   * 项目级别/仓库级别:仅在当前本地库范围内有效
        * >git config
        * 信息保存位置： ./git/config 文件
        ```bash
        $ cat .git/config
        [core]
                repositoryformatversion = 0
                filemode = false
                bare = false
                logallrefupdates = true
                symlinks = false
                ignorecase = true
        [user]
                name = Ian
                email = ian@email.com

        ```


        ```bash
        $ cat ~/.gitconfig
        [user]
            name = Ian
            email = ian@email.com

        ```
        

    * 系统用户级别:登录当前操作系统的用户范围级别优先级
        * >git config --global
    * 就近原则: 项目级别优先于系统用户级别，二者都有时采用项目级别的签名

    * 如果只有系统用户级别的签名，就以系统用户级别的签名为准
    * 二者都没有不允许
## 添加提交以及查看状态

* 查看状态
        
     $ git status

第一步，用命令git add告诉Git，把文件添加到仓库：

    $ git add readme.txt
执行上面的命令，没有任何显示，这就对了，Unix的哲学是“没有消息就是好消息”，说明添加成功。

第二步，用命令git commit告诉Git，把文件提交到仓库：
```bash
$ git commit -m "wrote a readme file"
[master (root-commit) eaadf4e] wrote a readme file
 1 file changed, 2 insertions(+)
 create mode 100644 readme.txt
 ```