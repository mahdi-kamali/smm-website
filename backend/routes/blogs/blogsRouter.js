const express = require("express")
const BlogsModel = require("../../models/BlogsModel")
const router = express.Router()


router.get("/", async (req, res) => {
    try { 
        const blogs = await BlogsModel.find({
            published : true
        })
        return res.json(blogs)

    }
    catch (e) {

    }
})


module.exports = router