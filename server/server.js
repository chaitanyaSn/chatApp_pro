import authRoutes from "./routes/authroutes.js"
import express from "express"

import dotenv from "dotenv"
import connectMongo from "./db/connectMongo.js"
const app=express()

dotenv.config()
app.use(express.json())

const PORT=process.env.PORT || 5000


app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    connectMongo()
    console.log(`server is running on ${PORT}`)
})