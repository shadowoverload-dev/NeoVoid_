"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "@/style/Navbar.module.css";
import { signIn, signOut } from "next-auth/react";

export default function Navbar({ session }) {
    const [isOpen, setIsOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const pathname = usePathname();
    const dropdownRef = useRef(null);
    const dropdownRefProfile = useRef(null);

    const isActive = (path) => pathname === path;

    const toggleDropdown = () => setIsOpen(prev => !prev);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    const closeProfile = async () => {
        const response = await fetch('/api/clearProfile');
        const data = await response.json();
        if (data.action === 'closeProfile') {
            setProfileOpen(false);
        }
    };

    useEffect(() => {
        closeProfile();
    }, [pathname]);

    const toggleDropdownProfile = () => {
        setProfileOpen(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutsideProfile = (event) => {
            if (dropdownRefProfile.current && !dropdownRefProfile.current.contains(event.target)) {
                setProfileOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutsideProfile);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideProfile);
        };
    }, [])

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" ref={dropdownRef}>
                <div className="relative flex h-16 items-center justify-between" ref={dropdownRefProfile}>
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button onClick={toggleDropdown} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open Main Menu</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link href="/" className={`${styles.button} ${isActive('/') ? styles.active : ''}`}>Home</Link>
                                <Link href="/shop" className={`${styles.button} ${isActive('/shop') ? styles.active : ''}`}>Shop</Link>
                                <Link href="/support" className={`${styles.button} ${isActive('/support') ? styles.active : ''}`}>Support</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="relative ml-3">
                                {session ? (
                                    <div>
                                        <button onClick={toggleDropdownProfile} type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-expanded="false" aria-haspopup="true">
                                            <span className="absolute -inset-1.5"></span>
                                            <span className="sr-only">Oppen User Menu</span>
                                            <img className="h-8 w-8 rounded-full" src={session.user.image || "https://via.placeholder.com/150"} alt={session.user.name || "User"} />
                                        </button>
                                        {profileOpen && (
                                            <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700">Your Profile</Link>
                                                <Link href="#" className="block px-4 py-2 text-sm text-gray-700">Settings</Link>
                                                <button onClick={() => signOut()} className="block px-4 py-2 text-sm text-gray-700">Sign out</button>
                                            </div>
                                            )}
                                    </div>
                                ) : (
                                    <div className="flex space-x-2">
                                        <Link href="/login" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                            Sign In
                                        </Link>
                                    </div>
                                )}
                            </div>
                        <div className="relative ml-10">
                            {/* <ThemeSwitcher /> */}
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Link href="/" className={`${styles.button} ${isActive('/') ? styles.active : ''}`}>Home</Link>
                            <Link href="/shop" className={`${styles.button} ${isActive('/shop') ? styles.active : ''}`}>Shop</Link>
                            <Link href="/support" className={`${styles.button} ${isActive('/support') ? styles.active : ''}`}>Support</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}