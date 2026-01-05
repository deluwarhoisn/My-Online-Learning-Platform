import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { Link } from 'react-router-dom';
import { FaStar, FaClock, FaPlay, FaCheckCircle, FaBook } from 'react-icons/fa';

const MyEnrolledCourses = () => {
  const { user } = useContext(AuthContext);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading and add demo data
    setTimeout(() => {
      if (user) {
        // Demo enrolled courses data
        const demoEnrolledCourses = [
          {
            _id: '1',
            title: 'React Complete Course',
            description: 'Master React from basics to advanced concepts with hands-on projects.',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
            duration: '12 weeks',
            price: 99,
            progress: 75,
            enrolledAt: '2024-01-01',
            instructor: 'John Doe',
            rating: 4.8,
            totalLessons: 45,
            completedLessons: 34,
            category: 'Web Development'
          },
          {
            _id: '2',
            title: 'JavaScript Fundamentals',
            description: 'Learn JavaScript from scratch with practical examples and projects.',
            image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400',
            duration: '8 weeks',
            price: 79,
            progress: 100,
            enrolledAt: '2023-12-15',
            instructor: 'Jane Smith',
            rating: 4.9,
            totalLessons: 32,
            completedLessons: 32,
            category: 'Programming'
          },
          {
            _id: '3',
            title: 'Node.js Backend Development',
            description: 'Build scalable backend applications with Node.js and Express.',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400',
            duration: '10 weeks',
            price: 129,
            progress: 45,
            enrolledAt: '2024-01-10',
            instructor: 'Mike Johnson',
            rating: 4.7,
            totalLessons: 38,
            completedLessons: 17,
            category: 'Backend Development'
          }
        ];
        setEnrolledCourses(demoEnrolledCourses);
      }
      setLoading(false);
    }, 1000);
  }, [user]);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">My Enrolled Courses</h1>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="card">
              <div className="skeleton skeleton-image mb-4"></div>
              <div className="skeleton skeleton-title mb-2"></div>
              <div className="skeleton skeleton-text mb-2"></div>
              <div className="skeleton skeleton-text mb-4"></div>
              <div className="flex justify-between">
                <div className="skeleton w-16 h-6"></div>
                <div className="skeleton w-20 h-8"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (enrolledCourses.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">My Enrolled Courses</h1>
        </div>
        
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-2xl font-bold mb-2 text-gray-700">No Enrolled Courses Yet</h3>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Start your learning journey by enrolling in courses that match your interests and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="btn btn-primary">
              <FaBook className="mr-2" />
              Browse All Courses
            </Link>
            <Link to="/dashboard" className="btn btn-outline">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Enrolled Courses</h1>
        <div className="text-sm text-gray-500">
          {enrolledCourses.length} course{enrolledCourses.length !== 1 ? 's' : ''} enrolled
        </div>
      </div>

      {/* Progress Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Enrolled</p>
              <p className="text-3xl font-bold">{enrolledCourses.length}</p>
            </div>
            <FaBook className="text-4xl text-blue-200" />
          </div>
        </div>

        <div className="card bg-gradient-to-r from-green-500 to-green-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Completed</p>
              <p className="text-3xl font-bold">
                {enrolledCourses.filter(course => course.progress === 100).length}
              </p>
            </div>
            <FaCheckCircle className="text-4xl text-green-200" />
          </div>
        </div>

        <div className="card bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Avg Progress</p>
              <p className="text-3xl font-bold">
                {Math.round(enrolledCourses.reduce((acc, course) => acc + course.progress, 0) / enrolledCourses.length)}%
              </p>
            </div>
            <FaClock className="text-4xl text-purple-200" />
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((course) => (
          <div key={course._id} className="card hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold">
                  {course.category}
                </span>
              </div>
              {course.progress === 100 && (
                <div className="absolute top-3 right-3">
                  <FaCheckCircle className="text-green-500 text-2xl bg-white rounded-full" />
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaPlay />
                    <span>{course.completedLessons}/{course.totalLessons}</span>
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Progress</span>
                  <span className="text-blue-600 font-semibold">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-500">
                  Enrolled: {new Date(course.enrolledAt).toLocaleDateString()}
                </div>
                <Link 
                  to={`/course/${course._id}`}
                  className="btn btn-primary btn-sm"
                >
                  {course.progress === 100 ? 'Review' : 'Continue'}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
        <Link to="/courses" className="btn btn-primary">
          <FaBook className="mr-2" />
          Enroll in More Courses
        </Link>
        <Link to="/dashboard" className="btn btn-outline">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default MyEnrolledCourses;
