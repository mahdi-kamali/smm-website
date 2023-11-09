
const express = require("express")
const TicketModule = require("../../../models/TicketModule")
const router = express.Router()
const jwt = require("jsonwebtoken")
const { accessToken, STRIPE_SECRET_KEY } = require("../../../lib/envAccess")
const User = require("../../../models/User")
const OrderModel = require("../../../models/OrderModel")
const crypto = require("crypto")







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




// CallBack Functions After Payment Actions
router.get("/payment/success", async (req, res) => {

    return res.json("pay success !")
})

router.get("/payment/cancel", async (req, res) => {

    return res.json("pay canceled !")
})







// FreeCredits 
router.get("/gift/email-verify", async (req, res) => {
    try {
        const token = req.headers.token
        const email = await jwt.verify(token, accessToken, (err, user) => {
            return user.email
        })
        const user = await User.findOne({
            email: email
        })

        if (user.emailVerified === true) {
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

        if (user.emailVerified === true) {
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





module.exports = router