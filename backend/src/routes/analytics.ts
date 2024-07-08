import { Router } from 'express';
import { fetchAnalyticsData, fetchAIInsights } from '../controllers/analyticsController';

const router = Router();

router.get('/', fetchAnalyticsData);
router.get('/ai-insights', fetchAIInsights);

export default router;
