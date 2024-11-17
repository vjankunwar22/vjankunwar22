import userimg from '../assets/User.jpg'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={{ zIndex: '100' }} className="flex items-center justify-between p-2 sm:p-4 border-b bg-white shadow-md sticky top-0 text-sm w-full">
      <Link to="/">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src={logo} alt="Logo" className="w-6 h-6 sm:w-8 sm:h-8 mb-2" />
          <h1 className="text-lg sm:text-2xl font-semibold text-Black cursor-pointer">GreenTravel</h1>
        </div>
      </Link>
      
      <button onClick={toggleMenu} className="md:hidden text-gray-700">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <nav className="hidden md:flex space-x-2 lg:space-x-4">
        <Link to="/accommodation">
          <button className="text-sm lg:text-base text-gray-700 hover:bg-[#e7efd6] hover:text-black hover:font-bold bg-white border px-2 lg:px-4 py-1 lg:py-2 rounded-xl">
            Accommodation
          </button>
        </Link>
        <Link to="/car-rent">
          <button className="text-sm lg:text-base text-gray-700 hover:bg-[#e7efd6] hover:text-black hover:font-bold bg-white border px-2 lg:px-4 py-1 lg:py-2 rounded-xl">
            Car Rent
          </button>
        </Link>
        <Link to="/activity">
          <button className="text-sm lg:text-base text-gray-700 hover:bg-[#e7efd6] hover:text-black hover:font-bold bg-white border px-2 lg:px-4 py-1 lg:py-2 rounded-xl">
            Activity
          </button>
        </Link>
        <Link to="/tour">
          <button className="text-sm lg:text-base text-gray-700 hover:bg-[#e7efd6] hover:text-black hover:font-bold bg-white border px-2 lg:px-4 py-1 lg:py-2 rounded-xl">
            Tour
          </button>
        </Link>
      </nav>

      <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
        <Link to="/login">
          <svg className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 hover:text-black cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
        </Link>
        <Link to="/profile">
          <img src={userimg} alt="User" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full cursor-pointer" />
        </Link>
      </div>

      {isMenuOpen && (
        <div className="absolute top-14 sm:top-16 left-0 w-full h-screen bg-white border-t shadow-lg md:hidden mt-[-8px]">
          <nav className="flex flex-col items-center space-y-3 sm:space-y-4 p-4">
            <Link to="/profile" className="w-full flex justify-center">
              <img src={userimg} alt="User" className="w-16 sm:w-20 h-16 sm:h-20 rounded-full mb-2 sm:mb-4" />
              
            </Link>
            <Link to="/" className="w-full">
            <button className="text-gray-700 text-base sm:text-lg w-full py-2 hover:bg-[#e7efd6] rounded-lg">Home</button>
            </Link>
            <Link to="/accommodation" className="w-full">
              <button className="text-gray-700 text-base sm:text-lg w-full py-2 hover:bg-[#e7efd6] rounded-lg">Accommodation</button>
            </Link>
            <Link to="/car-rent" className="w-full">
              <button className="text-gray-700 text-base sm:text-lg w-full py-2 hover:bg-[#e7efd6] rounded-lg">Car Rent</button>
            </Link>
            <Link to="/activity" className="w-full">
              <button className="text-gray-700 text-base sm:text-lg w-full py-2 hover:bg-[#e7efd6] rounded-lg">Activity</button>
            </Link>
            <Link to="/tour" className="w-full">
              <button className="text-gray-700 text-base sm:text-lg w-full py-2 hover:bg-[#e7efd6] rounded-lg">Tour</button>
            </Link>
            <Link to="/login" className="w-full">
              <button className="text-gray-700 text-base sm:text-lg w-full py-2 hover:bg-[#e7efd6] rounded-lg">Login</button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
