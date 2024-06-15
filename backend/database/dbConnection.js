import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RestaurantReservation",
      // Remove useNewUrlParser and useUnifiedTopology options
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Error connecting to database: ${err}`);
    });
};
