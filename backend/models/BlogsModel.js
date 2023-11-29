const mongoose = require("mongoose");




const blogModel = new mongoose.Schema({
    image: {
        type: String,
        required: [true, "Image Required"]
    },
    title: {
        type: String,
        required: [true, "Title Required"],
    },
    description: {
        type: String,
        required: [true, "Please Enter description"],
    },
    likes: {
        type: Number,
        default: 0
    },
    published: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model("blog", blogModel)