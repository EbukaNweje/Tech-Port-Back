const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    userName: {
        type: String,
        require : [true, "Username is Require"],
        unique: true
    },
    fullName: {
        type: String,
        require : [true, "First Name is Require"],
    },
    email: {
        type: String,
        require : [true, "Email is Require"],
        unique: true
    },
    password: {
        type: String,
        require : [true, "Email is Require"],
    },
    phoneNumber: {
        type: Number,
        require : [true, "Phone Number is Require"]
    },

    address: {
        type: String,
        require : [true, "Address is Require"]
    },

    course: {
        type: String,
        require : [true, "Course is Require"]
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