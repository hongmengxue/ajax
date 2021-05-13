//1.引入express
const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO AJAX')
});

app.listen(8000, () => {
    console.log("服务器已经启动，8000端口监听中...");
});