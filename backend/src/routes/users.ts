import { Router } from 'express';
import { registerUser, loginUser, updateUserProfile } from '../controllers/userController';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/profile', updateUserProfile);

export default router;
