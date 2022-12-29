const express = require("express")
const register = require("../controllers/auth")
const { check } = require('express-validator');

const Routers = express.Router()

Routers.route("/register").post([
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],register.register)
Routers.route("/login").post(register.login)

module.exports = Routers