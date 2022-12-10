const express=require("express");
const path=require("path");  //path for join
const app=express();

app.get('/',function(req,res){  //default method
    res.send("hello");
})

app.get('/about',(req,res)=>{ //for get the item
    res.send("hello its about");
})
app.use(function(req,res,next){    //for session setup
    console.log("helllo user logged")
    next()
})
app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})
app.post('/signup',(req,res)=> //to post the item
{
    res.sendFile(path.join(__dirname,"hello.html"))
})
app.listen(3000,function(){  //for listen which port is running
    console.log("server started");
})