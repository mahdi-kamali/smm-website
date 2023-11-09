
const mongoose = require("mongoose")


const ticketModule = mongoose.Schema({
    subject: {
        type: String,
        required: [true, "Please Enter Subject"]
    },
    orderID: {
        type: String,
        required: [true, "Please Enter order or service id ...."],
        lowercase: true
    },
    message: {
        type: String,
        required: [true, "Please Enter Message"]
    },
    solved: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        default: "Submited"
    },
    userID: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Please Enter User Id"]
    }
})

module.exports = mongoose.model("Ticket", ticketModule)