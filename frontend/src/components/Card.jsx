import React from 'react'
import './Card.css'

const Card = ({ image, title, description }) => {
  return (
    <>
     <div className="card p-6 bg-gray-100 rounded-lg shadow-md text-center">    
      <div className="relative z-10 group-hover:text-white transition-colors duration-500">
      <img src={image} alt={`${name}'s picture`} className="w-24 h-24 rounded mx-auto mb-4 object-cover"
      />
        <h1 className="text-xl font-semibold text-blue-600">{title}</h1>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </div>
    </>
  )
}

export default Card
