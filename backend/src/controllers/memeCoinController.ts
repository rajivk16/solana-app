import { Request, Response } from 'express';
import { getMemeCoinDetails } from '../services/memeCoinService';

export const fetchMemeCoinDetails = async (req: Request, res: Response) => {
    const { address } = req.params;
    try {
        const details = await getMemeCoinDetails(address);
        res.status(200).json(details);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
