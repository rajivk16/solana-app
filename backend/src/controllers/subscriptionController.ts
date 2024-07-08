import { Request, Response } from 'express';
import supabase from '../supabaseClient';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15',
});

export const createSubscription = async (req: Request, res: Response) => {
    const { email, paymentMethodId, priceId } = req.body;

    try {
        const { data: user, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .single();

        if (error) throw error;

        const customer = await stripe.customers.create({
            email: user.email,
            payment_method: paymentMethodId,
            invoice_settings: {
                default_payment_method: paymentMethodId,
            },
        });

        await stripe.subscriptions.create({
            customer: customer.id,
            items: [{ price: priceId }],
            expand: ['latest_invoice.payment_intent'],
        });

        await supabase
            .from('users')
            .update({ stripeCustomerId: customer.id, subscriptionStatus: 'active' })
            .eq('id', user.id);

        res.status(200).send({ message: 'Subscription created successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
