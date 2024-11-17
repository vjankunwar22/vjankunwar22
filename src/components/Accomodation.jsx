import React from 'react'
import hotel from '../assets/74035135.jpg'

const Accomodation = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Accommodation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg overflow-hidden shadow-md">
          <img 
            src={hotel} 
            alt="hotel"
            className="w-full h-64 object-cover" 
          />
          <div className="p-4 space-y-3">
            <h2 className="text-xl font-bold">CR7 Hotel</h2>
            <p className="text-gray-600"> Madrid, Spain</p>
            <p className="text-lg font-semibold">$199 per night</p>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-black transition duration-200">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accomodation
