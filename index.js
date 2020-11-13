const express =require('express')
const app=express();
const port = 2000
const morgan =require('morgan')

// //로거만들기
// var logger = function(req,res,next){
    
//     console.log(req.url)

//     //next는 다음 미들웨어를 실행하거나 라웃트를 실행하도록한다.
//     next();
// }
// app.use(logger)//로거

//router소환
const user = require('./router/user')

//미들웨어
app.use(morgan('dev'))//상새한 로거
app.use('/user',user)// 요청이 /user로 들어올경우 user 라우터를 사용하겠다라는뜻
app.use(express.json())
//정적파일
app.use('/',express.static(__dirname+'/client'))

//DB연결
const mongoDBURL="mongodb+srv://test:test@test.3qxcs.mongodb.net/node_react?retryWrites=true&w=majority"
const mongoose = require('mongoose')
mongoose.connect(mongoDBURL,{useUnifiedTopology: true, useNewUrlParser: true}).then(()=>{console.log("mongoDB Connect")}).catch((err)=>{console.log(err)})

app.listen(port,(err)=>{
    if(err)console.log(err)
    console.log("port : ",port," is open")
})