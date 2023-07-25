import express from 'express';
import mongan from 'morgan'
import connectDB from './api/database/db.js';
import bodyParser from 'body-parser';

/**Create app using express */

const app = express.Router();

connectDB();

/** Morgan method display */
app.use(mongan('dev'));

/**Create body parse for json  middle*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/** Middleware */


/** Creating routers */

export default app;
