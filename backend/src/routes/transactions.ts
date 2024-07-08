import { Router } from 'express';
import { fetchTransactionHistory } from '../controllers/transactionController';

const router = Router();

router.get('/:userId', fetchTransactionHistory);

export default router;
