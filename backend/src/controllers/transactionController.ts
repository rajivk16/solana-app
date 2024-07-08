import { Request, Response } from 'express';
import { getTransactionHistory } from '../services/transactionService';

export const fetchTransactionHistory = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
        const transactions = await getTransactionHistory(userId);
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
