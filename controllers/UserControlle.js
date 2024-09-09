const users = require('../user.json');
function getUser(req , res){
       try{
             res.json(users)
       }catch(err){
          
       }
}

function getUserById(req , res){
    try{
          const id = parseInt(req.params.id);
          users.forEach((elem)=>{
            if(elem.id === id){
                res.json(elem)
          }
    })
     
    }catch(err){
         console.log(err)
    }
}


module.exports = {
    getUser,
    getUserById
}