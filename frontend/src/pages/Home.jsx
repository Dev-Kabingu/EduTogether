import React from "react";
import { Link } from "react-router-dom";
import Header from '../components/Header'
import email from '../assets/email.JPG'
import img6 from '../assets/img6.png'
import img3 from '../assets/img3.jpg'


const Home = () => {
  const cards = [
    {
      title: "Instant Parent-Teacher Messaging",
      description: "Facilitates real-time communication between parents and teachers, ensuring seamless collaboration.",
    },
    {
      title: "Student Performance Tracking",
      description: "Allows parents and teachers to monitor student progress, grades, and attendance in one place.",
    },
    {
      title: "Real-Time Notifications",
      description: "Stay updated on announcements, assignments, meetings, and important school events.",
    },
    {
      title: "CBC-Focused Learning",
      description: "Designed to support the Competency-Based Curriculum (CBC) by enhancing engagement and accessibility.",
    },
    {
      title: "Assignment Upload & Download",
      description: "Teachers can post assignments with deadlines, and parents can download materials for their children.",
    },
    {
      title: "Meeting Scheduling & Reminders",
      description: "Easily organize and manage meetings between parents and teachers with automatic reminders.",
    },
    {
      title: "Secure Role-Based Access",
      description: "Ensures privacy and security by providing different access levels for admins, teachers, parents, and students.",
    },
    {
      title: "User-Friendly Dashboard",
      description: "A simple and intuitive interface built with React.js and Tailwind CSS for easy navigation.",
    },
  ];
  
  
  return (
    <>
    <Header />
    <div className="w-full">
    <section className="flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left bg-white px-8 md:px-16 lg:px-24 gap-12 py-20">
 
  <div className="md:w-1/2 space-y-6">
    <h2 className="text-5xl md:text-6xl font-bold text-blue-700 leading-tight">
      Empowering Collaboration for Student Success
    </h2>
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
      Empowering parents and teachers to collaborate, communicate, and create a stronger support 
      system for students. Bridging the gap between parents and teachers to enhance student success.
    </p>
    <Link 
      to="/Login" 
      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition duration-300 transform hover:-translate-y-1"
    >
      Get Started
    </Link>
  </div>
  <div className="md:w-1/2 flex justify-center">
    <img src={img6} alt="Communication" className="w-full max-w-lg rounded-lg" />
  </div>
</section>

      {/* about */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 gap-12 py-20">
  {/* Left - Image */}
  <div className="md:w-1/2 flex justify-center">
    <img 
      src={img3} 
      alt="EduTogether Overview" 
      className="w-full max-w-md md:max-w-lg h-80 object-cover rounded-lg"
    />
  </div>

  {/* Right - Content */}
  <div className="md:w-1/2 space-y-6 text-center md:text-left">
    <h2 className="text-4xl font-bold text-blue-800">
      About EduTogether
    </h2>
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
      EduTogether is an innovative platform designed to bridge the communication gap between parents and teachers. 
      Our goal is to enhance collaboration and engagement in education by providing a seamless communication channel. 
      With features like real-time messaging, assignment management, and notifications, EduTogether ensures that parents 
      and teachers stay connected to support students’ academic success.
    </p>
    <Link 
      to="/About" 
      className="text-blue-600 text-lg font-semibold underline hover:text-blue-800 transition duration-300"
    >
      Learn More
    </Link>
  </div>
</div>


      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-20 px-6">
  <h3 className="text-4xl font-bold text-center text-blue-700 mb-12">
    Why Choose EduTogether?
  </h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {cards.map((card, index) => (
      <div
        key={index}
        className="bg-white shadow-sm rounded-xl p-8 text-center transition duration-300 transform hover:shadow-md hover:-translate-y-1 hover:bg-blue-50"
      >
        <h4 className="text-2xl font-semibold text-blue-700 mb-3">
          {card.title}
        </h4>
        <p className="text-gray-700 leading-relaxed">{card.description}</p>
      </div>
    ))}
  </div>
</div>


      {/* Image Showcase Section */}
      <section className="py-16 px-6 bg-gray-100">
  <h2 className="text-4xl font-bold text-center text-blue-700">
    See EduTogether in Action
  </h2>
  <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mt-4">
    Explore how EduTogether enhances communication between parents and teachers. Our platform offers seamless collaboration, instant messaging, and real-time updates to keep everyone informed.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
    
    {/* Dashboard Image */}
    <div className="relative overflow-hidden rounded-lg shadow-lg group">
      <img src="/images/dashboard.png" alt="Dashboard" className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-blue-500 bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-2xl font-bold">Intuitive Dashboard</h3>
        <p className="text-center px-4 mt-2 text-lg">Monitor student progress and communication in a single glance.</p>
      </div>
    </div>

    <div className="relative overflow-hidden rounded-lg shadow-lg group">
      <img src={email} alt="Parent Chat" className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-blue-500 bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-2xl font-bold">Parent-Teacher Chat</h3>
        <p className="text-center px-4 mt-2 text-lg">Stay connected with real-time messaging and instant updates.</p>
      </div>
    </div>

    <div className="relative overflow-hidden rounded-lg shadow-lg group">
      <img src="/images/teacher-announcement.png" alt="Teacher Announcement" className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-blue-500 bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-2xl font-bold">Teacher Announcements</h3>
        <p className="text-center px-4 mt-2 text-lg">Get the latest school news, events, and assignments in one place.</p>
      </div>
    </div>

  </div>
</section>


      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold">Start Connecting Today</h2>
        <p className="text-lg mt-2">Sign up now and improve communication between teachers and parents.</p>
        <Link to="/signup" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-md text-lg shadow-md">
          Sign Up
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2025 EduTogether. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default Home;
