"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const result = await signIn("credentials", {
            redirect: false,
            identifier: email,
            password,
        });

        setLoading(false);

        if (result?.ok) {
            router.push("/");
        } else {
            alert("Login failed. Please check your credentials.");
        }
    };

    const handleRegisterRedirect = () => {
        router.push("/register");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-cyan-400">
            <div className="relative w-full max-w-md p-8 rounded-xl border border-cyan-500 shadow-2xl bg-black bg-opacity-60 backdrop-blur-md">

                {/* Futuristic Frame Effect */}
                <div className="absolute -top-2 -left-2 w-10 h-10 border-t-4 border-l-4 border-cyan-500"></div>
                <div className="absolute -top-2 -right-2 w-10 h-10 border-t-4 border-r-4 border-cyan-500"></div>
                <div className="absolute -bottom-2 -left-2 w-10 h-10 border-b-4 border-l-4 border-cyan-500"></div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-4 border-r-4 border-cyan-500"></div>

                <h1 className="text-3xl font-extrabold mb-6 text-center tracking-widest">
                    CYBER LOGIN
                </h1>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold mb-2">Username or Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-transparent border border-cyan-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-transparent border border-cyan-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500"
                            placeholder="Enter your password"
                            required
                        />
                        <div className="flex justify-end text-xs mt-1 text-cyan-400 hover:underline cursor-pointer">
                            Forgot password?
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <input type="checkbox" className="accent-cyan-500" />
                        <span className="text-sm">Remember me</span>
                    </div>

                    {/* Tombol Login */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-cyan-500 text-black font-bold py-2 rounded-md transition-all shadow-lg hover:shadow-cyan-500 ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-cyan-400"}`}
                    >
                        {loading ? "Logging in..." : "LOGIN"}
                    </button>

                    {/* Tombol Register */}
                    <button
                        type="button"
                        onClick={handleRegisterRedirect}
                        className="w-full bg-blue-700 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500"
                    >
                        REGISTER
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm mb-2">or login with</p>
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => signIn("google", { callbackUrl: "/" })}
                            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-all"
                        >
                            Google
                        </button>
                        <button
                            onClick={() => signIn("github", { callbackUrl: "/" })}
                            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition-all"
                        >
                            GitHub
                        </button>
                        <button
                            onClick={() => signIn("discord", { callbackUrl: "/" })}
                            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-all"
                        >
                            Discord
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}