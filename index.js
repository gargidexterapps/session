const express = require("express");
const mongoose = require("mongoose");
const sessionController = require("./controller/session-controller")
const roleController=require("./controller/role-controller")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",function(req,res){
    res.write("Helloo!!!!")
    res.end()
})

app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app.post("/saveuser",sessionController.saveuser)
app.post("/roles",roleController.addRole)



mongoose.connect('mongodb://localhost:27017/timetracking',function(err){
    if(err)
    {
        console.log("data is not connected");
    }
    else{
        console.log("data is connected");
    }
}) 
app.listen(3000,function(){
    console.log("Server started on 3000");
})
