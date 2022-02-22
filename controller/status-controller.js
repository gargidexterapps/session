const StatusModel = require("../model/status-model")
const StatusSchema = require("../model/status-model")

module.exports.addStatus = function(req,res){

    let statusName = req.body.statusName
    let project = req.body.project

    let status = new StatusSchema({
        statusName: statusName,
        project:project
    })

    status.save(function(err,success){
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
                msg:"Status added successfully",
                status:200,
                data:success
            })
        }

    })

}

module.exports.getStatus = function(req,res){
    StatusModel.find().populate("project").exec(function(err,success){
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

 module.exports.deletestatus = function(req,res){
    let StatusId = req.params.StatusId

    StatusModel.deleteOne({"_id":StatusId},function(err,success){
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
                msg:"status removed..",
                status:200,
                data:success
            })
        }
    })
}

module.exports.updatestatus = function(req,res){
    let StatusId = req.body.StatusId
    let statusName = req.body.statusName
    let project = req.body.project
    
    
    
    StatusModel.updateOne({_id:StatusId},{statusName:statusName,project:project},function(err,success){
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
 