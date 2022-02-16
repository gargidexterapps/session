const mongoose = require("mongoose")

//schema 

let RoleSchema  = new mongoose.Schema({
    rolename:{
        type:String
    }
})


//model
let RoleModel = mongoose.model("role",RoleSchema)
module.exports = RoleModel