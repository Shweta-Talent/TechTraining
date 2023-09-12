// for dev dep ... --save -dev
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); //for join path

// const adminRouters = require('./routes/admin');
const projectroute=require('./routes/project')
const cdRoutes = require('./routes/cd');
const talentroute=require('./routes/talent')

const app = express();
 
// use : is for all request 
//get : is to get req
//post : for posting req
app.use(bodyParser.urlencoded({extended: false}));
app.post('/',(req,res)  =>{
    // res.status().send("page not found");
    const {body:{name,password}}=req
    res.send('to msg in postman')
    res.send({data:'to msg in postman'})
    res.status(202)
});
// app.use('/secrets', express.static(path.join(__dirname, 'public')));

// app.use('/', (req, res, next) => {
//     console.log('Everyone have to go through this middleware');
//     next();
// });

// app.use('/admin', (req, res, next) => {
//     console.log('Admin middleware');
//     next();
// });

// app.use('/cd', cdcontroller);

// app.post('/', (req, res, next) => {
//     console.log('All of post calls');
//     next();
// });

// app.get('/', (req, res) => {
//     console.log('In the base');
//     res.send('Hello');
// });


// app.use('/admin', adminRouters);
// app.use('/cd', cdRoutes);

// app.post('/', (req, res, next) => {
//     res.send({data:"hello"});
// });


// app.get('/admin', (req, res) => {
//     console.log('In the admin base');
//     res.send('Hello Admin!');
// })

// app.use((req, res, next) => {
//     console.log(__dirname);
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));


res.sendFile(express.static(path.join(__dirname, 'foldername'))); // for public access for not the routes to match and directly access that file
// can put favicon using this public folder
// __dirname is for root dir  
// path.join is for / \ as it is different in mac windows
res.json({status:'succes',data:{id:123,}})
// });

app.use('/talent',talentroute)
app.use('/cd',cdRoutes)
// app.use('/project',projectroute)
app.listen(3007 || process.env.PORT);
