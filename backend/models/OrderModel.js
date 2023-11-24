const mongoose = require("mongoose");
const { isURL, isCurrency } = require("../lib/validator");






const OrderModel = new mongoose.Schema({
    service: {
        type: {},
        required: [true, "Service Info Missing!"]
    },
    serviceID: {
        type: String,
        required: [true, "Please Enter serviceID"],
    },
    userID: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Please Enter userID"],
    },
    link: {
        type: String,
        required: [true, "Please Enter Link"],
        validate: [isURL, "Enter Valid Link"],
    },
    quantity: {
        type: Number,
        required: [true, "Please Enter Quantity"],
    },
    charge: {
        type: Number,
        required: [true, "Please Enter Charge"],
    },
    status: {
        type: String,
        default: "on progress"
    },
    country: {
        type: String,
        required: [true, "Country Required."]
    },
    events: []
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Order", OrderModel)

