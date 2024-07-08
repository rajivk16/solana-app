import { Router } from 'express';
import { fetchMemeCoinDetails } from '../controllers/memeCoinController';
import { checkSubscription } from '../middleware/roleMiddleware';

const router = Router();

router.get('/:address', checkSubscription, fetchMemeCoinDetails);

export default router;
