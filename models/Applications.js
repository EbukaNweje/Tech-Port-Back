const mongoose = require("mongoose")

const ApplicationsSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require : [true, "Your name is require"],
    },
    email:{
        type: String,
        require : [true, "Your email is require"],
        unique: true
    },
    gender:{
        type: String,
        require : [true, "Your gender is require"],
    },
    phoneNumber:{
        type: String,
        require : [true, "Your phone number is require"],
    },
    // dateOfBirth:{
    //     year: {
    //     type: Number,
    //     require : [true, "Your date of birth is require"],
    //     },
    //     month: {
    //     type: Number,
    //     require : [true, "Your date of birth is require"],
    //     },
    //     day: {
    //     type: Number,
    //     require : [true, "Your date of birth is require"],
    //     },
    //     birthYear: {
    //        type: String 
    //     }
    // },
    countryOrigin:{
        type: String,
        require : [true, "Your country of origin is require"],
    },
    countryResidence:{
        type: String,
        require : [true, "Your country of residence is require"],
    },
    CityOfResidence:{
        type: String,
        require : [true, "Your city of residence is require"],
    },
},

{
    timestamps: true
}

)

const Applications  = mongoose.model('Applications ', ApplicationsSchema)
module.exports = Applications 