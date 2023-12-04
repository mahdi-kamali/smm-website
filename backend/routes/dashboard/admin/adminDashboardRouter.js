

const express = require("express")
const ContactUsModel = require("../../../models/ContactUsModel")
const FaqsModel = require("../../../models/FaqsModel")
const BlogsModel = require("../../../models/BlogsModel")
const OrderModel = require("../../../models/OrderModel")
const PaymentModel = require("../../../models/PaymentModel")
const User = require("../../../models/User")
const PlatformModel = require("../../../models/PlatformModel")
const TodoModel = require("../../../models/TodoModel")
const MessageAllModel = require("../../../models/MessageAllModel")
const TicketModule = require("../../../models/TicketModule")
const FaqsSelectedModel = require("../../../models/FaqsSelectedModel")
const uploader = require("../../../lib/imageUpload")
const PaymentMethodsModel = require("../../../models/PaymentMethodsModel")
const router = express.Router()
const moment = require("moment")
const CheckoutModel = require("../../../models/CheckoutModel")
const paginate = require("../../../lib/paginateFunctions")
const { sendEmail } = require("../../../lib/sendEmail")














// ------------ Statistics  

router.get("/statistics/orders/new", async (req, res, next) => {
    try {
        const orders = await OrderModel.find({
            status: "on progress"
        })
        return res.json(orders.length)
    }
    catch (e) {
        return next(e)
    }

})

router.get("/statistics/quick-view", async (req, res, next) => {
    try {

        const startOfMonth = moment().startOf("month").toDate();
        const endOfMonth = moment().endOf("month").toDate();


        const totalOrders = await OrderModel.find()
        const completedOrders = totalOrders.filter((item) => { return item.status === "success" })



        const totalServices = await require("../../../catch/services.json")
        const platforms = await PlatformModel.find()


        const totalCheckouts = await CheckoutModel.find({
            status: "success"
        })

        const thisMonthCheckOut = await CheckoutModel.find({
            status: "success",
            createdAt: {
                $gte: startOfMonth,
                $lte: endOfMonth
            }
        })



        let incomeTotal = 0;
        let incomeThisMonth = 0
        try {
            if (totalCheckouts.length > 0) {
                incomeTotal = totalCheckouts.map(record => {
                    return record.amount.amount
                })?.reduce((total, index) => { return total += index })
            }

            if (thisMonthCheckOut.length > 0) {
                incomeThisMonth = thisMonthCheckOut.map(record => {
                    return record.amount.amount
                })?.reduce((total, index) => { return total += index })
            }

        }
        catch (e) {
            console.log(e)
            incomeTotal = 0;
            incomeThisMonth = 0;
        }



        const users = await User.find()
        const totalCustomers = users.length
        const usersThisMonth = (await User.find({
            createdAt: {
                $gte: startOfMonth,
                $lte: endOfMonth,
            }
        })).length



        const data = {
            ordersReceived: {
                totalOrders: totalOrders.length,
                completedOrders: completedOrders.length
            },
            totalServices: {
                total: totalServices.length,
                platforms: platforms.length
            },
            income: {
                total: incomeTotal,
                thisMonth: incomeThisMonth
            },
            customers: {
                total: totalCustomers,
                thisMonth: usersThisMonth
            }
        }
        return res.json(data)
    }
    catch (e) {
        console.log(e)
        return next(e)
    }
})


// ------------------ Services --------------------
router.get("/services", async (req, res, next) => {
    try {
        const services = require("../../../catch/services.json")
        return res.json(services)
    }
    catch (e) {
        return next(e)
    }
})




// *** Order Status
// Function to get data for a specific status and time period
async function getDataForPeriod(status, start, end, model) {
    const orders = await model.find({
        status,
        createdAt: {
            $gte: start,
            $lte: end,
        },
    });

    return orders
}

