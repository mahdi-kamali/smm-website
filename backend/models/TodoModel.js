const mongoose = require("mongoose")

const TodoModel = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Enter Title"]
    },
    description: {
        type: String,
        required: [true, "Please Enter Description"]
    },
    solved: {
        type: Boolean,
        default: false
    }
}
    , {
        timestamps: true
    }
)


module.exports = mongoose.model("Todo", TodoModel)