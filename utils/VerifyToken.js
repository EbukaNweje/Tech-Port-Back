// import Student from "../models/AddStudent";

const createError = require("../utils/error");
const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "you are not authenticated!"));
    }

    jwt.verify(token, process.env.JWT, (err, Student)=>{
        if(err)return next(createError(401, "token is not valid!"));
        req.Student = Student
        next()
    })
};

const verifyStudent = (req, res, next)=>{
    verifyToken(req, res, next, ()=>{
        console.log(req.Student.id)
        if(req.Student.id === req.params.id || req.Student.isAdmin){
            next()
        } else {
           return next(createError(403, "you are not authenticated!"));
        }
    })
};

const verifyAdmin = (req, res, next)=>{
    verifyToken(req, res, next, ()=>{
        console.log(req.Student.id)
        if(req.Student.isAdmin){
            next()
        } else {
           return next(createError(403, "you are not authenticated!"));
        }
    })
} 

module.exports =  {verifyToken, verifyStudent, verifyAdmin}