// Step1 : reuire the mongoose model
const mongoose = require('mongoose');

// Step3 : make the userSchema
const userSchema = new mongoose.Schema({
    firstName :{
        type : String,
        required: true,
    },

    lastName :{
        type: String,

    },

    email:{
        type: String,
        required: true,
        unique: true,
    },

    gender:{
        type: String
    },

    jobTitle:{
        type: String
    }
},
  { timestamps : true}
);

// Step4 : make the model("users") 
const User =  mongoose.model("user" , userSchema);

module.exports = User;