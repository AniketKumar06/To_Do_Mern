import express from 'express';

import { userRegisterController } from '../../controllers/user/userController.js';
import { userLogingController } from '../../controllers/user/userController.js';

/**Create Routes */
const router = express.Router();


/**Create Router Method */

/**
 * Action : Register User
 * METHOD : POST
 */
router.post('/register', userRegisterController)

/**
 * Action : Login User
 * METHOD : POST 
 */
router.post('/login',userLogingController)

/**
 * Export Router
 */

export default router;

