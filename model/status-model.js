const mongoose = require("mongoose")

let StatusSchema = new mongoose.Schema({
    statusName:{
        type:String,
        require:true
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    }
})

let StatusModel = mongoose.model("status",StatusSchema)
module.exports = StatusModel