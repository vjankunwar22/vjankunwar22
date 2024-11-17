import React from 'react'
import { Input} from '@mantine/core'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Login</h1>
        <form className="space-y-6">
          
          <Input
            placeholder="Email"
            size="lg"
            className="w-full"
          />
          <Input
            type="password"
            placeholder="Password"
            size="lg"
            className="w-full"
          />
          
          
          <button className='bg-green-500 hover:bg-black text-white px-4 py-2 rounded-lg w-full'
          >
            Login
          </button>
          
          <div className="text-center text-gray-600">
            <p className="mt-4">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register
              </Link>
            </p>
            <p className="mt-2">
              Forgot password?{' '}
              <Link to="/forgot-password" className="text-blue-600 hover:underline">
                Reset password
              </Link>
            </p>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or login with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              className="flex items-center justify-center w-full px-4 py-2 border bg-green-500 rounded-lg hover:bg-black text-white"
            >
              <i className="fa-brands fa-google text-lg mr-2"></i>
              Google
            </button>
            <button
              className="flex items-center justify-center w-full px-4 py-2 border bg-green-500 rounded-lg hover:bg-black text-white"
            >
              <i className="fa-brands fa-apple text-lg mr-2"></i>
              Apple
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login