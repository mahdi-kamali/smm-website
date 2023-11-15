const mongoose = require("mongoose")

const EventModel = new mongoose.Schema({
    type: String,
    date: Date,
    status: String,
    header: String,
    body: String,
    userID: mongoose.Schema.ObjectId
}, {
    timestamps: {
        createdAt: "createAt",
        updatedAt: "updateAt"
    }
})


module.exports = mongoose.model("Event", EventModel)