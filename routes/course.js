const express = require("express")
const courseRouter = require("./course")
const Course = require("../models/course") 
const Sender = require("../models/responseSender") 
const checkCourseInput = require("../middlewares/checkCourseInput")
const checkCourseEditInput = require("../middlewares/checkCourseEditInput")

const router = express.Router()

router.get("/", async (req, res) => {
    const courses = await Course.getAll()

    if(courses) {
        res.send(Sender.format(courses))
    }else {
        res.send(Sender.format(null, false, "Server Error")).status(500)
    }

})

router.use("/create", checkCourseInput)
router.post("/create", async (req, res) => {
    const created = await Course.create(req.course)

    if(created) {
        res.send(Sender.format({}))
    }else {
        res.send(Sender.format(null, false, "Server Error")).status(500)
    }
})

router.use("/edit", checkCourseEditInput)
router.put("/edit", async (req, res) => {
    const edited = await Course.edit(req.courseID, req.courseData)

    if(edited) {
        res.send(Sender.format({}))
    }else {
        res.send(Sender.format(null, false, "Server Error")).status(500)
    }
})

router.delete("/delete", async (req, res) => {
    const id = typeof req.body.id === "string"
        && req.body.id.trim().length >= 1
        ? req.body.id.trim()
        : null

    if(!id) {
        res.status(406).send(Sender.format(null, false, "Missing obligatory field id"))
        return;
    }

    const deleted = await Course.delete(id)

    if(deleted) {
        res.send(Sender.format({}))
    }else {
        res.send(Sender.format(null, false, "Server Error")).status(500)
    }
})

router.get("/:id", async (req, res) => {
    const course = await Course.get(req.params.id)

    if(course) {
        res.send(Sender.format(course))
    }else {
        res.send(Sender.format(null, false, "Not Found")).status(404)
    }
})

module.exports = router