router.get("/statistics/order-status/weekly", async (req, res, next) => {

    try {
        const startOfWeek = moment().startOf("week");
        const endOfWeek = moment().endOf("week");
        const labels = moment.weekdays()

        const onProgressOrders = await getDataForPeriod("on progress", startOfWeek, endOfWeek, OrderModel);
        const onSuccessOrders = await getDataForPeriod("success", startOfWeek, endOfWeek, OrderModel);
        const onErrorOrders = await getDataForPeriod("on error", startOfWeek, endOfWeek, OrderModel);



        const onProgressData = []
        labels.forEach((dayLabel, index) => {
            const temp = onProgressOrders.filter(item => {
                const dayIndex = item.createdAt.getDay()
                return labels[dayIndex] === dayLabel
            })

            onProgressData.push(temp.length)

        })


        const onSuccessData = []
        labels.forEach((dayLabel, index) => {
            const temp = onSuccessOrders.filter(item => {
                const dayIndex = item.createdAt.getDay()
                return labels[dayIndex] === dayLabel
            })


            onSuccessData.push(temp.length)

        })


        const onErrorData = []
        labels.forEach((dayLabel, index) => {
            const temp = onErrorOrders.filter(item => {
                const dayIndex = item.createdAt.getDay()
                return labels[dayIndex] === dayLabel
            })

            onErrorData.push(temp.length)

        })

        return res.json({
            labels: labels,
            datasets: [
                {
                    label: 'on progress',
                    data: onProgressData, // Add data for all 12 months
                    backgroundColor: '#ffc36c',
                    stack: 'Stack 1',
                },
                {
                    label: 'success',
                    data: onSuccessData, // Add data for all 12 months
                    backgroundColor: 'green',
                    stack: 'Stack 1',
                },
                {
                    label: 'error',
                    data: onErrorData, // Add data for all 12 months
                    backgroundColor: 'red',
                    stack: 'Stack 1',
                },
            ],
            summary: {
                onSuccessData: onSuccessData.reduce((total, b) => { return total + b }),
                onProgressData: onProgressData.reduce((total, b) => { return total + b }),
                onErrorData: onErrorData.reduce((total, b) => { return total + b }),
            }
        })
    }
    catch (e) {
        return next(e)
    }
})


router.get("/statistics/order-status/monthly", async (req, res, next) => {

    try {
        const startOfMonth = moment().startOf("month");
        const endOfMonth = moment().endOf("month");
        const labels = moment.months()
        const onProgressOrders = await getDataForPeriod("on progress", startOfMonth,
            endOfMonth, OrderModel);
        const onSuccessOrders = await getDataForPeriod("success", startOfMonth, endOfMonth, OrderModel);
        const onErrorOrders = await getDataForPeriod("on error", startOfMonth, endOfMonth, OrderModel);



        const onProgressData = []
        labels.forEach((dayLabel, index) => {
            const temp = onProgressOrders.filter(item => {
                const dayIndex = item.createdAt.getMonth()
                return labels[dayIndex] === dayLabel
            })

            onProgressData.push(temp.length)

        })


        const onSuccessData = []
        labels.forEach((dayLabel, index) => {
            const temp = onSuccessOrders.filter(item => {
                const dayIndex = item.createdAt.getMonth()
                return labels[dayIndex] === dayLabel
            })


            onSuccessData.push(temp.length)

        })


        const onErrorData = []
        labels.forEach((dayLabel, index) => {
            const temp = onErrorOrders.filter(item => {
                const dayIndex = item.createdAt.getMonth()
                return labels[dayIndex] === dayLabel
            })

            onErrorData.push(temp.length)

        })

        return res.json({
            labels: labels,
            datasets: [
                {
                    label: 'on progress',
                    data: onProgressData, // Add data for all 12 months
                    backgroundColor: '#ffc36c',
                    stack: 'Stack 1',
                },
                {
                    label: 'success',
                    data: onSuccessData, // Add data for all 12 months
                    backgroundColor: 'green',
                    stack: 'Stack 1',
                },
                {
                    label: 'error',
                    data: onErrorData, // Add data for all 12 months
                    backgroundColor: 'red',
                    stack: 'Stack 1',
                },
            ],
            summary: {
                onSuccessData: onSuccessData.reduce((total, b) => { return total + b }),
                onProgressData: onProgressData.reduce((total, b) => { return total + b }),
                onErrorData: onErrorData.reduce((total, b) => { return total + b }),
            }
        })
    }
    catch (e) {
        return next(e)
    }
})


