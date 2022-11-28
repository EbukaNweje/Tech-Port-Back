const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    userName: {
        type: String,
        require : [true, "First Name is Require"],
        unique: true
    },
    firstName: {
        type: String,
        require : [true, "First Name is Require"],
    },
    lastName: {
        type: String,
        require : [true, "Last Name is Require"]
    },
    class: {
        type: String,
        require : [true, "Class is Require"]
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

    Address: {
        type: String,
        require : [true, "Address is Require"]
    },
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