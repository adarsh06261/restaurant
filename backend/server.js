import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");

    app.listen(PORT, () => {
      console.log(`🚀 SERVER HAS STARTED AT PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error connecting to database:", err.message);
  });
