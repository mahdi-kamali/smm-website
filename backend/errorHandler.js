const errorHandler = async (err, req, res, next) => {

    let errorMessage = [err.message]

    if (err.code === 11000) {
        errorMessage = ["already exist in system, try new one ."]
    }

    if (err.errors) {
        errorMessage = Object.entries(err.errors).map(item => {
            return item[1].message
        })

    }
    return res.status(500).json(errorMessage)

}

module.exports = errorHandler