router.get("/statistics/order-status/yearly", async (req, res, next) => {

    try {
        const startOfYear = moment("2022-01-01");
        const endOfYear = moment("2025-12-31").endOf("day");
        const labels = [2022, 2023, 2024, 2025, 2026, 2027]
        const onProgressOrders = await getDataForPeriod("on progress", startOfYear, endOfYear, OrderModel);
        const onSuccessOrders = await getDataForPeriod("success", startOfYear, endOfYear, OrderModel);
        const onErrorOrders = await getDataForPeriod("on error", startOfYear, endOfYear, OrderModel);



        const onProgressData = []
        labels.forEach((yearLabel, index) => {
            const temp = onProgressOrders.filter(item => {
                const yearIndex = item.createdAt.getFullYear()
                return yearIndex === yearLabel
            })

            onProgressData.push(temp.length)

        })


        const onSuccessData = []
        labels.forEach((yearLabel, index) => {
            const temp = onSuccessOrders.filter(item => {
                const yearIndex = item.createdAt.getFullYear()
                return yearIndex === yearLabel
            })


            onSuccessData.push(temp.length)

        })


        const onErrorData = []
        labels.forEach((yearLabel, index) => {
            const temp = onErrorOrders.filter(item => {
                const yearIndex = item.createdAt.getFullYear()
                return yearIndex === yearLabel
            })

            onErrorData.push(temp.length)

        })


        return res.json({
            labels: labels,
            datasets: [
                {
                    label: 'on progress',
                    data: onProgressData, // Add data for all 12 months
                    backgroundColor: '#ffc36c',
                    stack: 'Stack 1',
                },
                {
                    label: 'success',
                    data: onSuccessData, // Add data for all 12 months
                    backgroundColor: 'green',
                    stack: 'Stack 1',
                },
                {
                    label: 'error',
                    data: onErrorData, // Add data for all 12 months
                    backgroundColor: 'red',
                    stack: 'Stack 1',
                },
            ],
            summary: {
                onSuccessData: onSuccessData.reduce((total, b) => { return total + b }),
                onProgressData: onProgressData.reduce((total, b) => { return total + b }),
                onErrorData: onErrorData.reduce((total, b) => { return total + b }),
            }
        })
    }
    catch (e) {
        return next(e)
    }
})


// users-country
router.get("/statistics/orders-country", async (req, res, next) => {
    try {
        const usersWithCountry = (await OrderModel.find({}, { country: 1, _id: 0 }))
            .map(item => { return item.country })
        const uniquesListOfCountries = [...new Set(usersWithCountry)]

        const countries = uniquesListOfCountries.map(country => {
            let total = 0;
            usersWithCountry.forEach((item) => {
                if (item === country) {
                    total += 1
                }
            })

            return [country, total]
        })

        countries.unshift(["Country", "Orders"])

        return res.json(countries)
    }
    catch (e) {
        return next(e)
    }
})



// Recent Customers Acitivty
router.get("/statistics/recent-customers-activity", async (req, res) => {

    try {
        const checkOuts = await CheckoutModel.find()
            .skip(0)
            .limit(100)



        const users = await Promise.all(
            checkOuts.map(async record => {
                const user = await User.findById(record.userID, {
                    fullName: 1,
                    country: 1,
                    image: 1,
                    role: 1,
                })
                return {
                    user: user,
                    checkOuts: record
                }
            })).then((users) => {
                return users
            })


        return res.json(users)




    }
    catch (e) {
        return res.status(500).json(e)
    }
})


// Platforms
router.get("/statistics/popular-platforms", async (req, res) => {
    try {
        const orders = await OrderModel.find({
            $or: [
                { status: "success" },
                { status: "on progress" },
            ]
        })

        const platforms = await PlatformModel.find()



        let result = []
        platforms.forEach((platform) => {
            result.push({
                platform: platform,
                totalOrders: orders.filter(item => {
                    let serviceName = item.service.name
                    serviceName = serviceName.toLowerCase()


                    const isContaining =
                        serviceName
                            .includes(platform.name.toLowerCase())
                    return isContaining
                }).length
            })
        })



        const data = {
            platforms: result,
            chartJs: {
                labels: result.map(record => { return record.platform.name }),
                datasets: [
                    {
                        label: "Popular Platforms",
                        data: result.map(item => { return item.totalOrders }),
                        backgroundColor: result.map(item => {
                            return item.platform.colorPalette
                        }),
                        borderWidth: 1,
                    }
                ]
            }
        }

        return res.json(data)
    }
    catch (e) {
        console.log(e)
        return res.status(500).json(e)
    }
})



// Todo-List
router.get("/statistics/todo-list", async (req, res, next) => {
    try {
        const todoList = await TodoModel.find().sort({ createdAt: -1 });
        return res.json(todoList);
    }
    catch (e) {
        return next(e)
    }
})

