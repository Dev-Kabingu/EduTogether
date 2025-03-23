import React from "react";
import { Link } from "react-router-dom";
import Header from '../components/Header'
import img1 from '../assets/img1.JPG'
import Card from '../components/Card'

const Home = () => {
    const cards = [
        {
          image: img1,
          title: "Real-time Communication",
          description: "Chat with teachers and get instant updates about your child's progress.",
        },
        {
            image: img1,
            title: "Performance Tracking",
            description: "Access reports, attendance records, and grades anytime.",
          },
          {
            image: img1,
            title: "Event Notifications",
            description: "Never miss school meetings, assignments, or announcements."
          },
      
    ];
  return (
    <>
    <Header />
    <div className="w-full">
      <section className="flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left bg-blue-100 px-6 gap-24">
        <div className="md:w-1/2 space-y-6 py-24 ml-24">
          <h2 className="text-4xl font-bold text-blue-700">
            Bridging the Communication Gap Between Parents & Teachers
          </h2>
          <p className="text-lg text-gray-700">
            Stay updated on your child's progress, receive announcements, and communicate effortlessly with teachers.
          </p>
          <Link to="/Login" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg shadow-md">
            Get Started
          </Link>
        </div>
        <div className="md:w-1/2">
          <img src={img1} alt="Communication" className="w-full rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-700">Why Choose EduTogether?</h2>
        <div className="flex flex-col items-center py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
      </section>

      {/* Image Showcase Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-700">See EduTogether in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <img src="/images/dashboard.png" alt="Dashboard" className="w-full rounded-lg shadow-md" />
          <img src="/images/parent-chat.png" alt="Parent Chat" className="w-full rounded-lg shadow-md" />
          <img src="/images/teacher-announcement.png" alt="Teacher Announcement" className="w-full rounded-lg shadow-md" />
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
