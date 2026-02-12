import express from "express";
//import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoutes from "./route/user.route.js";
import CreditRoutes from "./route/credit.routes.js";

dotenv.config(); // Load .env variables

const app = express();

// Middleware
app.use(express.json());
//app.use(cors());

//Routes
UserRoutes(app);
CreditRoutes(app);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error("DB Connection Error:", err));


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});