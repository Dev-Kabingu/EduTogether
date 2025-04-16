import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">EduTogether</h3>
            <p className="text-lg">
              Connecting parents and teachers to enhance communication and
              foster student success. A platform built to bridge the education
              gap.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-300">Services</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
              <li><a href="/blog" className="hover:text-blue-300">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info & Social Media */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Contact Info</h3>
            <p className="text-lg">Email: support@edutogether.com</p>
            <p className="text-lg">Phone: (123) 456-7890</p>
            <div className="flex gap-4 text-xl">
              <a href="https://facebook.com" className="hover:text-blue-300">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-300">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-300">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" className="hover:text-blue-300">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="mt-12 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} EduTogether. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
