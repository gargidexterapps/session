const mongoose = require("mongoose")

let UserSchema = new mongoose.Schema({
    firstName:{
       type: String,
       require:true
    },
    email:{
       type:String,
       required:true
    },
    password:{
       type:String
    },
    role:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"role"
    }
})

let UserModel = mongoose.model("user",UserSchema)
module.exports = UserModel