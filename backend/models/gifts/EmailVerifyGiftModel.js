const mongoose = require("mongoose")



const EmailVerifyGiftModel = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Please Enter User ID"],
        unique: [true, "You Already Claimed Your Gift"]
    },
    platform: {
        type: String,
        required: [true, "Please Select Platform First."]
    },
    link: {
        type: String,
        required: [true, "Please Insert Your Link."]
    },
    claimed: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model("EmailVerifyGift", EmailVerifyGiftModel)