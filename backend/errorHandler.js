const errorHandler = async (err, req, res, next) => {

    let errorMessage = [err.message ? err.message : err]

    if (err.code === 11000) {
        errorMessage = ["Thoese Information is exist in system. "]
    }

    if (err.errors) {
        errorMessage = Object.entries(err.errors).map(item => {
            return item[1].message
        })

    }
    return res.status(500).json(errorMessage)

}

module.exports = errorHandler