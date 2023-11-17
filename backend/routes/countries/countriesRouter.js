const express = require("express")
const router = express.Router()
const countries = require("../../catch/countries.json")


router.get("/", (req, res) => {
    return res.json(countries)
})

module.exports = router