import React, { useState } from "react";
import Header from "../components/Header";

const FAQs = () => {
  // Data array for FAQ content
  const faqData = [
    {
      question: "What is EduTogether?",
      answer: "EduTogether is a platform designed to bridge the communication gap between parents and teachers in CBC education, offering features like real-time communication, performance tracking, and event notifications.",
    },
    {
      question: "How do I create an account?",
      answer: "Click on the 'Sign Up' button on the homepage, fill in your details, and follow the on-screen instructions to create your account.",
    },
    {
      question: "Is my data secure on EduTogether?",
      answer: "Yes, EduTogether ensures data security by encrypting communications and adhering to international privacy standards.",
    },
    {
      question: "Can I access EduTogether on mobile?",
      answer: "Yes, EduTogether is optimized for both web and mobile platforms, making it easy to access on any device.",
    },
    {
      question: "How can teachers share feedback with parents?",
      answer: "Teachers can use the platform’s feedback tools to share comments, grades, and attendance records with parents in an easy and organized way.",
    },
    {
      question: "Is EduTogether free to use?",
      answer: "EduTogether offers free basic features, but premium plans with additional tools and functionalities are available for purchase.",
    },
    {
      question: "What benefits does EduTogether offer for parents?",
      answer: "EduTogether simplifies parental engagement by providing tools for performance tracking, real-time communication, and event notifications, ensuring parents stay informed and involved in their child's education."
    },
    {
      question: "How can EduTogether help teachers manage communication effectively?",
      answer: "Teachers can use features like mass notifications, personalized messages, and performance analytics to streamline communication and share updates with parents effortlessly."
    },
    {
      question: "Does EduTogether support group discussions?",
      answer: "Yes, EduTogether allows group discussions for teachers and parents to collaborate on school activities and student progress."
    },
    {
      question: "Can schools integrate EduTogether with their existing systems?",
      answer: "Yes, EduTogether offers flexible integration options to work seamlessly with school management systems already in place."
    },
    {
      question: "Are there any training resources for new users?",
      answer: "EduTogether provides tutorials and support guides to help parents and teachers get familiar with the platform's features."
    },
    {
      question: "How does EduTogether handle student privacy?",
      answer: "EduTogether uses encrypted communications and strict privacy policies to ensure all student-related data is secure and accessible only to authorized parties."
    },
    {
      question: "Can EduTogether be customized for individual schools?",
      answer: "Yes, EduTogether offers customization options that allow schools to tailor the platform to their specific communication needs and preferences."
    },
    {
      question: "What kind of reports can parents access on EduTogether?",
      answer: "Parents can access detailed academic reports, attendance summaries, and overall performance analytics to stay updated on their child’s progress."
    },
    {
      question: "How does EduTogether improve collaboration in CBC education?",
      answer: "EduTogether enhances collaboration by facilitating open communication, enabling joint problem-solving, and creating a shared understanding between parents and teachers."
    },
    {
      question: "Can parents provide feedback to teachers through EduTogether?",
      answer: "Yes, EduTogether includes tools for parents to share feedback and collaborate with teachers to support their child’s learning experience."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the answer
  };

  return (
    <>
      <Header />
      <div className="w-full">
        {/* Hero Section */}
        <section className="py-24 bg-blue-100 text-center">
          <h1 className="text-4xl font-bold text-blue-700">FAQs</h1>
          <p className="text-lg text-gray-700 mt-4">
            Find answers to the most commonly asked questions about EduTogether.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-white">
          {/* Title and Description */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 mt-2">
            Below are some of the most commonly asked questions from our users. <br />Click on a question to reveal the answer and explore how EduTogether helps streamline<br /> communication between parents and teachers. We aim to provide clarity and support for your experience with our platform.
            </p>
          </div>
          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h2 className="text-lg font-semibold text-blue-600">
                  {faq.question}
                </h2>
                {activeIndex === index && (
                  <p className="text-lg text-gray-700 mt-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-20 px-8 md:px-16 bg-blue-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-blue-700">
        Helpful Tips for Parents & Teachers
      </h2>
      <p className="text-lg text-gray-700 mt-4 leading-relaxed max-w-3xl mx-auto">
        Maximize your experience on EduTogether with these essential tips to enhance communication, engagement, and student success.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
   
      <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
        <span className="text-blue-600 text-3xl"></span>
        <div>
          <h3 className="text-xl font-semibold text-blue-600">
            Keep Your Profile Updated
          </h3>
          <p className="text-gray-700 mt-2">
            Ensure your profile information is always accurate to receive relevant updates and alerts.
          </p>
        </div>
      </div>

   
      <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
        <span className="text-blue-600 text-3xl"></span>
        <div>
          <h3 className="text-xl font-semibold text-blue-600">
            Stay on Top of Notifications
          </h3>
          <p className="text-gray-700 mt-2">
            Check your notifications daily for important school announcements, assignments, and messages.
          </p>
        </div>
      </div>

 
      <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
        <span className="text-blue-600 text-3xl"></span>
        <div>
          <h3 className="text-xl font-semibold text-blue-600">
            Engage in Real-Time Chats
          </h3>
          <p className="text-gray-700 mt-2">
            Use the instant messaging feature to clarify doubts and strengthen collaboration between parents and teachers.
          </p>
        </div>
      </div>

 
      <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
        <span className="text-blue-600 text-3xl"></span>
        <div>
          <h3 className="text-xl font-semibold text-blue-600">
            Attend Virtual Meetings
          </h3>
          <p className="text-gray-700 mt-2">
            Make time for scheduled virtual parent-teacher meetings to discuss student progress and address concerns.
          </p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
        <span className="text-blue-600 text-3xl"></span>
        <div>
          <h3 className="text-xl font-semibold text-blue-600">
            Access Learning Resources
          </h3>
          <p className="text-gray-700 mt-2">
            Utilize shared study materials, assignments, and resources to support your child’s learning at home.
          </p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
        <span className="text-blue-600 text-3xl"></span>
        <div>
          <h3 className="text-xl font-semibold text-blue-600">
            Foster a Positive Community
          </h3>
          <p className="text-gray-700 mt-2">
            Encourage respectful discussions and active involvement to create a supportive learning environment.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Contact Section */}
        <section className="py-16 px-6 bg-white">
          <h2 className="text-3xl font-bold text-center text-blue-700">
            Need Assistance?
          </h2>
          <p className="text-lg text-gray-700 text-center mt-4">
            If you didn’t find your answer in the FAQs, feel free to get in touch with our support team.
          </p>
          <div className="text-center mt-6">
            <a
              href="mailto:support@edutogether.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg shadow-md"
            >
              Contact Support
            </a>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <h2 className="text-3xl font-bold">Stay Connected with EduTogether</h2>
          <p className="text-lg mt-2">
            Join our community and enhance communication in CBC education today!
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

export default FAQs;
