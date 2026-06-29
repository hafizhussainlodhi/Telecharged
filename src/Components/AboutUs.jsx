import React from 'react';
import girl from '../assets/girl.svg';
import one from '../assets/a1.svg';
import two from '../assets/a2.svg';
import three from '../assets/a3.svg';
import four from '../assets/a4.svg';
import five from '../assets/a5.svg';
import six from '../assets/a6.svg';

const AboutUs = () => {
    const features = [
        { icon: one, title: "Seamless Global Top-Ups:", desc: "Telecharged offers a seamless and instant solution for topping up mobile phones worldwide." },
        { icon: two, title: "Secure and Reliable Transactions:", desc: "Employing advanced encryption and security protocols to ensure your transactions are safe." },
        { icon: three, title: "Multiple Payment Options:", desc: "Offering flexible payment methods, including credit/debit cards, digital wallets, and local gateways." },
        { icon: four, title: "Real-Time Transaction Tracking:", desc: "Monitor your recharges with instant notifications and detailed transaction history." },
        { icon: five, title: "24/7 Customer Support:", desc: "Dedicated support team available around the clock to assist with any questions or issues." },
        { icon: six, title: "Exclusive Promotions and Discounts:", desc: "Enjoy special offers and discounts on international recharges, maximizing value." },
    ];

    return (
        <>
            {/* About Us Section */}
            <section className="w-full py-16 px-4 md:px-12 bg-[#FCF6F6]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
                    </div>
                    {/* items-start ki wajah se text image ke top ke saath align hoga */}
                    <div className="flex flex-col md:flex-row items-start gap-12 pt-4">
                        <div className="relative w-full md:w-1/2">
                            <div className="absolute top-4 left-4 w-full h-full border-l-8 border-t-8 border-green-500 -z-10"></div>
                            <img src={girl} alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
                        </div>
                        {/* Right Side: Text Content */}
                        <div className="w-full md:w-1/2 flex flex-col justify-between">
                            <div>
                                <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                                    At Telecharged, we're revolutionizing the way people stay connected across borders. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nemo iusto fuga excepturi quibusdam ipsum consequuntur voluptatum incidunt nisi maiores, veritatis commodi beatae nulla! Itaque sunt voluptate velit vel! Iure?
                                    We understand the importance of quick and easy communication with loved ones,
                                    no matter where they are in the world. That's why we've created a seamless
                                    and instant solution for topping up mobile phones worldwide.
                                </p>
                                <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                                    Our user-friendly interface allows you to send mobile recharges to friends
                                    and family in seconds. Simply select the recipient's country, enter their
                                    details, and initiate the recharge. No more long wait times or complicated
                                    procedures. With Telecharged, staying connected is easier and faster than
                                    ever before. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit molestiae, architecto iure omnis fugit enim autem ipsa eum quasi ullam qui repellat asperiores inventore dicta debitis aliquam quaerat fuga amet?  Our platform ensures that your transactions are handled with
                                    the highest level of care and  speed. 
                                    ever before. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit molestiae, architecto iure omnis fugit enim autem ipsa eum quasi ullam qui repellat asperiores inventore dicta debitis aliquam quaerat fuga amet?  Our platform ensures that your transactions are handled with
                                    the highest level of care and  speed. 
                                </p>
                            </div>

                            {/* Button ko neeche set karne ke liye container */}
                            <div className="mt-auto">
                                <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                                    Show more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

{/* Features Grid Section */}
<section className="w-full py-16 px-4 md:px-12 bg-[#FCF6F6]">
    <div className="max-w-7xl mx-auto">
        {/* Mobile: grid-cols-2 | Laptop: grid-cols-3 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((item, index) => (
                <div 
                    key={index} 
                    // mobile (default): p-4, h-auto | laptop (lg): p-8, min-h-[280px]
                    className="flex flex-col items-start p-4 md:p-6 lg:p-8 bg-white rounded-2xl shadow-sm border border-gray-100 h-auto lg:min-h-[280px]"
                >
                    <img src={item.icon} alt={item.title} className="w-10 h-10 md:w-12 md:h-12 mb-4" />
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
</section>
        </>
    );
};

export default AboutUs;