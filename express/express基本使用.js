//1.引入express
const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('HELLO EXPRESS')
});

app.listen(8000, () => {
    console.log("服务器已经启动，8000端口监听中...");
});