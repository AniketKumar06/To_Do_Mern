const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL); 

    console.log(`MongoDB is connected to host:${conn.connection.host}`.cyan.underline.bold);

}

module.exports = connectDB;