import express from 'express';
import { adminRegisterController } from '../../controllers/admin/adminController.js';

/**Create Routes */
const router = express.Router();


/**Create Router Method */

/**
 * Action : Register User
 * METHOD : POST
 */
router.post('/register', adminRegisterController)



/**
 * Export Router
 */

export default router;

