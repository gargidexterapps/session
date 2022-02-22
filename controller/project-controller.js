const ProjectModel = require("../model/project-model")
const ProjectSchema = require("../model/project-model")

module.exports.addProject = function(req,res){

    let projectName = req.body.projectName
    let description = req.body.description
    let startdate = req.body.startdate
    let enddate = req.body.enddate
    let estimatedhours = req.body.estimatedhours
    let technology = req.body.technology

    let project = new ProjectSchema({
        projectName: projectName,
        description:description,
        startdate:startdate,
        enddate:enddate,
        estimatedhours:estimatedhours,
        technology:technology
    })

    project.save(function(err,success){
        if(err)
        {
            res.json({
                msg:"Something went wrong",
                status:-1,
                data:err
            })
        }
        else
        {
            res.json({
                msg:"Project added successfully",
                status:200,
                data:success
            })
        }
    })
}

module.exports.getAllProject = function(req,res){
    ProjectModel.find(function(err,success){
        if(err)
       {
           res.json({
               mgs:"Something went wrong",
               status:-1,
               data:err
           })
       }
       else{
           res.json({
               msg:"Users retrieved",
               status:200,
               data:success
           })
       }
    })
}
module.exports.deleteProject = function(req,res)
{
    let ProjectId = req.params.ProjectId

    ProjectModel.deleteOne({"_id":ProjectId},function(err,success){
        if(err)
        {
            res.json({
                msg:"something went wrong",
                status:-1,
                data:err
            })
        }
        else{
            res.json({
                msg:"Project removed..",
                status:200,
                data:success
            })
        }
    })
}

module.exports.updateProject = function(req,res){
    let ProjectId = req.body.ProjectId
    let projectName = req.body.projectName
    let description = req.body.description
    let startdate = req.body.startdate
    let enddate = req.body.enddate
    let estimatedhours = req.body.estimatedhours
    let technology = req.body.technology
    
    
    ProjectModel.updateOne({_id:ProjectId},{projectName:projectName,description:description,startdate:startdate,enddate:enddate,estimatedhours:estimatedhours,technology:technology},function(err,success){
        if(err)
        {
            res.json({
                msg:"Something went wrong",
                status:-1,
                data:err
            })
        }
        else{
            res.json({
                msg:"Update successfully",
                status:200,
                data:success
            })
        } 
    })

}
















