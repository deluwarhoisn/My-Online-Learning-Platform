import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Link } from "react-router-dom";
import Navbar from "../Header/Navbar";
import toast, { Toaster } from "react-hot-toast";

const MyCourses = () => {
  const { user } = useContext(AuthContext);
  const [myCourses, setMyCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch courses added by the logged-in user
  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    fetch("https://online-learning-platfrom-server.vercel.app//Online")
      .then((res) => res.json())
      .then((data) => setMyCourses(data.filter((c) => c.owner === user.email)))
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch your courses");
      })
      .finally(() => setLoading(false));
  }, [user]);

  // Delete course
  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;

    fetch(`https://online-learning-platfrom-server.vercel.app/Online`, { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          setMyCourses(myCourses.filter((c) => c._id !== id));
          toast.success("Deleted successfully!");
        } else {
          toast.error("Failed to delete course");
        }
      })
      .catch((err) => toast.error("Error: " + err.message));
  };

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <section>
      <Navbar />
      <Toaster />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">My Courses</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myCourses.length === 0 && (
            <p className="col-span-full text-center text-gray-500 mt-10">
              You have not added any courses yet.
            </p>
          )}
          {myCourses.map((course) => (
            <div
              key={course._id}
              className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h2 className="font-semibold text-xl mb-2">{course.title}</h2>
                  <p className="text-gray-600 mb-2">{course.category}</p>
                  <p className="text-gray-700 font-medium mb-4">💰 {course.price}</p>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <Link
                    to={`/details/${course._id}`}
                    className="btn btn-primary btn-sm flex-1"
                  >
                    View
                  </Link>
                  <Link
                    to={`/update-course/${course._id}`}
                    className="btn btn-warning btn-sm flex-1"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(course._id)}
                    className="btn btn-error btn-sm flex-1"
                  >
                    Delete
                  </button>
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
