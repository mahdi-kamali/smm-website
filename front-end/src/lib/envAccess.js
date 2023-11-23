


export const CLIENT = {
    BASE_URL : window.location.origin
}

export const SERVER = {
    BASE_URL: process.env.REACT_APP_SERVER_BASE_URL,
    API_URL: process.env.REACT_APP_SERVER_BASE_URL + "/api/",
}



export const API = {
    BLOGS: {
        GET: SERVER.API_URL + "blogs/"
    },
    FAQS: {
        POST: SERVER.API_URL + "faqs/"
    },
    PLATFORM: {
        GET: SERVER.API_URL + "platforms/"
    },
    COUNTRIES: {
        GET: SERVER.API_URL + "countries/"
    },
    AUTH: {
        LOGIN: SERVER.API_URL + "auth/login",
        SIGNUP: SERVER.API_URL + "auth/register",
    },
    DASHBOARD: {
        QUICK_VIEW: {
            GET: SERVER.API_URL + "user/dashboard/statistics/overview",
        },
        USER_INFO: {
            GET: SERVER.API_URL + "user/dashboard/statistics/user"
        },
        USER_ACTIVE_ORDERS: {
            GET: SERVER.API_URL + "user/dashboard/statistics/user-active-orders"
        },
        USER_SAVED_SERVICES: {
            GET: SERVER.API_URL + "user/dashboard/statistics/saved-services"
        },
        USER_EVENTS: {
            GET: SERVER.API_URL + "user/dashboard/statistics/events"
        },
        USER_PAYMENT_METHODS: {
            GET: SERVER.API_URL + "user/dashboard/add-found/methods"
        },
        USER_PAYMENT_CHECKOUT: {
            POST: SERVER.API_URL + "user/dashboard/add-found/create-checkout"
        },
        USER_ORDERS_HISTORY: {
            GET: SERVER.API_URL + "user/dashboard/order"
        },
        USER_ORDER_SUBMIT: {
            POST: SERVER.API_URL + "user/dashboard/order"
        },
        USER_TICKET_SUBMIT: {
            POST: SERVER.API_URL + "user/dashboard/tickets"
        },
        USER_TICKET_HISTORY: {
            GET: SERVER.API_URL + "user/dashboard/tickets"
        },
        USER_EMAIL_VERIFY: {
            CODE: { GET: SERVER.API_URL + "user/dashboard/email-verify/code" },
            STATUS: { GET: SERVER.API_URL + "user/dashboard/email-verify/status" },
            SUBMIT_CODE: {
                POST: SERVER.API_URL + "user/dashboard/email-verify/submit-code"
            }
        },
        GIFTS: {
            EMAIL: {
                STATUS: {
                    GET: SERVER.API_URL + "user/dashboard/gift/email/status"
                },
                CLAIM: {
                    POST: SERVER.API_URL + "user/dashboard/gift/email/claim"
                }
            },
            TRSUT_PILOT: {
                STATUS: {
                    GET: SERVER.API_URL + "user/dashboard/gift/trust-pilot/status"
                },
                CLAIM: {
                    POST: SERVER.API_URL + "user/dashboard/gift/trust-pilot/submit-proof"
                }
            },
            RETWEET: {
                STATUS: {
                    GET: SERVER.API_URL + "user/dashboard/gift/retweet/status"
                },
                CLAIM: {
                    POST: SERVER.API_URL + "user/dashboard/gift/retweet/submit-proof"
                }
            },
        },
        AFFILIATES: {
            STATUS: {
                GET: SERVER.API_URL + "user/dashboard/affliates"
            }
        }
    },
    PUBLIC: {
        SERVICES: {
            GET: SERVER.API_URL + "services"
        },
    }
}








