const mongoose = require('mongoose');

const connectDB = async() => {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB is connnected to host:${conn}.connection`.green.bold);


}
module.exports = connectDB;