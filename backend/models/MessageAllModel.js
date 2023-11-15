const mongoose = require("mongoose")

const MessageAllModel = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "please enter title field"]
    },
    description: {
        type: String,
        required: [true, "please enter description field"]
    },
    isPublished: {
        type: Boolean,
        default: false
    }
}
    , {
        timestamps: true
    }
)

module.exports = mongoose.model("MessageAll", MessageAllModel)