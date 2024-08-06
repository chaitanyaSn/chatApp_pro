import authRoutes from "./routes/authroutes.js"
import messageRoutes from "./routes/message.routes.js"
import express from "express"
import cookieParser from "cookie-parser"

import dotenv from "dotenv"
import connectMongo from "./db/connectMongo.js"
const app=express()

dotenv.config()
app.use(express.json())
app.use(cookieParser())

const PORT=process.env.PORT || 5000


app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

app.listen(PORT,()=>{
    connectMongo()
    console.log(`server is running on ${PORT}`)
})