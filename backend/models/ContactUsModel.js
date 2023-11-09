const mongoose = require("mongoose")
const { isEmail , isNumeric } = require("validator")

const contactUsSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Please Enter full Name"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Email"],
        validate: [isEmail, 'Please Enter a Valid Email'] , 
        lowercase : true
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
    answerd: Boolean
})

module.exports = mongoose.model("ContactUs", contactUsSchema)