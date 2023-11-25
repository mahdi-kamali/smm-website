const mongoose = require("mongoose")

const CheckOutModel = new mongoose.Schema({
    method: {
        type: {},
        required: [true, "Method ID is Required."]
    },
    userID: {
        type: mongoose.Schema.ObjectId,
        required: [true, "User Id required."]
    },
    status: {
        type: String,
        default: "on progress"
    },
    amount: {
        type: {
            amount: { type: Number },
            fee: { type: Number },
            total: { type: Number }
        },
        required: [true, "Amount required"] ,
    },

},
    {
        timestamps: true
    })

module.exports = mongoose.model("CheckOut", CheckOutModel)