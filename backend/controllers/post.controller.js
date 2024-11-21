import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import { v2 as cloudinary } from "cloudinary";

export const createPost = async (req, res) => {
  try {
    const { text } = req.body;
    let { img } = req.body;
    const userId = req.user._id.toString();

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!text && !img) {
      return res.status(400).json({ error: "Post must have text or image" });
    }

    if (img) {
      const uploaderResponse = await cloudinary.uploader.upload(img);
      img = uploaderResponse.secure_url;
    }

    // if (user._id.toString() !== req.user._id.toString()) {
    //   return res.status(401).json({ error: "Unauthorized  to create post" });
    // }

    const newPost = new Post({
      user: userId,
      text,
      img,
    });

    // const maxLength = 500;
    // if (text.length > maxLength) {
    //   return res
    //     .status(400)
    //     .json({ error: `Text must be less than ${maxLength}` });
    // }

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.log("Error in createPost controller: ", error);
  }
};
