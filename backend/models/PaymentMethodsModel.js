const mongoose = require("mongoose")


const PaymentMethodsModel = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, "This method already available."],
        required: [true, "Please Enter Name."]
    },
    available: {
        type: Boolean,
        default: true
    },
    description: {
        type: String,
        required: [true, "Please Enter Description"]
    },
    image: {
        type: String,
        required: [true, "Please Select Image."]
    },
    site: {
        type: String,
        required: [true, "Please Enter Url."]
    }
},
    {
        timeseries: true
    })

module.exports = mongoose.model("PaymentMethod", PaymentMethodsModel)