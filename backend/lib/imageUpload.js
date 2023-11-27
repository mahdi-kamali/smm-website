const multer = require("multer")
const fs = require("fs")


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + require("path").extname(file.originalname))
    }
})



const blogStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images/blogs")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + require("path").extname(file.originalname))
    }
})


const platformStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images/platforms")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + require("path").extname(file.originalname))
    }
})


const usersStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images/users")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + require("path").extname(file.originalname))
    }
})


const paymentMethodsStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images/payment-methods")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + require("path").extname(file.originalname))
    }
})


const trustPilotStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images/trustPilot")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + require("path").extname(file.originalname))
    }
})



const uploader = (path) => {
    if (path) {
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                fs.mkdirSync(path, { recursive: true })
                cb(null, path)
            },
            filename: (req, file, cb) => {
                console.log(file)
                cb(null, Date.now() + require("path").extname(file.originalname))
            }
        })
        return multer({ storage: storage })
    }


    return multer({ storage: storage })
}
const blogUploader = multer({ storage: blogStorage })
const platformUploader = multer({ storage: platformStorage })
const usersUploader = multer({ storage: usersStorage })
const paymentMethodsUploader = multer({ storage: paymentMethodsStorage })
const trustPilotStorageUploader = multer({ storage: paymentMethodsStorage })




module.exports = {
    uploader,
    blogUploader,
    platformUploader,
    usersUploader,
    paymentMethodsUploader,
    trustPilotStorageUploader
}