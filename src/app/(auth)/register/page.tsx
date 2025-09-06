"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!termsAccepted) {
            alert("You must accept the Terms and Privacy Policy.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Contoh pengiriman data ke API register
        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password }),
        });

        if (res.ok) {
            alert("Registration successful! Redirecting to login...");
            router.push("/login");
        } else {
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-cyan-400">
            <div className="relative w-full max-w-md p-8 rounded-xl border border-cyan-500 shadow-2xl bg-black bg-opacity-60 backdrop-blur-md">

                {/* Frame Cyber */}
                <div className="absolute -top-2 -left-2 w-10 h-10 border-t-4 border-l-4 border-cyan-500"></div>
                <div className="absolute -top-2 -right-2 w-10 h-10 border-t-4 border-r-4 border-cyan-500"></div>
                <div className="absolute -bottom-2 -left-2 w-10 h-10 border-b-4 border-l-4 border-cyan-500"></div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-4 border-r-4 border-cyan-500"></div>

                <h1 className="text-3xl font-extrabold mb-6 text-center tracking-widest">
                    CYBER REGISTER
                </h1>

                <form onSubmit={handleRegister} className="space-y-6">
                    {/* Username */}
                    <div>
                        <label className="block text-sm font-bold mb-2">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-transparent border border-cyan-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500"
                            placeholder="Enter your username"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-transparent border border-cyan-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password */}
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
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-bold mb-2">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full bg-transparent border border-cyan-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    {/* Terms and Privacy */}
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                            className="accent-cyan-500"
                        />
                        <span className="text-sm">
                            I agree to the{" "}
                            <a href="/terms" className="text-cyan-400 hover:underline">Terms</a> and{" "}
                            <a href="/privacy" className="text-cyan-400 hover:underline">Privacy Policy</a>.
                        </span>
                    </div>

                    {/* Tombol Register */}
                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500"
                    >
                        REGISTER
                    </button>
                </form>

                {/* Sosial Login */}
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
