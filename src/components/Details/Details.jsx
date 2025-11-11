import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import toast, { Toaster } from 'react-hot-toast';

const Details = () => {
  const { id } = useParams(); // course ID from URL
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch course data from your API or mock data
    fetch(`http://localhost:5000/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleEnroll = () => {
    // Here you can call your actual enrollment API
    toast.success('Enrollment successful!');
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="text-center mt-10 text-lg">Loading course details...</div>
      </div>
    );
  }

  if (!course) {
    return (
      <div>
        <Navbar />
        <div className="text-center mt-10 text-red-500 text-lg">
          Course not found
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-xl overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-gray-700 mb-4">{course.description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-lg">Duration: {course.duration}</span>
            <span className="font-semibold text-lg">Price: ${course.price}</span>
          </div>
          <button
            onClick={handleEnroll}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
