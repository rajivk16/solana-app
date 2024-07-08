import { Request, Response, NextFunction } from 'express';
import supabase from '../supabaseClient';

export const checkSubscription = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.user;

    const { data: user, error } = await supabase
        .from('users')
        .select('subscriptionStatus')
        .eq('id', id)
        .single();

    if (error) {
        return res.status(500).send({ error: error.message });
    }

    if (user.subscriptionStatus !== 'active') {
        return res.status(403).send({ error: 'Access denied. Upgrade your subscription.' });
    }

    next();
};
