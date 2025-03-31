import React from "react";
import { Link } from "react-router-dom";

const SupportPage = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700">EduTogether Support Center</h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            Our dedicated support team is here to assist you. Whether you're experiencing technical difficulties, need help navigating the platform, or have general questions, we’ve got you covered.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Support Guide */}
          <div className="md:w-2/3 space-y-8">
            <div>
              <h3 className="text-3xl font-semibold text-blue-700">Getting Started</h3>
              <p className="text-lg text-gray-700 mt-2">
                New to EduTogether? Here’s a quick guide to get started with our platform:
              </p>
              <div className="text-gray-700 mt-4 space-y-4">
                <p>Register and create your profile to personalize your experience.</p>
                <p>Explore your dashboard to see all the features available to you.</p>
                <p>Start connecting with teachers, parents, and students right away!</p>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-blue-700">Troubleshooting Common Issues</h3>
              <p className="text-lg text-gray-700 mt-2">
                If you’re encountering any issues while using EduTogether, here are a few common problems and their solutions:
              </p>
              <div className="text-gray-700 mt-4 space-y-4">
                <p>Can’t log in? Ensure you’re using the correct email and password. If you forgot your password, use the 'Forgot Password' link.</p>
                <p>Having trouble sending messages? Ensure your internet connection is stable, and that you’re using the latest version of the app.</p>
                <p>Assignment files not downloading? Make sure the file format is supported and that the file isn’t too large to download.</p>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-blue-700">Additional Resources</h3>
              <p className="text-lg text-gray-700 mt-2">
                Below are some helpful resources to make your experience with EduTogether even better:
              </p>
              <div className="text-gray-700 mt-4 space-y-4">
                <p>
                  <a href="/faq" className="text-blue-600 hover:underline">
                    Frequently Asked Questions (FAQs)
                  </a>
                </p>
                <p>
                  <a href="/tutorials" className="text-blue-600 hover:underline">
                    Video Tutorials on using EduTogether features
                  </a>
                </p>
                <p>
                  <a href="/StepByStepSupportGuidePage" className="text-blue-600 hover:underline">
                    Step-by-Step Support Guide for common tasks
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="md:w-1/3 bg-blue-50 p-6 rounded-lg shadow-lg space-y-6">
            <h3 className="text-3xl font-semibold text-blue-700">Contact Our Support Team</h3>
            <p className="text-lg text-gray-700">
              If the guides and resources above don’t resolve your issue, our support team is here to assist you directly. You can contact us via the following methods:
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-600">Live Chat</h4>
                <p className="text-gray-700">Chat with our support agents in real-time for instant assistance.</p>
                <a href="/chat" className="text-blue-600 hover:underline">
                  Start Live Chat
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-blue-600">Email Support</h4>
                <p className="text-gray-700">Send us an email, and we’ll respond within 24 hours.</p>
                {/* <a href="mailto:support@edutogether.com" className="text-blue-600 hover:underline">
                  Email Us
                </a> */}
                <p className="text-blue-600 hover:underline"><Link to = '/Contact'>Email Us</Link></p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-600">Phone Support</h4>
                <p className="text-gray-700">Call us for urgent issues and receive help from our dedicated support team.</p>
                <a href="tel:+123456789" className="text-blue-600 hover:underline">
                  Call Us: +254 104 797 572
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportPage;
