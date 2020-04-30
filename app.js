var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var router = require('./router/index')

port = process.env.PORT || 7777;

app.listen(port, function() {
	console.log("Open I-Tub server!! congratulation");
});

// 이부분을 middleware 라고 한다.
app.use(express.static('public'))
app.use(bodyParser.json()) // json의 형태로 받을때
app.use(bodyParser.urlencoded({extended:true})) // 인코딩된 url 형태로 받을때
app.set('view engine', 'ejs') // view engine으로 ejs를 사용한다는 의미

app.use(router)