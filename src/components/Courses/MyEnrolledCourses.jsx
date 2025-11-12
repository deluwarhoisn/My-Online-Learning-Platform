import React, { useEffect, useState, useContext } from 'react';
import Navbar from '../Header/Navbar';
import { AuthContext } from '../Contexts/AuthProvider';

const MyCourses = () => {
  const { user } = useContext(AuthContext);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://online-learning-platfrom-server.vercel.app/Online`)
      .then(res => res.json())
      .then(data => {
        setEnrolledCourses(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="text-center mt-10 text-lg">Loading your courses...</div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center">🎓 Enrolled Courses</h1>

        {enrolledCourses.length === 0 ? (
          <p className="text-center text-red-500 text-lg">
            You have not enrolled in any courses yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <div
                key={course._id}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h2 className="text-xl font-bold mt-3">{course.title}</h2>
                <p className="text-gray-600 mt-1">{course.description}</p>
                <p className="mt-2 font-semibold">Duration: {course.duration}</p>
                <p className="font-semibold text-blue-600">Price: ${course.price}</p>
                <p className="mt-2 text-sm text-gray-500">
                  Enrolled At: {new Date(course.enrolledAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
