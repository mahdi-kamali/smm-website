

const express = require("express")
const ContactUsModel = require("../../../models/ContactUsModel")
const FaqsModel = require("../../../models/FaqsModel")
const BlogsModel = require("../../../models/BlogsModel")
const User = require("../../../models/User")
const router = express.Router()



//Contact Us
router.get("/contact-us", async (req, res) => {

    try {
        const items = await ContactUsModel.find()
        return res.json(items)
    }
    catch (e) {
        return res.json(e)
    }
})



// Faqs
router.get("/faqs", async (req, res) => {
    try {

        const faqs = await FaqsModel.find()

        return res.json(faqs)
    }
    catch (e) {
        return res.json("error", 500)
    }

})






//Blogs
router.get("/blogs", async (req, res) => {
    try {
        const blogs = await BlogsModel.find()
        return res.json(blogs)
    }
    catch (e) {

    }
    return res.json("ok add blog")
})


router.post("/blogs", async (req, res) => {
    try {
        const image = await req.files[0]
        const data = await req.body




        const blog = new BlogsModel({
            image: "/statics/images/" + image.filename,
            title: data.title,
            description: data.description,
            likes: data.likes,
            published: false
        })

        return res.json(await blog.save())
    } catch (e) {
        return res.status(400).json("Error")

    }
})



// Users
router.get("/users", async (req, res) => {
    const users = await User.find()
    return res.json(users)
})



// Tickets 
router.get("/tickets", (req, res) => {
    return res.json("ok")
})







module.exports = router