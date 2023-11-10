const mongoose = require("mongoose")



const shareModel = new mongoose.Schema({
    userID: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, "Enter User Id"],
        unique: true,
        dropDups: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    image: {
        type: String,
        required: [true, "Please enter File"]
    },
    accepted: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Share", shareModel)