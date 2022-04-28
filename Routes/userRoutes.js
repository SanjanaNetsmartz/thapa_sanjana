var express = require("express");
var myctrl = require("../Controller/userController");

var approute = express.Router();
var jwt = require("../Config/jwthelper");

approute.post("/userRegCreate", myctrl.newUserReg);
approute.post("/login", myctrl.authenticate);
approute.get('/getAllUsers', jwt.verifyJwtToken, myctrl.allUsersProfile);

module.exports=approute;
