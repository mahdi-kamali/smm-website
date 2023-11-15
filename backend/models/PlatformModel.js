const mongoose = require("mongoose")

const PlatformModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Name Field."],
        unique: true
    },
    image: {
        type: String,
        required: [true, "Please Upload Image."]
    },
},
    {
        timestamps: true
    })


module.exports = mongoose.model("Platform", PlatformModel)