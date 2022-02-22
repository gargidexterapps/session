const ModuleModel = require("../model/project_module-model")
const ProjectModuleSchema = require("../model/project_module-model")

module.exports.addmodule = function(req,res){
    let moduleName = req.body.moduleName
    let project = req.body.project
    let estimatedhours = req.body.estimatedhours
    let startdate = req.body.startdate
    let enddate = req.body.enddate
    let utilisedhours = req.body.utilisedhours

    let module = new ProjectModuleSchema({
        moduleName: moduleName,
        project:project,
        estimatedhours:estimatedhours,
        startdate:startdate,
        enddate:enddate,
        utilisedhours:utilisedhours
    })

    module.save(function(err,success){
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
                msg:"Module added successfully",
                status:200,
                data:success
            })
        }

    })
}


module.exports.getAllModule = function(req,res){
    ModuleModel.find().populate("project").exec(function(err,success){
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
                msg:"Modules retrieved",
                status:200,
                data:success
            })
        }
    })
 }
 
 module.exports.deletemodule = function(req,res){
     let ModuleId = req.params.ModuleId
 
     ModuleModel.deleteOne({"_id":ModuleId},function(err,success){
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
                 msg:"Module removed..",
                 status:200,
                 data:success
             })
         }
     })
 }

module.exports.updatemodule = function(req,res){
    let ModuleId = req.body.ModuleId
    let moduleName = req.body.moduleName
    let estimatedhours = req.body.estimatedhours
    let startdate = req.body.startdate
    let enddate = req.body.enddate
    let utilisedhours = req.body.utilisedhours
    let project = req.body.project
    
    
    ModuleModel.updateOne({_id:ModuleId},{moduleName:moduleName,estimatedhours:estimatedhours,startdate:startdate,enddate:enddate,utilisedhours:utilisedhours,project:project},function(err,success){
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