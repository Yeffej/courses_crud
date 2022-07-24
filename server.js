const path = require("path")
const express = require("express")
const logger = require("./middlewares/logger")
const router = require("./routes/router")

const PORT = process.env.PORT || 3000
const app = express()

// server config.
app.use( express.static(path.join(__dirname, "public")) )
app.use(express.json())
app.use(logger)
app.use("/api", router)

app.listen(PORT).addListener("listening", ()=> {
    console.log(`Listening on: http://localhost:${PORT}`)
})