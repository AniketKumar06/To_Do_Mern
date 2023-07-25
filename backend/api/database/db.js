import mongoose from "mongoose";
import { MONGO_URL } from "../../config.js";


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URL);
        console.log(`Database is connected to host : ${conn.connection.host}`.yellow.underline.bold.bgBlue);
    } catch (error) {
        console.log("Database is not connected!!".red.underline.bold);
    }
}

export default connectDB;