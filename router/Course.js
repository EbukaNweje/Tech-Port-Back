const express = require("express")
const Addcourse = require("../controllers/addcouse")
const {verifyAdmin} = require("../utils/VerifyToken")

const Router = express.Router()

Router.route("/").post(verifyAdmin, Addcourse.Addcourse).get(Addcourse.GetAllCourse)
Router.route("/:id").delete(verifyAdmin, Addcourse.DeleteCourse)

module.exports = Router