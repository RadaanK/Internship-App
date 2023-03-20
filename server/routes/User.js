import express from 'express';

import { signUp, Login } from '../controllers/User.js';

const router  = express.Router();

// http://localhost:5000/posts 

router.post('/', signUp);
router.get('/', Login);

export default router