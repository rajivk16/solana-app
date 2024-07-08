import { Request, Response } from 'express';
import { getAnalyticsData, getAIInsights } from '../services/analyticsService';

export const fetchAnalyticsData = async (req: Request, res: Response) => {
    try {
        const data = await getAnalyticsData();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const fetchAIInsights = async (req: Request, res: Response) => {
    try {
        const data = await getAIInsights();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
