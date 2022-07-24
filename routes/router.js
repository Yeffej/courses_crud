const express = require("express")
const courseRouter = require("./course")
const setHeadersConfig = require("../middlewares/setHeadersConfig")

const router = express.Router()

router.use(setHeadersConfig)
router.get("/", (req, res) => {
    res.send({hello: "world"})
})

router.use("/course", courseRouter)

module.exports = router
