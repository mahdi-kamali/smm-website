

const express = require("express")
const ContactUsModel = require("../../../models/ContactUsModel")
const FaqsModel = require("../../../models/FaqsModel")
const BlogsModel = require("../../../models/BlogsModel")
const OrderModel = require("../../../models/OrderModel")
const PaymentModel = require("../../../models/PaymentModel")
const User = require("../../../models/User")
const PlatformModel = require("../../../models/PlatformModel")
const TodoModel = require("../../../models/TodoModel")
const MessageAllModel = require("../../../models/MessageAllModel")
const TicketModule = require("../../../models/TicketModule")
const FaqsSelectedModel = require("../../../models/FaqsSelectedModel")
const uploader = require("../../../lib/imageUpload")
const router = express.Router()










// ------------ Platforms
router.get("/platforms", async (req, res, next) => {
    try {
        const platforms = await PlatformModel.find()
        return res.json(platforms)
    }
    catch (e) {
        return res.status(500).json(e)
    }

})

router.post("/platforms", uploader.platformUploader.any(), async (req, res, next) => {
    try {
        const file = await req.files[0]
        const { name, shortDescription } = req.body
        const platform = new PlatformModel({
            name: name,
            image: "/statics/images/platforms/" + file.filename,
            shortDescription: shortDescription
        })
        return res.json(await platform.save())
    }
    catch (e) {
        next(e)
    }

})





// ------------ Statistics  
router.get("/statistics/overview", async (req, res) => {
    try {
        const totalOrders = await OrderModel.find()
        const totalSuccessSales = totalOrders.filter(item => {
            return item.status === "success" || item.status === "on progress"
        })


        let income = 0;
        totalSuccessSales.forEach(item => {
            income += item.charge
        })

        const totalCustomers = await User.find()


        return res.json({
            totalOrders: totalOrders.length,
            totalSuccessSales: totalSuccessSales.length,
            income: income,
            totalCustomers: totalCustomers.length
        })
    } catch (e) {
        return res.status(500).json(e)
    }


})

router.get("/statistics/order-status", async (req, res) => {
    const orders = await OrderModel.find()

    return res.json(orders)
})

router.get("/statistics/users-country", async (req, res) => {
    try {
        const users = await User.find().select("country")
        return res.json(users)
    }
    catch (e) {
        return res.status(500).json(e)
    }
})

router.get("/statistics/recent-customers-activity", async (req, res) => {
    try {
        const recentCustomers = await PaymentModel.find()
        return res.json(recentCustomers)
    }
    catch (e) {
        return res.status(500).json(e)
    }
})

router.get("/statistics/popular-platforms", async (req, res) => {
    try {
        const orders = await OrderModel.find({
            $or: [
                { status: "success" },
                { status: "on progress" },
            ]
        })

        const platforms = await PlatformModel.find()



        let result = []
        platforms.forEach((platform) => {
            result.push({
                platform: platform,
                totalOrders: orders.filter(item => {
                    let serviceName = item.service.name
                    serviceName = serviceName.toLowerCase()


                    const isContaining =
                        serviceName
                            .includes(platform.name.toLowerCase())
                    return isContaining
                }).length
            })
        })

        return res.json(result)
    }
    catch (e) {
        console.log(e)
        return res.status(500).json(e)
    }
})

// Todo-List
router.get("/statistics/todo-list", async (req, res) => {
    try {
        const todoList = await TodoModel.find()
        return res.json(todoList)
    }
    catch (e) {
        return res.status(500).json(e)
    }
})

router.post("/statistics/todo-list", async (req, res) => {
    try {
        const data = req.body

        const todo = new TodoModel({
            ...data
        })
        return res.json(await todo.save())
    }
    catch (e) {
        return res.status(500).json(e)
    }
})

router.put("/statistics/todo-list", async (req, res) => {
    try {
        const data = req.body

        if (!data.id)
            return res.status(401).json("id required")


        const todo = await TodoModel.findByIdAndUpdate(data.id, {
            ...data
        })

        return res.json("todo Updated !")

    }
    catch (e) {
        return res.status(500).json(e)
    }
})

router.delete("/statistics/todo-list", async (req, res) => {
    try {
        const data = req.body

        if (!data.id)
            return res.status(401).json("id required")


        await TodoModel.findByIdAndDelete(data.id)
            .then(result => {
                if (!result)
                    return res.status(400).json("todo not founded!")

                return res.json("todo Deleted !")
            })


    }
    catch (e) {
        return res.status(500).json(e)
    }
})


// Message All 
router.get("/statistics/message-all", async (req, res) => {
    try {
        const allMessages = await MessageAllModel.find()
        return res.json(allMessages)
    }
    catch (e) {
        return res.status(500).json("error")
    }

})

