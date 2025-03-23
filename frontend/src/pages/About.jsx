import React from "react";
import Header from "../components/Header";
import img1 from "../assets/img1.JPG";


const About = () => {
  return (
    <>
      <Header />
      <div className="w-full">
        {/* About Section */}
        <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left bg-white px-6 gap-12 py-24">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-blue-700">
              About EduTogether
            </h2>
            <p className="text-lg text-gray-700">
              EduTogether is more than just a communication platform; it's a revolutionary tool designed to transform CBC education by fostering collaboration between parents and teachers. Our comprehensive features ensure that everyone involved in a child's education stays informed and engaged.
            </p>
            <p className="text-lg text-gray-700">
              We are committed to improving student outcomes through real-time communication, performance monitoring, and timely updates. EduTogether empowers parents and teachers to create a supportive learning environment that nurtures academic and personal growth.
            </p>
            <p className="text-lg text-gray-700">
              Join us in our mission to simplify and enhance education for all stakeholders.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={img1} alt="About EduTogether" className="w-full rounded-lg shadow-md" />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center text-blue-700">
            What Makes EduTogether Stand Out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={img1}
                alt="Collaboration"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-blue-600">
                Seamless Collaboration
              </h3>
              <p className="text-lg text-gray-700 mt-2">
                Facilitate real-time communication and foster strong relationships between parents and teachers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={img1}
                alt="Parent Involvement"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-blue-600">
                Enhanced Parental Involvement
              </h3>
              <p className="text-lg text-gray-700 mt-2">
                Equip parents with tools to actively participate in their child's education journey.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={img1}
                alt="Positive Impact"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-blue-600">
                Tangible Impact
              </h3>
              <p className="text-lg text-gray-700 mt-2">
                Drive measurable improvements in student performance and engagement.
              </p>
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
        <section className="py-16 px-6 bg-white">
          <h2 className="text-3xl font-bold text-center text-blue-700">
            What Our Users Say
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-10">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <p className="text-lg italic text-gray-700">
                "EduTogether has transformed how I stay updated on my child's academic journey. I never miss an important update anymore!" – Parent
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <p className="text-lg italic text-gray-700">
                "As a teacher, it has simplified communication with parents and improved transparency." – Teacher
              </p>
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
