import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
import { app, server } from "./socket/socket.js";
import job from "./cron/cron.js";

import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";
import notificationRoute from "./routes/notification.route.js";
import messageRoute from "./routes/message.route.js"


import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();
connectMongoDB();
job.start();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// const app = express();
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();

// console.log(process.env.MONGO_URI);

app.use(express.json({limit:"50mb"})); //  tab parse req.body
// linit shouldn't be too high to prevent DOS
app.use(express.urlencoded({ extended: true })); // to parse form data (urlencoded)

app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/notifications", notificationRoute);
app.use("/api/messages", messageRoute);

// http://localhost:8000 => backend,frontend

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	// react app
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});
