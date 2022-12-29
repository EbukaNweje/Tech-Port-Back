const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        require: [true, "Course is Require"]
    },
},
{
    timestamps: true
}
)

const Course = mongoose.model('Course', CourseSchema)
module.exports = Course