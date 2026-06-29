import React, { useState } from 'react';
import logo from '../assets/logo.png';
import flag from '../assets/flag.png';
import logoSide from '../assets/logoSide.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
      {/* Top Green Bar */}
      <div className="bg-brand-green text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img src={flag} alt="Language" className="h-4 w-6 object-cover" />
            <span>EN / USD</span>
          </div>
          <button className="hover:underline">Sign In</button>
          <button className="hover:underline">Sign Up</button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-15">
            {/* Logo Group (Logo + logoSide) */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Telecharged" className="h-10 w-auto" />
              <img src={logoSide} alt="Side Decoration" className="h-4 w-auto" />
            </div>

            {/* Desktop Menu - 'items-center' links ko perfectly center rakhega */}
            <div className="hidden md:flex space-x-8 items-center text-brand-black font-semibold ">
              <a href="#" className="hover:text-green-700">Mobile top-up</a>
              <a href="#" className="hover:text-green-700">Mobile Phones</a>
              <a href="#" className="hover:text-green-700">Contact Us</a>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-brand-green">
                {isOpen ? "Close" : "Menu"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white p-4 space-y-4 border-b">
          <a href="#" className="block text-brand-green">Mobile top-up</a>
          <a href="#" className="block text-brand-green">Mobile Phones</a>
          <a href="#" className="block text-brand-green">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;