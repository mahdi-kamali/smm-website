const mongoose = require("mongoose")



const BlogCommentModel = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is Required."]
    },
    message: {
        type: String,
        required: [true, "Message is Required."]
    },
    senderID: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Sender ID is Required."]
    },
    blogID: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Blog ID is Required."]
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("Blog_Comment", BlogCommentModel)