
const express = require("express")
const TicketModule = require("../../../models/TicketModule")
const router = express.Router()
const jwt = require("jsonwebtoken")
const { accessToken, STRIPE_SECRET_KEY, CRYPTOMUS } = require("../../../lib/envAccess")
const User = require("../../../models/User")
const OrderModel = require("../../../models/OrderModel")
const crypto = require("crypto")
const TrustpilotModel = require("../../../models/TrustpilotModel")
const ShareModel = require("../../../models/ShareModel")
const EventModel = require("../../../models/EventModel")
const { default: axios } = require("axios")
const PlatformModel = require("../../../models/PlatformModel")
const { uploader, trustPilotStorageUploader } = require("../../../lib/imageUpload")
const PaymentMethodsModel = require("../../../models/PaymentMethodsModel")
const CheckoutModel = require("../../../models/CheckoutModel")
const { sendEmail } = require("../../../lib/sendEmail")
const EmailVerifyGiftModel = require("../../../models/gifts/EmailVerifyGiftModel")
const RetweetGiftModel = require("../../../models/RetweetGiftModel")
const AffiliateTransactionModel = require("../../../models/affiliates/AffiliateTransactionModel")
const moment = require("moment");



router.use(uploader("images/users").any())



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


router.post("/tickets", async (req, res, next) => {
    try {


        const token = req.headers.token
        const email = await jwt.verify(token, accessToken,
            (err, user) => {
                return user.email
            })

        const user = await User.findOne({
            email: email
        })


        const {
            subject,
            orderID,
            request,
            message,
        } = await req.body

        const ticket = new TicketModule({
            subject: subject,
            orderID: orderID,
            request: request,
            message: message,
            userID: user._id
        })

        return res.json(await ticket.save())
    }
    catch (e) {
        return next(e)
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


// ------------------- Order
router.post("/order", async (req, res, next) => {
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
            } else {
            }
        })

        if (!targetService) {
            throw new Error("Service Not Available.")
        }

        if (parseInt(quantity) < parseInt(targetService.min)) {
            throw new Error("Minimum Quantity is " + targetService.min)
        }



        if (parseInt(quantity) > parseInt(targetService.max)) {
            throw new Error("Maximum Quantity is " + targetService.max)
        }



        const priceForSingle = (targetService.rate / 1000)
        const priceForAll = (quantity * priceForSingle).toFixed(4)



        if (user.found < priceForAll) {
            throw new Error("Found is Not enough!")
        }


        const order = new OrderModel({
            service: targetService,
            serviceID: serviceID,
            userID: user["_id"],
            charge: priceForAll,
            quantity: quantity,
            link: link,
            country: user.country,
            events: [await new EventModel({
                type: "order",
                date: Date.now(),
                header: `Service ${serviceID} addedd`,
                body: "ok thanks",
                status: "On Progress",
                userID: user._id
            }).save()]
        })

        await order.save()

        user.found = user.found - priceForAll

        await user.save()

        const affliateOfLink = user.affiliateOf

        if (affliateOfLink) {
            const targetUser = await User.findOne({
                "affiliates.link": affliateOfLink
            })

            const affliateTransactionModel = new AffiliateTransactionModel({
                orderID: order._id,
                price: priceForAll,
                ammountForGift: (priceForAll * 5) / 100,
                affliateOwnerID: targetUser._id,
                orderOwnerID: user._id
            })
            await affliateTransactionModel.save()

            targetUser.found += (priceForAll * 5) / 100
            await targetUser.save()
        }


        return res.json(order)
    }
    catch (e) {
        return next(e)
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


// -------------------Statistics

// Overview
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
            totalSpend: totalSpend.toFixed(4),
            totalOrders: totalOrders.length,
            accountBalance: accountBalance.toFixed(4),
            activeOrders: activeOrders
        })
    }
    catch (e) {
        return res.json(500).json("error")

    }
})


// User Information
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


