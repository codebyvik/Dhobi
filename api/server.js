const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const cloudinary = require("cloudinary");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const ConnectToDb = require("./utils/ConnectToDB");

// routes
const auth = require("./routes/auth.route");

// handle Uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting down  due to uncaught exception");
  process.exit(1);
});

ConnectToDb();

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(fileUpload());

// setting up cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use("/api/v1/auth", auth);

// listen to port
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`port started at ${PORT} in ${process.env.NODE_ENV} mode`);
});

// handle Unhadled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting down server due to unhandled promise rejections");
  server.close(() => {
    process.exit(1);
  });
});
