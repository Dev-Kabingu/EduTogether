import React from "react";
import Header from "../components/Header";
import img1 from "../assets/img1.JPG";
import img3 from '../assets/img3.jpg'
import img8 from '../assets/img8.jpg'
import { Link } from "react-router-dom";
import AboutUs from "../components/AboutUs";


const About = () => {
  return (
    <>
      <Header />
      <div className="w-full">
        <div 
      className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center text-white bg-blue-100" >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-500 mb-4">About EduTogether</h2>
        <p className="text-xl text-gray-800">Connecting parents and teachers for better student success.</p>
      </div>
    </div>
    <section className="bg-white py-24 px-6 md:px-24">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
    <div className="md:w-1/2">
      <img 
        src={img3} 
        alt="About EduTogether" 
        className="w-full h-[420px] object-cover rounded-lg shadow-md"
      />
    </div>

    <div className="md:w-1/2 space-y-6">
      <h2 className="text-4xl font-extrabold text-blue-500 leading-snug">
        Empowering Education Through Stronger Connections
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        EduTogether is more than just a communication platform; it's a 
        revolutionary tool designed to transform CBC education by fostering 
        collaboration between parents and teachers. Our comprehensive 
        features ensure that everyone involved in a child's education stays 
        informed and engaged.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        We are committed to improving student outcomes through real-time 
        communication, performance monitoring, and timely updates. 
        EduTogether empowers parents and teachers to create a supportive 
        learning environment that nurtures academic and personal growth.
      </p>
    </div>
  </div>
</section>

<section className="bg-white py-24 px-6 md:px-24">
  <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">

    <div className="md:w-1/2 space-y-6">
      <h2 className="text-4xl font-extrabold text-blue-500 leading-snug">
        Transforming CBC Education with Technology
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        EduTogether goes beyond simple communication—it creates an inclusive 
        and interactive learning environment where parents and teachers 
        can collaborate effortlessly. Our platform ensures that no important 
        updates are missed, whether it’s an upcoming school event, a crucial 
        assignment deadline, or direct feedback on a student’s progress.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        EduTogether is designed with user-friendliness in mind, making it 
        accessible to all stakeholders. With secure data management and 
        privacy measures in place, we prioritize the safety of student 
        information while maintaining efficient communication channels.
      </p>
      <p className="text-lg text-gray-700 font-semibold">
        Join us in our mission to simplify and enhance education for all stakeholders.
      </p>
      <Link 
        to="/SignUp" 
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-md"
      >
        Join Us Today
      </Link>
    </div>
    <div className="md:w-1/2">
      <img 
        src={img8} 
        alt="About EduTogether" 
        className="w-full h-[420px] object-cover rounded-lg shadow-md"
      />
    </div>
  </div>
</section>

        <AboutUs />

        {/* Features Section */}
        <section className="bg-gray-50 py-24 px-6 md:px-24">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-blue-700">
      What Makes EduTogether Stand Out
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
      
      <div className="relative bg-white p-8 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out group hover:bg-blue-50">
        <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-600 transition-all duration-500 ease-in-out"></div>
        <h3 className="text-2xl font-bold text-blue-600 group-hover:text-blue-800">
          Seamless Collaboration
        </h3>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed group-hover:text-gray-900">
          Facilitate real-time communication and foster strong relationships between parents and teachers.
        </p>
      </div>

      <div className="relative bg-white p-8 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out group hover:bg-blue-50">
        <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-600 transition-all duration-500 ease-in-out"></div>
        <h3 className="text-2xl font-bold text-blue-600 group-hover:text-blue-800">
          Enhanced Parental Involvement
        </h3>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed group-hover:text-gray-900">
          Equip parents with tools to actively participate in their child's education journey.
        </p>
      </div>

      <div className="relative bg-white p-8 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out group hover:bg-blue-50">
        <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-600 transition-all duration-500 ease-in-out"></div>
        <h3 className="text-2xl font-bold text-blue-600 group-hover:text-blue-800">
          Tangible Impact
        </h3>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed group-hover:text-gray-900">
          Drive measurable improvements in student performance and engagement.
        </p>
      </div>

    </div>
  </div>
</section>


        {/* Vision and Mission Section */}
        <section className="py-16 px-6 bg-blue-100">
          <h2 className="text-3xl font-bold text-center text-blue-700">
            Our Mission & Vision
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
              <h3 className="text-2xl font-bold text-blue-600">Mission</h3>
              <p className="text-lg text-gray-700 mt-4">
                To improve collaboration between parents and teachers for the benefit of students' academic and personal growth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
              <h3 className="text-2xl font-bold text-blue-600">Vision</h3>
              <p className="text-lg text-gray-700 mt-4">
                To be the leading platform in enhancing parental engagement and teacher communication in CBC education.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-24 px-6 md:px-24">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-blue-700">
      What Our Clients Say
    </h2>
    <p className="text-lg text-gray-600 mt-4">
      Hear from parents and teachers who have transformed their communication with EduTogether.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
      
      <div className="relative bg-gray-50 p-8 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out group">
        <div className="absolute inset-0 bg-blue-600 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out"></div>
        <div className="relative z-10 transition-all duration-300 ease-in-out group-hover:text-white">
          <p className="text-lg text-gray-700 group-hover:text-white leading-relaxed">
            "EduTogether has completely changed the way I communicate with my child's teacher. I feel more connected and involved in their education!"
          </p>
          <h3 className="mt-4 font-semibold text-blue-600 group-hover:text-white">Sarah W.</h3>
          <p className="text-sm text-gray-500 group-hover:text-gray-200">Parent</p>
        </div>
      </div>

      <div className="relative bg-gray-50 p-8 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out group">
        <div className="absolute inset-0 bg-blue-600 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out"></div>
        <div className="relative z-10 transition-all duration-300 ease-in-out group-hover:text-white">
          <p className="text-lg text-gray-700 group-hover:text-white leading-relaxed">
            "As a teacher, EduTogether has made my work so much easier. I can send updates instantly, and parents are more engaged than ever."
          </p>
          <h3 className="mt-4 font-semibold text-blue-600 group-hover:text-white">Mark T.</h3>
          <p className="text-sm text-gray-500 group-hover:text-gray-200">Teacher</p>
        </div>
      </div>

      <div className="relative bg-gray-50 p-8 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out group">
        <div className="absolute inset-0 bg-blue-600 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out"></div>
        <div className="relative z-10 transition-all duration-300 ease-in-out group-hover:text-white">
          <p className="text-lg text-gray-700 group-hover:text-white leading-relaxed">
            "This platform ensures no important updates are missed. It’s intuitive, reliable, and has improved our school's communication dramatically."
          </p>
          <h3 className="mt-4 font-semibold text-blue-600 group-hover:text-white">Emma R.</h3>
          <p className="text-sm text-gray-500 group-hover:text-gray-200">School Administrator</p>
        </div>
      </div>

    </div>
  </div>
</section>



        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <h2 className="text-3xl font-bold">Join the EduTogether Community</h2>
          <p className="text-lg mt-2">
            Sign up today and experience seamless communication in CBC education.
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

export default About;
