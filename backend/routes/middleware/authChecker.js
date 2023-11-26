const jwt = require("jsonwebtoken")
const { accessToken } = require("../../lib/envAccess")
const User = require("../../models/User")


const userChecker = async (req, res, next) => {
    try {
        const token = req.headers.token
        await jwt.verify(
            token,
            accessToken,
            async (err, user) => {
                if (err) return res.status(403).json("token is not valid")

                const dataBaseUser = await User.findOne({
                    email: user.email
                })

                if (!dataBaseUser) {
                    return res.status(403).json("User information not valid, login or register againe.")
                }

                next()
            })
    } catch (e) {
        return res.status(403).json("token is not valid")
    }
}


const adminChecker = async (req, res, next) => {
    try {
        const token = req.headers.token

        await jwt.verify(
            token,
            accessToken,
            async (err, user) => {
                if (err) return res.status(403).json("token is not valid")

                const dataBaseUser = await User.findOne({
                    email: user.email
                })

                if (!dataBaseUser) {
                    return res.status(403).json("User information not valid, login or register againe.")
                }

                if (dataBaseUser.role !== "admin") {
                    return res.status(403).json("User Dose not have accsess .")
                }

                next()
            })
    } catch (e) {
        return res.status(403).json("token is not valid")
    }

}


module.exports = { userChecker, adminChecker }