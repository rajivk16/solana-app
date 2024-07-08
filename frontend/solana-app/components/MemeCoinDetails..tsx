import React, { useContext } from 'react';
import { MemeCoinContext } from '../context/MemeCoinContext';

const MemeCoinDetails: React.FC = () => {
    const memeCoinContext = useContext(MemeCoinContext);
    if (!memeCoinContext) return null;

    const { memeCoinDetails } = memeCoinContext;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Meme Coin Details</h2>
            {memeCoinDetails ? (
                <div>
                    <p><strong>Lamports:</strong> {memeCoinDetails.lamports}</p>
                    <p><strong>Owner:</strong> {memeCoinDetails.owner}</p>
                    <p><strong>Data:</strong> {memeCoinDetails.data}</p>
                </div>
            ) : (
                <p>No details available. Search for a meme coin address.</p>
            )}
        </div>
    );
};

export default MemeCoinDetails;
