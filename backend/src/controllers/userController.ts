import { Request, Response } from 'express';
import supabase from '../supabaseClient';

export const registerUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const { user, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ message: 'User registered successfully', user });
};

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const { user, error } = await supabase.auth.signIn({
        email,
        password,
    });

    if (error) {
        return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ message: 'User logged in successfully', user });
};

export const updateUserProfile = async (req: Request, res: Response) => {
    const { id, preferences } = req.body;

    const { data, error } = await supabase
        .from('profiles')
        .update({ preferences })
        .eq('id', id);

    if (error) {
        return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ message: 'Profile updated successfully', data });
};
