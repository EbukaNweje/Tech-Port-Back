const student = require("../models/AddStudent")
const bcrypt = require("bcryptjs");
const createError = require("../utils/error");
const jwt = require("jsonwebtoken")
const cloudinary = require("../utils/Cloudinary")
const {validationResult } = require('express-validator');

exports.register = async (req, res, next)=>{
    try{
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { userName, email } = req.body;

      student.findOne({ $or: [{ userName }, { email }] }, async (err, user) => {
        console.log(user)
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        if (user) {
          return res.status(400).json({ error: 'Username or email already in use'});
        } 
        else if(!user){
          const result = await
           cloudinary.uploader.upload(
            req.files.image.tempFilePath,
            (err, result) => {
              try {
                return result;
              } catch (err) {
                return err;
              }
            }
          );
         
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
    
         const newStudent = await student.create({
            userName: req.body.userName,
            fullName: req.body.fullName,
            email: req.body.email,
            password: hash,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            assment: req.body.assment,
            course: req.body.course,
            image: {
                public_id: result.public_id,
                url: result.secure_url,
              },
            
         })
         res.status(200).send("Student has been created.")
        }
      })
      
    }catch(err){
        next(err)
    }
}

exports.login = async (req, res, next)=>{
    try{
        const Student = await student.findOne({userName: req.body.userName})
        if(!Student) return next(createError(404, "Student not found!"))
        // console.log(Student.password)

        const isPasswordCorrect = await bcrypt.compare(req.body.password, Student.password)
        if(!isPasswordCorrect) return next(createError(400, "Wrong password or username"))

        const token = jwt.sign({id:Student._id, isAdmin:Student.isAdmin}, process.env.JWT)

        const {password, isAdmin, ...otherDetails} = Student._doc

         res.cookie("access_token", token, {
            httpOnly: true, 
         }).status(200).json({...otherDetails})
    }catch(err){
        next(err)
    }
}

