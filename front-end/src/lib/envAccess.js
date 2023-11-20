


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
        }
    }
}








