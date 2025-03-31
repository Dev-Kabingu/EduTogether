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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (result.success) {
        alert("Thank you for contacting us! We’ll get back to you shortly.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  

  return (
    <>
      <Header />
      <div className="w-full">
        
        <section className="py-24 bg-blue-100 text-center">
          <h1 className="text-4xl font-bold text-blue-700">Contact Us</h1>
          <p className="text-lg text-gray-700 mt-4">
            Have questions or feedback? We'd love to hear from you. Fill out the form below or reach us via the contact details provided.
          </p>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12">
         
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-blue-700">Our Contact Details</h2>
              <p className="text-lg text-gray-700">
                Feel free to reach out to us through the following:
              </p>
              <div>
                <h3 className="text-lg font-semibold text-blue-600">Email</h3>
                <p className="text-lg text-gray-700">nduta6550@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600">Phone</h3>
                <p className="text-lg text-gray-700">+254 104 797 572</p>
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

        <section className="py-16 px-6 bg-gray-100">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-16">


    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold text-blue-700">
        We Value Your Feedback
      </h2>
      <p className="text-lg text-gray-700 mt-4">
        Your feedback helps us improve and provide a better experience. Don’t hesitate to share your thoughts and suggestions.
      </p>
    </div>


    <div className="md:w-1/2 py-12 md:py-0 bg-blue-50 rounded-xl p-8 text-center md:text-left">
      <h2 className="text-4xl font-bold text-blue-700 mb-4">
        Need Technical Support?
      </h2>
      <p className="text-lg text-gray-700 mt-4 leading-relaxed">
        Experiencing difficulties with EduTogether? Our dedicated support team is here to help resolve any issues you may face with the platform. We're committed to providing quick and efficient solutions to keep you connected.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        Whether it’s login problems, technical glitches, or feature inquiries, we're just a click away. Explore resources such as troubleshooting guides, FAQs, and direct support channels.
      </p>
      <ul className="mt-6 list-disc list-inside text-gray-700 px-8">
        <li>Access detailed troubleshooting guides for common issues.</li>
        <li>Contact our support team via live chat, email, or phone.</li>
        <li>Watch video tutorials to navigate EduTogether effectively.</li>
      </ul>
      <div className="mt-8">
        <a
          href="/SupportPage"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md text-xl shadow-lg transition duration-300 transform hover:bg-blue-700 hover:scale-105"
        >
          Visit Support Page
        </a>
      </div>
    </div>

  </div>
</section>

        <section className="py-16 bg-blue-600 text-white text-center">
          <h2 className="text-3xl font-bold">Connect with EduTogether Today</h2>
          <p className="text-lg mt-2">
            We're here to enhance communication in CBC education. Let us know how we can help!
          </p>
        </section>

    
        <footer className="py-6 bg-gray-800 text-white text-center">
          <p>&copy; 2025 EduTogether. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Contact;
