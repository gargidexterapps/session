const Project_TeamModel = require("../model/project_team-model")
const project_teamSchema = require("../model/project_team-model")


module.exports.addteam = function(req,res){

    
    let user = req.body.user
    let project = req.body.project
   

 

    let team = new project_teamSchema({
        
        user:user,
        project:project
        
    })

    team.save(function(err,success){
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
                msg:"User added successfully",
                status:200,
                data:success
            })
        }

    })

}

module.exports.getAllProjectTeam=function(req,res){
    //console.log(req.query.ProjectId);
    Project_TeamModel.find({project:req.query.ProjectId}).populate("user").populate("project").exec(function(err,success){
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
               msg:"Project team retrieved",
               status:200,
               data:success
           })
       }
    })
}


module.exports.deleteProjectTeam = function(req,res)
{
    let ProjectTeamId = req.params.ProjectTeamId

    Project_TeamModel.deleteOne({"_id":ProjectTeamId},function(err,success){
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
                msg:"Project team removed..",
                status:200,
                data:success
            })
        }
    })
}
