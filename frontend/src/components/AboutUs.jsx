const AboutUs = () => {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">

        <section className="mb-12 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Story</h2>
          <p className="text-lg leading-relaxed">
            The <span className="font-semibold">EduTogether</span> platform was born out of a necessity to 
            address a critical gap in education: <span className="font-semibold">seamless communication and collaboration</span> 
            between parents and teachers. In today's fast-paced world, effective 
            parent-teacher partnerships are essential for student success, yet traditional 
            communication methods often fall short.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Our mission is to create a <span className="font-semibold">transparent, accessible, and efficient</span> 
            communication channel that strengthens the support system around every child. 
            With this platform, we empower both parents and teachers with the tools they need 
            to stay connected, engaged, and informed.
          </p>
        </section>
  
        <section className="mb-12 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Why Choose Us?</h2>
          <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-6">
            <div> <span className="font-semibold">Expertise:</span> Built by a team with backgrounds in education and technology.</div>
            <div> <span className="font-semibold">Innovation:</span> Advanced tools for real-time updates and seamless messaging.</div>
            <div> <span className="font-semibold">Commitment:</span> Dedicated to bridging the communication gap in education.</div>
            <div> <span className="font-semibold">Support:</span> A responsive support team available to assist users.</div>
          </div>
        </section>
  
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center lg:text-left">How We Help Parents & Teachers</h2>
          <ul className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 text-center lg:text-left">
            <li> <span className="font-semibold">Instant Updates:</span> Parents receive real-time notifications on grades, attendance, and announcements.</li>
            <li> <span className="font-semibold">Direct Messaging:</span> Teachers and parents can communicate instantly without delays.</li>
            <li> <span className="font-semibold">Assignment Tracking:</span> Parents can monitor their child’s assignments, deadlines, and submissions.</li>
            <li> <span className="font-semibold">Meeting Scheduling:</span> Easily schedule and track parent-teacher meetings.</li>
            <li> <span className="font-semibold">Multilingual Support:</span> Breaking language barriers with built-in translation.</li>
          </ul>
        </section>
  
  
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center lg:text-left">Our Values</h2>
          <ul className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 text-center lg:text-left">
            <li> <span className="font-semibold">Collaboration:</span> We believe education is a shared effort between parents, teachers, and schools.</li>
            <li> <span className="font-semibold">Transparency:</span> Open and honest communication to foster trust.</li>
            <li> <span className="font-semibold">Inclusivity:</span> A platform designed for diverse educational needs.</li>
            <li> <span className="font-semibold">Empowerment:</span> Providing tools to enhance the learning journey.</li>
          </ul>
        </section>
  
        <section className="mb-12 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Impact</h2>
          <p className="text-lg">
            Since our inception, <span className="font-semibold">EduTogether</span> has positively transformed 
            school communities. Schools using our platform report:
          </p>
          <ul className="mt-4 text-lg space-y-3">
            <li> <span className="font-semibold">30% increase</span> in parent-teacher engagement.</li>
            <li> <span className="font-semibold">25% improvement</span> in student performance.</li>
            <li> <span className="font-semibold">95% of users</span> report higher satisfaction with communication.</li>
          </ul>
        </section>
  
        {/* Future Plans */}
        <section className="mb-12 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Future Plans</h2>
          <p className="text-lg">
            We are committed to continuously enhancing our platform. Upcoming features include:
          </p>
          <ul className="mt-4 text-lg space-y-3">
            <li> AI-powered student performance analytics.</li>
            <li> Integrated video conferencing for parent-teacher meetings.</li>
            <li>Mobile app with push notifications.</li>
          </ul>
        </section>
  
        <section className="mb-12 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">How You Can Get Involved</h2>
          <p className="text-lg">
            Whether you're a teacher, parent, or educational professional, your feedback and support 
            help us grow. You can contribute by:
          </p>
          <ul className="mt-4 text-lg space-y-3">
            <li>✔ Sharing your feedback and feature requests.</li>
            <li>✔ Partnering with us to implement EduTogether in your school.</li>
            <li>✔ Spreading the word about our mission.</li>
          </ul>
        </section>
  
      </div>
    );
  };
  
  export default AboutUs;
  