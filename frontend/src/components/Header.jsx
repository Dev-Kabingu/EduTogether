
import React, { useState } from 'react';
// import logo from '../../assets/images/logo.jpg';
import {Link} from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="p-4 bg-gray-800 text-white relative">
      <div className="flex justify-between items-center md:flex-row">
    
        <div className="flex gap-2">
          {/* <img src={logo} alt="logo" className="h-8 rounded" />  */}
          <h2 className='font-bold text-2xl'>EduTogether</h2>
        </div>

        {/* Hamburger Menu (small screens) */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-2xl focus:outline-none"
        >
          {menuOpen ? '✖' : '☰'}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } bg-gray-800 md:bg-transparent absolute md:static top-full px-24 left-0 w-full md:w-auto z-10 md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-lg text-center md:text-left">
            <li className="py-2 md:py-0 hover:text-gray-400 cursor-pointer"> <Link to = '/'>Home</Link></li>
            <li className="py-2 md:py-0 hover:text-gray-400 cursor-pointer"><Link to = '/About'>About Us</Link></li>
            <li className="py-2 md:py-0 hover:text-gray-400 cursor-pointer"><Link to = '/Services'>Services</Link></li>
            {/* <li className="py-2 md:py-0 hover:text-gray-400 cursor-pointer"> <Link to = '/ChatApp'>ChatApp</Link></li> */}
            <li className="py-2 md:py-0 hover:text-gray-400 cursor-pointer"><Link to = '/FAQ'>FAQ</Link></li>
            <li className="py-2 md:py-0 hover:text-gray-400 cursor-pointer"><Link to = '/Contact'>Contact</Link></li>
            <li className="py-2 hover:text-gray-400 bg-blue-500 px-4 rounded ml-54 cursor-pointer"><Link to = '/Signup'>Signup</Link></li>
            <li className="py-2 md:py-0 hover:text-gray-400 cursor-pointer"><Link to = '/Login'>Login</Link></li>
            {/* <li className="py-2 md:py-0 hover:text-gray-400 cursor-pointer"><Link to = '/TeacherDashboard'>TeacherDashboard</Link></li> */}
            {/* <li className="py-2 md:py-0 hover:text-gray-400 cursor-pointer"><Link to = '/ParentDashboard'>ParentDashboard</Link></li> */}
            
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
