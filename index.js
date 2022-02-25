const express = require("express");
const mongoose = require("mongoose");
const sessionController = require("./controller/session-controller")
const roleController=require("./controller/role-controller")
const userController=require("./controller/user-controller")
const projectController=require("./controller/project-controller")
const projectTeamController=require("./controller/project_team-controller")
const statusController=require("./controller/status-controller")
const moduleController=require("./controller/project_module-controller")
const taskController = require("./controller/task-controller")
const usertaskController = require("./controller/user_task-controller");
const priorityController = require("./controller/priority-controller")


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",function(req,res){
    res.write("Helloo!!!!")
    res.end()
})

app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app.post("/saveuser",sessionController.saveuser)
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)

app.post("/user",userController.addUser)
app.get("/user",userController.getAllUser)
app.delete("/user/:UserId",userController.deleteUser)
app.put("/user",userController.updateUser)
app.post("/login",userController.login)

app.post("/project",projectController.addProject)
app.get("/project",projectController.getAllProject)
app.delete("/project/:ProjectId",projectController.deleteProject)
app.put("/project",projectController.updateProject)

app.post("/projectteam",projectTeamController.addteam)
app.get("/projectteam",projectTeamController.getAllProjectTeam)
app.delete("/projectteam/:ProjectTeamId",projectTeamController.deleteProjectTeam)

app.post("/status",statusController.addStatus)
app.get("/status",statusController.getStatus)
app.put("/status",statusController.updatestatus)
app.delete("/status/:StatusId",statusController.deletestatus)

app.post("/module",moduleController.addmodule)
app.get("/module",moduleController.getAllModule)
app.put("/module",moduleController.updatemodule)
app.delete("/module/:ModuleId",moduleController.deletemodule)

app.post("/task",taskController.addTask)
app.get("/task",taskController.getAllTask)
app.put("/task",taskController.updateTask)
app.delete("/task/:TaskId",taskController.deleteTask)

app.post("/usertask",usertaskController.addUserTask)
app.get("/usertask",usertaskController.getAllUserTask)
app.delete("/usertask/:UserTaskId",usertaskController.deleteUserTask)
app.put("/usertask",usertaskController.updateUserTask)

app.post("/priority",priorityController.addPriority)
app.get("/priority",priorityController.getAllPriority)
app.put("/priority",priorityController.updatePriority)
app.delete("/priority/:PriorityId",priorityController.deletePriority)


mongoose.connect('mongodb://localhost:27017/timetracking',function(err){
    if(err)
    {
        console.log("data is not connected");
    }
    else{
        console.log("data is connected");
    }
}) 
app.listen(3000,function(){
    console.log("Server started on 3000");
})


 
                