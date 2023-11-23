const express = require("express")
const router = express.Router()


router.get("/:link", async (req, res, next) => {
    try {
        const link = req.params.link
        if (!link)
            throw "Link Invalid"


        return res.json(link)
    }
    catch (e) {
        return next(e)
    }
})


module.exports = router