const mongoose = require('mongoose')

const  urlSchema = new mongoose.Schema({
    shortId :{
        type: String,
        required: true,
        unique: true,
    },

    redirectUrl :{
        type: String,
        required: true,

    },

    visitHistory :[{
        timestamps :{
            type: Number
        }
    }]
},

{timestamps : true}
);

//creating the model  "url" is the name of collection and URL is the name of the model

const URL = mongoose.model("url" , urlSchema);

// we now export our model

module.exports = URL ;