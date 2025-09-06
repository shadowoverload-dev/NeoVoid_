import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Social Icons */}
                <div className="flex justify-center md:justify-start space-x-6 mb-10">
                    <Link href="#"><FaFacebook size={20} className="hover:text-white" /></Link>
                    <Link href="#"><FaInstagram size={20} className="hover:text-white" /></Link>
                    <Link href="#"><FaXTwitter size={20} className="hover:text-white" /></Link>
                    <Link href="#"><FaGithub size={20} className="hover:text-white" /></Link>
                    <Link href="#"><FaYoutube size={20} className="hover:text-white" /></Link>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-white font-semibold mb-4">Solutions</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-white">Marketing</Link></li>
                            <li><Link href="#" className="hover:text-white">Analytics</Link></li>
                            <li><Link href="#" className="hover:text-white">Automation</Link></li>
                            <li><Link href="#" className="hover:text-white">Commerce</Link></li>
                            <li><Link href="#" className="hover:text-white">Insights</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-white">Submit ticket</Link></li>
                            <li><Link href="#" className="hover:text-white">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-white">Guides</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-white">About</Link></li>
                            <li><Link href="#" className="hover:text-white">Blog</Link></li>
                            <li><Link href="#" className="hover:text-white">Jobs</Link></li>
                            <li><Link href="#" className="hover:text-white">Press</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-white">Terms of service</Link></li>
                            <li><Link href="#" className="hover:text-white">Privacy policy</Link></li>
                            <li><Link href="#" className="hover:text-white">License</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
                </div>
            </div>
        </footer>

        // <footer className="bg-gray-900 text-white">
        //     <div className="container mx-auto px-6 py-10">
        //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        //             <div>
        //                 <h2 className="text-2xl font-bold">WeatherGlass</h2>
        //                 <p className="mt-2 text-gray-400">Platform Server Game Minecraft & GtaV Rolplay</p>
        //             </div>
        //             <nav className="mt-6 md:mt-0 flex flex-col md:flex-row gap-6">
        //                 <Link href="/" className="hover:text-gray-300">Home</Link>
        //                 <Link href="/" className="hover:text-gray-300">About</Link>
        //                 <Link href="/" className="hover:text-gray-300">Services</Link>
        //                 <Link href="/" className="hover:text-gray-300">Contact</Link>
        //             </nav>
        //         </div>

        //         <hr className="my-8 border-gray-700" />

        //         <div className="flex justify-center gap-4">
        //             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        //                     <path strokeLinecap="round" strokeLinejoin="round" d="M8 19h3v-3H8v3z" />
        //                 </svg>
        //             </a>
        //             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        //                     <path strokeLinecap="round" strokeLinejoin="round" d="M18.36 10.6A8.98 8.98 0 0012 4.5c-4.97 0-9 4.03-9 9s4.03 9 9 9c4.97 0 9-4.03 9-9m-4.68-2.4h3.72M9 15.9l2.7-2.7M12 6.6v.54M9.6 8.7l.72.72" />
        //                 </svg>
        //             </a>
        //         </div>
        //         <div className="mt-8 text-center text-sm text-gray-500">
        //             <p>&copy; {new Date().getFullYear()} MyBrand. All Rights Reserved.</p>
        //         </div>
        //     </div>
        // </footer>
    );
};