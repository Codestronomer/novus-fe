import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {

  if (connection.isConnected) return;

  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error(error);
  }
};
