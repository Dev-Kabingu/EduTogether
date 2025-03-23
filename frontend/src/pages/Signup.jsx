import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <>
<div class="min-h-screen flex items-center justify-center bg-blue-100">
  <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold text-blue-800 mb-6 ">Create Your Account</h1>
    <form>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name" required
          class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email" required
          class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Create a password" required
          class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm your password" required
          class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition"
      >
        Sign Up
      </button>
    </form>
    <p class="mt-6 text-sm text-gray-600 text-center">
      Already have an account? <a href="#" class="text-blue-800 font-bold hover:underline"><Link to= '/Login'>Login</Link></a>
    </p>
  </div>
</div>


    </>
  )
}

export default Signup
