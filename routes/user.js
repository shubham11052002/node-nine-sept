const express = require('express');
const router = express.Router();
const UserCintroller = require('../controllers/UserController')

router.get('/users',(req,res)=>{
       UserCintroller.getUser(req,res)
})

router.get('/users/:id',(req , res)=>{
       UserCintroller.getUserById(req,res)
})


module.exports = router;