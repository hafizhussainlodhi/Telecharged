import React from 'react';
import one from '../assets/t1.png';
import two from '../assets/t2.png';
import three from '../assets/t3.png';
import bg from '../assets/bg.png';
import star from '../assets/Star.svg';
import heroimage from '../assets/heroimage.svg';
import ShorImages from '../Components/ShortImges';
import AboutUs from '../Components/AboutUs';
import MobileUP from '../Components/Mobile-Up';


function PageFour() {
    return (
       <>
       <div className="bg-[#FCF6F6]">
         <div
            className="w-full min-h-[400px] flex flex-col md:flex-row items-center justify-between p-6 md:p-16 text-white bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
        >
            {/* Text Section */}
            <div className="flex-1 md:pl-10 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                    Telecharged: Recharge<br />Instantly, Connect<br />Globally.
                </h1>

                <div className="flex justify-center md:justify-start gap-8 text-sm font-semibold">
                    <span className="flex flex-col">
                        <span className="text-yellow-400 text-2xl font-bold">Instant</span>
                        <span className="text-yellow-300">Delivery</span>
                    </span>
                    <span className="flex flex-col">
                        <span className="text-yellow-400 text-2xl font-bold">Trusted</span>
                        <span className="text-yellow-300" >by millions</span>
                    </span>
                    <span className="flex flex-col">
                        <span className="text-yellow-400 text-2xl font-bold">Secure</span>
                        <span className="text-yellow-300" >Payment</span>
                    </span>
                </div>
            </div>

            {/* Image Stack Section */}
            <div className="relative w-[300px] md:w-[450px] h-[250px] md:h-[300px] mt-12 md:mt-0">
                <img
                    src={one}
                    alt="Recharge"
                    className="absolute w-[150px] md:w-[200px] rounded-2xl z-10 left-0 top-0"
                />
                <img
                    src={two}
                    alt="Gaming"
                    className="absolute w-[150px] md:w-[200px] rounded-2xl z-20 left-[60px] md:left-[90px] top-[30px] md:top-[40px]"
                />
                <img
                    src={three}
                    alt="Connectivity"
                    className="absolute w-[150px] md:w-[200px] rounded-2xl z-30 left-[120px] md:left-[180px] top-[60px] md:top-[80px]"
                />
            </div>
        </div>
       </div>

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

export default PageFour;