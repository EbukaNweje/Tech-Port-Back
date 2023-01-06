const express = require("express")
const ApplicationsController = require("../controllers/Applications ")
const { check } = require('express-validator');

const Routers = express.Router()

Routers.route("/").post([
    check('email', 'Please include a valid email').isEmail()], 
    ApplicationsController.CreateApplications).get(ApplicationsController.GetallAplications)

module.exports = Routers