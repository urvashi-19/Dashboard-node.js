const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/blogify').then(
    e=>console.log('Mongodb connected')
)
const userRoute = require('./routes/user');


//middleware for form
app.use(express.urlencoded({extended:false}));

//ejs middleware and views is folder contain all html and css file
const path = require('path');
app.set('view engine','ejs');
app.set('views' ,path.resolve('./views') )


//routing
app.get('/',(req , res)=>{
    res.render('home');
})

app.use('/user' ,userRoute); //koi bhi page agar  /user se start ho


const PORT = 8000;
app.listen(PORT  , ()=>{
    console.log(`Server started at ${PORT}`)
})
