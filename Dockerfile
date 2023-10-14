# 指定基础镜像
FROM nginx

## 项目代码
COPY ./dist/ /usr/share/nginx/html/vue3-quick-start/

# nginx配置
#COPY ./nginx/ /etc/nginx/

## nginx目录都是放在/usr/local/nginx下面的，docker安装是和老版本nginx一样的目录
