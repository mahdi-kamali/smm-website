
const express = require("express")
const ContactUsModel = require("../../models/ContactUsModel")
const router = express.Router()


router.post("/", async (req, res, next) => {

    try {
        const {
            fullName,
            email,
            phoneNumber,
            message,
        } = req.body


        const contactUs = new ContactUsModel({
            fullName,
            email,
            phoneNumber,
            message,
            answerd: false
        })



        await contactUs.save()
        return res.json("Your Message delivered.")
    }
    catch (e) {
        return next(e)

    }
})


module.exports = router