// User Orders
router.get("/statistics/user-active-orders", async (req, res, next) => {

    try {
        const token = req.headers.token
        const email = await jwt.verify(token, accessToken, (err, user) => {
            return user.email
        })


        const user = await User.findOne({
            email: email
        })



        const activeOrders = await OrderModel.find({
            userID: user._id,
            status: { $nin: ["error", "success"] }
        })


        const result = []

        const platforms = await PlatformModel.find()

        platforms.forEach(platform => {
            const platformName = platform.name.toLowerCase().trim()

            const temp = activeOrders.filter(item => {
                return item.service.name
                    .toLowerCase()
                    .trim()
                    .includes(platformName)
            })

            if (temp.length !== 0) {
                result.push({
                    platform: platform,
                    orders: temp
                })
            }





        })


        return res.json(result)
    }
    catch (e) {
        return next(e)
    }
})

// User Saved Services
router.get("/statistics/saved-services", async (req, res) => {
    const token = req.headers.token
    const user = await jwt.verify(token, accessToken, async (err, user) => {

        const temp = await User.findOne({
            email: user.email
        })
        return temp
    })

    const services = await require("../../../catch/services.json")

    const userSavedServices = Array.from(user.savedServices)

    const temp = userSavedServices.map((item, index) => {

        const service = services.find((s) => {
            return s.service === item
        })


        if (!service) {
            console.log(`isNot Valid ${service}  index = ${index} service = ${item}`)
        } else
            return service
    }).filter(item => {
        return item
    })

    user.savedServices = temp.map(item => { return item.service })


    return res.json(temp)
})

router.post("/statistics/saved-services", async (req, res) => {
    const { serviceID } = await req.body

    const service = require("../../../services.json").find(
        service => {
            return service.service === serviceID
        }
    )

    if (!service) {
        return res.status(400).json("service not founded")
    }

    const token = req.headers.token

    const user = await jwt.verify(token, accessToken, async (err, user) => {
        const email = user.email
        const temp = await User.findOne({
            email: email
        })
        return temp
    })

    const savedServices = Array.from(user.savedServices)

    const hasService = savedServices.includes(serviceID)

    if (hasService) {
        return res.status(403).json("You Already Have This Service.")
    }

    user.savedServices.push(serviceID)

    return res.json(await user.save())
})


// Events
router.get("/statistics/events", async (req, res) => {
    const token = req.headers.token

    const email = jwt.verify(token, accessToken, (err, user) => {
        return user.email
    })

    const user = await User.findOne({
        email: email
    })
    const events = await EventModel.find({
        userID: user._id
    }).sort({
        date: -1
    })
    return res.json(events)
})




// ------------------ Add Found 


// get All Methods
router.get("/add-found/methods", async (req, res) => {
    const methods = await PaymentMethodsModel.find({
        available: true
    })
    return res.json(methods)
})


async function checkoutWithCrpyomous(method, amount, user) {
    try {
        const checkout = await CheckoutModel({
            method: method,
            amount: amount,
            userID: user._id,

        })
        await checkout.save();





        const data = {
            amount: amount.total + "",
            currency: "usd",
            order_id: checkout._id
        }


        const sign = crypto
            .createHash("md5")
            .update(
                Buffer
                    .from(JSON.stringify(data))
                    .toString("base64") + CRYPTOMUS.API_KEY
            )
            .digest("hex")

        const result = await axios.post(
            CRYPTOMUS.BASE_URl,
            data,
            {
                headers: {
                    merchant: CRYPTOMUS.MERCHANT_ID,
                    sign: sign
                }
            }
        )


        return result.data.result.url


    }
    catch (err) {
        console.log(err)
        throw err
    }

}

// Check-Out
router.post("/add-found/create-checkout", async (req, res, next) => {

    try {
        const { method, amount } = req.body
        const token = await req.headers.token

        const email = await jwt.verify(token, accessToken, (err, user) => {
            return user.email
        })
        const user = await User.findOne({
            email: email
        })

        if (!method) {
            return next("Method is Required!")
        }

        if (!amount) {
            return next("Amount is Required!")
        }

        if (amount <= 0) {
            return next("Amount most be bigger then 0!")
        }


        const methodName = method.name.toLowerCase().trim()

        switch (methodName) {
            case "cryptomus": {
                checkoutWithCrpyomous(method, amount, user)
                    .then(response => {
                        return res.json(response)
                    })
                    .catch(err => { return next(err) })
                return;
            }
        }


        return next("Invalid Method!")
    }
    catch (err) {
        return next(err)
    }

})







// Email Verfication

