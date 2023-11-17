
const validator = require("../../lib/validator")
const express = require("express")
const router = express.Router()
const User = require("../../models/User")




const jwt = require("jsonwebtoken")
const { accessToken } = require("../../lib/envAccess")
const { userChecker } = require("../middleware/authChecker")
const { usersUploader } = require("../../lib/imageUpload")



const expireTime = "1d"


router.use(usersUploader.any())

router.get("/", async (request, response) => {

    try {
        const users = prisma.user.findMany({})
        return response.json(await users)
    } catch (e) {

    }

})


// Register
router.post("/register", async (request, response) => {

    try {

        const {
            email,
            fullName,
            password,
            passwordConfirm,
            country,
            gender
        } = await request.body



        if (password !== passwordConfirm) {
            return response.json("Password Confirmation Not Match")
        }

        const user = new User({
            fullName,
            email,
            password,
            country,
            role: "normal",
            gender
        })
        await user.save()


        const token = jwt.sign(
            {
                email: user.email
            },
            accessToken,
            {
                expiresIn: expireTime
            }
        )


        return response.json(token)



    }
    catch (e) {

        if (e.code === 'P2002') {
            return response.status(422).json(
                "Email Already Taken !"
            )
        }

        return response.json(e)
    }



})


// Login 
router.get("/login", async (request, respsonse) => {
    const { email, password } = await request.body


    if (!email || !password) {
        return respsonse.status(400).json(
            "Fields Require !"
        )
    }

    if (!validator.isEmail(email)) {
        return respsonse.status(400).json("Email Not Valid !")
    }


    const user = await User.findOne(
        {
            email: email,
            password: password
        }
    )

    if (!user) {
        return respsonse.json(
            {
                message: "Email or password wrong !"
            },

        )
    }



    const token = await jwt.sign(
        { email: user.email },
        accessToken,
        { expiresIn: expireTime }
    )




    return respsonse.json({
        user: user,
        token: token
    })
})



// Fetch User Data
router.get("/user", userChecker, async (req, res) => {
    try {

        const token = req.headers.token


        const email = jwt.verify(token, accessToken, (err, user) => {
            return user.email
        })


        const user = await User.findOne({
            email: email
        })



        return res.json(user)
    }
    catch (e) {

    }

})











module.exports = router