const mongoose = require("mongoose")
const { isEmail, isNumeric } = require("../lib/validator")



const adminResponseModel = new mongoose.Schema({
    email: new mongoose.Schema({
        message: String
    }, { timestamps: true }),
    phone: new mongoose.Schema({
        message: String
    }, { timestamps: true }),
})


const FaqsSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Please Enter full Name"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Email"],
        validate: [isEmail, 'Please Enter a Valid Email'],
        lowercase: true
    },
    phoneNumber: {
        type: String,
        required: [true, "Please Enter phoneNumber"],
        validate: [isNumeric, 'Please Enter a Valid Phone Number']
    },
    message: {
        type: String,
        required: [true, "Please Enter Message"]
    },
    answerd: Boolean,
    adminResponse: {
        type: adminResponseModel,
        default: null
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model("Faqs", FaqsSchema)