// Get Status
router.get("/email-verify/status", async (req, res, next) => {
    try {
        const token = req.headers.token
        const email = await jwt.verify(token, accessToken, (err, user) => {
            return user.email
        })
        const user = await User.findOne({
            email: email
        })

        if (user.emailVerified.isActive === true) {
            return res.json(true)
        }

        return res.json(false)


    }
    catch (e) {
        return next(e)
    }
})

// Get Code
router.get("/email-verify/code", async (req, res, next) => {
    try {

        const token = req.headers.token
        const email = await jwt.verify(token, accessToken, (err, user) => {
            return user.email
        })
        const user = await User.findOne({
            email: email
        })

        if (user.emailVerified.isActive === true) {
            throw ("You Already Verified Your Email !")
        }

        const randomCode = crypto.randomBytes(3).toString("hex")



        user.emailVerified.verifyCode.code = randomCode
        user.emailVerified.verifyCode.sendedAt = Date.now()
        await user.save()

        await sendEmail(user.email, randomCode)

        return res.json("Your Code Sended To Your Email , Please Verified it")
    }
    catch (e) {
        return next(e)
    }
})

// Submit Code
router.post("/email-verify/submit-code", async (req, res, next) => {
    try {
        const { code } = req.body
        const token = req.headers.token
        const email = await jwt.verify(token, accessToken, (err, user) => {
            return user.email
        })
        const user = await User.findOne({
            email: email
        })

        if (user.emailVerified.isActive === true) {
            throw ("You Already Verified Your Email !")
        }

        if (code === user.emailVerified.verifyCode.code) {
            user.emailVerified.isActive = true
            await user.save()
            return res.json("Your Email Succesfuly Verified.")
        }


        throw "Code Is Invalid!"
    }
    catch (e) {
        return next(e)
    }
})










// ------------------------------------ Free Credits 


// Email 
router.get("/gift/email/status", async (req, res, next) => {
    try {
        const token = req.headers.token
        const email = await jwt.verify(token, accessToken, (err, user) => {
            return user.email
        })
        const user = await User.findOne({
            email: email
        })


        const gift = await EmailVerifyGiftModel.findById(user.gifts.email)


        return res.json(gift)
    }
    catch (e) { }
})
router.post("/gift/email/claim", async (req, res, next) => {
    try {
        const { platform, link } = req.body
        const token = req.headers.token
        const email = await jwt.verify(token, accessToken, (err, user) => {
            return user.email
        })
        const user = await User.findOne({
            email: email
        })

        if (user?.gifts?.email) throw "You Already Claimed Your Gift."

        const giftModel = new EmailVerifyGiftModel({
            userID: user._id,
            link: link,
            platform: platform
        })

        try {
            await giftModel.save()
        }
        catch (e) {
            throw ("You Already claimed Your Gift Before.")
        }


        user.gifts.email = giftModel._id

        await user.save()

        return res.json("Your Gift Successfuly Claimed!.")
    }
    catch (e) {
        return next(e)
    }
})

// trust pilot
router.get("/gift/trust-pilot/status", async (req, res, next) => {

    try {
        const token = req.headers.token
        const email = await jwt.verify(token, accessToken, (err, user) => {
            return user.email
        })
        const user = await User.findOne({
            email: email
        })


        const giftID = user.gifts.trustPilot
        const trustPilot = await TrustpilotModel.findById(giftID)

        return res.json(trustPilot)
    }
    catch (e) {
        return next(e)
    }
})
router.post("/gift/trust-pilot/submit-proof", async (req, res, next) => {
    try {
        const token = req.headers.token
        const email = await jwt.verify(token, accessToken, (err, user) => {
            return user.email
        })
        const user = await User.findOne({
            email: email
        })
        const file = req.files[0]

        if (!file) {
            throw ("Please Insert your Prove First")
        }


        const trustPilotGiftModel = await new TrustpilotModel({
            userID: user._id,
            proof: "/statics/images/users/" + file.filename,
            accepted: false,
        })

        await trustPilotGiftModel.save()

        user.gifts.trustPilot = trustPilotGiftModel._id

        await user.save()

        return res.json("Your Proof Successfuly Submited Please wait for validation.")
    }
    catch (e) {
        if (e?.code === 11000) {
            return next("You Already Submitted You Proof, please Wait!")
        }
        return next(e)
    }
})



