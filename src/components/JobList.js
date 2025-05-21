import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import JobCard from "./JobCard";
import CategoryFilter from "./CategoryFilter";
import jobsData from "../data/jobsData";

const JobList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Extract unique categories from job data
  const categories = [...new Set(jobsData.map(job => job.category))];

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      const filtered = selectedCategory
        ? jobsData.filter(job => job.category === selectedCategory)
        : jobsData;
      
      setFilteredJobs(filtered);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    
    // Update URL with category filter
    if (category) {
      navigate(`?category=${encodeURIComponent(category)}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar with filters */}
        <div className="md:w-1/4">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Main content area */}
        <div className="md:w-3/4">
          {/* Header section */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedCategory ? `${selectedCategory} Jobs` : "All Jobs"}
            </h1>
            <p className="text-gray-600">
              {filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"} found
              {selectedCategory && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Loading state */}
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            // Job listings
            <div className="space-y-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))
              ) : (
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="text-gray-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="64" height="64"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="208" y1="40" x2="48" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No jobs found
                  </h3>
                  <p className="text-gray-600">
                    {selectedCategory
                      ? `No jobs found in the ${selectedCategory} category.`
                      : "No jobs match your search criteria."}
                  </p>
                  {selectedCategory && (
                    <button
                      onClick={() => handleCategoryChange("")}
                      className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View all jobs instead
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobList;