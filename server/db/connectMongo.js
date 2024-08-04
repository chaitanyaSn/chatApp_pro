import mongoose from "mongoose";

const connectMongo=async()=>{
    try {

        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected")
        
    } catch (error) {
        console.log(error)
        
    }
}

export default connectMongo;