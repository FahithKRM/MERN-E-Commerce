import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongoDb_url').then(() => console.log("DB connected successfully..."));
}