import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    chooseType: {
      //  This is for choosing type cat or dog and more
      type: [String],
      default: [], // default to an empty array
    },
    reed: {
      type: [String],
      default: [],
    },
    followers: [
      {
        type: mongoose.Schema.ObjectId, //  Corrected typeL to type
        ref: "User",
        default: [],
      },
    ],
    following: [
      {
        type: mongoose.Schema.ObjectId, // Corrected typeL to type
        ref: "User",
        default: [],
      },
    ],
    profileImg: {
      type: String,
      default: "",
    },
    coverImg: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    likedPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        default: [],
      },
    ],
    isFrozen: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // ex: member since created by Admin
);

const User = mongoose.model("User", userSchema);

export default User;
