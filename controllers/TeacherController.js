const Teacher = require("../models/AddTeacher")

exports.CreateTeacher = async (req, res)=>{ 
    try{
        const newTeacher = await Teacher.create(req.body)
        res.status(201).json({
            message: "Teacher Created Successfuylly",
            data: {newTeacher}
        })
    }
    catch(err) {
        res.status(400).json({
            status : "Falled",
            message: err
        })
    }
}
exports.GetallTeacher = async (req, res)=>{
   try{
    const allTeacher = await Teacher.find(req.query)
    res.status(200).json({
        message: "All Teacher ",
        data: {allTeacher}
    })
   } 
   catch (err) {
    res.status(400).json({
        status : "Falled",
        message: err
    })
}
}
exports.GetTeacher = async (req, res)=>{
   try{
        const id = req.params.id;
        const OneTeacher = await Teacher.findById(id)
        res.status(200).json({
            message: "Get Teacher ",
            data: {OneTeacher}
        })
   }
   catch (err) {
    res.status(400).json({
        status : "Falled",
        message: err
    })
   }
}
exports.UpdateTeacher = async (req, res)=>{
    try{
        const id = req.params.id;
        const UpdateTeacherMe = await Teacher.findByIdAndUpdate(id, req.body, {
            new : true
        })
        res.status(200).json({
            message: "Teacher Updated Successfuylly",
            data: {UpdateTeacherMe}
        })
    }
    catch  (err) {
        res.status(400).json({
            status : "Falled",
            message: err
        })
    }
   
}
exports.DaleteTeacher = async (req, res)=>{
    try{
        const id = req.params.id
        await Teacher.findByIdAndDelete(id)
        res.status(204).json({
            message: "Teacher Deleted Successfuylly",
        })
    }
    catch (err) {
        res.status(400).json({
            status : "Falled",
            message: err
        })
    }
    
}