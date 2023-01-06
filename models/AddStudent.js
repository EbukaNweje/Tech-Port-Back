const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    userName: {
        type: String,
        required : [true, "Username is required"],
        unique: true
    },
    fullName: {
        type: String,
        required : [true, "First Name is required"],
    },
    email: {
        type: String,
        required : [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required : [true, "Email is required"],
    },
    phoneNumber: {
        type: Number,
        required : [true, "Phone Number is required"]
    },

    address: {
        type: String,
        required : [true, "Address is required"]
    },

    course: {
        type: String,
        required : [true, "Course is required"]
    },

    assment: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "assment"
    }],

    image: {
        public_id: {
          type: String,
          required:true
        },
        url: {
          type: String,
          required:true
        }
      },
    isAdmin: {
        type: Boolean,
        default: false
    },
},

{
    timestamps: true
}

)

const Student = mongoose.model('Student', StudentSchema)
module.exports = Student