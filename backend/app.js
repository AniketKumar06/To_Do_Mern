import express from 'express';
import mongan from 'morgan'
import connectDB from './api/database/db.js';
import bodyParser from 'body-parser';
import userRouter from './api/routes/user/userRouter.js';
import adminRouter from './api/routes/admin/adminRouter.js'

/**Create app using express */

const app = express();

/** Morgan method display */
app.use(mongan('dev'));

connectDB();
/**Create body parse for json  middle*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/** Middleware */


/** Creating routers */

app.use('/api/v1/auth/user', userRouter);
app.use('/api/v1/auth/admin',adminRouter)

export default app;
