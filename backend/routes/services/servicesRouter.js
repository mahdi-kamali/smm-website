const express = require("express")
const router = express.Router()
const fs = require("fs")
const axios = require("axios");
const { SMM_STORE } = require("../../lib/envAccess");
const PlatformModel = require("../../models/PlatformModel");
const OrderModel = require("../../models/OrderModel");





setInterval(() => {
    axios.get(SMM_STORE.BASE_URL
        + `?key=${SMM_STORE.API_KEY}&action=services`
    )
        .then(data => {
            console.log("Catching Started ....")
            const services = data.data
            fs.writeFile(
                "catch/services.json",
                JSON.stringify(services),
                (res, err) => {
                    console.log(err)
                }
            )
            fs.close()
        })
        .catch(err => {
        })
}, 60000);



router.get("/", async (req, res, next) => {
    try {
        return res.json(require("../../catch/services.json"))
    }
    catch (e) {
        return next(e)
    }
})


router.get("/platforms", async (req, res, next) => {
    try {
        const platforms = await PlatformModel.find()
        return res.json(platforms)
    }
    catch (e) {
        return next(e)
    }
})

router.get("/popular-services", async (req, res, next) => {
    try {
        const orders = await OrderModel.find()

        const temp = orders.map(item => {
            return item.service.service
        })

        const elementCounts = {};

        temp.forEach(element => {
            elementCounts[element] = (elementCounts[element] || 0) + 1;
        })


        // Convert the object into an array of key-value pairs
        const countArray = Object.entries(elementCounts);

        // Sort the array based on the values (counts)
        countArray.sort((a, b) => b[1] - a[1]);


        // Get the top 10 elements
        const top10 = countArray.slice(0, 10);




        const services = require("../../catch/services.json")

        const result = top10.map(item => {
            return service = services.find(service => {
                return service.service === item[0]
            })


        })


        return res.json(result)
    } catch (e) {
        return next(e)
    }

})


module.exports = router 