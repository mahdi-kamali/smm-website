const mongoose = require("mongoose")
const { isEmail } = require("validator")






const emailVerifiedModel = new mongoose.Schema({
    isActive: {
        type: Boolean,
    },
    verifyCode: {
        code: {
            type: String,
        },
        sendedAt: {
            type: Date,
        }
    }
})






const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Please Enter fullName"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Password"],
        minlength: [6, "Minimum Password us 6 characters"]
    },
    email: {
        type: String,
        required: [true, "Please Enter email"],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please Enter a Valid Email']
    },
    emailVerified: {
        type: emailVerifiedModel,
        default: {
            isActive: false,
            verifyCode: {
                code: "NOT VALID",
                sendedAt: Date.now()
            }
        }
    },
    country: {
        type: String,
        minlegth: [2, "Please Enter Valid Country"],
        required: [true, "Please Enter your Country"],
    },
    role: {
        type: String,
        required: [true, "Please Enter Role"],
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    found: {
        type: Number,
        default: 0.00
    },
})


module.exports = mongoose.model("User", userSchema)