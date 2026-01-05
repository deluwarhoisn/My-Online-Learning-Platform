import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { FaGraduationCap, FaUsers, FaAward, FaGlobe, FaHeart, FaLightbulb, FaRocket, FaHandshake } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaUsers, number: "50,000+", label: "Active Students" },
    { icon: FaGraduationCap, number: "1,200+", label: "Courses Available" },
    { icon: FaAward, number: "25,000+", label: "Certificates Issued" },
    { icon: FaGlobe, number: "180+", label: "Countries Reached" }
  ];

  const values = [
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "We continuously evolve our platform with cutting-edge technology to provide the best learning experience."
    },
    {
      icon: FaHeart,
      title: "Passion for Learning",
      description: "We believe education should be accessible, engaging, and transformative for everyone, everywhere."
    },
    {
      icon: FaRocket,
      title: "Excellence",
      description: "We maintain the highest standards in course quality, instructor expertise, and student support."
    },
    {
      icon: FaHandshake,
      title: "Community",
      description: "We foster a supportive learning community where students and instructors grow together."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "CEO & Founder",
      image: "/src/assets/pngtree-woman-icon-set-png-image_11293623.png",
      bio: "Former Stanford professor with 15+ years in educational technology. PhD in Computer Science.",
      linkedin: "#"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      image: "/src/assets/download.png",
      bio: "Ex-Google engineer specializing in scalable learning platforms. MS in Software Engineering.",
      linkedin: "#"
    },
    {
      name: "Emily Chen",
      role: "Head of Content",
      image: "/src/assets/download (33).png",
      bio: "Curriculum designer with expertise in adult learning psychology. MEd from Harvard.",
      linkedin: "#"
    }
  ];

  const milestones = [
    { year: "2019", event: "EduPlatform founded with a vision to democratize quality education" },
    { year: "2020", event: "Launched with 50 courses and 1,000 students during the pandemic" },
    { year: "2021", event: "Reached 10,000 students and partnered with top universities" },
    { year: "2022", event: "Expanded globally with courses in 12 languages" },
    { year: "2023", event: "Introduced AI-powered personalized learning paths" },
    { year: "2024", event: "Achieved 50,000+ active students and 1,200+ courses" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="app-container text-center">
          <h1 className="text-5xl font-bold mb-6">About EduPlatform</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make quality education accessible to everyone, everywhere. 
            Since 2019, we've been empowering learners to achieve their goals through 
            expert-led courses and innovative learning technology.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="app-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="card">
                <stat.icon className="text-4xl text-primary-blue mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary-blue mb-2">{stat.number}</div>
                <div className="text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-gray-50">
        <div className="app-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted mb-6">
                To democratize access to high-quality education by connecting learners 
                worldwide with expert instructors and cutting-edge learning technology.
              </p>
              <p className="text-lg text-muted">
                We believe that everyone deserves the opportunity to learn, grow, and 
                achieve their full potential, regardless of their background or location.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/src/assets/still-life-books-versus-technology_23-2150063081.avif" 
                alt="Our Mission"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section">
        <div className="app-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              These principles guide everything we do and shape our commitment to learners worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <value.icon className="text-4xl text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="section bg-gray-50">
        <div className="app-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              From a small startup to a global learning platform
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-primary-blue text-white rounded-full flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                  <div className="card flex-1">
                    <p className="text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section">
        <div className="app-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Experienced leaders passionate about transforming education
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary-blue font-semibold mb-4">{member.role}</p>
                <p className="text-muted mb-6">{member.bio}</p>
                <a 
                  href={member.linkedin}
                  className="btn btn-outline btn-sm"
                >
                  Connect on LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="app-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose EduPlatform?</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              We're more than just an online learning platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Personalized Learning</h3>
              <p className="text-green-100">
                AI-powered recommendations and adaptive learning paths tailored to your goals and pace.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3">Industry Recognition</h3>
              <p className="text-green-100">
                Our certificates are recognized by top employers and industry leaders worldwide.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Lifetime Support</h3>
              <p className="text-green-100">
                Join our community of learners and get ongoing support throughout your career journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="app-container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with EduPlatform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="btn btn-primary">
              Get Started Free
            </a>
            <a href="/courses" className="btn btn-outline">
              Browse Courses
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;