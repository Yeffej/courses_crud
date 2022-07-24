const Sender = require("../models/responseSender")

module.exports = function (req, res, next) {
    console.log(req.body)
    if(req.method.toUpperCase() !== "POST") {
        next()
        return;
    }

    const title = typeof req.body.title === "string" 
        && req.body.title.trim().length >= 2
        ? req.body.title.trim()
        : null

    const description = typeof req.body.description === "string" 
        && req.body.description.trim().length >= 10 
        ? req.body.description.trim()
        : null

    const teacher = typeof req.body.teacher === "string"
        && req.body.teacher.trim().length >= 1
        ? req.body.teacher.trim()
        : ""

    const topic = typeof req.body.topic === "string"
        && req.body.topic.trim().length >= 1
        ? req.body.topic.trim()
        : ""

    if(!title || !description) {
        res.status(406).send(Sender.format(null, false, "Obligatory fields missing"))
        return;
    }

    req.course = {title, description, teacher, topic}
    next()
}