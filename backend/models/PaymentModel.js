const mongoose = require("mongoose")

const PaymentModel = mongoose.Schema({
    method: String,
    paymentID: String,
    status: String,
    found: String,
    userID: mongoose.Schema.ObjectId
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Payment", PaymentModel)