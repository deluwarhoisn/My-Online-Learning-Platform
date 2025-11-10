import React from 'react';
import Navbar from '../Header/Navbar';

const AddCourse = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Add New Course</h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Course Title"

                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="file"
                        name="image"
                        accept="image/*"

                        className="w-full p-2 border rounded"
                        required
                    />


                    <input
                        type="number"
                        name="price"
                        placeholder="Price"

                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="duration"
                        placeholder="Duration (e.g., 4 weeks)"

                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="Category"


                        className="w-full p-2 border rounded"
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Course Description"

                        className="w-full p-2 border rounded"
                        rows="4"
                        required
                    />
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="isFeatured"

                        />
                        <span>Featured Course</span>
                    </label>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                    >
                        Add Course
                    </button>
                </form>
            </div>

        </div>
    );
};

export default AddCourse;