import authRoutes from "./routes/authroutes.js"
import messageRoutes from "./routes/message.routes.js"
import userRouter from "./routes/user.routes.js"
import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

import dotenv from "dotenv"
import connectMongo from "./db/connectMongo.js"
import { app, server } from "./socket/socket.js"



dotenv.config()
app.use(cors({
    origin: 'http://localhost:3000', // Adjust to your frontend URL
    credentials: true 
}
))
app.use(express.json())
app.use(cookieParser())

const PORT=process.env.PORT || 5000


app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRouter)

server.listen(PORT,()=>{
    connectMongo()
    console.log(`server is running on ${PORT}`)
})