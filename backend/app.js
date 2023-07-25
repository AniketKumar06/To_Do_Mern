import express from 'express';
import mongan from 'morgan'
import connectDB from './api/database/db.js';
import bodyParser from 'body-parser';
import userRoutes from './api/routes/userRouter.js';

/**Create app using express */

const app = express.Router();



/** Morgan method display */
app.use(mongan('dev'));

connectDB();
/**Create body parse for json  middle*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/** Middleware */


/** Creating routers */

app.use('/api/auth', userRoutes);

export default app;
