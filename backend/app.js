const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")


const {
    userChecker,
    adminChecker } = require("./routes/middleware/authChecker")
const uploader = require("./lib/imageUpload")




const port = 3001
const app = express()



const dataBaseUrl = "mongodb://127.0.0.1:27017/smm-db"
mongoose.connect(dataBaseUrl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true, //make this also true
    })
    .then(res => {
        console.log("DATABASE Connected")
    })
    .catch(err => {
        console.log(err)
    })






app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(uploader.any())
app.use("/statics/images", express.static("images"))


// Express route for file upload
app.post('/upload', (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send('File uploaded successfully!');
});





// Auth Router
app.use(
    "/api/auth/",
    require("./routes/auth/authRouter"))



// Admin Dashboard
app.use(
    "/api/admin/dashboard",
    adminChecker,
    require("./routes/dashboard/admin/adminDashboardRouter"))



// User Dashboard
app.use(
    "/api/user/dashboard",
    userChecker,
    require("./routes/dashboard/user/userDashboardRouter")
)


// Contact Us 
app.use(
    "/api/contact-us",
    require("./routes/contact-us/contactUsRouter")
)


// Faqs 
app.use(
    "/api/faqs",
    require("./routes/faqs/FaqsRouter")
)


// Blogs
app.use(
    "/api/blogs",
    require("./routes/blogs/blogsRouter")
)



// Services 
app.use("/api/services",
    require("./routes/services/servicesRouter"))



app.listen(port, () => {
    console.log("Server Started " + port)
})



