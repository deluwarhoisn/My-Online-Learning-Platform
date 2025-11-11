import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Link } from "react-router-dom";
import Navbar from "../Header/Navbar";

const MyCourses = () => {
  const { user } = useContext(AuthContext);
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    if (!user?.email) return;
    fetch("http://localhost:3000/Online")
      .then((res) => res.json())
      .then((data) => setMyCourses(data.filter((c) => c.owner === user.email)))
      .catch(console.error);
  }, [user]);

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure?")) return;
    fetch(`http://localhost:3000/Online/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          window.Toast.fire({ icon: "success", title: "Deleted successfully!" });
          setMyCourses(myCourses.filter((c) => c._id !== id));
        }
      });
  };

  return (
  <section>
    <Navbar></Navbar>
      <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Courses</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {myCourses.map((course) => (
          <div key={course._id} className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-xl mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-2">{course.category}</p>
              <p className="text-gray-700 font-medium mb-4">💰 {course.price}</p>
              <div className="flex justify-between items-center">
                <Link to={`/details/${course._id}`} className="btn btn-primary btn-sm">View</Link>
                <Link to={`/update-course/${course._id}`} className="btn btn-warning btn-sm">Update</Link>
                <button onClick={() => handleDelete(course._id)} className="btn btn-error btn-sm">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default MyCourses;