router.post("/statistics/todo-list", uploader.uploader().array(), async (req, res, next) => {
    try {
        const { title, description } = req.body

        const todo = new TodoModel({
            title: title,
            description: description,
        })
        return res.json(await todo.save())
    }
    catch (e) {
        return next(e)
    }
})

router.put("/statistics/todo-list", async (req, res, next) => {
    try {
        const data = req.body


        if (!data.id)
            throw ("id required")


        const todo = await TodoModel.findByIdAndUpdate(data.id, {
            ...data
        })

        return res.json("todo Updated !")

    }
    catch (e) {
        return next(e)
    }
})

router.delete(
    "/statistics/todo-list",
    uploader.uploader().array(),
    async (req, res, next) => {
        try {
            const { id } = req.body
            const data = req.body

            if (!id)
                throw "Id Required!"


            await TodoModel.findByIdAndDelete(id)
                .then(result => {
                    if (!result)
                        throw ("todo not founded!")
                    return res.json("Todo Deleted !")
                })


        }
        catch (e) {
            return next(e)
        }
    })






// Message All 
router.get("/statistics/message-all", async (req, res, next) => {
    try {
        const allMessages = await MessageAllModel.find().sort({ createdAt: -1 })
        return res.json(allMessages)
    }
    catch (e) {
        return next(e)
    }

})

router.post("/statistics/message-all", uploader.uploader().array(), async (req, res, next) => {
    try {
        const { title, description, isPublished } = req.body

        const message = new MessageAllModel({
            title: title,
            description: description,
            isPublished: isPublished === "on" ? true : false
        })

        await message.save()
        return res.json("New Message Created.")
    }
    catch (e) {
        return next(e)
    }

})

router.delete("/statistics/message-all", async (req, res, next) => {
    try {
        const { id } = req.body
        await MessageAllModel.findByIdAndDelete(id)
        return res.json("Message Deleted.")
    }
    catch (e) {
        return next(e)
    }

})







// Economy Summary
router.get("/statistics/economy-summary/weekly", async (req, res, next) => {
    try {
        const startOfWeek = moment().startOf("week");
        const endOfWeek = moment().endOf("week");
        const labels = moment.weekdays()
        const onSuccessOrders = await getDataForPeriod("success", startOfWeek, endOfWeek, CheckoutModel);


        const onSuccessData = []
        labels.forEach((dayLabel, index) => {
            const temp = onSuccessOrders.filter(item => {
                const dayIndex = item.createdAt.getDay()
                return labels[dayIndex] === dayLabel
            })
            let total = 0

            if (temp.length !== 0) {
                temp.forEach((item) => {
                    total += item.amount.amount
                })
            }
            onSuccessData.push(total)
        })




        return res.json({
            labels: labels,
            datasets: [
                {
                    label: 'Economy Summary',
                    data: onSuccessData, // Add data for all 12 months
                    stack: 'Stack 1',
                },
            ],

        })
    }
    catch (e) {
        return next(e)
    }

})




// ------------- Services
router.get("/services", async (req, res, next) => {
    try {
        const services = await require("../../../catch/services.json")
        return res.json(services)
    }
    catch (e) {
        return next(e)
    }
})


// --------------- Orders
router.get("/orders/:pageNumber", uploader.uploader().array(), async (req, res, next) => {
    try {
        const pageNumber = parseInt(req.params.pageNumber, 10);

        const { data, maxPage } = await paginate(OrderModel, pageNumber);

        return res.json({
            orders: data,
            maxPageNumber: maxPage,
            currentPage: pageNumber
        });
    } catch (error) {
        return next(error);
    }
});


// --------------- Tickets
router.get("/tickets/:pageNumber", async (req, res, next) => {
    try {
        const pageNumber = parseInt(req.params.pageNumber, 10);

        const { data, maxPage } = await paginate(TicketModule, pageNumber);

        return res.json({
            tickets: data,
            maxPageNumber: maxPage,
            currentPage: pageNumber
        });
    } catch (error) {
        return next(error);
    }
});

