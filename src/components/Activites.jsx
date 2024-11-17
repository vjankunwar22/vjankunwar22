import React from 'react';
import ActivityCard from "../components/ActivityCard";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import MobileSidebar from './MobileSidebar';

const Activities = () => {
  const activities = [
    {
      title: "Balinese Cooking Class",
      location: "Ubud",
      duration: "2h", 
      rating: 4.8,
      price: 25,
      imgSrc: img1,
    },
    {
      title: "Wood Carving Class",
      location: "Canggu",
      duration: "3h",
      rating: 4.6,
      price: 43,
      imgSrc: img2,
    },
    {
      title: "Dance Class",
      location: "Seminyak",
      duration: "3h",
      rating: 4.6,
      price: 43,
      imgSrc: img3,
    },
    {
      title: "Surfing Class",
      location: "Kuta",
      duration: "2h",
      rating: 4.7,
      price: 35,
      imgSrc: img3,
    },
    {
      title: "Yoga Class",
      location: "Nusa Dua",
      duration: "1.5h",
      rating: 4.9,
      price: 30,
      imgSrc: img3,
    },
    {
      title: "Seafood Cooking Class",
      location: "Jimbaran",
      duration: "3h",
      rating: 4.8,
      price: 45,
      imgSrc: img3,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="hidden md:block">
        <SearchBar />
      </div>
      <div className="md:hidden px-4 py-2">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Enter location"
            className="p-2 border border-gray-300 rounded-lg w-full"
          />
          <div className="flex gap-2">
            <input
              type="date"
              className="p-2 border border-gray-300 rounded-lg flex-1"
            />
            <select
              className="p-2 border border-gray-300 rounded-lg flex-1"
            >
              <option value="">Select activity type</option>
              <option value="crafts">Crafts workshops</option>
              <option value="outdoor">Outdoor adventures</option>
              <option value="cooking">Cooking classes</option>
              <option value="cultural">Cultural tours</option>
            </select>
          </div>
          <button
            className="bg-black text-white py-2 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-500"
          >
            Search
          </button>
        </div>
      </div>

      <div className='flex md:hidden fixed bottom-2 right-2'>
          <MobileSidebar/>
      </div>

      <div className="flex flex-1 ">
        <div className='md:flex hidden'>
        <Sidebar />
        </div>

        <main className="flex-1 p-4">
          <h2 className="text-sm font-semibold mb-4">Activities available</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>
        
        </main>
      </div>
    </div>
  );
};

export default Activities;
