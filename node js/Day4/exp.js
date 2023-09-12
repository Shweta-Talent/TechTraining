//require express to get used
const express = require ('express')
const bodyparser =require('body-parser')

//start initialize the server of express
const app=express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use("/",(req,res,next) =>
{
    console.log("for all user middleware")
    next();
});
//method

app.use("/admin",(req,res,next)  =>
{
    console.log("middleware in admin ");
    next();
});
//middleware needs next 

app.use("/talent",(req,res,next)  =>
{
    console.log("middleware in talent");
    next();
});

app.use("/cd",(req,res,next)  =>{
    console.log("middleware in cd");
    next();
});

app.use("/agent",(req,res,next)  =>{
    console.log("middleware of agent");
    next();
});

app.get("/",(req,res)  =>{
    res.send("on page");
});

app.get('/admin',(req,res)  =>{
    res.send("admin page");
});

app.get('/talent',(req,res)  =>
{
    res.send("on talent page");
});

app.get('/agent',(req,res) =>{
    res.send("on agent page");
});

app.get('/cd',(req,res)  =>{
    res.send("on cd page")
});





app.listen(3007);



									
