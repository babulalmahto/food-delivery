import mongoose from "mongoose";

export const connectdb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Food-Delivery')
        console.log("Database Connected")
    } catch (err) {
        console.log("Database not connected", err)
    }
}