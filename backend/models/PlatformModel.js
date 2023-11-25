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
    shortDescription: {
        type: String,
        required: [true, "Please Enter Short-Description."]
    },
    colorPalette: {
        type: String,
        required: [true, "Please Enter Color Palette."]
    }
},
    {
        timestamps: true
    })


module.exports = mongoose.model("Platform", PlatformModel)