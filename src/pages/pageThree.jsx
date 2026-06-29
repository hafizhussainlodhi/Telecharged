import React from 'react';
import flag from '../assets/flag.png';
import mobileLogo from '../assets/T-Mobile.png';
import rightTick from '../assets/right.png';
import chargeNow from '../assets/chargeNow.png';

function PageThree() {
    const plans = [10, 20, 30, 40, 50, 60, 70, 80, 90];

    return (
        <section className="w-full py-16 bg-[#FCF6F6] flex flex-col items-center">
            {/* Header Section */}
            <div className="text-center mb-10 w-full px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-black mb-8">T-Mobile Prepaid Plans</h1>
                <div className="bg-white  rounded-2xl  border border-gray-100 inline-block">
                    <img src={mobileLogo} alt="T-Mobile" className="h-32 md:h-40 object-contain" />
                </div>
            </div>

            {/* Selection Container */}
            <div className="w-full max-w-3xl px-4 mb-16">
                <p className="text-sm font-medium text-gray-700 mb-2">Step 1: Select which country this product will be used</p>
                <div className="mb-8">
                    <label className="text-xs text-gray-500 mb-1 block">Select which country</label>
                    <div className="w-full border border-[#00A859] rounded-xl p-4 flex items-center justify-between bg-white shadow-sm cursor-pointer hover:border-[#008f4c] transition-colors">
                        <div className="flex items-center gap-3">
                            <img src={flag} alt="Flag" className="w-6 h-4 object-cover" />
                            <span className="font-medium text-gray-800">United States</span>
                        </div>
                        <span className="text-lg text-gray-400">→</span>
                    </div>
                </div>
            </div>

            {/* Step 2: Choose a value */}
            <div className="w-full max-w-4xl px-4 mb-16">
                <h2 className="text-xl font-bold text-black mb-6 text-center">Step 2: Choose a value</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {plans.map((value) => (
                        <div key={value} className="bg-gray-100 p-8 rounded-xl border border-gray-200 flex flex-col items-center justify-center gap-4 text-center transition-transform hover:scale-[1.01] hover:border-blue-400">
                            <img src={mobileLogo} alt="T-Mobile" className="h-20 w-32 object-contain" />
                            <div>
                                <h3 className="font-bold text-black text-lg">T-Mobile Prepaid</h3>
                                <p className="text-sm text-gray-600">Instant Delivery to Phone</p>
                            </div>
                            <p className="text-2xl font-extrabold text-black mt-2">USD {value}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Step 3: Charge Now Section */}
            <div className="w-full max-w-4xl px-4 text-center mb-16">
                <h2 className="text-xl font-bold text-black mb-6">Step 3: Charge Now!</h2>
                <div className="flex flex-col items-center gap-2">
                    <img src={chargeNow} alt="Charge Now" className="h-24 md:h-32 object-contain" />
                    <p className="font-semibold text-gray-800">Refill T-Mobile Plans Online</p>
                </div>
            </div>

            {/* About Section */}
            <div className="w-full max-w-4xl bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-center">About T-Mobile USA</h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                    Top up your T-Mobile prepaid plans on Recharge.com so you will never run out of T-Mobile USA minutes or texts. It only takes a few taps! We know how frustrating it is to not have enough credit. Just when you need to call your Mom, text your friend or look something up online. With Recharge.com you can top up your phones immediately. You'll be back on your phone before you know it! To top up your T-Mobile refill plans simply select the amount you need and enter your phone number. You can pay using PayPal, Trustly, Mastercard, credit card/debit card or using more than 23 other safe and secure payment methods. When the payment is complete, your balance will be topped up immediately! We will send the T-Mobile recharge code to the email inserted, with instructions on how to redeem the credit. Top up your T-Mobile plans on Recharge.com. It's fast, safe and simple! Looking for an alternative or similar product to the T-Mobile prepaid refill? We recommend:
                </p>
                
                <div className="flex flex-wrap justify-center gap-6">
                    {['Ultra Mobile Plans', 'AT&T Prepaid', 'Lyca Mobile'].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                            <img src={rightTick} alt="Check" className="w-5 h-5" />
                            <span className="font-semibold text-gray-800">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PageThree;