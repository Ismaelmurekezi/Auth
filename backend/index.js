import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cookieParser())

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Successfully connectedt to the database");
  })
  .catch((error) => {
    console.log(error);
  });

//api routes

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal error server";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode
  })
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
