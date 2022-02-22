const mongoose = require("mongoose")

//schema

let ProjectSchema = new mongoose.Schema({
    projectName:{
      type:String,
      require:true
    },
    description:{
        type:String,
        
    },
    startdate:{
        type:String,
        require:true
    },
    enddate:{
        type:String,
        require:true
    },
    estimatedhours:{
        type:Number,
        
    },
    technology:{
        type:String,
        
    }
})

let ProjectModel = mongoose.model("project",ProjectSchema)
module.exports = ProjectModel