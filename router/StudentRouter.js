const express = require("express")
const StudentContriller = require("../controllers/studentController")
const {verifyToken, verifyStudent, verifyAdmin} = require("../utils/VerifyToken")

const Routers = express.Router()

// Routers.route("/Check").get(verifyToken,(req,res, next)=>{
//     res.status(200).send("hello user, you are logged in")
// })
// Routers.route("/Checkuser/:id").get(verifyStudent,(req,res, next)=>{
//     res.status(200).send("hello user, you are logged in and you can delete your account")
// })
// Routers.route("/Checkadmin/:id").get(verifyAdmin,(req,res, next)=>{
//     res.status(200).send("hello admin, you are logged in and you can delete all accounts")
// })


Routers.route("/").get(verifyAdmin, StudentContriller.GetallStudent)
Routers.route("/:id").patch(verifyStudent, StudentContriller.UpdateStudent).get(verifyStudent, StudentContriller.GetStudent).delete(verifyStudent, StudentContriller.Deletetudent)

module.exports = Routers