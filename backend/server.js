const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


dotenv.config({ path: './config/config.env' });

connectDB();


const app = express();
app.use(morgan('dev'));

app.use(express.json());
app.use(express.json({ extended: true }));


const PORT = process.env.PORT;

app.listen(PORT,
    console.log(`server is running on port ${PORT}`.blue.underline));