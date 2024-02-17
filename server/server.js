const express = require("express")

const app = express()
const TokenRoute = require("./routes/tokenRoute")

app.listen(5000,()=>{
    console.log("server running on port 5000")
})

app.get("/", (req, res) => {
    res.send("mpesa programming in progress")
})

app.use("/token",TokenRoute)