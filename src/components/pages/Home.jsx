import React from 'react';
import Navbar from '../Header/Navbar';
import img from '../../assets/girl-with-laptop-.avif'
import img2 from '../../assets/pngtree-woman-icon-set-png-image_11293623.png'
import img3 from '../../assets/download.png'
import img4 from '../../assets/download (33).png'

import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto pt-4'>
                <div className='bg-blue-400 flex items-center justify-between'>
                    <div>
                        <h1 className='text-5xl font-bold p-5'>Learn Something <br /> New Today</h1> <br />
                        <p>Expand your Knowledge with our comprehensive
                            <br /> course </p>
                        <button className='btn btn-primary rounded-2xl mt-4'>Get Start</button>
                    </div>
                    <img className='w-1xl' src={img} alt="" />

                </div>
                <div>
                    <h1 className='text-3xl'>Popular Courses</h1>
                  <div className="grid md:grid-cols-3 gap-6 p-6">
      {data.map((course, index) => (
        <div key={index} className="card bg-base-100 shadow-sm">
          <figure>
            <img src={course.image} alt={course.title} className="h-56 w-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{course.title}</h2>
            <p>{course.excerpt}</p>
            <div className="card-actions justify-between items-center mt-3">
              <span className="font-semibold text-primary">${course.price}</span>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  
                </div>

            </div>
            <div className="bg-gray-50 py-10 px-6 rounded-2xl shadow-md mt-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                    Why Choose Us
                </h1>

                <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-10">

                    <div className="md:w-1/2 text-gray-600 text-lg leading-relaxed">
                    
                        <p>
                            We are dedicated to providing the best online learning experience with
                            expert instructors, interactive lessons, and flexible schedules to help
                            you achieve your goals at your own pace.
                        </p>
                    </div>


                    <div className="md:w-1/2">
                        <ul className="space-y-3 text-gray-700 text-lg font-medium list-disc list-inside">
                            <li>Expert Instructors</li>
                            <li>Comprehensive Courses</li>
                            <li>Flexible Learning</li>
                            <li>Interactive Practice</li>
                            <li>Certification Support</li>
                        </ul>
                    </div>
                </div>
            </div>

            <section>
            <div><h1 className='text-start text-4xl font-bold pt-3'>Top Instructors</h1></div>
            <div className='flex justify-around pt-6'>
                <div className='flex items-center'>
                    <img className='w-[50px] h-[50px] rounded-full' src={img2} alt="" />
                    <div className='text-[10px] font-bold'>
                        <h1>Alice Johnson</h1>
                    <p>Web Developer</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img className='w-[50px] h-[50px] rounded-full' src={img3} alt="" />
                    <div className='text-[10px] font-bold'>
                        <h1>Alice Johnson</h1>
                    <p>Web Developer</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img className='w-[50px] h-[50px] rounded-full' src={img4} alt="" />
                    <div className='text-[10px] font-bold'>
                        <h1>Alice Johnson</h1>
                    <p>Web Developer</p>
                    </div>
                </div>
            </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;