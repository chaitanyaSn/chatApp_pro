import express from "express"
import {login,signup,logout} from "../controllers/auth.controller.js"
const router=express.Router()

router.route("/login").post(login)
router.route("/signup").post(signup)
router.route("/logout").post(logout)


export default router;