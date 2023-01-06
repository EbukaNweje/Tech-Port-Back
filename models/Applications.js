const mongoose = require("mongoose")

const ApplicationsSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required : [true, "Your name is required"],
    },
    email:{
        type: String,
        required : [true, "Your email is required"],
        unique: true
    },
    gender:{
        type: String,
        required : [true, "Your gender is required"],
    },
    phoneNumber:{
        type: String,
        required : [true, "Your phone number is required"],
    },
    // dateOfBirth:{
    //     year: {
    //     type: Number,
    //     required : [true, "Your date of birth is required"],
    //     },
    //     month: {
    //     type: Number,
    //     required : [true, "Your date of birth is required"],
    //     },
    //     day: {
    //     type: Number,
    //     required : [true, "Your date of birth is required"],
    //     },
    //     birthYear: {
    //        type: String 
    //     }
    // },
    countryOrigin:{
        type: String,
        required : [true, "Your country of origin is required"],
    },
    countryResidence:{
        type: String,
        required : [true, "Your country of residence is required"],
    },
    CityOfResidence:{
        type: String,
        required : [true, "Your city of residence is required"],
    },
},

{
    timestamps: true
}

)

const Applications  = mongoose.model('Applications ', ApplicationsSchema)
module.exports = Applications 