const mongoose = require("mongoose")

let ProjectModuleSchema = new mongoose.Schema({
    moduleName:{
        type:String,
        require:true
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    },
    estimatedhours:{
        type:Number
    },
    startdate:{
        type:String
    },
    enddate:{
        type:String
    },
    utilisedhours:{
        type:Number
    }
})

let ModuleModel = mongoose.model("module",ProjectModuleSchema)
module.exports = ModuleModel