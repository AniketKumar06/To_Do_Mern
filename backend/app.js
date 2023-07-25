import express from 'express';
import morgan from 'morgan';
import connectDB from './api/database/connect.js';
import bodyParser from 'body-parser';

/**Create app using express */

const app = express.Router();

connectDB();

/** Morgan method display */
app.use(morgan('dev'));

/**Create body parse for json  middle*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/** Middleware */


/** Creating routers */

export default app;
