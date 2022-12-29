 const Student = require("../models/AddStudent")
 
exports.GetallStudent = async (req, res, next)=>{
    try{
        const NewStundent = await Student.find()
        res.status(200).json({
            message: "All Students",
            data : {NewStundent}
        })
    }
    catch (err) {
        next(err)
    }
}
exports.GetStudent = async (req, res, next)=>{
    try{
        const id = req.params.id
        const NewStundent = await Student.findById(id)
        res.status(200).json({
            message: "Students",
            data : {NewStundent}
        })
    }
    catch (err) {
        next(err)
    }

}
exports.UpdateStudent = async (req, res, next)=>{
    try{
        const id = req.params.id
        const NewStundent = await Student.findByIdAndUpdate(id, req.body,{
            new: true
        })
        res.status(200).json({
            message: "Student Updated Successfuylly",
            data : {NewStundent}
        })
    }
    catch (err) {
        next(err)
    }

}
exports.Deletetudent = async (req, res, next)=>{
    try{
        const id = req.params.id
         await Student.findByIdAndDelete(id)
        res.status(204).json({
            message: "Student Updated Successfuylly",
        })
    }
    catch (err) {
        next(err)
    }
}
