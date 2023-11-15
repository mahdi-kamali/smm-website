const mongoose = require("mongoose")
const { isEmail, isNumeric } = require("../lib/validator")


const FaqsSelectedModel = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Please Enter Question Field"]
    },
    answer: {
        type: String,
        required: [true, "Please Enter Answer Field"]
    },
    isShow: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model("SelectedFaqs", FaqsSelectedModel)