import React, { useEffect, useState, useContext } from "react";
import Navbar from "../Header/Navbar";
import { AuthContext } from "../Contexts/AuthProvider";

const MyCourses = () => {
  const { user } = useContext(AuthContext);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);

    fetch(`http://localhost:3000/view?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setEnrolledCourses(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [user]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">My Enrolled Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.length === 0 ? (
            <p className="text-center col-span-full text-red-500">
              You have not enrolled in any courses yet.
            </p>
          ) : (
            enrolledCourses.map((course, index) => (
              <div key={course._id || index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded"
                />
                <h2 className="text-xl font-bold mt-2">{course.title}</h2>
                <p className="text-gray-600 mt-1">{course.description}</p>
                <p className="mt-2 font-semibold">Duration: {course.duration}</p>
                <p className="mt-1 font-semibold">Price: ${course.price}</p>
                <p className="mt-1 text-sm text-gray-500">
                  Enrolled At: {new Date(course.enrolledAt).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
