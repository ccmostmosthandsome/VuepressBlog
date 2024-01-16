# 一、Docker配置Jenkins实现自动化部署1111111111111
222222222222222222
## 下载镜像<Badge text="提示" type="info" />


<BiliBili bvid="BV1n34y1u7y5" />

<!-- <PDF url="https://test.com/assets/Onedrie.pdf" /> -->
```
docker pull jenkins/jenkins:lts //最新版
```

## 查看镜像

```
docker images
docker inspect jenkins/jenkins:lts
```

## 创建Jenkins目录（先看，别敲）

```
# mkdir /data/jenkins_home
# 用于数据卷挂载
# 方式数据卷不能写入，添加权限  // 用户组改变
chown -R 1000:1000 /data/jenkins_home
chown -R 1000:1000 /data
cd /data
# 查看目录权限
ls -lh

docker run -d --name jenkins -p 9999:8080 -v /data/jenkins_home:/var/jenkins_home jenkins/jenkins:lts 
# 以上命令会无法启动，宿主机/data/无法授权访问

# 注意用过是snap安装的docker: 可能启动容器还报错，无法启动
# docker是由snap安装的, 这种情况下,docker只在用户目录下拥有读写权限. 即/root

# 我的百度云服务器docker snap安装的是能root用户目录下有权限, 以上步骤都不需要
# 执行以下步骤即可
mkdir /root/data/jenkins_home
# 这里注意，虽然/root下可以了，但是容器内启动exit(1)退出
docker logs jenkins
# 查看日志是内部/var/jenkins_home  无法授权访问
# 再执行以下
chown -R 1000:1000 /root/data/jenkins_home

docker rm jenkins

docker run -d --name jenkins -p 9999:8080 -v /data/jenkins_home:/var/jenkins_home jenkins/jenkins:lts 

docker ps

# 访问


```

## 启动容器

```
docker run -d --name jenkins -p 9999:8080 -v /root/data/jenkins_home:/var/jenkins_home jenkins/jenkins:lts
```

**备注**

```
# 备注：
-d //启动在后台
--name //容器名字
-p //端口映射（9999：宿主主机端口，8080：容器内部端口）
-v //数据卷挂载映射（/root/data/jenkins_home：宿主主机目录，另外一个即是容器目录）
jenkins/jenkins:lts //Jenkins镜像（最新版）
```

**端口开放**

宿主机9999端口需要开放， 访问地址，第一次启动可能需要等待几分钟

```
http://xxxx:9999/login?from=%2F
```



## 管理配置Jenkins

### 解锁

```
密码路径：var/jenkins_home/secrets/initialAdminPassword //容器内部
查找密码：
docker exec -it jenkins bash //进入jenkins容器
cat /var/jenkins_home/secrets/initialAdminPassword //查看密码
```

### 安装插件

```
新手安装建议选择：Install suggested plugins，安装过程十分钟。
```

### 管理员用户创建

```
这个用户就是最大管理者权限，相当于admin

以下是我创建的用户。根据个人需求创建。
根据页面提示框输入
用户名： 
密码：
确认密码：
全名：
电子邮箱地址:
```

下一步，下一步

## 配置完成 

访问地址

```
http://xxxx:9999/
```



