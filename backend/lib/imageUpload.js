const multer = require("multer")



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



const uploader = multer({ storage: storage })
const blogUploader = multer({ storage: blogStorage })



module.exports = { uploader, blogUploader }