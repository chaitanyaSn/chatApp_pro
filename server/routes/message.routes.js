import express from "express"
import {getMessage, sendMessage} from "../controllers/message.controller.js"
import protectRoute from "../middleware/protectRoute.js";
const router=express.Router()

router.route("/:id").get(protectRoute,getMessage)
router.route("/send/:id").post(protectRoute,sendMessage)

export default router;