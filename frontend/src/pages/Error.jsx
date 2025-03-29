import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h3 className='text-xl text-center mt-12'>Something went wrong, try again later</h3>
      <p className='text-center text-blue-400 underline text-xl mt-2'><Link to = '/'>Home</Link></p>
    </div>
  )
}

export default Error
