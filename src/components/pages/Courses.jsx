import React from 'react';
import Navbar from '../Header/Navbar';




const Courses = () => {
    return (
        <div>
           <Navbar></Navbar>
        
      
  
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-6">
        <h2 className="text-3xl font-semibold mb-6">My Courses</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Title</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Image</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Price</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Owner</th>
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">
                  <div className="text-lg font-medium text-gray-900">Web Development</div>
                  <div className="text-sm text-gray-500 mt-1">Development • 8 weeks</div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-28 h-20 rounded overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img src="https://i.ibb.co/4fF3sLk/webdev.jpg" alt="Web Development" className="w-full h-full object-cover" />
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap align-top">
                  <div className="text-lg font-medium">$50</div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap align-top text-sm text-gray-700">user@example.com</td>

                <td className="px-6 py-4 whitespace-nowrap align-top">
                  <div className="flex gap-3 justify-center">
                    <button className="px-3 py-2 rounded-md border text-sm bg-gray-100 hover:bg-gray-200">View Details</button>
                    <button className="px-3 py-2 rounded-md border text-sm bg-blue-600 text-white hover:opacity-90">Update</button>
                    <button className="px-3 py-2 rounded-md border text-sm bg-red-600 text-white hover:opacity-90">Delete</button>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 whitespace-nowrap align-top">
                  <div className="text-lg font-medium text-gray-900 ">Data  Science</div>
                  <div className="text-sm text-gray-500 mt-1">Analytics • 10 weeks</div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-28 h-20 rounded overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img src="https://i.ibb.co/KxYkPv7/datasci.jpg" alt="Data Science" className="w-full h-full object-cover" />
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap align-top">
                  <div className="text-lg font-medium">$75</div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap align-top text-sm text-gray-700">user@example.com</td>

                <td className="px-6 py-4 whitespace-nowrap align-top">
                  <div className="flex gap-3 justify-center">
                    <button className="px-3 py-2 rounded-md border text-sm bg-gray-100 hover:bg-gray-200">View Details</button>
                    <button className="px-3 py-2 rounded-md border text-sm bg-blue-600 text-white hover:opacity-90">Update</button>
                    <button className="px-3 py-2 rounded-md border text-sm bg-red-600 text-white hover:opacity-90">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
      </div>
    );
};

export default Courses;