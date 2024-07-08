import { Router } from 'express';
import { createSubscription } from '../controllers/subscriptionController';

const router = Router();

router.post('/create', createSubscription);

export default router;
