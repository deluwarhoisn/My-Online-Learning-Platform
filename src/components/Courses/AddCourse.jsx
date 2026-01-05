import React, { useState, useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import toast from "react-hot-toast";
import { FaPlus, FaSpinner, FaImage, FaDollarSign, FaClock, FaTag, FaAlignLeft } from "react-icons/fa";

const AddCourse = () => {
    const { user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        price: '',
        duration: '',
        category: '',
        description: '',
        isFeatured: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleAddCourse = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const newCourse = {
            ...formData,
            instructor: user?.displayName || 'Anonymous',
            instructorEmail: user?.email,
            createdAt: new Date().toISOString(),
            enrollments: 0,
            rating: 0,
            reviews: []
        };

        try {
            const res = await fetch("https://online-learning-platfrom-server.vercel.app/Online", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newCourse),
            });

            const data = await res.json();

            if (data.insertedId) {
                toast.success("Course added successfully!");
                setFormData({
                    title: '',
                    image: '',
                    price: '',
                    duration: '',
                    category: '',
                    description: '',
                    isFeatured: false
                });
            } else {
                toast.error("Failed to add course");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Add New Course</h1>
                <div className="text-sm text-gray-500">
                    Create a new course for students
                </div>
            </div>

            <div className="card max-w-4xl">
                <form onSubmit={handleAddCourse} className="space-y-6">
                    
                    {/* Course Title */}
                    <div className="form-group">
                        <label className="form-label flex items-center gap-2">
                            <FaTag className="text-blue-600" />
                            Course Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                            className="input"
                            placeholder="Enter an engaging course title"
                            disabled={isLoading}
                        />
                    </div>

                    {/* Image URL */}
                    <div className="form-group">
                        <label className="form-label flex items-center gap-2">
                            <FaImage className="text-green-600" />
                            Course Image URL
                        </label>
                        <input
                            type="url"
                            name="image"
                            value={formData.image}
                            onChange={handleInputChange}
                            required
                            className="input"
                            placeholder="https://example.com/course-image.jpg"
                            disabled={isLoading}
                        />
                        {formData.image && (
                            <div className="mt-3">
                                <img 
                                    src={formData.image} 
                                    alt="Course preview" 
                                    className="w-32 h-20 object-cover rounded-lg border"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        )}
                    </div>

                    {/* Price and Duration */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="form-group">
                            <label className="form-label flex items-center gap-2">
                                <FaDollarSign className="text-green-600" />
                                Price (USD)
                            </label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                required
                                min="0"
                                step="0.01"
                                className="input"
                                placeholder="99.99"
                                disabled={isLoading}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label flex items-center gap-2">
                                <FaClock className="text-orange-600" />
                                Duration
                            </label>
                            <input
                                type="text"
                                name="duration"
                                value={formData.duration}
                                onChange={handleInputChange}
                                required
                                className="input"
                                placeholder="e.g., 8 weeks, 40 hours"
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    {/* Category */}
                    <div className="form-group">
                        <label className="form-label">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            required
                            className="select"
                            disabled={isLoading}
                        >
                            <option value="">Select a category</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Mobile Development">Mobile Development</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Machine Learning">Machine Learning</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Business">Business</option>
                            <option value="Photography">Photography</option>
                            <option value="Music">Music</option>
                            <option value="Language">Language</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div className="form-group">
                        <label className="form-label flex items-center gap-2">
                            <FaAlignLeft className="text-purple-600" />
                            Course Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                            className="textarea"
                            rows="5"
                            placeholder="Provide a detailed description of what students will learn in this course..."
                            disabled={isLoading}
                        />
                    </div>

                    {/* Featured Course */}
                    <div className="form-group">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                name="isFeatured"
                                checked={formData.isFeatured}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-blue-600 rounded"
                                disabled={isLoading}
                            />
                            <span className="font-medium">Mark as Featured Course</span>
                            <span className="text-sm text-gray-500">(Will appear on homepage)</span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4 pt-6 border-t border-gray-200">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="btn btn-primary flex-1"
                        >
                            {isLoading ? (
                                <>
                                    <FaSpinner className="animate-spin mr-2" />
                                    Adding Course...
                                </>
                            ) : (
                                <>
                                    <FaPlus className="mr-2" />
                                    Add Course
                                </>
                            )}
                        </button>
                        
                        <button
                            type="button"
                            onClick={() => setFormData({
                                title: '',
                                image: '',
                                price: '',
                                duration: '',
                                category: '',
                                description: '',
                                isFeatured: false
                            })}
                            className="btn btn-secondary"
                            disabled={isLoading}
                        >
                            Clear Form
                        </button>
                    </div>
                </form>
            </div>

            {/* Tips */}
            <div className="card bg-blue-50 border-blue-200">
                <h3 className="font-bold text-blue-800 mb-3">💡 Tips for Creating Great Courses</h3>
                <ul className="text-sm text-blue-700 space-y-2">
                    <li>• Use a clear, descriptive title that highlights the main benefit</li>
                    <li>• Choose a high-quality, relevant image (1200x600px recommended)</li>
                    <li>• Write a detailed description that explains what students will learn</li>
                    <li>• Set a competitive price based on course length and complexity</li>
                    <li>• Select the most appropriate category for better discoverability</li>
                </ul>
            </div>
        </div>
    );
};

export default AddCourse;
