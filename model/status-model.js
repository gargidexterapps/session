const mongoose = require("mongoose")

let StatusSchema = new mongoose.Schema({
    statusName:{
        type:String,
        require:true
    },
    
})

let StatusModel = mongoose.model("status",StatusSchema)
module.exports = StatusModel