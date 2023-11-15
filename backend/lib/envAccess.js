
require("dotenv").config();

const accessToken = process.env.ACCESS_TOKEN_SECRET

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY

const SMM_STORE_API_KEY = process.env.SMM_STORE_API_KEY
const SMM_SOTRE_BASE_URL = process.env.SMM_SOTRE_BASE_URL


const CRYPTOMUS_MERCHANT_ID = process.env.CRYPTOMUS_MARCHANT_ID
const CRYPTOMUS_BASE_URL = process.env.CRYPTOMUS_BASE_URL
const CRYPTOMUS_API_KEY = process.env.CRYPTOMUS_API_KEY


const SMTP_EMAIL = process.env.SMTP_EMAIL
const SMTP_PASSWORD = process.env.SMTP_PASSWORD



module.exports = {
    accessToken,
    STRIPE_SECRET_KEY,
    SMM_STORE: {
        API_KEY: SMM_STORE_API_KEY,
        BASE_URL: SMM_SOTRE_BASE_URL,
    },
    CRYPTOMUS: {
        MERCHANT_ID: CRYPTOMUS_MERCHANT_ID,
        BASE_URl: CRYPTOMUS_BASE_URL,
        API_KEY: CRYPTOMUS_API_KEY
    },
    SMTP: {
        EMAIL: SMTP_EMAIL,
        PASSWORD: SMTP_PASSWORD
    }
}
