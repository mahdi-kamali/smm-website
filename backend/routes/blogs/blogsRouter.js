const express = require("express")
const BlogsModel = require("../../models/BlogsModel")
const router = express.Router()


router.get("/", async (req, res) => {

    try {
        const blogs = await BlogsModel.find({
            published: true
        })
        return res.json(blogs)

    }
    catch (e) {

    }
})


router.get("/blog/:blogID", async (req, res, next) => {

    try {
        const blogID = req.params.blogID
        const blog = await BlogsModel.findById(blogID)
        if (!blog || blog === null) throw "Blog Not Founded."
        return res.json(blog)

    }
    catch (e) {
        return next(e)
    }
})


router.put("/blog/like/:blogID", async (req, res, next) => {

    try {

        const blogID = req.params.blogID


        const blog = await BlogsModel.findById(blogID)

        if (!blog || blog === null) {
            throw "Blog Not Founded."
        }

        blog.likes += 1;
        await blog.save()

        return res.json("Your Like Submitting Successful.")

    }
    catch (e) {
        return next(e)
    }
})



module.exports = router