router.put("/tickets/answer/", async (req, res, next) => {
    try {
        const { id, message } = req.body;


        const ticket = await TicketModule.findById(id)

        if (!ticket || ticket === null) throw "Ticket Not Finded , Maybe Id Is Wrong !"



        const user = await User.findById(ticket.userID)

        if (!user || user === null) throw "Ticket Sender(User), Is Not Finded Wrong !"

        const email = user.email

        await sendEmail(email, message)

        if (ticket.answer === null || !ticket.answer) {
            ticket.answer = {
                message: message,
                adminID: user._id
            }
        }

        await ticket.save()



        await ticket.save()


        return res.json("Your Message Sended To User Email & User");
    } catch (error) {
        return next(error);
    }
});

router.put("/tickets/solved/", async (req, res, next) => {
    try {
        const { id, solved } = req.body;


        const ticket = await TicketModule.findById(id)

        if (!ticket || ticket === null) throw "Ticket Not Finded , Maybe ID Is Wrong !"

        ticket.solved = solved

        await ticket.save()

        return res.json("Ticket Solved Changed.");


    } catch (error) {
        return next(error);
    }
});



// ---------------- Users
router.get("/users/:pageNumber", async (req, res, next) => {
    try {
        const pageNumber = parseInt(req.params.pageNumber, 10);

        const { data, maxPage } = await paginate(User, pageNumber, 8);

        return res.json({
            users: data,
            maxPageNumber: maxPage,
            currentPage: pageNumber
        });
    } catch (error) {
        return next(error);
    }
});

router.put("/users/user/edit", uploader.usersUploader.any(), async (req, res, next) => {
    try {
        const { userID, fullName, found } = req.body
        const file = req.files[0]


        const user = await User.findById(userID)

        if (!user || user === null) throw ("User Not Finded !")

        user.fullName = fullName
        user.found = found

        await user.save()


        return res.json("User Successfuly Changed.");
    } catch (error) {
        return next(error);
    }
});

router.put("/users/user/edit/verify", async (req, res, next) => {
    try {
        const { userID, status } = req.body


        const user = await User.findById(userID)

        if (!user || user === null) throw ("User Not Finded !")

        user.emailVerified.isActive = status

        await user.save()

        if (status === true) {
            return res.json("User Successfuly Verified.");
        } else {
            return res.json("User Successfuly Un-Verified.");
        }

    } catch (error) {
        return next(error);
    }
});


router.put("/users/user/edit/block-free", async (req, res, next) => {
    try {
        const { userID, status } = req.body


        const user = await User.findById(userID)

        if (!user || user === null) throw ("User Not Finded !")

        user.isBlocked.status = status
        user.isBlocked.blockedBy = user._id
        user.isBlocked.updatedAt = Date.now()

        await user.save()

        if (status === true) {
            return res.json("User Successfuly Blocked.");
        } else {
            return res.json("User Successfuly Un-Blocked.");
        }

    } catch (error) {
        return next(error);
    }
});


// ---------------- Blogs
router.get("/blogs/:pageNumber", async (req, res, next) => {
    try {
        const pageNumber = parseInt(req.params.pageNumber, 10);


        const { data, maxPage } = await paginate(BlogsModel, pageNumber, 8);

        return res.json({
            blogs: data,
            maxPageNumber: maxPage,
            currentPage: pageNumber
        });
    } catch (error) {
        return next(error);
    }
});

router.post("/blogs", uploader.blogUploader.any(), async (req, res, next) => {
    try {
        const image = await req.files[0]
        const { title, description } = await req.body

        const blog = new BlogsModel({
            image: "/statics/images/blogs/" + image.filename,
            title: title,
            description: description,
        })

        await blog.save()

        return res.json(" Blogs Succesfuly Created.")
    } catch (e) {
        return next(e)
    }
})

router.put("/blogs/blog/edit", uploader.blogUploader.any(), async (req, res, next) => {
    try {
        const image = await req.files[0]
        const data = await req.body

        if (image) data.image = "/statics/images/blogs/" + image.filename

        const blog = await BlogsModel.findByIdAndUpdate(data.blogID,
            {
                ...data,
            })

        if (!blog || blog === null) throw "Blog Not Finded!"

        await blog.save()

        return res.json(" Blog Changing Succesfull.")
    } catch (e) {
        return next(e)
    }
})

router.put("/blogs/blog/edit/published", async (req, res, next) => {
    try {
        const { blogID, published } = await req.body


        const blog = await BlogsModel.findOne({
            _id: blogID
        })
        if (!blog || blog === null) throw "Blog Not Finded!"

        blog.published = published
        await blog.save()

        return res.json(" Blog Published Changing Succesfull.")
    } catch (e) {
        return next(e)
    }
})

