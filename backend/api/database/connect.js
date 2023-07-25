import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({
    path: '../../.env'
})
/**Connection function to database */
const connectDB = async () => {
    try {
        console.log("try functiom");
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database is connected to host : ${conn.connection.host}`.green.underline.bold);
    } catch (error) {
        console.log('Error connecting database'.red, error);
    }

};

export default connectDB;