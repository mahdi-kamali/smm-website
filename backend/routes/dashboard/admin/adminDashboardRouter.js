

const express = require("express")
const ContactUsModel = require("../../../models/ContactUsModel")
const FaqsModel = require("../../../models/FaqsModel")
const BlogsModel = require("../../../models/BlogsModel")
const OrderModel = require("../../../models/OrderModel")
const PaymentModel = require("../../../models/PaymentModel")
const User = require("../../../models/User")
const { eventNames } = require("../../../models/ShareModel")
const PlatformModel = require("../../../models/PlatformModel")
const TodoModel = require("../../../models/TodoModel")
const MessageAllModel = require("../../../models/MessageAllModel")
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


// Platforms
router.get("/platforms", async (req, res) => {
    try {
        const platforms = await PlatformModel.find()
        return res.json(platforms)
    }
    catch (e) {
        return res.status(500).json(e)
    }

})

router.post("/platforms", async (req, res) => {
    try {
        const file = await req.files[0]
        const { name } = req.body
        const platform = new PlatformModel({
            name: name,
            image: file.filename
        })
        return res.json(await platform.save())
    }
    catch (e) {
        return res.status(500).json(e)
    }

})






// Statistics
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

// todo list
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






module.exports = router