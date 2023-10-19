const User = require('../models/user')

async function handleGetAllUsers(req , res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handlegetUserById(req , res){
    const user  =  await User.findById(req.params.id);
    if(!user) return res.status(404).json({error: "user not found"});

    return res.json(user);
}

async function handleUpdateUsersById(req , res){
    await User.findByIdAndUpdate(req.params.id , {lastName : "changes"});

    return res.json({status:"success"});
}

async function handleDeleteUsersById(req , res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:"success"});
}

async function handleCreateNewUser(req , res){
    const body = req.body;
    // setting the status code
    if(!body || !body.first_name || !body.gender){
        return res.status(400).json({msg:"somethings is pending"})
    }
    
    // adding data to the db
      
    const result = await User.create({
        firstName : body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    })

    console.log("result: " , result)

   return  res.status(201).json({msg: "successfully done.." , id: result_.id })
 
}

module.exports = {
    handleGetAllUsers,
    handlegetUserById,
    handleUpdateUsersById,
    handleDeleteUsersById,
    handleCreateNewUser
}