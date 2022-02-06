const express = require ('express');
const app=express();
const fs= require('fs')
const path= require('path')
const users=require('./users')
const PORT= process.env.PORT||5000

/**Middleware **/
const message=(req,res,next)=>{
    console.log("hello")
    next()
}
/***Routes***/
// app.get('/',(req,res)=>{
//     res.send("<h1>Hello World</h1>");
 
// })
// app.get('/about',(req,res)=>
// res.send("<h1>About Page</h1>")
// )
// app.get("/users",message,(req,res)=>{
//     res.send(users)
// })
// app.get('/index.html',(req,res)=>
// fs.readFile('/index.html','utf-8',(err,data)=>
// {
//     err?console.log(err):console.log(data);
// }
// ))
app.get('/',(req,res)=>
res.sendFile(path.join(__dirname,"public","index.html")))

app.use(express.static(path.join(__dirname,'public')))

const server=app.listen(PORT,(err)=>err?console.log(err):console.log(`server runnig on port ${PORT}`))