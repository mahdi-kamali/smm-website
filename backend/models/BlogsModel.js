const mongoose = require("mongoose");


const blogModel = mongoose.Schema({
    image: {
        type: String,
        required: [true, "Image Require"]
    },
    title: {
        type: String,
        required: [true, "Title"],
    },
    description: {
        type: String,
        required: [true, "Please Enter description"],
    },
    likes: {
        type: Number,
    },
    published: Boolean
})

module.exports = mongoose.model("blog", blogModel)