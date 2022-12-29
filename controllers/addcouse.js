const Course = require("../models/course")

exports.Addcourse = async (req, res, next)=>{
    try{
        const NewCourse = await Course.create(req.body)
        res.status(200).json({
            message: "Course has been created ",
            data: {NewCourse}
        })

    }catch (err){
        next(err)
    }
}

exports.GetAllCourse = async (req, res, next)=>{
    try{
        const getCourse = await Course.find()
        res.status(200).json({
            message: "All Course",
            data: {getCourse}
        })
    }catch (err){
        next(err)
    }
}


exports.DeleteCourse = async (req, res, next) =>{
    try{
        const id = req.params.id
         await Course.findByIdAndDelete(id)
        res.status(204)
    }catch(err){
        next(err)
    }
}