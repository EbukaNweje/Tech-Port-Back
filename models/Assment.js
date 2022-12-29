const mongoose = require("mongoose")

const AssmentSchema = new mongoose.Schema({
    gitLink: {
        type: String,
        require : [true, "Url is Require"],
    },
    student:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:"student"
    }
},

{
    timestamps: true
}

)

const Assment = mongoose.model('Assment', AssmentSchema)
module.exports = Assment