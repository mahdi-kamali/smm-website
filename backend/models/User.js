const { request } = require("express")
const mongoose = require("mongoose")
const { isEmail } = require("validator")
const crypto = require("crypto")





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
        },
    }
})


const giftModel = new mongoose.Schema({
    email: { type: mongoose.Schema.ObjectId },
    trustPilot: { type: mongoose.Schema.ObjectId },
    retweet: { type: mongoose.Schema.ObjectId }
})


const isBlockedModel = new mongoose.Schema({
    status: Boolean,
    blockedBy: mongoose.Schema.ObjectId,
},
    {
        timestamps: true
    }
)






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
    gender: {
        type: String,
        required: [true, "Please Select Gender."],
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
    found: {
        type: Number,
        default: 0.00
    },
    image: {
        type: String,
    },
    savedServices: {
        type: [],
        default: []
    },
    gifts: {
        type: giftModel,
        default: {
            email: null,
            trustPilot: null,
            retweet: null
        }
    },
    affiliates: {
        members: [],
        link: {
            type: String,
            default: () => {
                return crypto.randomBytes(12).toString("hex")
            }
        }
    },
    affiliateOf: {
        type: mongoose.Schema.ObjectId,
        default: null
    },
    isBlocked: {
        type: isBlockedModel,
        default: {
            status: false,
            blockedBy: null,
        }
    }
},
    {
        timestamps: true
    }
)



module.exports = mongoose.model("User", userSchema)