import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import JobList from "./components/JobList";
import JobDetail from "./components/JobDetail";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-6 bg-gray-50">
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">JobFinder</h3>
              <p className="text-blue-200">
                Connecting talented professionals with great opportunities. Find your dream job today.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-blue-200 hover:text-white">Home</a></li>
                <li><a href="/jobs" className="text-blue-200 hover:text-white">Browse Jobs</a></li>
                <li><a href="/about" className="text-blue-200 hover:text-white">About Us</a></li>
                <li><a href="/privacy" className="text-blue-200 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <address className="not-italic text-blue-200">
                <p>1234 Job Street</p>
                <p>San Francisco, CA 94103</p>
                <p className="mt-2">Email: info@jobfinder.com</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-6 text-center text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} JobFinder. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// About page component
const AboutPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">About JobFinder</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            JobFinder was founded with a simple mission: to connect talented professionals 
            with companies offering exciting opportunities. We believe that the right job can 
            transform someone's life, and the right hire can transform a business.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">What We Offer</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>A curated selection of quality job listings across multiple industries</li>
            <li>User-friendly tools to filter and find the perfect position</li>
            <li>Detailed job descriptions to help you make informed decisions</li>
            <li>Simple application process to connect you with employers</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Our Team</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our team consists of industry experts with backgrounds in recruiting, HR, and technology. 
            We understand the job market and are committed to providing the best service for both 
            job seekers and employers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden bg-gray-200">
                <img src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxUZWFtJTJCbWVtYmVyJTJCaGVhZHNob3R8ZW58MHx8fHwxNzQ3ODM4NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Team member headshot" />
              </div>
              <h3 className="font-medium">Jane Smith</h3>
              <p className="text-sm text-gray-500">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden bg-gray-200">
                <img src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxUZWFtJTJCbWVtYmVyJTJCaGVhZHNob3R8ZW58MHx8fHwxNzQ3ODM4NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Team member headshot" />
              </div>
              <h3 className="font-medium">John Davis</h3>
              <p className="text-sm text-gray-500">CTO</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden bg-gray-200">
                <img src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxUZWFtJTJCbWVtYmVyJTJCaGVhZHNob3R8ZW58MHx8fHwxNzQ3ODM4NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Team member headshot" />
              </div>
              <h3 className="font-medium">Sarah Johnson</h3>
              <p className="text-sm text-gray-500">Head of Operations</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Have questions or suggestions? We'd love to hear from you!
          </p>
          <a 
            href="mailto:contact@jobfinder.com" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

// Not Found page component
const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="text-blue-600 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="80" height="80"><rect width="256" height="256" fill="none"/><path d="M128,156V144c30.93,0,56-21.49,56-48s-25.07-48-56-48S72,69.49,72,96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="208" r="20"/></svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default App;