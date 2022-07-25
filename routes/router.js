const express = require("express")
const courseRouter = require("./course")
const cors = require("cors")

const router = express.Router()

router.use(cors())
router.get("/", (req, res) => {
    res.send({hello: "world"})
})

router.use("/course", courseRouter)

module.exports = router
