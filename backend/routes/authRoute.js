import express from "express"
import { signin, signInWithGoogle,logout,signup } from "../controllers/authController.js";
const router = express.Router();

router.post("/signup",signup)
router.post("/signin", signin);
router.get("/logout", logout);
router.post("/google",signInWithGoogle ); 

export default router