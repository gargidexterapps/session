const TaskModel = require("../model/task-model")
const TaskSchema = require("../model/task-model")


module.exports.addTask = function(req,res){

     let taskName = req.body.taskName
     let description = req.body.description
     let startdate = req.body.startdate
     let enddate = req.body.enddate
     let totalhours = req.body.totalhours
     let utilisedhours = req.body.utilisedhours
     let project = req.body.project
     let module = req.body.module
     let status = req.body.status
     
  

     

     let task = new TaskSchema({
         taskName: taskName,
         description:description,
         startdate:startdate,
         enddate:enddate,
         totalhours:totalhours,
         utilisedhours:utilisedhours,
         project:project,
         module:module,
         status:status
     })

     task.save(function(err,success){
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
                 msg:"Task added successfully",
                 status:200,
                 data:success
             })
         }

     })

}

module.exports.getAllTask = function(req,res){
   TaskModel.find().populate("project").populate("module").populate("status").exec(function(err,success){
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

module.exports.deleteTask = function(req,res){
    let TaskId = req.params.TaskId

    TaskModel.deleteOne({"_id":TaskId},function(err,success){
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
                msg:"Task removed..",
                status:200,
                data:success
            })
        }
    })
}

module.exports.updateTask = function(req,res){
    let TaskId = req.body.TaskId
    let taskName = req.body.taskName
    let startdate = req.body.startdate
    let enddate = req.body.enddate
    let description = req.body.description
    let totalhours = req.body.totalhours
    let utilisedhours = req.body.utilisedhours
    let project = req.body.project
    let module = req.body.module
    let status = req.body.status
    
    
    TaskModel.updateOne({_id:TaskId},{taskName:taskName,description:description,startdate:startdate,enddate:enddate,totalhours:totalhours,utilisedhours:utilisedhours,project:project,status:status,module:module},function(err,success){
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

