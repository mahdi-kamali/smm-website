const express = require("express")
const router = express.Router()
const FaqModel = require("../../models/FaqsModel")



router.get("/", (req, res) => {
    return res.json("ok")
})


router.post("/", async (req, res) => {
    try {
        const {
            fullName,
            email,
            phoneNumber,
            message,
        } = req.body


        const faqs = new FaqModel({
            fullName,
            email,
            phoneNumber,
            message,
            answerd: false
        })


        return res.json(await faqs.save())
    }
    catch (e) {
        return res.json(e)

    }
})





module.exports = router