import React from "react";

const StepByStepSupportGuidePage = () => {
  return (
    <section className="py-16 px-8 bg-gradient-to-r from-blue-100 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-blue-800 mb-4">
            Step-by-Step Support Guide
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Welcome to the EduTogether Step-by-Step Support Guide! Below, you’ll find easy-to-follow instructions on how to accomplish common tasks on the platform.
          </p>
        </div>

        <div className="space-y-16">
          {/* Task 1: Account Setup */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-4xl font-semibold text-blue-700 mb-4">
              1. How to Set Up Your Account
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Follow these steps to set up your account and personalize your EduTogether experience:
            </p>
            <ol className="text-gray-700 space-y-3 pl-6 list-decimal">
              <li>Go to the EduTogether homepage and click "Sign Up" to create your account.</li>
              <li>Enter your name, email, and password, then click "Create Account."</li>
              <li>Check your email for a verification link to confirm your email address.</li>
              <li>Once verified, log in to your account using your email and password.</li>
              <li>Complete your profile by adding details such as your child’s grade, school, and contact information.</li>
            </ol>
          </div>

          {/* Task 2: Sending a Message */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-4xl font-semibold text-blue-700 mb-4">
              2. How to Send a Message to a Teacher
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Follow these steps to send a direct message to your child’s teacher:
            </p>
            <ol className="text-gray-700 space-y-3 pl-6 list-decimal">
              <li>Log in to your EduTogether account and navigate to the "Messages" section.</li>
              <li>Click the "Compose Message" button and select the teacher you want to message.</li>
              <li>Enter your message in the text box and click "Send."</li>
              <li>Your message will appear in the teacher’s inbox, and they will respond when available.</li>
            </ol>
          </div>

          {/* Task 3: Viewing Assignments */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-4xl font-semibold text-blue-700 mb-4">
              3. How to View Your Child’s Assignments
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Follow these steps to view your child’s assignments and check due dates:
            </p>
            <ol className="text-gray-700 space-y-3 pl-6 list-decimal">
              <li>Log in to your EduTogether account and go to the "Assignments" section.</li>
              <li>Select the specific class and grade to view your child’s assignments.</li>
              <li>Click on any assignment to view details such as title, description, due date, and attached files.</li>
              <li>If there are any downloadable files, click the "Download" button to access the materials.</li>
            </ol>
          </div>

          {/* Task 4: Managing Notifications */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-4xl font-semibold text-blue-700 mb-4">
              4. How to Manage Your Notifications
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Here’s how you can manage your notifications to stay informed about important updates:
            </p>
            <ol className="text-gray-700 space-y-3 pl-6 list-decimal">
              <li>In the settings menu, select the "Notifications" tab.</li>
              <li>Choose whether you want to receive notifications via email, SMS, or in-app.</li>
              <li>Toggle notifications on or off for different types of alerts, such as messages, assignments, or announcements.</li>
            </ol>
          </div>

          {/* Task 5: Requesting a Parent-Teacher Meeting */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-4xl font-semibold text-blue-700 mb-4">
              5. How to Request a Parent-Teacher Meeting
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              To request a meeting with your child’s teacher, follow these steps:
            </p>
            <ol className="text-gray-700 space-y-3 pl-6 list-decimal">
              <li>Log in to your account and navigate to the "Meetings" section.</li>
              <li>Click "Request a Meeting" and choose a time that works for you from the teacher's available slots.</li>
              <li>Fill in the purpose of the meeting (e.g., discussing academic progress, behavior, etc.).</li>
              <li>Click "Send Request" and wait for the teacher to confirm the meeting time.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepByStepSupportGuidePage;
