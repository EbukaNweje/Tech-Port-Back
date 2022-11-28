const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    firstName: {
        type : String,
        required: [true, "First Name is required"],
    },
    lastName: {
        type : String,
        required: [true, "Last Name is required"],
    },
    phoneNumber: {
        type : Number,
        required: [true, "Phone Number is required"],
    },
    email: {
        type : String,
        required: [true, "Email is required"],
    },
    address: {
        type : String,
        required: [true, "Address is required"],
    },
    aboutTeacher: {
        type : String,
        required: [true, "About Teacher is required"],
    },
},
{
    timestamps: true
}  
)

const Teacher = mongoose.model('Teacher', TeacherSchema)


module.exports = Teacher