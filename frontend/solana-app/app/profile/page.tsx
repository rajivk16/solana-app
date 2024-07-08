import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import supabase from '../../supabaseClient';
import { UserPreferences } from '../../types/user';

const Profile: React.FC = () => {
    const authContext = useContext(AuthContext);
    if (!authContext) return null;

    const { user, updateProfile } = authContext;
    const [preferences, setPreferences] = useState<UserPreferences>({
        notifications: true,
        theme: 'light',
    });

    useEffect(() => {
        const fetchPreferences = async () => {
            if (user) {
                const { data, error } = await supabase
                    .from('profiles')
                    .select('preferences')
                    .eq('id', user.id)
                    .single();
                if (error) console.error(error);
                if (data) setPreferences(data.preferences);
            }
        };

        fetchPreferences();
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target;
        setPreferences({
            ...preferences,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await updateProfile(preferences);
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">Email:</label>
                    <input
                        type="email"
                        value={user?.email || ''}
                        disabled
                        className="p-2 border rounded w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Notifications:</label>
                    <input
                        type="checkbox"
                        name="notifications"
                        checked={preferences.notifications}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    Enable Notifications
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Theme:</label>
                    <select
                        name="theme"
                        value={preferences.theme}
                        onChange={handleChange}
                        className="p-2 border rounded"
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-600 text-white p-2 rounded">
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default Profile;
