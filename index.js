require('./config/db');
const express = require("express");
const bodyparser = require("body-parser");
const router = require('./Routes/userRoutes.js');

const app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/', router);



const port=process.env.PORT || 8000
app.listen(port,()=>{
    console.log("Server is running at http://localhost:"+port);
});