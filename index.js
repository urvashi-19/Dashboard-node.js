const express = require('express');
const app = express()
// middleware - Pluggin
const PORT = 8000;
app.use(express.urlencoded({extended:false}))
const mongoose = require('mongoose');
const userRouter = require('./routes/user')
const {connectMongoDb} = require('./connection')
const {logResRes} = require('./middleware')


connectMongoDb('mongodb://127.0.0.1:27017/salesforce').then(
    ()=> console.log("mongodb connected...")
).catch(
    (err) => console.log("err found", err)
);



app.use(logResRes("log.txt"));

app.use('/api/users' , userRouter);


app.listen(PORT , ()=>{
    console.log("server is running at " , PORT);
})