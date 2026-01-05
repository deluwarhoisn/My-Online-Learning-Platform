import React, { useState } from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import toast from 'react-hot-toast';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram,
  FaQuestionCircle,
  FaHeadset,
  FaBug,
  FaLightbulb
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: 'general',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: "support@eduplatform.com",
      description: "Send us an email anytime"
    },
    {
      icon: FaPhone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      details: "123 Education Street, Learning City, LC 12345",
      description: "Our headquarters"
    },
    {
      icon: FaClock,
      title: "Business Hours",
      details: "Monday - Friday: 9AM - 6PM EST",
      description: "Weekend support available"
    }
  ];

  const supportCategories = [
    {
      icon: FaQuestionCircle,
      title: "General Inquiry",
      description: "Questions about our platform, courses, or services"
    },
    {
      icon: FaHeadset,
      title: "Technical Support",
      description: "Having trouble with the platform or need technical help"
    },
    {
      icon: FaBug,
      title: "Report a Bug",
      description: "Found an issue? Let us know so we can fix it"
    },
    {
      icon: FaLightbulb,
      title: "Feature Request",
      description: "Suggest new features or improvements"
    }
  ];

  const faqs = [
    {
      question: "How quickly will I receive a response?",
      answer: "We typically respond to all inquiries within 24 hours during business days. For urgent technical issues, we aim to respond within 4 hours."
    },
    {
      question: "Can I schedule a call with your team?",
      answer: "Yes! For complex inquiries or business partnerships, you can request a call in your message and we'll coordinate a suitable time."
    },
    {
      question: "Do you offer phone support?",
      answer: "Phone support is available for premium subscribers and enterprise customers. General support is provided via email and live chat."
    },
    {
      question: "What information should I include in my message?",
      answer: "Please include your account email, a clear description of your issue or question, and any relevant screenshots or error messages."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="app-container text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions? We're here to help! Reach out to our friendly support team 
            and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="app-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="card text-center">
                <info.icon className="text-4xl text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="font-semibold text-primary-blue mb-2">{info.details}</p>
                <p className="text-sm text-muted">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Support Categories */}
      <section className="section bg-gray-50">
        <div className="app-container">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="select"
                    required
                  >
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Payments</option>
                    <option value="course">Course Related</option>
                    <option value="partnership">Partnership</option>
                    <option value="bug">Report a Bug</option>
                    <option value="feature">Feature Request</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="Brief description of your inquiry"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="textarea"
                    rows="6"
                    placeholder="Please provide details about your inquiry..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Support Categories */}
            <div>
              <h2 className="text-3xl font-bold mb-6">How Can We Help?</h2>
              <div className="space-y-4 mb-8">
                {supportCategories.map((category, index) => (
                  <div key={index} className="card">
                    <div className="flex items-start gap-4">
                      <category.icon className="text-2xl text-primary-blue mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">{category.title}</h3>
                        <p className="text-muted text-sm">{category.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="card">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-2xl text-blue-600 hover:text-blue-700 transition-colors">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-2xl text-blue-400 hover:text-blue-500 transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-2xl text-blue-700 hover:text-blue-800 transition-colors">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="text-2xl text-pink-600 hover:text-pink-700 transition-colors">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="app-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Quick answers to common questions about contacting our support team
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="section bg-gray-50">
        <div className="app-container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-muted">We'd love to meet you in person!</p>
          </div>
          
          <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <FaMapMarkerAlt className="text-4xl mx-auto mb-4" />
              <p className="text-lg font-semibold">Interactive Map</p>
              <p className="text-sm">123 Education Street, Learning City, LC 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section bg-red-50 border-l-4 border-red-500">
        <div className="app-container">
          <div className="flex items-start gap-4">
            <div className="text-2xl text-red-500">🚨</div>
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-2">Emergency Support</h3>
              <p className="text-red-600 mb-4">
                For critical technical issues affecting your learning or urgent account problems:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:emergency@eduplatform.com" className="btn btn-warning">
                  Emergency Email
                </a>
                <a href="tel:+15551234567" className="btn btn-outline">
                  Emergency Hotline: +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;