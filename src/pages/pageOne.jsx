import React from 'react';

import star from '../assets/Star.svg';
import heroimage from '../assets/heroimage.svg';
import ShorImages from '../Components/ShortImges';
import AboutUs from '../Components/AboutUs';
import MobileUP from '../Components/Mobile-Up';


function PageOne() {
    return (
        <>

            {/* Hero Section */}
            <section className="bg-[#FCF6F6] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* Left Content */}
                <div className="flex-1 space-y-8">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                        Telecharged: Recharge Instantly, Connect Globally.
                    </h1>

                    {/* Button aur Star image side-by-side */}
                    <div className="flex items-center gap-6">
                        <button className="bg-brand-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                            Explore Now
                        </button>
                        <img src={star} alt="Star" className="w-10 h-10" />
                    </div>

                    {/* Features - Button ke neeche */}
                    <div className="flex space-x-12 pt-4">
                        <div>
                            <h3 className="font-bold text-xl text-black">Instant</h3>
                            <p className="text-gray-900 font-medium">Delivery</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-black">Trusted</h3>
                            <p className="text-gray-900 font-medium">by millions</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-black">Secure</h3>
                            <p className="text-gray-900 font-medium">Payment</p>
                        </div>
                    </div>
                </div>

                {/* Right Images Section */}
                <div className="flex-1 flex justify-center">
                    <img src={heroimage} alt="Hero" className="max-w-full h-auto" />
                </div>
            </section>

            <ShorImages />
            <AboutUs />
            <MobileUP />
            <section className="w-full py-8 px-4 md:px-12 bg-[#FCF6F6]">
                {/* space-y-4 se cards ke darmiyan gap kam ho jayega */}
                <div className="max-w-5xl mx-auto space-y-4 relative">

                    {/* Card 1 */}
                    <div className="border-2 border-gray-200 rounded-[2rem] p-6 md:p-8 relative">
                        <h2 className="text-lg md:text-xl font-bold text-[#00875A] mb-2">
                            Tired of complicated mobile recharge processes?
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Telecharged offers a seamless and instant solution for topping up mobile phones worldwide.
                            Our user-friendly interface allows you to quickly select a recipient's country, enter their details,
                            and initiate a recharge in seconds. Say goodbye to long wait times.
                        </p>
                    </div>

                    {/* Green Circle - Height ke hisaab se position adjust ki */}
                    <div className="absolute right-0 md:right-[-20px] top-[35%] w-16 h-16 md:w-24 md:h-24 bg-[#00A859] rounded-full z-10 hidden md:flex items-center justify-center shadow-lg"></div>

                    {/* Card 2 */}
                    <div className="border-2 border-gray-200 rounded-[2rem] p-6 md:p-8">
                        <h2 className="text-lg md:text-xl font-bold text-[#00875A] mb-2">
                            Telecharged goes beyond just mobile top-ups.
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            We provide a comprehensive platform for entertainment and shopping needs as well.
                            Whether you're looking to recharge your phone, access digital entertainment, or shop for online goods,
                            Telecharged is your one-stop solution. Experience the convenience and versatility today.
                        </p>
                    </div>
                </div>
            </section>
            
        </>
    );
}

export default PageOne;