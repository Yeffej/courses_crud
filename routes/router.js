const express = require("express")
const courseRouter = require("./course")

const router = express.Router()

router.get("/", (req, res) => {
    res.send({hello: "world"})
})

router.use("/course", courseRouter)

module.exports = router
