const mongoose = require("mongoose")



const trustPilot = new mongoose.Schema({
    userID: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, "Enter User Id"],
        unique: true,
        dropDups: true , 
        unique: [true , "You Already Submitted your Proof , please waith for validation."]
    },
    proof: {
        type: String,
        required: [true, "Please enter File"]
    },
    accepted: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("TrustPilot", trustPilot)