import React, { useState } from "react";
import Header from "../components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We’ll get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Header />
      <div className="w-full">
        {/* Hero Section */}
        <section className="py-24 bg-blue-100 text-center">
          <h1 className="text-4xl font-bold text-blue-700">Contact Us</h1>
          <p className="text-lg text-gray-700 mt-4">
            Have questions or feedback? We'd love to hear from you. Fill out the form below or reach us via the contact details provided.
          </p>
        </section>

        {/* Contact Info and Form Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-blue-700">Our Contact Details</h2>
              <p className="text-lg text-gray-700">
                Feel free to reach out to us through the following:
              </p>
              <div>
                <h3 className="text-lg font-semibold text-blue-600">Email</h3>
                <p className="text-lg text-gray-700">support@edutogether.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600">Phone</h3>
                <p className="text-lg text-gray-700">+254 700 000 000</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600">Office Hours</h3>
                <p className="text-lg text-gray-700">Monday to Friday: 9:00 AM - 5:00 PM (EAT)</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-semibold text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-lg font-semibold shadow-md hover:bg-blue-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="py-16 px-6 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-700">We Value Your Feedback</h2>
            <p className="text-lg text-gray-700 mt-4">
              Your feedback helps us improve and provide a better experience. Don’t hesitate to share your thoughts and suggestions.
            </p>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-700">Need Technical Support?</h2>
            <p className="text-lg text-gray-700 mt-4">
              Having trouble with the platform? Our support team is here to help. Visit our support page for troubleshooting tips or contact us for immediate assistance.
            </p>
            <div className="mt-6">
              <a
                href="/support"
                className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg shadow-md hover:bg-blue-700"
              >
                Visit Support Page
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <h2 className="text-3xl font-bold">Connect with EduTogether Today</h2>
          <p className="text-lg mt-2">
            We're here to enhance communication in CBC education. Let us know how we can help!
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

export default Contact;
