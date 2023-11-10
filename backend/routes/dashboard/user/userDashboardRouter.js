
const express = require("express")
const TicketModule = require("../../../models/TicketModule")
const router = express.Router()
const jwt = require("jsonwebtoken")
const { accessToken, STRIPE_SECRET_KEY } = require("../../../lib/envAccess")
const User = require("../../../models/User")
const OrderModel = require("../../../models/OrderModel")
const crypto = require("crypto")
const TrustpilotModel = require("../../../models/TrustpilotModel")
const ShareModel = require("../../../models/ShareModel")







// Tickets
router.get("/tickets", async (req, res) => {

    try {

        const token = req.headers.token

        const email = await jwt.verify(token, accessToken, (err, user) => {
            return user.email;
        })


        const user = await User.findOne({
            email: email
        })

        const tickets = await TicketModule.find({
            userID: user["_id"]
        })

        return res.json(tickets)
    }
    catch (e) {
        return res.status(403).json(e)
    }

})


router.post("/tickets", async (req, res) => {
    try {
        const {
            subject,
            orderID,
            request,
            message,
            userID
        } = await req.body

        const ticket = new TicketModule({
            subject: subject,
            orderID: orderID,
            request: request,
            message: message,
            userID: userID
        })

        return res.json(await ticket.save())
    }
    catch (e) {
        return res.json(e)
    }
})



const storeItems = new Map([
    [
        1, {
            priceInCents: 100, name: "Learn React Today"
        }
    ],
    [
        2, {
            priceInCents: 50, name: "Learn CSS Today"
        }
    ],
])


const clientRequest = [
    {
        id: 1,
        quantity: 10
    },
    {
        id: 2,
        quantity: 10
    }
]













// Order
router.post("/order", async (req, res) => {
    try {


        const token = req.headers.token

        const {
            link,
            serviceID,
            quantity,
            charge } = req.body



        const email = await jwt.verify(token, accessToken, (err, user) => {
            return user.email
        })


        const user = await User.findOne({
            email: email
        })


        const services = require("../../../catch/services.json")
        const targetService = services.find(item => {
            if (item.service === serviceID) {
                return item
            }
        })

        if (!targetService) {
            return res.status(404).json("Service Not Available.")
        }

        if (parseInt(quantity) < parseInt(targetService.min)) {
            return res.status(400).json("Minimum Quantity is " + targetService.min)
        }



        if (parseInt(quantity) > parseInt(targetService.max)) {
            return res.status(400).json("Maximum Quantity is " + targetService.max)
        }



        const priceForSingle = (targetService.rate / 1000)
        const priceForAll = (quantity * priceForSingle).toFixed(4)



        if (user.found < priceForAll) {
            return res.status(400).json("Found is Not enough!")
        }





        const order = new OrderModel({
            serviceID: serviceID,
            userID: user["_id"],
            charge: priceForAll,
            quantity: quantity,
            link: link,
        })
        await order.save()

        user.found = user.found - priceForAll
        await user.save()
        return res.json(order)
    }
    catch (e) {
        return res.status(500).json("Error! Somthing Wrong. Contact Supports")
    }
})

router.get("/order", async (req, res) => {
    try {
        const token = req.headers.token

        const email = jwt.verify(token, accessToken, (err, user) => {
            return user.email
        })

        const user = await User.findOne({
            email: email
        })

        const orders = await OrderModel.find({
            userID: user["_id"]
        })
        return res.json(orders)
    }
    catch (e) {
        return res.status(500).json("Error!")
    }
})


// Statistics 
router.get("/statistics/overview", async (req, res) => {
    try {
        const token = req.headers.token
        const email = await jwt.verify(token, accessToken, (err, user) => {
            return user.email
        })

        const user = await User.findOne({
            email: email
        })

        const totalOrders = await OrderModel.find({
            userID: user._id
        })

        let totalSpend = 0
        let accountBalance = user.found
        let activeOrders = 0

        Array.from(totalOrders).forEach(order => {
            totalSpend += order.charge
            if (order.status == "active") {
                activeOrders += 1;
            }
        })





        return res.json({
            totalSpend: totalSpend,
            totalOrders: totalOrders.length,
            accountBalance: accountBalance,
            activeOrders: activeOrders
        })
    }
    catch (e) {
        return res.json(500).json("error")

    }
})

