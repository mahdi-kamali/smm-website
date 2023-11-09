
const express = require("express")
const ContactUsModel = require("../../models/ContactUsModel")
const router = express.Router()


router.post("/", async (req, res) => {

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


        return res.json(await contactUs.save())
    }
    catch (e) {
        return res.json(e)

    }
})


module.exports = router