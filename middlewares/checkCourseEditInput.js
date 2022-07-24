module.exports = function (req, res, next) {
    if(req.method.toUpperCase() !== "PUT") {
        next()
        return;
    }

    const title = typeof req.body.title === "string" 
        && req.body.title.trim().length >= 1
        ? req.body.title.trim()
        : null

    const description = typeof req.body.description === "string" 
        && req.body.description.trim().length >= 1
        ? req.body.description.trim()
        : null

    const teacher = typeof req.body.teacher === "string"
        && req.body.teacher.trim().length >= 1
        ? req.body.teacher.trim()
        : null

    const topic = typeof req.body.topic === "string"
        && req.body.topic.trim().length >= 1
        ? req.body.topic.trim()
        : null

    req.courseID = typeof req.body.id === "string"
        && req.body.id.trim().length >= 1
        ? req.body.id.trim()
        : null

    if(!req.courseID) {
        res.status(406).send(Sender.format(null, false, "Missing obligatory field id"))
        return;
    }

    req.courseData = Object.assign({},
        title? {title} : null, 
        description? {description} : null, 
        teacher? {teacher} : null, 
        topic? {topic} : null 
    )
    next()
}