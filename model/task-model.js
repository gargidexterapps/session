const mongoose = require("mongoose")

let TaskSchema = new mongoose.Schema({
    taskName:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    startdate:{
        type:String
    },
    enddate:{
        type:String
    },
    totalhours:{
        type:Number
    },
    utilisedhours:{
        type:String
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    },
    module:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"module"
    },
    status:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"status"
    }
})

///model

let TaskModel = mongoose.model("task",TaskSchema)
module.exports = TaskModel