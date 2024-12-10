import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  createPost,
  deletePost,
  commentOnPost,
  likeUnlikePost,
  getAllPost,
  getLikedPosts,
  getFollowingPosts,
  getUserPosts,
  getFeedPosts,
  getPost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/feed", protectRoute, getFeedPosts);
router.get("/all", protectRoute, getAllPost);
router.get("/following", protectRoute, getFollowingPosts);
router.get("/user/:username", getUserPosts);
router.get("/:id", getPost);
router.get("/likes/:id", protectRoute, getLikedPosts);

router.post("/create", protectRoute, createPost);
router.put("/like/:id", protectRoute, likeUnlikePost);
router.put("/comment/:id", protectRoute, commentOnPost);
router.delete("/:id", protectRoute, deletePost);

export default router;
