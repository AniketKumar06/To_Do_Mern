const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const routesUser = require('./routes/user');



dotenv.config({
    path: './config/config.env'
})

connectDB();


const app = express();

app.use(morgan("dev"))

app.use(express.json({}));
app.use(express.json({
    extended: true
}));


app.use('/api/todo/auth', routesUser);


const PORT = process.env.PORT;

app.listen(PORT,
    console.log(`Server is running on port ${PORT}`.blue.underline.bold));