import express from 'express';
import mongoose from 'mongoose';
import analyticsRoutes from './routes/analytics';
import subscriptionRoutes from './routes/subscription';
import transactionRoutes from './routes/transactions';
import userRoutes from './routes/users';
import memeCoinRoutes from './routes/memeCoins';
import { config } from './config';

const app = express();

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use(express.json());
app.use('/api/analytics', analyticsRoutes);
app.use('/api/subscription', subscriptionRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/meme-coins', memeCoinRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
