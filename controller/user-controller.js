const UserModel = require("../model/user-model")
const UserSchema = require("../model/user-model")
const bcrypt = require("bcrypt")

module.exports.addUser = function(req,res){

     let firstName = req.body.firstName
     let email = req.body.email
     let password = req.body.password
     let role = req.body.role

     let encpassword = bcrypt.hashSync(password,10)

     let user = new UserSchema({
         firstName: firstName,
         email:email,
         password:encpassword,
         role:role
     })

     user.save(function(err,success){
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

module.exports.getAllUser = function(req,res){
   UserModel.find().populate("role").exec(function(err,success){
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

module.exports.deleteUser = function(req,res){
    let UserId = req.params.UserId

    UserModel.deleteOne({"_id":UserId},function(err,success){
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
                msg:"User removed..",
                status:200,
                data:success
            })
        }
    })
}

module.exports.updateUser = function(req,res){
    let UserId = req.body.UserId
    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password
    
    
    UserModel.updateOne({_id:UserId},{firstName:firstName,email:email,password:password},function(err,success){
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

module.exports.login = function(req,res)
{
    let param_email=req.body.email
    let param_password=req.body.password

    let isCorrect = false

    UserModel.findOne({email:param_email},function(err,success){
        if(success)
        {
            let ans = bcrypt.compareSync(param_password,success.password)
            if(ans == true)
            {
                isCorrect = true
            }

        }

        if(isCorrect==false)
        {
            res.json({
                msg:"Invalid Credentials.....",
                status:-1,
                data:req.body
            })
        }
        else{
            res.json({
                msg:"Login successfully",
                status:200,
                data:success
            })
        } 

    })


}