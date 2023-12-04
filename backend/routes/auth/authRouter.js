
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
router.post("/register", async (request, response, next) => {

    try {

        const {
            email,
            fullName,
            password,
            passwordConfirm,
            country,
            gender,
            affliateLink
        } = await request.body



        if (password !== passwordConfirm) {
            throw new Error("Password Confirmation Not Match")
        }

        if (affliateLink) {
            const affliateUser = await User.findOne({
                'affiliates.link': affliateLink
            })
            if (affliateUser === null)
                throw "invalid link. " + affliateLink + " Please Check the link."


            const user = new User({
                fullName,
                email,
                password,
                country,
                role: "normal",
                gender,
                affiliateOf: affliateLink,
                image: gender === "male" ? "/statics/images/users/male.png" : "/statics/images/users/female.png"
            })


            await user.save()

            affliateUser.affiliates.members.push(
                user._id
            )

            await affliateUser.save()



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


        const user = new User({
            fullName,
            email,
            password,
            country,
            role: "normal",
            gender,
            affiliateOf: affliateLink,
            image: gender === "male" ? "/statics/images/users/male.png" : "/statics/images/users/female.png"
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
        return next(e)
    }



})


// Login 
router.post("/login", async (request, respsonse, next) => {
    try {
        const { email, password } = request.body

        if (!email || !password) {
            throw new Error("Fields Required !")
        }

        if (!validator.isEmail(email)) {
            throw new Error("Email Not Valid !")
        }


        const user = await User.findOne(
            {
                email: email,
                password: password
            }
        )

        if (!user) {
            throw new Error("Email or password wrong !")
        }

        const token = await jwt.sign(
            { email: user.email },
            accessToken,
            { expiresIn: expireTime }
        )


        return respsonse.json({
            token: token , 
            message : "You are Successfully logged in."
        })
    }
    catch (e) {
        return next(e)
    }
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