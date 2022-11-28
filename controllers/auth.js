const student = require("../models/AddStudent")
const bcrypt = require("bcryptjs");
const createError = require("../utils/error");
const jwt = require("jsonwebtoken")
const cloudinary = require("../utils/Cloudinary")
exports.register = async (req, res, next)=>{
    try{
        const result = await cloudinary.uploader.upload(
            req.files.image.tempFilePath,
            (err, result) => {
              try {
                return result;
              } catch (err) {
                return err;
              }
            }
          );
        //   console.log(result)

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

         const newStudent = await student.create({
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            class: req.body.class,
            email: req.body.email,
            password: hash,
            phoneNumber: req.body.phoneNumber,
            Address: req.body.Address,
            image: {
                public_id: result.public_id,
                url: result.secure_url,
              },
            
         })
         console.log(newStudent)
         res.status(200).send("Student has been created.")
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