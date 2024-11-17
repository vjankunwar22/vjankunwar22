import React from 'react'
import userimg from '../assets/User.jpg';

const Profile = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-8">
      <img
        src={userimg}
        alt="Profile"
        className="w-32 h-32 rounded-full shadow-md mb-4"
      />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Vjan</h2>
      <p className="text-gray-600 mb-4">vjankunwar22@gmail.com</p>
      
      <div className="w-full text-left space-y-2">
        <div className="text-gray-700">
          <span className="font-semibold">Location:</span>Kathmandu , Nepal
        </div>
        <div className="text-gray-700">
          <span className="font-semibold">Joined:</span> November 05
        </div>
        <div className="text-gray-700">
          <span className="font-semibold">Interests:</span> Traveling, Photography
        </div>
      </div>

      <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-black">
        Edit Profile
      </button>
    </div>

  )
}

export default Profile