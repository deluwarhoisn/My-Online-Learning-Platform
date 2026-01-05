import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/home' },
    { name: 'All Courses', path: '/courses' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const courseCategories = [
    { name: 'Web Development', path: '/courses?category=Web Development' },
    { name: 'Data Science', path: '/courses?category=Data Science' },
    { name: 'Digital Marketing', path: '/courses?category=Digital Marketing' },
    { name: 'Design', path: '/courses?category=Design' }
  ];

  const supportLinks = [
    { name: 'Help Center', path: '/help' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' }
  ];

  const socialLinks = [
    { icon: FaFacebook, url: 'https://facebook.com/eduplatform', color: 'text-blue-600' },
    { icon: FaTwitter, url: 'https://twitter.com/eduplatform', color: 'text-blue-400' },
    { icon: FaLinkedin, url: 'https://linkedin.com/company/eduplatform', color: 'text-blue-700' },
    { icon: FaInstagram, url: 'https://instagram.com/eduplatform', color: 'text-pink-600' },
    { icon: FaYoutube, url: 'https://youtube.com/eduplatform', color: 'text-red-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="app-container">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Our Latest Courses</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new courses, 
              exclusive offers, and learning tips from industry experts.
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="btn bg-white text-blue-600 hover:bg-gray-100 px-6">
                Subscribe <FaArrowRight className="ml-2" />
              </button>
            </div>
            <p className="text-xs text-blue-200 mt-3">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="app-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/src/assets/online.png" 
                  alt="EduPlatform" 
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-2xl font-bold">EduPlatform</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering learners worldwide with high-quality, accessible education. 
                Join thousands of students advancing their careers through our expert-led courses.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <FaEnvelope className="text-blue-400" />
                  <span>support@eduplatform.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FaPhone className="text-green-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FaMapMarkerAlt className="text-red-400" />
                  <span>123 Education St, Learning City, LC 12345</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-gray-300 hover:text-white hover:underline transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/dashboard"
                    className="text-gray-300 hover:text-white hover:underline transition-colors"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* Course Categories */}
            <div>
              <h4 className="text-lg font-bold mb-6">Popular Categories</h4>
              <ul className="space-y-3">
                {courseCategories.map((category, index) => (
                  <li key={index}>
                    <Link 
                      to={category.path}
                      className="text-gray-300 hover:text-white hover:underline transition-colors"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Legal */}
            <div>
              <h4 className="text-lg font-bold mb-6">Support & Legal</h4>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-gray-300 hover:text-white hover:underline transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Mobile App Links */}
              <div className="mt-6">
                <h5 className="font-semibold mb-3">Download Our App</h5>
                <div className="space-y-2">
                  <a 
                    href="#" 
                    className="block w-full bg-gray-800 hover:bg-gray-700 rounded-lg p-3 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">📱</div>
                      <div>
                        <div className="text-xs text-gray-400">Download on the</div>
                        <div className="font-semibold">App Store</div>
                      </div>
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="block w-full bg-gray-800 hover:bg-gray-700 rounded-lg p-3 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">🤖</div>
                      <div>
                        <div className="text-xs text-gray-400">Get it on</div>
                        <div className="font-semibold">Google Play</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="app-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} EduPlatform. All rights reserved. 
              <span className="ml-2">Made with ❤️ for learners worldwide.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xl hover:scale-110 transition-all ${social.color} hover:opacity-80`}
                  aria-label={`Follow us on ${social.icon.name}`}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-blue-400" />
                <span>50,000+ Active Students</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🏆</span>
                <span>1,200+ Expert Courses</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🌍</span>
                <span>Available in 180+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⭐</span>
                <span>4.8/5 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;