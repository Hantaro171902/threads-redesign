import express from "express";
import {
  getUserProfile,
  followUnfollowUser,
} from "../controllers/user.controller";
import { protectRoute } from "../middleware/protectRoute";

const router = express.Router();

router.get("/profile/:username", getUserProfile);
// router.get("/suggested", protectRoute, getUserProfile)
router.post("/follow/:id", protectRoute, followUnfollowUser);
// router.post("/update", protectRoute, updateUserProfile)

export default router;
