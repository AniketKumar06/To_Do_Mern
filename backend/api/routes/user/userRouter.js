import express from 'express';
import mongoose from 'mongoose';
import { userRegisterController } from '../controllers/userController.js';

/**Create Routes */
const router = express.Router();


/**Create Router Method */

/**
 * Action : Register User
 * METHOD : POST
 */
router.post('/register', userRegisterController)



/**
 * Export Router
 */

export default router;

