const Assment  = require("../models/Assment")
const AddStudent = require("../models/AddStudent")

exports.CreateAssment = async(req, res, next) =>{
    try{
        const studentid = req.params.studentid
        const newAssment = await Assment(req.body)
        const student = await AddStudent.findById(studentid);
        newAssment.student = student;
        newAssment.save();
        student.assment.push(newAssment);
        student.save()
        // try{
        //     await AddStudent.findByIdAndUpdate(Assmentid, {
        //         $push: {assment: newAssment.id}
        //     })

        // }catch(err){
        //     next(err)
        // }

        res.status(200).json({
            message: "Created Assment",
            // data : {newAssment}
        })

    }catch(err){
        next(err)
    }
}

exports.updateAssment = async (req, res, next)=>{
    try{
        const id = req.params.id
        const assmentupdate = await Assment.findByIdAndUpdate(id, req.body,{
            new: true
        })
        // console.log(id)
        res.status(200).json({
            message: "Assment Updated Successfuylly",
            data : {assmentupdate}
        })
    }catch(err){
        next(err)
    }
}

exports.getallAssment =  async(req, res, next)=>{
    try{
        const AllAssment = await Assment.find()
        res.status(200).json({
            message: "All Assment",
            data : {AllAssment}
        })
    }catch(err){
        next(err)
    }
}

exports.deleteAssment = async (req, res, next)=>{
    try{
        const studentid = req.params.studentid
        const id = req.params.id
        // const assmentdeleteid = await Assment.findById(id)
        // console.log(id)
        await Assment.findByIdAndDelete(id)
            // const stuid = await AddStudent.findById()
            // await AddStudent.findById(studentid, {
            //     $pull: {assment: id}
            // })
            const stud = await AddStudent.findById(studentid);
            stud.assment.pull(id)
            stud.save();
            // console.log(id)
        res.status(204).json({
            message: "Assment Delete Successfuylly",
        })
        // console.log(studentid)
    }catch(err){
        next(err)
    }
}