router.post("/statistics/message-all", async (req, res) => {
    try {
        const data = req.body
        const message = new MessageAllModel({
            ...data
        })
        return res.json(await message.save())
    }
    catch (e) {
        return res.status(500).json(e)
    }

})



// ------------- Services
router.get("/services", async (req, res) => {
    const services = await require("../../../catch/services.json")
    return res.json(services)
})


// --------------- Orders
router.get("/orders", async (req, res) => {
    const { pageNumber } = req.body
    if (!pageNumber) {
        return res.status(400).json("Page Number Required !")
    }
    const orders = await OrderModel
        .find()
        .limit(10)
        .skip(pageNumber * 10)
    return res.json(orders)
})


// --------------- Tickets 
router.get("/tickets", async (req, res) => {
    const { pageNumber } = req.body

    if (!pageNumber) {
        return res.status(400).json("Page Number Required !")
    }

    const tickets = await TicketModule
        .find()
        .limit(10)
        .skip(pageNumber * 10)
    return res.json(tickets)
})


// ---------------- Users
router.get("/users", async (req, res) => {
    const users = await User.find()
    return res.json(users)
})


// ---------------- Blogs
router.get("/blogs", async (req, res) => {
    try {
        const blogs = await BlogsModel.find()
        return res.json(blogs)
    }
    catch (e) {

    }
    return res.json("ok add blog")
})

router.post("/blogs", uploader.blogUploader.any(), async (req, res) => {
    try {
        const image = await req.files[0]
        const data = await req.body


        const blog = new BlogsModel({
            image: "/statics/images/blogs/" + image.filename,
            title: data.title,
            description: data.description,
            likes: data.likes,
            published: false
        })

        return res.json(await blog.save())
    } catch (e) {
        console.log(e)
        return res.status(500).json(e)

    }
})





// ------------- Faqs


// selected Faqs
router.get("/selected-faqs", async (req, res) => {
    try {
        const selectedFaqs = await FaqsSelectedModel.find()
        return res.json(selectedFaqs)
    }
    catch (e) {
        return res.json("error", 500)
    }
})
router.post("/selected-faqs", async (req, res) => {
    try {
        const data = req.body

        const selectedFaq = new FaqsSelectedModel({
            ...data
        })
        return res.json(await selectedFaq.save())
    }
    catch (e) {
        return res.json(e, 500)
    }
})

router.delete("/selected-faqs", async (req, res) => {
    try {
        const { id } = req.body
        if (!id)
            return res.status(400).json("id required")

        await FaqsSelectedModel
            .findByIdAndDelete(id).then(res => {
                return res.json("selected Faq Deleted !")
            })
            .catch(err => {
                console.log(err)
                return res.status(500).json("record not found !")
            })
    }
    catch (e) {
        return res.json(e, 500)
    }
})

router.put("/selected-faqs", async (req, res) => {
    try {
        const data = req.body

        if (!data.id)
            return res.status(500).json("id required")

        await FaqsSelectedModel.findByIdAndUpdate(data.id, {
            ...data
        })
            .then(result => {
                if (!result)
                    return res.status(400).json("record not founded")
                return res.json("record updated.")
            })
            .catch(err => {
                return res.status(400).json("record not founded")
            })

    }
    catch (e) {
        return res.json(e, 500)
    }
})



// Normal Faqs 
router.get("/faqs", async (req, res) => {
    try {
        const normalFaqs = await FaqsModel.find()
        return res.json(normalFaqs)
    }
    catch (e) {
        return res.status(500).json(e)
    }
})

router.put("/faqs", async (req, res) => {
    try {
        const { id, answerd } = req.body
        if (!id)
            return res.status(400).json("id required")



        const faqs = await FaqsModel.findByIdAndUpdate(id, {
            answerd
        }).then(result => {
            return res.json("faqs changing success!")
        })
            .catch(err => {
                return res.status(500).json(err)
            })


    }
    catch (e) {
        return res.status(500).json(e)
    }
})



// -------------- Contact Us
router.get("/contact-us", async (req, res) => {

    try {
        const items = await ContactUsModel.find()
        return res.json(items)
    }
    catch (e) {
        return res.json(e)
    }
})

router.put("/contact-us", async (req, res) => {
    try {
        const { id, answerd } = req.body
        if (!id)
            return res.status(400).json("id required")



        const faqs = await ContactUsModel.findByIdAndUpdate(id, {
            answerd
        }).then(result => {
            return res.json("contact-us changing success!")
        })
            .catch(err => {
                return res.status(500).json(err)
            })


    }
    catch (e) {
        return res.status(500).json(e)
    }
})











module.exports = router