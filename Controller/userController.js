const mongoose = require("mongoose");
require("../Config/passportconfig");

require("../Model/userModel");
const passport = require("passport");
const jwt = require("jsonwebtoken");

var USERRegister = mongoose.model("userRegister");


//for registerSchema (create api
module.exports.newUserReg = (req,res) => {
    var userRegData = new USERRegister({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        password: req.body.password
    });

    userRegData.save().then((documents)=>{
        console.log("----Documents----", documents)
        return res.status(200).json({
            success:true,
            message:'New user has been added',
            data:documents
        })
    })
    .catch((err)=>{
        return res.status(401).json({
            success:false,
            message:'Error in adding data',
            error:err.message
        })
    })
}

//to check authentication while login and will generate a token. Basically login

module.exports.authenticate=(req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
        if(err) 
        return res.status(404).json(err); 
        if(user) 
        //console.log("--controllerfile ka user", user)
        return res.status(200).json({
            "token":jwt.sign({_id:user._id},"SecretToken",{expiresIn:'20m'}),
            "user":user
        });
        if(info) return res.status(401).json(info);
    })(req,res,next)
}
//[const users = User.find({ _id: { $ne: user._id } })
  module.exports.allUsersProfile=(req,res,next)=>{
     console.log("----abshdbd--", req._id)
     const id= req._id;
     console.log("--idddd---",  )
     USERRegister.find({ _id:{ $ne: id}}).then((documents)=>{
         console.log("-----ALL DATA----", documents)
         return res.status(200).json({
             success:true,
             message:'user record found',
             data:documents,
             
         })
     })
     .catch((err)=>{
         console.log("-----ERRRIR", err)
         return res.status(401).json({
             sucess:false,
             message:'Error finding records',
             error:err.message
         })
     })
 }


