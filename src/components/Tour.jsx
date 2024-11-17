import React, { useState } from 'react'
import bg from '../assets/ammie-ngo-vcu-OZBxxRk-unsplash.jpg'

const Tour = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSearchSubmit = () => {
    
    console.log('Searching for:', searchTerm)
  }

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        width: '100%', 
      }}
    >
      <div className='flex flex-col items-center justify-center h-full gap-4'>
        <h1 className='text-4xl font-bold text-white'>Tour</h1>
        <div className="flex w-full max-w-md gap-2">
          <input
            type="text"
            placeholder="Search location..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
          />
          <button
            onClick={handleSearchSubmit}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-black transition duration-200"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tour
