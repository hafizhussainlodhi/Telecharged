import React from 'react';
import one from '../assets/f1.png';
import two from '../assets/f2.png';
import three from '../assets/f3.png';
import google from '../assets/fgoogle.png';
import trust from '../assets/ftrustpilot.png';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <>
            <section className="w-full py-0 px-0 bg-white">
                <div className="w-full border-t border-b border-gray-200 overflow-hidden">

                    {/* Top Green Heading */}
                    <div className="bg-[#00A859] py-8 text-center">
                        <h2 className="text-white text-2xl md:text-3xl font-bold">
                            Telecharge fast, easy, and safe.
                        </h2>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-[#FCFBFB]">

                        {/* Item 1 - p-12 se height barh gayi */}
                        <div className="flex flex-col items-center p-20 text-center">
                            <img src={one} alt="Fast" className="w-24 h-24 mb-8" />
                            <p className="text-gray-800 leading-relaxed font-medium">
                                Fast: Instantly top up your phone or a loved one's phone in seconds, no matter where they are in the world.
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex flex-col items-center p-12 text-center">
                            <img src={two} alt="Easy" className="w-24 h-24 mb-8" />
                            <p className="text-gray-800 leading-relaxed font-medium">
                                Easy: Enjoy a hassle-free experience with our intuitive interface, making mobile recharge a breeze for everyone.
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="flex flex-col items-center p-12 text-center">
                            <img src={three} alt="Safe" className="w-24 h-24 mb-8" />
                            <p className="text-gray-800 leading-relaxed font-medium">
                                Safe: Securely recharge with peace of mind, knowing your transactions are protected by our advanced encryption technology.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <footer className="w-full bg-black text-white py-16 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Logo and Description - Ab logo ke sath text hai */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img src={logo} alt="Logo" className="h-10" />
                            <span className="text-xl font-10">telecharged.com</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Experience the world's leading platform for instant and secure mobile recharges.
                            Discover the ease and convenience of topping up your loved ones' phones with Telecharge.
                        </p>
                    </div>

                    {/* Help & Faq */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Help & Faq</h3>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="cursor-pointer hover:text-green-500">About Us</li>
                            <li className="cursor-pointer hover:text-green-500">How to Use</li>
                            <li className="cursor-pointer hover:text-green-500">Contact Us</li>
                        </ul>
                    </div>

                    {/* Policy */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Policy</h3>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="cursor-pointer hover:text-green-500">DCMA Compliance</li>
                            <li className="cursor-pointer hover:text-green-500">Privacy Policy</li>
                            <li className="cursor-pointer hover:text-green-500">Returns & Refund</li>
                            <li className="cursor-pointer hover:text-green-500">Terms & Condition</li>
                        </ul>
                    </div>

                    {/* Review Images */}
                    <div className="flex flex-col gap-4">
                        <img src={google} alt="Google Reviews" className="h-20 w-auto object-contain bg-white p-2 rounded" />
                        <img src={trust} alt="Trustpilot" className="h-20 w-auto object-contain bg-white p-2 rounded" />
                    </div>
                </div>

                {/* Copyright */}
                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    telecharged.com | All Right Reserved!
                </div>
            </footer>

        </>

    );
};

export default Footer;