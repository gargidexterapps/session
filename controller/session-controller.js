const fs = require("fs")
const { getMaxListeners } = require("process")
const { getEnabledCategories } = require("trace_events")
function login(req,res){
    res.write("Login")
    res.end()
}

function signup(req,res){
    let signupHtml = fs.readFileSync("./views/Signup.html")
    res.write(signupHtml)
    res.end()
}

function saveuser(req,res)
{
  res.json({
      status: 200          
  })
    
}



module.exports.login = login
module.exports.signup = signup
module.exports.saveuser=saveuser