// trust pilot
router.get("/gift/retweet/status", async (req, res, next) => {

    try {
        const token = req.headers.token
        const email = await jwt.verify(token, accessToken, (err, user) => {
            return user.email
        })
        const user = await User.findOne({
            email: email
        })


        const giftID = user.gifts.retweet
        const retweet = await RetweetGiftModel.findById(giftID)

        return res.json(retweet)
    }
    catch (e) {
        return next(e)
    }
})
router.post("/gift/retweet/submit-proof", async (req, res, next) => {
    try {
        const token = req.headers.token
        const email = await jwt.verify(token, accessToken, (err, user) => {
            return user.email
        })
        const user = await User.findOne({
            email: email
        })
        const file = req.files[0]

        if (!file) {
            throw ("Please Insert your Prove First")
        }


        const retweetGiftModel = await new RetweetGiftModel({
            userID: user._id,
            proof: "/statics/images/users/" + file.filename,
            accepted: false,
        })

        await retweetGiftModel.save()

        user.gifts.retweet = retweetGiftModel._id

        await user.save()

        return res.json("Your Proof Successfuly Submited Please wait for validation.")
    }
    catch (e) {
        if (e?.code === 11000) {
            return next("You Already Submitted You Proof, please Wait!")
        }
        return next(e)
    }
})



// Affiliates 
router.get("/affliates", async (req, res, next) => {

    try {
        const token = req.headers.token
        const email = await jwt.verify(token, accessToken, (err, user) => {
            if (err) throw err
            return user.email
        })

        const user = await User.findOne({
            email: email
        })

        const affliatesTransactions = await AffiliateTransactionModel.find({
            affliateOwnerID: user._id
        })

        const members = await User.find({
            affiliateOf: user.affiliates.link
        }, { fullName: 1, _id: 0 })


        let commisions = 0
        affliatesTransactions.forEach(item => {
            commisions += parseFloat(item.ammountForGift)
        })



        const dailyRecords = await AffiliateTransactionModel.find({
            affliateOwnerID: user._id,
            createdAt: {
                $gte: moment().startOf('day').toDate(),
                $lt: moment().endOf('day').toDate()
            }
        });

        const weeklyRecords = await AffiliateTransactionModel.find({
            affliateOwnerID: user._id,
            createdAt: {
                $gte: moment().startOf('week').toDate(),
                $lt: moment().endOf('day').toDate()
            }
        });

        const yearlyRecords = await AffiliateTransactionModel.find({
            affliateOwnerID: user._id,
            createdAt: {
                $gte: moment().startOf('year').toDate(),
                $lt: moment().endOf('day').toDate()
            }
        });

        const revenue = {
            daily: dailyRecords.reduce((total, record) => total + parseFloat(record.ammountForGift), 0),
            weekly: weeklyRecords.reduce((total, record) => total + parseFloat(record.ammountForGift), 0),
            yearly: yearlyRecords.reduce((total, record) => total + parseFloat(record.ammountForGift), 0)
        };


        return res.json({
            members: members,
            revenue: revenue,
            performance: affliatesTransactions.map(item => {
                return {
                    label: item.createdAt,
                    ammount: item.ammountForGift
                }
            }),
            totalOrders: affliatesTransactions.length,
            commisions: commisions.toFixed(3),
            conversionRate: 5,
            link: user.affiliates.link,
        })

    }
    catch (e) {
        return next(e)
    }

})







// Payment 



// Cryptomus Payment

router.post("/payment/cryptomus", async (req, res) => {
    try {
        const { amount, currency } = req.body


        const order_id = crypto.randomBytes(12).toString("hex")



        const data = {
            amount,
            currency,
            order_id: order_id
        }


        const sign = crypto
            .createHash("md5")
            .update(
                Buffer
                    .from(JSON.stringify(data))
                    .toString("base64") + CRYPTOMUS.API_KEY
            )
            .digest("hex")

        const result = await axios.post(
            CRYPTOMUS.BASE_URl,
            data,
            {
                headers: {
                    merchant: CRYPTOMUS.MERCHANT_ID,
                    sign: sign
                }
            }
        )

        return res.json(result.data.result.url)
    }
    catch (e) {
        return res.json(e)
    }

})


router.post("/payment/cryptomus/checkout", async (req, res) => {
    try {
        const data = req.body
        return res.json(data)
    }
    catch (e) {
        return res.json(e)
    }

})






// Stripe

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