# 使用一個輕量級的 web 服務器，這裡用 nginx
FROM nginx:alpine

# 複製靜態文件到 nginx 預設的 html 目錄
COPY . /usr/share/nginx/html

# 暴露端口（可選，默認是 80）
EXPOSE 80

# 啟動 nginx
CMD ["nginx", "-g", "daemon off;"]
