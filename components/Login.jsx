"use client";
import React, { useState, useEffect } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { signIn, useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { data: session, status } = useSession();
    if (session) {
        redirect("/statements");
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    };
    const handleLogin = async () => {
        setError(null); // Reset any previous errors
        setIsLoading(true); // Show loading indicator

        const user = await signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: "/statements",
        });
        setIsLoading(false); // Hide loading indicator
    };

    return (
        <div className="flex flex-col-reverse items-center justify-center w-full h-full py-0 mx-auto my-0 justify-items-center">
            <form className="w-4/5 h-full lg:w-3/5 md:w-3/5">
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        className="w-full px-4 py-2 border rounded-lg shadow-md form-control md:text-xl bg-Manga-200 bg-opacity-20 border-bgold-200"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="justify-center w-full my-3 ">
                    <label>Password:</label>
                    <div className="flex">
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            value={password}
                            className="w-full px-4 py-2 border rounded-lg shadow-md form-control md:text-xl bg-Manga-200 bg-opacity-20 border-bgold-200"
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <button
                            type="button"
                            className="text-xl duration-300 border rounded-lg cursor-pointer bg-bblue-200 text-void border-bgold-200 hover:bg-bblue-300"
                            onClick={() =>
                                setIsPasswordVisible(!isPasswordVisible)
                            }
                        >
                            {isPasswordVisible ? (
                                <EyeIcon className="w-10 h-10 text-gray-500" />
                            ) : (
                                <EyeSlashIcon className="w-10 h-10 text-gray-500" />
                            )}
                        </button>
                    </div>
                </div>
                <div className="flex justify-center w-full my-3 ">
                    <button
                        type="button"
                        className="px-4 py-2 text-xl duration-300 border rounded-lg cursor-pointer bg-bblue-200 text-void border-bgold-200 hover:bg-bblue-300"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        className="text-sm bg-[#8e4296] text-white p-2 rounded-xl"
                        onClick={() => signOut()}
                    >
                        Sign out
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
