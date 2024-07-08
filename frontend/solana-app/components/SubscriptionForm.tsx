import React, { useState } from 'react';
import axios from '@axios';

const SubscriptionForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [paymentMethodId, setPaymentMethodId] = useState('');
    const [priceId, setPriceId] = useState('price_1JN4bLSDm1oJsD5OybwStvY9'); // Example price ID from Stripe

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/subscription/create', {
                email,
                paymentMethodId,
                priceId,
            });

            console.log(response.data);
        } catch (error) {
            console.error('Subscription failed:', error);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Premium</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 border rounded w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Payment Method ID:</label>
                    <input
                        type="text"
                        value={paymentMethodId}
                        onChange={(e) => setPaymentMethodId(e.target.value)}
                        className="p-2 border rounded w-full"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-600 text-white p-2 rounded">
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default SubscriptionForm;
