
const mongoose = require("mongoose")

const answerModel = new mongoose.Schema({
    message: {
        type: String,
    },
    adminID: {
        type: mongoose.Schema.ObjectId,
    }
}, {
    timestamps: true
});


const TicketModule = new mongoose.Schema({
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
    },
    answer: {
        type: answerModel,
        default: null
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model("Ticket", TicketModule)