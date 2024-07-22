import express from "express"
import { signin, signInWithGoogle, signup } from "../controllers/authController.js";
const router = express.Router();

router.post("/signup",signup)
router.post("/signin", signin);
router.post("/google",signInWithGoogle ); 

export default router