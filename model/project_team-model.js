const mongoose = require("mongoose")

let project_teamSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    }
})
let Project_TeamModel = mongoose.model("project_Team",project_teamSchema)
module.exports = Project_TeamModel
