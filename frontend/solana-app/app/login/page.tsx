import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Login: React.FC = () => {
    const authContext = useContext(AuthContext);
    if (!authContext) return null;

    const { login } = authContext;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 border rounded w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 border rounded w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-600 text-white p-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
