const express = require("express")
const newAssment = require("../controllers/assmentController")
const {verifyStudent, verifyAdmin} = require("../utils/VerifyToken")


const Routers = express.Router()

Routers.route("/:studentid").post(verifyStudent, newAssment.CreateAssment)
Routers.route("/").get(verifyStudent, verifyAdmin, newAssment.getallAssment)
Routers.route("/:id").patch(verifyStudent,newAssment.updateAssment)
Routers.route("/:studentid/:id").delete(verifyStudent, verifyAdmin, newAssment.deleteAssment)

module.exports = Routers