router.get("/statistics/user", async (req, res) => {
    const token = req.headers.token
    const email = await jwt.verify(token, accessToken, (err, user) => {
        return user.email
    })
    const user = await User.findOne({
        email: email
    })
    return res.json(user)
})


router.get("/statistics/user-orders", async (req, res) => {

    const token = req.headers.token
    const email = await jwt.verify(token, accessToken, (err, user) => {
        return user.email
    })


    const user = await User.findOne({
        email: email
    })



    const activeOrders = await OrderModel.find({
        userID: user._id,
        status: {$nin : ["error" , "success"]}
    })




    return res.json(activeOrders)
})




// Free Credits 
router.get("/gift/email-verify", async (req, res) => {
    try {
        const token = req.headers.token
        const email = await jwt.verify(token, accessToken, (err, user) => {
            return user.email
        })
        const user = await User.findOne({
            email: email
        })

        if (user.emailVerified.isActive === true) {
            return res.json("You Already Verified Your Email !")
        }

        const randomCode = crypto.randomBytes(3).toString("hex")



        user.emailVerified.verifyCode.code = randomCode
        user.emailVerified.verifyCode.sendedAt = Date.now()
        await user.save()



        return res.json("Your Code Sended To Your Email , Please Verified it")
    }
    catch (e) {
        return res.status(500).json("Error !")
    }
})

router.post("/gift/email-verify", async (req, res) => {
    try {
        const token = req.headers.token
        const email = await jwt.verify(token, accessToken, (err, user) => {
            return user.email
        })
        const user = await User.findOne({
            email: email
        })

        if (user.emailVerified.isActive === true) {
            return res.json("You Already Verified Your Email !")
        }

        const { code } = req.body

        if (code === user.emailVerified.verifyCode.code) {
            user.emailVerified.isActive = true
            await user.save()
            return res.json("Your Email Verified !, 5 Dollar Gift Delivered!")
        } else {
            return res.json("Wrong Code !")
        }




    }
    catch (e) {
        return res.status(500).json("Error !")
    }
})


router.post("/gift/trust-pilot", async (req, res) => {

    try {
        const { userID } = req.body
        const file = req.files[0]

        if (!file) {
            return res.status(400).json("Please Insert your Prove First")
        }


        const trustPilot = await TrustpilotModel({
            userID: userID,
            image: file.filename
        })


        return res.json(await trustPilot.save())
    }
    catch (e) {

        if (e.code === 11000) {
            return res.status(400).json("You Already Submitted Your Prof , please wait for accepting. ")
        }
        return res.status(500).json("Error")
    }
})

router.post("/gift/share", async (req, res) => {

    try {

        const file = req.files[0]
        const { userID } = req.body


        if (!file) {
            return res.status(400).json("Please Insert Your Prof First!")
        }

        const share = new ShareModel({
            userID: userID,
            image: file.filename
        })

        await share.save()


        return res.json("Your Prof Submited , please Wait")

    }
    catch (e) {
        if (e.code === 11000) {
            return res.status(400).json("You Already Submitted Your Prof , please wait for accepting. ")
        }
        return res.status(500).json("Error")
    }
})







// Payment 

router.get("/payment", async (req, res) => {

    try {
        const stripe = require('stripe')(STRIPE_SECRET_KEY);


        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: "payment",

            line_items: clientRequest.map(item => {
                const storeItem = storeItems.get(item.id)

                return {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: storeItem.name,
                        },
                        unit_amount: storeItem.priceInCents
                    },
                    quantity: item.quantity
                }

            }),

            success_url: "http://localhost:3001/api/user/dashboard/payment/success",
            cancel_url: "http://localhost:3001/api/user/dashboard/payment/canceled"
        })

        return res.redirect(session.url)
    }
    catch (e) {
        return res.json(e)
    }
})




// CallBack Functions After Payment Actions
router.get("/payment/success", async (req, res) => {

    return res.json("pay success !")
})

router.get("/payment/cancel", async (req, res) => {

    return res.json("pay canceled !")
})

















module.exports = router