import { error } from "console";
import User from "../models/users.model.js";
import bcrypt from 'bcryptjs'; 
import genrateTokenAndSetCookie from "../utils/genrateToken.js";


// ----------------------------------------------------------------------------
export const signup=async(req,res)=>{
    try {
        const {fullname ,username,password,confirmPassword,gender}=req.body;
        if(password!==confirmPassword){
            return res.status(400).json({error:"Password don't match"})
        }
        const user=await User.findOne({username})
        if(user){
            return res.status(400).json({error:"Username is already exists"})
        }
        //hash password here
        const hashedPassword = await bcrypt.hash(password, 10);
        //https://avatar-placeholder.iran.liara.com/
        const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser=new User({
            fullname,
            username,
            password:hashedPassword,
            gender,
            profilePic:gender==="male"?boyProfilePic:girlProfilePic
        })
        if(newUser){
        genrateTokenAndSetCookie(newUser._id,res)
        await newUser.save()
        res.status(201).json({
            _id:newUser._id,
            fullname:newUser.fullname,
            username:newUser.username,
            profilePic:newUser.profilePic

        })
    }else{
        res.status(400).json({error:"invalid user data"})
    }
      
    } catch (error) {
        console.log("error")
        res.status(500).json({ error: "Internal server error" }); 
        
    }
}


// --------------------------------------------------------------------

export const login=async(req,res)=>{
    try {
        const {username,password}=req.body;
        const user=await User.findOne({username})
        const isPasswordCorrect=await bcrypt.compare(password,user?.password || "")
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"invalid credentials"})
        }

        genrateTokenAndSetCookie(user._id,res)
        res.status(200).json({
            _id:user._id,
            fullname:user.fullname,
            username:user.username,
            profilePic:user.profilePic

        })
      
    } catch (error) {
        console.log("error")
        res.status(500).json({ error: "Internal server error" }); 
        
    }
}


// --------------------------------------------------------------------
export const logout=(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"Logged out successfully"})
        
        
    } catch (error) {
        console.log("error")
        res.status(500).json({ error: "Internal server error" }); 
        
    }
}