const express = require('express')
const {handleCreateNewUser , handleGetAllUsers , handlegetUserById,handleUpdateUsersById , handleDeleteUsersById} = require('../controllers/user')

const router = express.Router();

router.post('/' , handleCreateNewUser)


router.get('/' , async(req , res)=>{
  

    // here User is model
    const alldbusers = await User.find({}) 
    const html = `
    <ul>

     ${alldbusers.map((data)=>
        `<li>${data.firstName} - ${data.email}</li>`
    ).join("")}
    </ul>`

    res.send(html);
});


router.get('/', handleGetAllUsers)


router.get('/:id' , handlegetUserById)

router.patch('/:id' , handleUpdateUsersById)

router.delete('/id' , handleDeleteUsersById);


module.exports = router
