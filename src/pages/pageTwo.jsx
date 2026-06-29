import React from 'react';
import flag from '../assets/flag.png';
import star from '../assets/Star.svg';
import right from '../assets/right.png';
import moilbe from '../assets/mobile.svg';
import starRang from '../assets/starRang.svg';
import charger from '../assets/charger.svg';
import ShorImages from '../Components/ShortImges';
import MobileUP from '../Components/Mobile-Up';

function PageTwo() {
    return (
        <>
<section className="w-full py-20 px-6 flex flex-col items-center bg-[#FCF6F6] relative overflow-hidden">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-12 text-center px-4">
                Mobile top-up for an easy access just for everyone.
            </h1>

            {/* Selection Box */}
            <div className="w-full max-w-2xl px-2">
                <p className="text-sm text-gray-500 mb-2">Select which country</p>
                <div className="relative border-2 border-[#00A859] rounded-xl p-4 flex items-center justify-between bg-white shadow-sm">
                    <div className="flex items-center gap-3">
                        <img src={flag} alt="Flag" className="w-8 h-6 object-cover" />
                        <span className="font-semibold text-gray-800">United States</span>
                    </div>
                    <span className="text-xl">→</span>
                </div>
                <div className="mt-8 flex flex-col items-center">
                    <img src={charger} alt="Charger" className="w-20 h-20" />
                </div>
            </div>

            {/* Info Footer - Mobile par gap kam kiya */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 w-full max-w-3xl px-4">
                <div className="text-center">
                    <h3 className="font-bold text-lg md:text-xl">Instant</h3>
                    <p className="text-gray-600 text-sm">Delivery</p>
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-lg md:text-xl">Trusted</h3>
                    <p className="text-gray-600 text-sm">by millions</p>
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-lg md:text-xl">Secure</h3>
                    <p className="text-gray-600 text-sm">Payment</p>
                </div>
            </div>

            {/* Floating Stars - Sirf bade screens par dikhengi */}
            <img src={star} alt="Star" className="absolute left-[5%] top-[40%] w-12 md:w-16 opacity-80 hidden md:block" />
            <img src={star} alt="Star" className="absolute right-[5%] top-[40%] w-12 md:w-16 opacity-80 hidden md:block" />
        </section>
            <ShorImages />
            <MobileUP />

            <section className="w-full py-16 px-6 bg-[#FCF6F6]">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Online mobile recharge (Lamba Card) */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 lg:row-span-2 flex flex-col">
            <h3 className="text-xl font-bold mb-4">Online mobile recharge</h3>
            <p className="text-gray-600 text-sm mb-6">A prepaid phone plan offers connectivity and flexibility. However, you can deplete your balance unexpectedly. To easily replenish your prepaid phone credit online, whether locally or internationally, use Telecharged.com.</p>
            <div className="bg-[#004d2b] text-white py-2 px-4 rounded-full text-center font-semibold text-sm mb-4">Here's the process:</div>
            <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><img src={right} alt="check" className="w-4 mt-1" /> Select your mobile provider from the provided list.</li>
                <li className="flex items-start gap-2"><img src={right} alt="check" className="w-4 mt-1" /> Choose your preferred recharge amount. Complete your transaction securely using your preferred payment option.</li>
                <li className="flex items-start gap-2"><img src={right} alt="check" className="w-4 mt-1" /> You can pay with PayPal or select from over 20 other methods. Your mobile credit will be immediately applied to your phone.</li>
            </ul>
            <div className="mt-auto pt-6 text-center">
                <img src={moilbe} alt="Mobile" className="w-32 mx-auto" />
            </div>
        </div>

        {/* Card 2: International mobile recharge */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
            <h3 className="text-xl font-bold mb-4">International mobile recharge</h3>
            <p className="text-gray-600 text-sm mb-4 flex items-start gap-2"><img src={right} alt="check" className="w-4 mt-1" /> At Telecharged.com, you can add credit to any prepaid mobile phone globally. The process is quick, secure, and straightforward. Just navigate to the top right menu and choose the country of the mobile provider you wish to recharge. You'll find a list of available options. Pay using your preferred currency and payment method. This is what we define as simple and adaptable international mobile top-up.</p>
        </div>

        {/* Card 3: How to top up for someone else */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
            <h3 className="text-xl font-bold mb-4">How to top up for someone else</h3>
            <p className="text-gray-600 text-sm mb-4 flex items-start gap-2"><img src={right} alt="check" className="w-4 mt-1" /> Recharging a mobile phone for someone else is as simple as recharging your own. You just need the recipient's email address or phone number. Choose the country you want to send the recharge to from the top right menu. Then, choose from the list of mobile operators and recharge amounts. Pay securely with PayPal or over 20 other safe payment options.</p>
        </div>

        {/* Card 4: Buy airtime with PayPal (Lamba Card) */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 lg:row-span-2 flex flex-col">
            <h3 className="text-xl font-bold mb-4">Buy airtime with PayPal</h3>
            <p className="text-gray-600 text-sm mb-4 flex items-start gap-2"><img src={right} alt="check" className="w-4 mt-1" /> You can purchase airtime for any mobile carrier worldwide on Telecharged.com using PayPal. Or, you can select from more than 20 other payment methods, including Visa, Mastercard, American Express, and Apple Pay. We accept all major global currencies, allowing you to pay as you prefer. You have full control.</p>
        </div>

        {/* Card 5: Popular USA Prepaid Mobile Carriers */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
            <h3 className="text-xl font-bold mb-4">Popular USA Prepaid Mobile Carriers</h3>
            <p className="text-gray-600 text-sm mb-4 flex items-start gap-2"><img src={right} alt="check" className="w-4 mt-1" /> On Telecharged.com, you can obtain a T-Mobile prepaid refill, an AT&T prepaid refill, an easy Lyca recharge, or you can simply recharge Ultra Mobile. We provide airtime for over 20 US mobile carriers, ensuring you always find the product you require.</p>
            <img src={starRang} alt="Stars" className="w-24 mt-auto pt-4" />
        </div>

    </div>
</section>
        </>

    );
}

export default PageTwo;