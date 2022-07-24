module.exports = function(req, res, next) {
    console.log(`Requesting: ${req.originalUrl}`)
    next()
}