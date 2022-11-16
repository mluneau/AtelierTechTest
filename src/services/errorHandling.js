exports.errorHandling = (res, req, err) => {
    res.status(500 || err.status).json({
        message: err.message
    })
}