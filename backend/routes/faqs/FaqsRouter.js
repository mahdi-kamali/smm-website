const express = require("express")
const router = express.Router()
const FaqModel = require("../../models/FaqsModel")
const FaqsSelectedModel = require("../../models/FaqsSelectedModel")



router.get("/", async (req, res) => {
    const selectedFaqs = await FaqsSelectedModel.find()
    return res.json(selectedFaqs)
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
        return res.status(500).json(e)
    }
})





module.exports = router