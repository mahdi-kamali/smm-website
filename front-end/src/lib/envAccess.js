


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
    }
}