router.delete("/blogs/blog/delete", async (req, res, next) => {
    try {
        const { blogID } = await req.body

        const blog = await BlogsModel.findByIdAndDelete(blogID)

        if (!blog || blog === null) throw "Blog Not Finded!"

        return res.json(" Blog Deleting Succesfull.")
    } catch (e) {
        return next(e)
    }
})





// ------------- Faqs


// selected Faqs
router.get("/selected-faqs/:pageNumber", async (req, res, next) => {
    try {
        const pageNumber = parseInt(req.params.pageNumber, 10);

        const { data, maxPage } = await paginate(FaqsSelectedModel, pageNumber, 8);

        return res.json({
            selectedFaqs: data,
            maxPageNumber: maxPage,
            currentPage: pageNumber
        });
    } catch (error) {
        return next(error);
    }
});

router.post("/selected-faqs", uploader.uploader().array(), async (req, res, next) => {
    try {
        const data = req.body

        const selectedFaq = new FaqsSelectedModel({
            ...data
        })

        await selectedFaq.save()

        return res.json("New Faqs Created.")
    }
    catch (e) {
        return next(e)
    }
})

router.delete("/selected-faqs/faq/delete", async (req, res, next) => {
    try {
        const { id } = req.body

        console.log(id)
        if (!id)
            throw ("ID Required")
        await FaqsSelectedModel.findByIdAndDelete(id)
        return res.json("selected Faq Deleted !")

    }
    catch (e) {
        return next(e)
    }
})

router.put("/selected-faqs/faq/edit/", uploader.uploader().array(), async (req, res, next) => {
    try {
        const { faqID, question, answer } = req.body

        console.log(faqID)
        if (!faqID)
            throw ("ID Required")
        await FaqsSelectedModel.findByIdAndUpdate(faqID, {
            question: question,
            answer: answer
        })
        return res.json("selected Faq Updated !")

    }
    catch (e) {
        return next(e)
    }
})



// Normal Faqs 
router.get("/faqs/:pageNumber", async (req, res, next) => {
    try {
        const pageNumber = parseInt(req.params.pageNumber, 10);

        const { data, maxPage } = await paginate(FaqsModel, pageNumber, 8);

        return res.json({
            faqs: data,
            maxPageNumber: maxPage,
            currentPage: pageNumber
        });
    }
    catch (e) {
        return next(e)
    }
})


router.put("/faqs/faq/", async (req, res, next) => {
    try {
        const { faqID, answerd } = req.body
        if (!faqID)
            throw ("id Required")



        const faq = await FaqsModel.findById(faqID)
        if (!faq || faq === null) throw ("id Required")

        faq.answerd = answerd

        await faq.save()


        return res.json("Faq Successfuly Changed.")
    }
    catch (e) {
        return nextx(e)
    }
})


router.post("/faqs/faq/answer/email", async (req, res, next) => {
    try {
        const { faqID, message } = req.body
        if (!faqID)
            throw ("id Required")

        const faq = await FaqsModel.findById(faqID)
        if (!faq || faq === null) throw ("id Required")





        await sendEmail(faq.email, message)

        if (faq.adminResponse === null) {
            faq.adminResponse = {
                email: {
                    message: message
                }
            }
        } else {
            faq.adminResponse.email = {
                message: message
            }
        }

        await faq.save()



        return res.json("Your Message Succesfuly Delivered.")
    }
    catch (e) {
        return next(e)
    }
})

router.post("/faqs/faq/answer/phone", async (req, res, next) => {
    try {
        const { faqID, message } = req.body
        if (!faqID)
            throw ("id Required")

        const faq = await FaqsModel.findById(faqID)
        if (!faq || faq === null) throw ("id Required")


        // await sendEmail(faq.email, message)



        if (faq.adminResponse === null) {
            faq.adminResponse = {
                phone: {
                    message: message
                }
            }
        } else {
            faq.adminResponse.phone = {
                message: message
            }
        }

        await faq.save()



        return res.json("Your Message Succesfuly Delivered.")
    }
    catch (e) {
        return next(e)
    }
})



