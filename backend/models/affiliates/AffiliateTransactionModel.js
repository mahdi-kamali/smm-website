const mongoose = require("mongoose")


const AffiliateTransactionModel = new mongoose.Schema({
    orderID: {
        type: mongoose.Schema.ObjectId,
        required: [true, "User Id Required."]
    },
    orderOwnerID: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Owner ID Required"]
    },
    affliateOwnerID: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Affliate Owner ID Required"]
    },
    price: {
        type: String,
        required: [true, "Price Required"]
    },
    ammountForGift: {
        type: String,
        required: [true, "ammountForGift is required"]
    },

},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("AffiliateTransaction", AffiliateTransactionModel)