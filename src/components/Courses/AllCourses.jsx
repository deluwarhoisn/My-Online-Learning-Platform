import React, { useState, useEffect } from 'react';
import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { FaStar, FaClock, FaUsers, FaSearch, FaFilter, FaSort, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AllCourses = () => {
  const data = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [courses, setCourses] = useState(data || []);
  const [filteredCourses, setFilteredCourses] = useState(data || []);
  const [loading, setLoading] = useState(false);
  
  // Search and filter states
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [priceRange, setPriceRange] = useState(searchParams.get('price') || '');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'newest');
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 12;

  // Categories extracted from courses
  const categories = [...new Set(courses.map(course => course.category || 'Programming'))];
  
  // Price ranges
  const priceRanges = [
    { value: '', label: 'All Prices' },
    { value: '0-50', label: 'Under $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100-200', label: '$100 - $200' },
    { value: '200+', label: '$200+' }
  ];

  // Sort options
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'title', label: 'Title A-Z' },
    { value: 'popular', label: 'Most Popular' }
  ];

  // Filter and search logic
  useEffect(() => {
    let filtered = [...courses];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(course => 
        (course.category || 'Programming') === selectedCategory
      );
    }

    // Price filter
    if (priceRange) {
      filtered = filtered.filter(course => {
        const price = parseFloat(course.price);
        if (priceRange === '0-50') return price < 50;
        if (priceRange === '50-100') return price >= 50 && price < 100;
        if (priceRange === '100-200') return price >= 100 && price < 200;
        if (priceRange === '200+') return price >= 200;
        return true;
      });
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt || Date.now()) - new Date(a.createdAt || Date.now());
        case 'oldest':
          return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
        case 'price-low':
          return parseFloat(a.price) - parseFloat(b.price);
        case 'price-high':
          return parseFloat(b.price) - parseFloat(a.price);
        case 'title':
          return a.title.localeCompare(b.title);
        case 'popular':
          return (b.enrollments || 0) - (a.enrollments || 0);
        default:
          return 0;
      }
    });

    setFilteredCourses(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [courses, searchTerm, selectedCategory, priceRange, sortBy]);

  // Update URL params
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (selectedCategory) params.set('category', selectedCategory);
    if (priceRange) params.set('price', priceRange);
    if (sortBy !== 'newest') params.set('sort', sortBy);
    
    setSearchParams(params);
  }, [searchTerm, selectedCategory, priceRange, sortBy, setSearchParams]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setPriceRange('');
    setSortBy('newest');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="section bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="app-container text-center">
          <h1 className="text-5xl font-bold mb-4">All Courses</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our complete collection of expert-led courses designed to advance your career
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="section-sm bg-gray-50">
        <div className="app-container">
          <div className="card">
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              
              {/* Search */}
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input pl-10"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="select"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Price Filter */}
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="select"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="select"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            {/* Filter Summary */}
            <div className="flex items-center justify-between">
              <div className="text-muted">
                Showing {currentCourses.length} of {filteredCourses.length} courses
                {searchTerm && ` for "${searchTerm}"`}
              </div>
              
              {(searchTerm || selectedCategory || priceRange || sortBy !== 'newest') && (
                <button
                  onClick={clearFilters}
                  className="btn btn-outline btn-sm"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section">
        <div className="app-container">
          {loading ? (
            /* Loading Skeleton */
            <div className="courses-grid">
              {[...Array(8)].map((_, index) => (
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
          ) : currentCourses.length > 0 ? (
            <div className="courses-grid">
              {currentCourses.map((course, index) => (
                <div key={course._id || index} className="card course-card group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary-blue text-white px-2 py-1 rounded text-sm font-semibold">
                        {course.category || 'Programming'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="course-card-content">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary-blue transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-muted mb-4 line-clamp-2">
                        {course.excerpt || course.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted mb-4">
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-500" />
                          <span>4.8</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaUsers />
                          <span>{course.enrollments || Math.floor(Math.random() * 500) + 100}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaClock />
                          <span>{course.duration || '8 weeks'}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-primary-blue">
                        ${course.price}
                      </div>
                      <Link 
                        to={`/details/${course._id}`}
                        className="btn btn-primary"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* No Results */
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-2">No courses found</h3>
              <p className="text-muted mb-6">
                Try adjusting your search criteria or browse all courses
              </p>
              <button
                onClick={clearFilters}
                className="btn btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="btn btn-outline"
              >
                <FaChevronLeft />
              </button>
              
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 2 && page <= currentPage + 2)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`btn ${
                        currentPage === page ? 'btn-primary' : 'btn-outline'
                      }`}
                    >
                      {page}
                    </button>
                  );
                } else if (
                  page === currentPage - 3 ||
                  page === currentPage + 3
                ) {
                  return <span key={page} className="px-2">...</span>;
                }
                return null;
              })}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="btn btn-outline"
              >
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllCourses;