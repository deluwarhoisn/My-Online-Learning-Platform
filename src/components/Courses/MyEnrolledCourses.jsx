import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Link } from "react-router-dom";
import Navbar from "../Header/Navbar";

const MyEnrollments = () => {
  const { user } = useContext(AuthContext);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/enrollments?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setEnrolledCourses(data))
        .catch((err) => console.error(err));
    }
  }, [user?.email]);

  return (
    <section>
        <Navbar></Navbar>
         <div className="max-w-7xl mx-auto p-6">
        
      <h2 className="text-3xl font-bold text-center mb-6">
        My Enrolled Courses
      </h2>

      {enrolledCourses.length === 0 ? (
        <p className="text-center text-gray-500">You haven’t enrolled in any courses yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <div
              key={course._id}
              className="border rounded-2xl shadow-md hover:shadow-lg transition bg-white p-4 flex flex-col"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-40 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Category:</span> {course.category}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <span className="font-medium">Duration:</span> {course.duration}
              </p>
              <Link
                to={`/course/${course._id}`}
                className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
    <table className="w-full text-left border border-gray-300">
  <thead className="bg-gray-100">
    <tr>
      <th className="p-3 border">Image</th>
      <th className="p-3 border">Title</th>
      <th className="p-3 border">Category</th>
      <th className="p-3 border">Duration</th>
      <th className="p-3 border">Actions</th>
    </tr>
  </thead>
  <tbody>
    {enrolledCourses.map((course) => (
      <tr key={course._id} className="hover:bg-gray-50">
        <td className="p-3 border">
          <img src={course.image} alt={course.title} className="h-12 w-20 object-cover rounded" />
        </td>
        <td className="p-3 border">{course.title}</td>
        <td className="p-3 border">{course.category}</td>
        <td className="p-3 border">{course.duration}</td>
        <td className="p-3 border">
          <Link
            to={`/course/${course._id}`}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            View
          </Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </section>
  );
};

export default MyEnrollments;
