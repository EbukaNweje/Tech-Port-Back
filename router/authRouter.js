const express = require("express")
const register = require("../controllers/auth")

const Routers = express.Router()

Routers.route("/register").post(register.register)
Routers.route("/login").post(register.login)

module.exports = Routers