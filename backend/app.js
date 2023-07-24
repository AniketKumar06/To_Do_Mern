import express from 'express';
import morgan from 'morgan';

/**Create app using express */

const app = express.Router();


/** Morgan method display */
app.use(morgan('dev'));

/** Middleware */


/** Creating routers */

export default app;