// -------------- Contact Us
router.get("/contact-us/:pageNumber", async (req, res, next) => {

    try {
        const pageNumber = parseInt(req.params.pageNumber, 10);

        const { data, maxPage } = await paginate(ContactUsModel, pageNumber, 8);

        return res.json({
            contactUs: data,
            maxPageNumber: maxPage,
            currentPage: pageNumber
        });
    }
    catch (e) {
        return next(e)
    }

})

router.put("/contact-us/record/answerd", async (req, res, next) => {
    try {
        const { recordID, answerd } = req.body

        if (!recordID)
            throw ("id required")

        const record = await ContactUsModel.findById(recordID)


        if (!record || record === null) throw "REcord Not Finded."

        record.answerd = answerd
        await record.save()

        return res.json("Record Succesfully Changed.")


    }
    catch (e) {
        return next(e)
    }
})

router.post("/contact-us/record/answer/email", async (req, res, next) => {
    try {
        const { recordID, message } = req.body
        if (!recordID)
            throw ("id Required")

        const record = await ContactUsModel.findById(recordID)
        if (!record || record === null) throw ("id Required")





        await sendEmail(record.email, message)

        if (record.adminResponse === null) {
            record.adminResponse = {
                email: {
                    message: message
                }
            }
        } else {
            record.adminResponse.email = {
                message: message
            }
        }

        await record.save()



        return res.json("Your Message Succesfuly Delivered.")
    }
    catch (e) {
        return next(e)
    }
})

router.post("/contact-us/record/answer/phone", async (req, res, next) => {
    try {
        const { recordID, message } = req.body
        if (!recordID)
            throw ("id Required")

        const record = await ContactUsModel.findById(recordID)
        if (!record || record === null) throw ("id Required")


        // await sendEmail(faq.email, message)



        if (record.adminResponse === null) {
            record.adminResponse = {
                phone: {
                    message: message
                }
            }
        } else {
            record.adminResponse.phone = {
                message: message
            }
        }

        await record.save()



        return res.json("Your Message Succesfuly Delivered.")
    }
    catch (e) {
        return next(e)
    }
})



// --------------------------- platforms 
router.get("/platforms", async (req, res, next) => {
    try {
        const platforms = await PlatformModel.find()
        return res.json(platforms)
    }
    catch (e) {
        return res.status(500).json(e)
    }

})

router.delete("/platforms", async (req, res, next) => {
    try {
        const { id } = req.body

        await PlatformModel.findByIdAndDelete(id)

        return res.json("Platform Deleted.")
    }
    catch (e) {
        return res.status(500).json(e)
    }

})

router.post("/platforms", uploader.platformUploader.any(), async (req, res, next) => {
    try {
        const file = await req.files[0]
        const { name, shortDescription, colorPalette } = req.body
        const platform = new PlatformModel({
            name: name,
            image: "/statics/images/platforms/" + file.filename,
            shortDescription: shortDescription,
            colorPalette: colorPalette
        })

        await platform.save()
        return res.json("New Platform Added.")
    }
    catch (e) {
        next(e)
    }

})

router.put("/platforms", uploader.platformUploader.any(), async (req, res, next) => {
    try {
        const file = await req.files[0]
        const { id, name, shortDescription, colorPalette } = req.body

        let platform
        if (!file || file === null) {

            platform = await PlatformModel.findByIdAndUpdate(id,
                {
                    name: name,
                    shortDescription: shortDescription,
                    colorPalette: colorPalette
                })
        } else {
            platform = await PlatformModel.findByIdAndUpdate(id,
                {
                    name: name,
                    image: "/statics/images/platforms/" + file.filename,
                    shortDescription: shortDescription,
                    colorPalette: colorPalette
                })
        }


        return res.json("Platform Updated.")
    }
    catch (e) {
        next(e)
    }

})




// -------------------------- Payment Methods
router.get("/payment-methods", async (req, res, next) => {
    try {
        const methods = await PaymentMethodsModel.find()
        return res.json(methods)
    }
    catch (e) {
        next(e)
    }
})

router.post(
    "/payment-methods",
    uploader.paymentMethodsUploader.any(),
    async (req, res, next) => {
        try {

            const image = await req.files[0]
            const {
                name,
                available,
                description,
                site
            } = req.body

            const method = await new PaymentMethodsModel({
                name: name,
                available: available,
                image: "/statics/images/payment-methods/" + image.filename,
                description: description,
                site: site
            })


            await method.save()
            return res.json(
                "New Method Addedd."
            )

        }
        catch (e) {
            next(e)
        }
    })






module.exports = router