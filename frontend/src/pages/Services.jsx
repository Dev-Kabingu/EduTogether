import React from "react";
import Header from "../components/Header";
import '../components/Card.css'

const Services = () => {
  const services = [
    {
      title: "Real-time Communication",
      description: "Chat with teachers and receive instant updates on your child's progress. Keep communication open and ensure you're always informed.",
    },
    {
      title: "Performance Tracking",
      description: "Access detailed reports, attendance records, and grades anytime. Track academic progress and identify areas for improvement.",
    },
    {
      title: "Event Notifications",
      description: "Stay informed about school meetings, assignments, and announcements. Never miss an important update from the school.",
    },
    {
      title: "Data Security",
      description: "Enjoy peace of mind knowing your information and communications are protected with the highest security standards.",
    },
    {
      title: "Parental Engagement Resources",
      description: "Provide parents with access to educational resources, strategies, and tips to actively support their child's learning journey. Help bridge the gap by fostering proactive parent involvement."
    },
    {
      title: "Teacher Feedback Tools",
      description: "Enable teachers to easily share constructive feedback on student progress. This tool ensures meaningful insights are communicated effectively to parents, enhancing the collaborative effort."
    }
  ];

  return (
    <>
      <Header />
      <div className="w-full">
        <section className="py-24 bg-blue-100 text-center">
          <h1 className="text-4xl font-bold text-blue-700">Our Services</h1>
          <p className="text-lg text-gray-700 mt-4">
            Explore how EduTogether bridges the communication gap between teachers and parents in CBC education.
          </p>
        </section>

        {/* Services Section */}
        <section className="py-16 px-6 bg-white">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {services.map((service, index) => (
      <div
        key={index}
        className="relative group bg-gray-100 p-6 rounded-lg shadow-md text-center overflow-hidden hover:scale-105 transition-transform duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-blue-600">{service.title}</h2>
          <p className="text-lg text-gray-700 mt-4">{service.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>


        {/* Parent Engagement Section */}
        <section className="py-20 px-8 md:px-16 bg-blue-50">
  {/* Section Title */}
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-blue-700">
      Empowering Parental Engagement
    </h2>
    <p className="text-lg text-gray-700 mt-4 leading-relaxed">
      EduTogether provides tools that encourage parents to actively participate in their child’s education and strengthen the parent-teacher partnership.
    </p>
  </div>

  <div className="max-w-2xl mx-auto mt-8">
    <ul className="space-y-4 text-gray-700 text-lg">
      <li className="flex items-start gap-3">
        <span className="text-blue-600 text-xl"></span> 
        Receive personalized updates tailored to your child's needs.
      </li>
      <li className="flex items-start gap-3">
        <span className="text-blue-600 text-xl"></span> 
        Participate in virtual parent-teacher conferences.
      </li>
      <li className="flex items-start gap-3">
        <span className="text-blue-600 text-xl"></span> 
        Access learning resources to support your child at home.
      </li>
    </ul>
  </div>
</section>


       {/* Teacher Tools Section */}
       <section className="py-20 px-8 md:px-16 bg-blue-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-blue-700">
        Strengthening Parent-Teacher Collaboration
      </h2>
      <p className="text-lg text-gray-700 mt-4 leading-relaxed max-w-3xl mx-auto mb-24">
        EduTogether provides tools that encourage parents to actively engage in their child's education 
        while equipping teachers with features that streamline communication.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">
          Supporting Teachers with Advanced Tools
        </h3>
        <ul className="space-y-4 text-gray-700 text-lg">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 text-xl"></span> 
            Easily share updates, grades, and attendance records.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 text-xl"></span> 
            Host virtual meetings with parents for instant discussions.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 text-xl"></span> 
            Streamline communication using our user-friendly dashboard.
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-8">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">
          Empowering Parental Engagement
        </h3>
        <ul className="space-y-4 text-gray-700 text-lg">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 text-xl"></span> 
            Receive personalized updates tailored to your child's needs.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 text-xl"></span> 
            Participate in virtual parent-teacher conferences.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 text-xl"></span> 
            Access learning resources to support your child at home.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section className="py-20 px-8 md:px-16 bg-gray-50">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-blue-700">
      Achieving Shared Goals Together
    </h2>
    <p className="text-lg text-gray-700 mt-4 leading-relaxed">
      EduTogether bridges the communication gap by fostering a collaborative 
      environment where parents and teachers work hand-in-hand for better student outcomes.
    </p>
  </div>

  {/* Feature List */}
  <div className="max-w-2xl mx-auto mt-8">
    <ul className="space-y-4 text-gray-700 text-lg">
      <li className="flex items-start gap-3">
        <span className="text-blue-600 text-xl"></span>  
        Track and celebrate milestones in your child’s education journey.
      </li>
      <li className="flex items-start gap-3">
        <span className="text-blue-600 text-xl"></span>  
        Ensure transparency with easy access to reports and updates.
      </li>
      <li className="flex items-start gap-3">
        <span className="text-blue-600 text-xl"></span>  
        Collaborate on strategies for academic and personal growth.
      </li>
    </ul>
  </div>
</section>


        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <h2 className="text-3xl font-bold">Join the EduTogether Community</h2>
          <p className="text-lg mt-2">
            Sign up today and experience the future of seamless communication in CBC education.
          </p>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-gray-800 text-white text-center">
          <p>&copy; 2025 EduTogether. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Services;
