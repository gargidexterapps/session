

const RoleModel = require("../model/role-model")

module.exports.addRole = function(req,res){
    console.log(req.body.roleName);

    let role = new RoleModel({
        roleName:req.body.roleaName
    })
    
    role.save(function(err,success){
        if(err){
            console.log(err);
            res.json({
                msg:"na thyu lya",status:-1,data:req.body
            }) 
        }
            else
            {
                res.json({
                    msg:"role thai gyu lya",status:200,data:"success"
                })
            }
        
    })
}