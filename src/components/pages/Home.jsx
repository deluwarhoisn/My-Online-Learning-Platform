import React from 'react';
import Navbar from '../Header/Navbar';
import img from '../../assets/girl-with-laptop-.avif'
import img2 from '../../assets/pngtree-woman-icon-set-png-image_11293623.png'
import img3 from '../../assets/download.png'
import img4 from '../../assets/download (33).png'

import Footer from '../Footer/Footer';
import { Link, useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto pt-6">

                <div className="bg-blue-400 flex flex-col md:flex-row items-center justify-between rounded-2xl p-6 md:p-10">
                    <div className="md:w-1/2 text-center md:text-left space-y-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                            Learn Something <br /> New Today
                        </h1>
                        <p className="text-white text-base md:text-lg">
                            Expand your knowledge with our comprehensive and engaging courses.
                        </p>
                        <button className="btn btn-primary rounded-2xl mt-4">Get Started</button>
                    </div>

                    <div className="md:w-1/2 mt-6 md:mt-0">
                        <img
                            className="w-full max-w-md mx-auto rounded-lg drop-shadow-lg"
                            src={img}
                            alt="Learning Banner"
                        />
                    </div>
                </div>

                <div className="mt-10">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                        Popular Courses
                    </h1>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                        {data?.map((course, index) => (
                            <div key={index} className="card bg-base-100 shadow-sm">
                                <figure>
                                    <img src={course.image} alt={course.title} className="h-56 w-full object-cover" />
                                </figure>
                                <div className="card-body">
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