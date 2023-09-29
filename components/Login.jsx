"use client";
import React, { useState, useEffect } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { collection, addDoc } from 'firebase/firestore';
import { Firestore } from "@/firebase";
import 'firebase/auth/';
import firebase from 'firebase/app';

function Login({ router }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };
    const handleLogin = async () => {
        setError(null); // Reset any previous errors
        setIsLoading(true); // Show loading indicator

        // const { user, error } = await supabase.auth.signIn({
        //     email,
        //     password,
        // });
        setIsLoading(false); // Hide loading indicator

        if (error) {
            setError(error.message); // Set the error message if there's an error
            console.error('Login error:', error.message);
        } else {
            console.log('Logged in successfully:', user);
            // Redirect or perform any other actions after successful login
            router.push('/statements');

        }
    };

    return (
        <div className=" h-full w-full mx-auto my-0 py-0 flex flex-col-reverse justify-center justify-items-center items-center">
            <form className="lg:w-3/5 md:w-3/5 w-4/5 h-full">
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        className="form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="w-full justify-center h-full justify-center my-3 w-full">
                    <label>Password:</label>
                    <div className="flex">
                        <input
                            type={isPasswordVisible ? 'text' : 'password'}
                            value={password}
                            className="form-control shadow-md md:text-xl rounded-lg bg-Manga-200 bg-opacity-20 border border-bgold-200 px-4 py-2 w-full"
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <button
                            type="button"
                            className="cursor-pointer  bg-bblue-200 text-void text-xl rounded-lg border border-bgold-200 hover:bg-bblue-300 duration-300"
                            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        >
                            {isPasswordVisible ? <EyeIcon className="w-10 h-10 text-gray-500" /> : <EyeSlashIcon className="w-10 h-10 text-gray-500" />}
                        </button>
                    </div>
                </div>
                <div className=" flex justify-center my-3 w-full">
                    <button type="button" className="cursor-pointer px-4 py-2 bg-bblue-200 text-void text-xl rounded-lg border border-bgold-200 hover:bg-bblue-300 duration-300" onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;