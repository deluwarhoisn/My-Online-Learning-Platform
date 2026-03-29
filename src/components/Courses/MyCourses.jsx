import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../Header/Navbar";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyCourses = () => {
  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();
  const [myCourses, setMyCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const isDashboardRoute = pathname.startsWith("/dashboard");

  // Fetch courses added by the logged-in user
  useEffect(() => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch(`https://online-learning-platfrom-server.vercel.app/Online?owner=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyCourses(data))
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch your courses");
      })
      .finally(() => setLoading(false));
  }, [user]);

  // Delete course
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete this course?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    fetch(`https://online-learning-platfrom-server.vercel.app/Online/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0 || data.success) {
          setMyCourses(myCourses.filter((c) => c._id !== id));
          toast.success("Deleted successfully!");
        } else {
          toast.error("Failed to delete course");
        }
      })
      .catch((err) => toast.error("Error: " + err.message));
  };

  if (loading) {
    return <p className="text-center mt-10 text-lg">Loading...</p>;
  }

  return (
    <section className={isDashboardRoute ? "" : "min-h-screen"}>
      {!isDashboardRoute && <Navbar />}
      <div className="container mx-auto px-4 py-6 sm:px-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">My Courses</h1>

        {myCourses.length === 0 ? (
          <p className="text-center text-gray-500 mt-10 text-lg">
            You have not added any courses yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {myCourses.map((course) => (
              <div
                key={course._id}
                className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
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
                    <p className="text-gray-700 font-medium mb-4">💰 ${course.price}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <Link
                      to={`/details/${course._id}`}
                      className="btn btn-primary btn-sm"
                    >
                      View
                    </Link>
                    <Link
                      to={`/update-course/${course._id}`}
                      className="btn btn-warning btn-sm"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(course._id)}
                      className="btn btn-error btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyCourses;
