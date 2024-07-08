import React, { useState, useContext } from 'react';
import { MemeCoinContext } from '../context/MemeCoinContext';

const MemeCoinSearch: React.FC = () => {
    const [address, setAddress] = useState('');
    const memeCoinContext = useContext(MemeCoinContext);
    if (!memeCoinContext) return null;

    const { fetchMemeCoinDetails } = memeCoinContext;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetchMemeCoinDetails(address);
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Meme Coin Search</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">Enter Address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="p-2 border rounded w-full"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-600 text-white p-2 rounded">
                    Search
                </button>
            </form>
        </div>
    );
};

export default MemeCoinSearch;
