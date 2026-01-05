import React, { useState, useEffect } from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { Link, useLoaderData } from 'react-router';
import { FaPlay, FaUsers, FaCertificate, FaClock, FaStar, FaArrowRight, FaQuoteLeft, FaCheck, FaGraduationCap, FaLaptop, FaMobile, FaHeadset } from 'react-icons/fa';

const Home = () => {
    const data = useLoaderData();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [stats, setStats] = useState({
        students: 15420,
        courses: 850,
        instructors: 120,
        certificates: 12300
    });

    // Auto-advance hero carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const heroSlides = [
        {
            title: "Master New Skills with Expert-Led Courses",
            subtitle: "Join thousands of learners advancing their careers with our comprehensive online courses",
            cta: "Start Learning Today",
            image: "/src/assets/still-life-books-versus-technology_23-2150063081.avif"
        },
        {
            title: "Learn at Your Own Pace, Anywhere",
            subtitle: "Flexible learning that fits your schedule. Access courses on any device, anytime",
            cta: "Explore Courses",
            image: "/src/assets/girl-with-laptop-.avif"
        },
        {
            title: "Get Certified and Advance Your Career",
            subtitle: "Earn industry-recognized certificates and boost your professional profile",
            cta: "View Certificates",
            image: "/src/assets/online.png"
        }
    ];

    const features = [
        { icon: FaLaptop, title: "Interactive Learning", desc: "Hands-on projects and real-world applications" },
        { icon: FaCertificate, title: "Industry Certificates", desc: "Recognized credentials from top institutions" },
        { icon: FaHeadset, title: "24/7 Support", desc: "Get help whenever you need it from our expert team" },
        { icon: FaMobile, title: "Mobile Learning", desc: "Learn on-the-go with our mobile-optimized platform" },
        { icon: FaUsers, title: "Community", desc: "Connect with peers and industry professionals" },
        { icon: FaClock, title: "Lifetime Access", desc: "Keep learning with unlimited course access" }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Software Developer",
            company: "Tech Corp",
            image: "/src/assets/pngtree-woman-icon-set-png-image_11293623.png",
            text: "This platform transformed my career. The courses are practical and the instructors are world-class."
        },
        {
            name: "Michael Chen",
            role: "Data Scientist",
            company: "Analytics Pro",
            image: "/src/assets/download.png",
            text: "I gained the skills I needed to transition into data science. The project-based learning is excellent."
        },
        {
            name: "Emily Rodriguez",
            role: "UX Designer",
            company: "Design Studio",
            image: "/src/assets/download (33).png",
            text: "The design courses here are comprehensive and up-to-date with industry standards."
        }
    ];

    const categories = [
        { name: "Web Development", courses: 120, icon: "💻" },
        { name: "Data Science", courses: 85, icon: "📊" },
        { name: "Digital Marketing", courses: 95, icon: "📱" },
        { name: "Design", courses: 110, icon: "🎨" },
        { name: "Business", courses: 75, icon: "💼" },
        { name: "Photography", courses: 60, icon: "📸" }
    ];

    return (
        <div className="min-h-screen">
            <Navbar />
            
            {/* 1. Hero Carousel Section */}
            <section className="relative h-[70vh] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90 z-10"></div>
                
                {heroSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                ))}
                
                <div className="relative z-20 h-full flex items-center">
                    <div className="app-container">
                        <div className="max-w-2xl text-white">
                            <h1 className="text-5xl font-bold mb-6 leading-tight">
                                {heroSlides[currentSlide].title}
                            </h1>
                            <p className="text-xl mb-8 text-gray-200">
                                {heroSlides[currentSlide].subtitle}
                            </p>
                            <div className="flex gap-4">
                                <Link to="/courses" className="btn btn-primary">
                                    {heroSlides[currentSlide].cta} <FaArrowRight className="ml-2" />
                                </Link>
                                <button className="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900">
                                    <FaPlay className="mr-2" /> Watch Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Carousel indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                index === currentSlide ? 'bg-white' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
                
                {/* Scroll hint */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* 2. Statistics Section */}
            <section className="section bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="app-container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">{stats.students.toLocaleString()}+</div>
                            <div className="text-blue-200">Active Students</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">{stats.courses}+</div>
                            <div className="text-blue-200">Expert Courses</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">{stats.instructors}+</div>
                            <div className="text-blue-200">World-Class Instructors</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">{stats.certificates.toLocaleString()}+</div>
                            <div className="text-blue-200">Certificates Issued</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Featured Courses Section */}
            <section className="section">
                <div className="app-container">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
                        <p className="text-xl text-muted max-w-2xl mx-auto">
                            Discover our most popular courses, carefully selected by industry experts
                        </p>
                    </div>
                    
                    <div className="courses-grid">
                        {data?.slice(0, 8).map((course, index) => (
                            <div key={index} className="card course-card">
                                <img src={course.image} alt={course.title} className="w-full" />
                                <div className="course-card-content">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                                {course.category || 'Programming'}
                                            </span>
                                            <div className="flex items-center text-sm text-muted">
                                                <FaStar className="text-yellow-500 mr-1" />
                                                4.8 (120)
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                                        <p className="text-muted mb-4">{course.excerpt}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-bold text-primary-blue">${course.price}</div>
                                        <Link to="/details" className="btn btn-primary">
                                            Enroll Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center mt-12">
                        <Link to="/courses" className="btn btn-outline">
                            View All Courses <FaArrowRight className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

export default Home;
            {/* 4. Features Section */}
            <section className="section bg-gray-50">
                <div className="app-container">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Why Choose Our Platform</h2>
                        <p className="text-xl text-muted max-w-2xl mx-auto">
                            Experience the future of online learning with our cutting-edge features
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="card text-center hover:shadow-xl transition-all duration-300">
                                <div className="text-4xl text-primary-blue mb-4">
                                    <feature.icon />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Course Categories Section */}
            <section className="section">
                <div className="app-container">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Explore Categories</h2>
                        <p className="text-xl text-muted max-w-2xl mx-auto">
                            Find the perfect course in your field of interest
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {categories.map((category, index) => (
                            <Link 
                                key={index} 
                                to={`/courses?category=${category.name}`}
                                className="card text-center hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="text-4xl mb-3">{category.icon}</div>
                                <h3 className="font-bold mb-2 group-hover:text-primary-blue transition-colors">
                                    {category.name}
                                </h3>
                                <p className="text-sm text-muted">{category.courses} courses</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Testimonials Section */}
            <section className="section bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="app-container">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
                        <p className="text-xl text-muted max-w-2xl mx-auto">
                            Real success stories from our learning community
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="card">
                                <FaQuoteLeft className="text-2xl text-primary-blue mb-4" />
                                <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
                                <div className="flex items-center gap-4">
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="font-bold">{testimonial.name}</div>
                                        <div className="text-sm text-muted">
                                            {testimonial.role} at {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Learning Path Section */}
            <section className="section">
                <div className="app-container">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Your Learning Journey</h2>
                        <p className="text-xl text-muted max-w-2xl mx-auto">
                            Follow our structured path to master new skills
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "1", title: "Choose Your Course", desc: "Browse our extensive catalog and find the perfect course for your goals" },
                            { step: "2", title: "Learn & Practice", desc: "Follow interactive lessons and complete hands-on projects" },
                            { step: "3", title: "Get Certified", desc: "Pass assessments and earn industry-recognized certificates" },
                            { step: "4", title: "Advance Career", desc: "Apply your new skills and take your career to the next level" }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Instructor Spotlight */}
            <section className="section bg-gray-50">
                <div className="app-container">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Meet Our Expert Instructors</h2>
                        <p className="text-xl text-muted max-w-2xl mx-auto">
                            Learn from industry professionals with years of real-world experience
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { 
                                name: "Dr. Sarah Johnson", 
                                role: "Senior Software Engineer", 
                                company: "Google",
                                image: "/src/assets/pngtree-woman-icon-set-png-image_11293623.png",
                                expertise: "Full-Stack Development",
                                students: "12,500+",
                                rating: "4.9"
                            },
                            { 
                                name: "Michael Chen", 
                                role: "Data Science Lead", 
                                company: "Microsoft",
                                image: "/src/assets/download.png",
                                expertise: "Machine Learning & AI",
                                students: "8,200+",
                                rating: "4.8"
                            },
                            { 
                                name: "Emily Rodriguez", 
                                role: "Creative Director", 
                                company: "Adobe",
                                image: "/src/assets/download (33).png",
                                expertise: "UI/UX Design",
                                students: "15,800+",
                                rating: "4.9"
                            }
                        ].map((instructor, index) => (
                            <div key={index} className="card text-center">
                                <img 
                                    src={instructor.image} 
                                    alt={instructor.name}
                                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">{instructor.name}</h3>
                                <p className="text-primary-blue font-semibold mb-1">{instructor.role}</p>
                                <p className="text-sm text-muted mb-4">{instructor.company}</p>
                                <div className="bg-gray-100 rounded-lg p-4">
                                    <div className="text-sm text-muted mb-2">Specializes in</div>
                                    <div className="font-semibold mb-3">{instructor.expertise}</div>
                                    <div className="flex justify-between text-sm">
                                        <span>{instructor.students} students</span>
                                        <span className="flex items-center">
                                            <FaStar className="text-yellow-500 mr-1" />
                                            {instructor.rating}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Success Metrics */}
            <section className="section bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <div className="app-container">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
                        <p className="text-xl text-green-100 max-w-2xl mx-auto">
                            Our students achieve real career growth and success
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">94%</div>
                            <div className="text-green-200">Course Completion Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">87%</div>
                            <div className="text-green-200">Career Advancement</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">$15K</div>
                            <div className="text-green-200">Average Salary Increase</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">4.8/5</div>
                            <div className="text-green-200">Student Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. FAQ Section */}
            <section className="section">
                <div className="app-container">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-muted max-w-2xl mx-auto">
                            Get answers to common questions about our platform
                        </p>
                    </div>
                    
                    <div className="max-w-3xl mx-auto space-y-6">
                        {[
                            {
                                q: "How long do I have access to courses?",
                                a: "You get lifetime access to all course materials, including future updates and new content additions."
                            },
                            {
                                q: "Are the certificates recognized by employers?",
                                a: "Yes, our certificates are industry-recognized and accepted by top companies worldwide. Many of our partners actively recruit from our student base."
                            },
                            {
                                q: "Can I learn at my own pace?",
                                a: "Absolutely! All courses are self-paced, allowing you to learn when it's convenient for you. There are no deadlines or time restrictions."
                            },
                            {
                                q: "Do you offer refunds?",
                                a: "We offer a 30-day money-back guarantee. If you're not satisfied with your course, you can request a full refund within 30 days of purchase."
                            },
                            {
                                q: "Is there student support available?",
                                a: "Yes, we provide 24/7 student support through chat, email, and community forums. Our instructors also actively participate in course discussions."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="card">
                                <h3 className="text-lg font-bold mb-3 flex items-center">
                                    <FaCheck className="text-primary-green mr-3" />
                                    {faq.q}
                                </h3>
                                <p className="text-muted pl-8">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. Newsletter Section */}
            <section className="section bg-gray-900 text-white">
                <div className="app-container">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Get the latest course updates, learning tips, and exclusive offers
                        </p>
                    </div>
                    
                    <div className="max-w-md mx-auto">
                        <div className="flex gap-4">
                            <input 
                                type="email" 
                                placeholder="Enter your email address"
                                className="input flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                            />
                            <button className="btn btn-primary">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-sm text-gray-400 mt-3 text-center">
                            No spam, unsubscribe at any time
                        </p>
                    </div>
                </div>
            </section>

            {/* 12. Call to Action Section */}
            <section className="section bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="app-container text-center">
                    <FaGraduationCap className="text-6xl mx-auto mb-6" />
                    <h2 className="text-4xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of students who have transformed their careers with our expert-led courses
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/register" className="btn bg-white text-blue-600 hover:bg-gray-100">
                            Get Started Free
                        </Link>
                        <Link to="/courses" className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-600">
                            Browse Courses
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;