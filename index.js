const express = require('express');
const app = express();
//middleware
app.use(express.json())
const urlRoute = require('./routes/url');
const URL = require('./models/url');
const {connectToMongoDB} = require('./connect');
connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(()=>
  console.log("connected to mongodb")
)



app.use('/url' , urlRoute)
app.get('/:shortId' , async(req , res)=>{

    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push:{
                visitHistory:{
                 timestamp:   Date.now()
                }
            },
        }
    );
    res.redirect(entry.redirectUrl);
});

const PORT = 8001;
app.listen(PORT , ()=>
    console.log(`Server is running at: ${PORT}`)
)
