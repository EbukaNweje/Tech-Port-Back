const express = require("express")
const TearchController = require("../controllers/TeacherController")

const Router = express.Router()

Router.route("/").post(TearchController.CreateTeacher).get(TearchController.GetallTeacher)
Router.route("/:id").patch(TearchController.UpdateTeacher).delete(TearchController.DaleteTeacher).get(TearchController.GetTeacher)

module.exports = Router

