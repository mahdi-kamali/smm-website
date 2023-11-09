
require("dotenv").config();
const accessToken = process.env.ACCESS_TOKEN_SECRET

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY

const SMM_STORE_API_KEY = process.env.SMM_STORE_API_KEY

const SMM_SOTRE_BASE_URL = process.env.SMM_SOTRE_BASE_URL



module.exports = {
    accessToken,
    STRIPE_SECRET_KEY,
    SMM_STORE_API_KEY,
    SMM_SOTRE_BASE_URL
}
