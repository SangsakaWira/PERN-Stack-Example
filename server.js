const express = require("express")
const cors = require("cors")
const app = express()

// initiate db
require("./config/db")

// app settings
app.use(express.json())
app.use(cors())

// routes
const userRouter = require('./routes/user')
const pool = require("./config/db")

// app routes
app.use("/user", userRouter)

app.listen(3000,()=>{
    console.log("Server is running!")
})