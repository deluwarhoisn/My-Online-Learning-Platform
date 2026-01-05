import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import { 
  FaBook, 
  FaUsers, 
  FaCertificate, 
  FaChartBar,
  FaCalendarAlt,
  FaClock,
  FaStar,
  FaArrowRight,
  FaChartLine,
  FaGraduationCap
} from 'react-icons/fa';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({
    totalCourses: 0,
    enrolledCourses: 0,
    completedCourses: 0,
    certificates: 0
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [learningProgress, setLearningProgress] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [monthlyProgress, setMonthlyProgress] = useState([]);

  // Simulate data fetching
  useEffect(() => {
    // Mock data - replace with real API calls
    setStats({
      totalCourses: 1250,
      enrolledCourses: 8,
      completedCourses: 5,
      certificates: 3
    });

    setRecentActivity([
      {
        id: 1,
        type: 'enrollment',
        title: 'Enrolled in React Advanced Patterns',
        date: '2024-01-04',
        icon: FaBook
      },
      {
        id: 2,
        type: 'completion',
        title: 'Completed JavaScript Fundamentals',
        date: '2024-01-03',
        icon: FaGraduationCap
      },
      {
        id: 3,
        type: 'certificate',
        title: 'Earned Web Development Certificate',
        date: '2024-01-02',
        icon: FaCertificate
      },
      {
        id: 4,
        type: 'progress',
        title: 'Reached 75% in Node.js Masterclass',
        date: '2024-01-01',
        icon: FaChartBar
      }
    ]);

    setLearningProgress([
      { course: 'React Advanced', progress: 85, timeSpent: 24 },
      { course: 'Node.js API', progress: 60, timeSpent: 18 },
      { course: 'MongoDB Basics', progress: 40, timeSpent: 12 },
      { course: 'GraphQL Intro', progress: 25, timeSpent: 8 }
    ]);

    setCategoryData([
      { name: 'Web Development', value: 45, color: '#3b82f6' },
      { name: 'Data Science', value: 25, color: '#10b981' },
      { name: 'Mobile Dev', value: 20, color: '#f59e0b' },
      { name: 'DevOps', value: 10, color: '#ef4444' }
    ]);

    setMonthlyProgress([
      { month: 'Aug', coursesCompleted: 2, hoursLearned: 45 },
      { month: 'Sep', coursesCompleted: 1, hoursLearned: 32 },
      { month: 'Oct', coursesCompleted: 3, hoursLearned: 58 },
      { month: 'Nov', coursesCompleted: 2, hoursLearned: 41 },
      { month: 'Dec', coursesCompleted: 4, hoursLearned: 67 },
      { month: 'Jan', coursesCompleted: 1, hoursLearned: 28 }
    ]);
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="space-y-8">
      
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {getGreeting()}, {user?.displayName || 'Learner'}! 👋
          </h1>
          <p className="text-gray-600 mt-1">
            Ready to continue your learning journey today?
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Today's Date</div>
          <div className="font-semibold">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </div>

      {/* Stats Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Courses</p>
              <p className="text-3xl font-bold">{stats.totalCourses.toLocaleString()}</p>
            </div>
            <FaBook className="text-4xl text-blue-200" />
          </div>
        </div>

        <div className="card bg-gradient-to-r from-green-500 to-green-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Enrolled Courses</p>
              <p className="text-3xl font-bold">{stats.enrolledCourses}</p>
            </div>
            <FaUsers className="text-4xl text-green-200" />
          </div>
        </div>

        <div className="card bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Completed</p>
              <p className="text-3xl font-bold">{stats.completedCourses}</p>
            </div>
            <FaGraduationCap className="text-4xl text-purple-200" />
          </div>
        </div>

        <div className="card bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Certificates</p>
              <p className="text-3xl font-bold">{stats.certificates}</p>
            </div>
            <FaCertificate className="text-4xl text-orange-200" />
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Monthly Progress Chart */}
        <div className="card">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FaChartLine className="text-primary-blue" />
            Learning Progress (Last 6 Months)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyProgress}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="coursesCompleted" 
                stroke="#3b82f6" 
                strokeWidth={3}
                name="Courses Completed"
              />
              <Line 
                type="monotone" 
                dataKey="hoursLearned" 
                stroke="#10b981" 
                strokeWidth={3}
                name="Hours Learned"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="card">
          <h3 className="text-xl font-bold mb-6">Learning Categories</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Current Learning Progress */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Current Learning Progress</h3>
          <Link to="/dashboard/enrollments" className="btn btn-outline btn-sm">
            View All <FaArrowRight className="ml-1" />
          </Link>
        </div>
        
        <div className="space-y-4">
          {learningProgress.map((course, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">{course.course}</h4>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <FaClock />
                    {course.timeSpent}h
                  </span>
                  <span>{course.progress}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary-blue h-2 rounded-full transition-all duration-300"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Recent Activity */}
        <div className="card">
          <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="p-2 bg-primary-blue/10 rounded-lg">
                  <activity.icon className="text-primary-blue" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <FaCalendarAlt />
                    {new Date(activity.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link 
              to="/courses" 
              className="p-4 border border-gray-200 rounded-lg hover:border-primary-blue hover:bg-blue-50 transition-all text-center group"
            >
              <FaBook className="text-2xl text-primary-blue mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-semibold">Browse Courses</div>
              <div className="text-sm text-gray-600">Find new courses</div>
            </Link>

            <Link 
              to="/dashboard/enrollments" 
              className="p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all text-center group"
            >
              <FaChartBar className="text-2xl text-green-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-semibold">My Progress</div>
              <div className="text-sm text-gray-600">Track learning</div>
            </Link>

            <Link 
              to="/dashboard/profile" 
              className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all text-center group"
            >
              <FaUsers className="text-2xl text-purple-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-semibold">Profile</div>
              <div className="text-sm text-gray-600">Update settings</div>
            </Link>

            <Link 
              to="/dashboard/add-course" 
              className="p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all text-center group"
            >
              <FaCertificate className="text-2xl text-orange-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-semibold">Add Course</div>
              <div className="text-sm text-gray-600">Create content</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="card bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-4xl">🏆</div>
          <div>
            <h3 className="text-xl font-bold text-yellow-800">Recent Achievements</h3>
            <p className="text-yellow-700">Celebrate your learning milestones!</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-yellow-200">
            <div className="text-2xl mb-2">🎯</div>
            <div className="font-semibold">Course Completion Streak</div>
            <div className="text-sm text-gray-600">5 courses completed this month</div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-yellow-200">
            <div className="text-2xl mb-2">⭐</div>
            <div className="font-semibold">Top Performer</div>
            <div className="text-sm text-gray-600">Ranked in top 10% of learners</div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-yellow-200">
            <div className="text-2xl mb-2">📚</div>
            <div className="font-semibold">Knowledge Seeker</div>
            <div className="text-sm text-gray-600">100+ hours of learning completed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;