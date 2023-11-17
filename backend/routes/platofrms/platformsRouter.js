
const express = require("express")
const PlatformModel = require("../../models/PlatformModel")
const router = express.Router()


router.get("/", async (req, res) => {
    const platforms = await PlatformModel.find()
    return res.json(platforms)
})


module.exports = router