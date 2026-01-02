import React from 'react';
import Navbar from '../Header/Navbar';
import img from '../../assets/still-life-books-versus-technology_23-2150063081.avif'
import img2 from '../../assets/pngtree-woman-icon-set-png-image_11293623.png'
import img3 from '../../assets/download.png'
import img4 from '../../assets/download (33).png'

import Footer from '../Footer/Footer';
import { Link, useLoaderData } from 'react-router';
import CourseCard from '../Courses/CourseCard';



const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto pt-6">

                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-6 md:p-12 flex flex-col md:flex-row items-center justify-between">

                    {/* Left Content */}
                    <div className="md:w-1/2 text-center md:text-left space-y-5 text-white">
                        <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                            🚀 Start Learning
                        </span>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                            Learn Something <br /> New Today
                        </h1>

                        <p className="text-base md:text-lg text-white/90 max-w-lg">
                            Expand your knowledge with expertly crafted courses designed to help you
                            grow faster and smarter.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                            <button className="btn bg-white text-blue-600 hover:bg-gray-100 rounded-2xl px-8">
                                Get Started
                            </button>
                            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-600 rounded-2xl px-8">
                                Browse Courses
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                        <img
                            src={img}
                            alt="Learning Banner"
                            className="w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
                        />
                    </div>

                    {/* Background Decoration */}
                    <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                </div>


                <div className="mt-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold mb-6 text-gray-800">
                        Popular Courses
                    </h1>

                    <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-8 p-4 bg-[#bba9ec] rounded-2xl ">
                        {data?.map((course, index) => (
                            <div key={index} className=" bg-base-100 shadow-sm rounded-lg overflow-hidden  ">
                                <figure>
                                    <img src={course.image} alt={course.title} className="h-56 w-full object-cover" />
                                </figure>
                                <div className="card-body ">
                                    <h2 className="card-title">{course.title}</h2>
                                    <p>{course.excerpt}</p>
                                    <div className="card-actions justify-between items-center mt-3">
                                        <span className="font-semibold text-primary">${course.price}</span>
                                        <Link to="/details" className="btn btn-primary">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-10 px-6 sm:px-10 rounded-2xl shadow-md mt-10">

                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
                    Why Choose Us
                </h1>


                <div className="flex flex-col md:flex-row items-start md:items-center justify-between max-w-5xl mx-auto gap-10">


                    <div className="md:w-1/2 text-gray-600 text-base sm:text-lg leading-relaxed">
                        <p>
                            We are dedicated to providing the best online learning experience with
                            expert instructors, interactive lessons, and flexible schedules to help
                            you achieve your goals at your own pace.
                        </p>
                    </div>


                    <div className="md:w-1/2">
                        <ul className="space-y-3 text-gray-700 text-base sm:text-lg font-medium list-disc list-inside">
                            <li>Expert Instructors</li>
                            <li>Comprehensive Courses</li>
                            <li>Flexible Learning</li>
                            <li>Interactive Practice</li>
                            <li>Certification Support</li>
                        </ul>
                    </div>

                </div>
            </div>


            <section className="w-11/12 mx-auto mt-16">

                <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-start">
                    Top Instructors
                </h1>


                <div className="flex flex-col sm:flex-row justify-around items-center gap-6">
                    {[{ img: img2, name: "Alice Johnson", role: "Web Developer" },
                    { img: img3, name: "Ali Johnson", role: "Web Developer" },
                    { img: img4, name: "Hero", role: "Web Developer" }].map((instructor, index) => (
                        <div key={index} className="flex flex-col items-center sm:flex-row sm:items-center gap-3">
                            <img
                                className="w-16 h-16 sm:w-14 sm:h-14 rounded-full object-cover"
                                src={instructor.img}
                                alt={instructor.name}
                            />
                            <div className="text-center sm:text-left">
                                <h2 className="font-bold text-sm sm:text-base">{instructor.name}</h2>
                                <p className="text-gray-500 text-xs sm:text-sm">{instructor.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <Footer></Footer>
        </div>
    );
};

export default Home;