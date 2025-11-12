    import React from "react";
    import Navbar from "../Header/Navbar";

    const AddCourse = () => {

    const handleAddCourse = async (e) => {
        e.preventDefault();

        const form = e.target;
        const newCourse = {
        title: form.title.value,
        image: form.image.value,
        price: form.price.value,
        duration: form.duration.value,
        category: form.category.value,
        description: form.description.value,
        isFeatured: form.isFeatured.checked,
        };

        try {
        const res = await fetch("https://online-learning-platfrom-server.vercel.app/Online", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCourse),
        });

        const data = await res.json();

        if (data.insertedId) {
            window.Toast.fire({
            icon: "success",
            title: "Course added successfully!",
            });
            form.reset();
        } else {
            window.Toast.fire({
            icon: "error",
            title: "Failed to add course",
            });
        }
        } catch (error) {
        console.error(error);
        window.Toast.fire({
            icon: "error",
            title: "Something went wrong!",
        });
        }
    };

    return (
        
    <section>
        <Navbar></Navbar>
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8 my-10">
        
        <h2 className="text-2xl font-bold text-center mb-6">Add New Course</h2>

        <form onSubmit={handleAddCourse} className="space-y-4">
            <div>
            <label className="block font-medium mb-1">Title</label>
            <input
                type="text"
                name="title"
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter course title"
            />
            </div>

            <div>
            <label className="block font-medium mb-1">Image URL</label>
            <input
                type="text"
                name="image"
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter image URL"
            />
            </div>

            <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block font-medium mb-1">Price</label>
                <input
                type="number"
                name="price"
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter price"
                />
            </div>

            <div>
                <label className="block font-medium mb-1">Duration</label>
                <input
                type="text"
                name="duration"
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="e.g., 3 hours, 5 weeks"
                />
            </div>
            </div>

            <div>
            <label className="block font-medium mb-1">Category</label>
            <input
                type="text"
                name="category"
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="e.g., Web Development, Design"
            />
            </div>

            <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
                name="description"
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                rows="3"
                placeholder="Enter course description"
            ></textarea>
            </div>

            <div className="flex items-center gap-2">
            <input type="checkbox" name="isFeatured" id="isFeatured" />
            <label htmlFor="isFeatured" className="text-sm font-medium">
                Mark as Featured
            </label>
            </div>

            <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
            Add Course
            </button>
        </form>
        </div>
    </section>
    );
    };

    export default AddCourse;
