const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./src/lib/db");
const userRoutes = require("./src/routes/user");
const auth = require("./src/routes/auth");

const app = express();
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // optional, for form data

app.use("/api/users", userRoutes);
app.use("/api/auth", auth);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
