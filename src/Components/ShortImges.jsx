import React from 'react';
import one from '../assets/1.png';
import two from '../assets/2.png';
import three from '../assets/3.png';
import four from '../assets/4.png';
import five from '../assets/5.png';

const ShorImages = () => {
  const logos = [one, two, three, four, five];

  return (
    <section className="w-full py-12 bg-[#FCF6F6]">
      <div className="w-full">
        
        {/* Heading */}
        <p className="text-center text-gray-800 font-semibold mb-8">
          1,000+ customers large and small rely on us for trusted recharge.
        </p>

        {/* - grid grid-cols-2: Mobile par 2 columns banayega.
           - md:flex: Laptop/Desktop par wapas flex-row (original layout) ho jayega.
           - md:border-none: Desktop par border hataya hai taaki aapka original look rahe.
        */}
        <div className="grid grid-cols-2 md:flex md:justify-center md:items-center w-full">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex-1 flex justify-center items-center border-r border-gray-200 last:border-r-0 md:border-r md:border-gray-200"
            >
              <img 
                src={logo} 
                alt={`Partner ${index + 1}`} 
                className="h-20 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 px-0" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShorImages;