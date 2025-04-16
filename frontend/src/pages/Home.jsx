import React from "react";
import { FaArrowRight, FaChalkboardTeacher, FaComments } from "react-icons/fa";
import { FaChartLine, FaBell, FaGraduationCap, FaUpload, FaCalendarCheck, FaLock, FaDesktop } from 'react-icons/fa';
import { HiAcademicCap } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header'
import email from '../assets/email.jpg'
import img6 from '../assets/img6.png'
import img3 from '../assets/img3.jpg'
import Footer from "../components/Footer";


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const cards = [
    {
      title: "Instant Parent-Teacher Messaging",
      description: "Facilitates real-time communication between parents and teachers, ensuring seamless collaboration.",
      icon: <FaComments className="text-4xl text-blue-500 mb-4" />,
    },
    {
      title: "Student Performance Tracking",
      description: "Allows parents and teachers to monitor student progress, grades, and attendance in one place.",
      icon: <FaChartLine className="text-4xl text-blue-500 mb-4" />,
    },
    {
      title: "Real-Time Notifications",
      description: "Stay updated on announcements, assignments, meetings, and important school events.",
      icon: <FaBell className="text-4xl text-blue-500 mb-4" />,
    },
    {
      title: "CBC-Focused Learning",
      description: "Designed to support the Competency-Based Curriculum (CBC) by enhancing engagement and accessibility.",
      icon: <FaGraduationCap className="text-4xl text-blue-500 mb-4" />,
    },
    {
      title: "Assignment Upload & Download",
      description: "Teachers can post assignments with deadlines, and parents can download materials for their children.",
      icon: <FaUpload className="text-4xl text-blue-500 mb-4" />,
    },
    {
      title: "Meeting Scheduling & Reminders",
      description: "Easily organize and manage meetings between parents and teachers with automatic reminders.",
      icon: <FaCalendarCheck className="text-4xl text-blue-500 mb-4" />,
    },
    {
      title: "Secure Role-Based Access",
      description: "Ensures privacy and security by providing different access levels for admins, teachers, parents, and students.",
      icon: <FaLock className="text-4xl text-blue-500 mb-4" />,
    },
    {
      title: "User-Friendly Dashboard",
      description: "A simple and intuitive interface built with React.js and Tailwind CSS for easy navigation.",
      icon: <FaDesktop className="text-4xl text-blue-500 mb-4" />,
    },
  ];
  
  
  return (
    <>
    <Header />
    <div className="w-full">
    <section className="flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left bg-gradient-to-r from-blue-50 to-blue-50 px-8 md:px-16 lg:px-24 gap-12 py-18">
  <div
    className="md:w-1/2 space-y-6"
    data-aos="fade-right"
    data-aos-delay="200"
  >
    <h2 className="text-5xl md:text-5xl font-bold text-blue-700 leading-tight max-w-2xl">
      Empowering Collaboration for Student Success
    </h2>

    <p className="text-lg md:text-lg text-gray-700 leading-relaxed">
      Empowering parents and teachers to collaborate, communicate, and create a stronger support
      system for students. Bridging the gap between parents and teachers to enhance student success.
    </p>

    <Link 
      to="/Login" 
      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      data-aos="zoom-in"
      data-aos-delay="400"
    >
      Get Started <FaArrowRight />
    </Link>
  </div>

  <div
    className="md:w-1/2 flex justify-center"
    data-aos="fade-left"
    data-aos-delay="500"
  >
    <img
      src={img6}
      alt="Communication"
      className="w-full max-w-lg drop-shadow-[0_8px_6px_rgba(0,0,0,0.25)] rounded-lg"
    />
  </div>
</section>



<div className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100 py-24 px-6 md:px-16 lg:px-24">
  <div
    className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16"
    data-aos="fade-up"
  >
    <div
      className="md:w-1/2 flex justify-center"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      <img
        src={img3}
        alt="EduTogether Overview"
        className="w-full max-w-md md:max-w-lg h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
      />
    </div>

    <div
      className="md:w-1/2 space-y-6 text-center md:text-left"
      data-aos="fade-left"
      data-aos-delay="300"
    >
      <div
        className="flex items-center justify-center md:justify-start gap-4"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <HiAcademicCap className="text-blue-600 text-4xl" />
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 leading-tight">
          About <span className="text-blue-800">EduTogether</span>
        </h2>
      </div>

      <p
        className="text-base md:text-lg text-gray-700 leading-relaxed text-left"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        EduTogether is a smart platform that connects <strong>parents</strong> and <strong>teachers</strong>,
        making it easier to collaborate and support students. We provide:
      </p>

      <ul className="text-gray-700 space-y-2" data-aos="fade-up" data-aos-delay="600">
        <li className="flex items-center gap-2">
          <FaChalkboardTeacher className="text-blue-600 text-xl" />
          Real-time updates from teachers
        </li>
        <li className="flex items-center gap-2">
          <FaComments className="text-blue-600 text-xl" />
          Seamless messaging between parents & teachers
        </li>
      </ul>

      <Link
        to="/About"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        data-aos="zoom-in-up"
        data-aos-delay="700"
      >
        Learn More <FaArrowRight />
      </Link>
    </div>
  </div>
</div>


      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 py-24 px-4">
  {cards.map((card, index) => (
    <div
      key={index}
      className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl hover:bg-blue-50 transition duration-300"
      data-aos="fade-up"
      data-aos-delay={index * 100} 
    >
      <div className="flex items-center justify-center gap-3 mb-3">
        <span className="text-2xl text-blue-500">{card.icon}</span>
        <h4 className="text-xl font-semibold text-blue-700">{card.title}</h4>
      </div>
      <p className="text-gray-700 leading-relaxed">{card.description}</p>
    </div>
  ))}
</div>


      {/* Image Showcase Section */}
      <section className="py-16 px-6 bg-gray-100" data-aos="fade-up">
  <h2 className="text-4xl font-bold text-center text-blue-700">
    See EduTogether in Action
  </h2>
  <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mt-4">
    Explore how EduTogether enhances communication between parents and teachers. Our platform offers seamless collaboration, instant messaging, and real-time updates to keep everyone informed.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
    
    <div
      className="relative overflow-hidden rounded-lg shadow-lg group"
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <img
        src="/images/dashboard.png"
        alt="Dashboard"
        className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-blue-500 bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-2xl font-bold">Intuitive Dashboard</h3>
        <p className="text-center px-4 mt-2 text-lg">Monitor student progress and communication in a single glance.</p>
      </div>
    </div>

    <div
      className="relative overflow-hidden rounded-lg shadow-lg group"
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      <img
        src={email}
        alt="Parent Chat"
        className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-blue-500 bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-2xl font-bold">Parent-Teacher Chat</h3>
        <p className="text-center px-4 mt-2 text-lg">Stay connected with real-time messaging and instant updates.</p>
      </div>
    </div>

    <div
      className="relative overflow-hidden rounded-lg shadow-lg group"
      data-aos="zoom-in"
      data-aos-delay="400"
    >
      <img
        src="/images/teacher-announcement.png"
        alt="Teacher Announcement"
        className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-blue-500 bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-2xl font-bold">Teacher Announcements</h3>
        <p className="text-center px-4 mt-2 text-lg">Get the latest school news, events, and assignments in one place.</p>
      </div>
    </div>

  </div>
</section>



      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center rounded-lg shadow-lg">
  <h2 className="text-4xl font-extrabold tracking-tight leading-tight md:text-5xl">
    Start Connecting Today
  </h2>
  <p className="text-lg mt-4 max-w-3xl mx-auto">
    Sign up now and improve communication between teachers and parents. Make education better, together.
  </p>
  <Link
    to="/signup"
    className="mt-6 inline-block bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-semibold shadow-xl transition-all duration-300 transform hover:bg-blue-600 hover:text-white hover:scale-105"
  >
    Sign Up
  </Link>
</section>
 
 <Footer />
    </div>
    </>
  );
};

export default Home;
