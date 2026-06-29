import React from 'react';

// Aapke imported assets
import one from '../assets/5.png';
import two from '../assets/4.png';
import three from '../assets/3.png';
import four from '../assets/2.png';
import five from '../assets/9.png';
import six from '../assets/1.png';
import seven from '../assets/6.png';
import eight from '../assets/7.png';
import nine from '../assets/8.png';

const MobileUP = () => {
  const products = [
    { img: one, name: "Boostmobile" },
    { img: two, name: "MetroPCS" },
    { img: three, name: "H2O Wireless" },
    { img: four, name: "AT&T" },
    { img: five, name: "Access Wireless" },
    { img: six, name: "T-mobile" },
    { img: seven, name: "Net10 Wireless" },
    { img: eight, name: "Airvoice Wireless" },
    { img: nine, name: "Good2Go Mobile" },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-12 bg-[#FCF6F6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Mobile Top-Up Products</h2>
          <p className="text-gray-600">Explore our selection of Mobile top-up products.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div key={index} className="bg-gray-300 p-6 rounded-xl flex flex-col justify-between shadow-md h-96">
              
              <div className="flex justify-center items-center h-40">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="max-h-full w-auto object-contain" 
                />
              </div>
              
              {/* Text Info - Changed to text-gray-900 */}
              <div className="w-full text-left mt-auto mb-4">
                <p className="text-sm text-gray-900 font-medium">@telecharged</p>
                <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
              </div>

              {/* Button */}
              <button className="w-full bg-green-700 text-white py-3 rounded-lg font-bold hover:bg-green-800 transition">
                Charge Now!
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileUP;