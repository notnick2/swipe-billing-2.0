import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
  const [activeTab, setActiveTab] = useState('feedback');

  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // This will navigate back to the previous route
  };


  return (
    <>
      {/* Full-screen overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      
      {/* Modal content */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-md mx-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Contact Swipe Support</h2>
            <button onClick={handleClose} className="text-gray-500 text-2xl">&times;</button>
          </div>
          <div className="mb-4">
            <div className="flex space-x-4 mb-4">
              <button 
                onClick={() => setActiveTab('feedback')}
                className={`font-semibold pb-1 transition-all duration-300 ${
                  activeTab === 'feedback' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500'
                }`}
              >
                Feedback
              </button>
              <button 
                onClick={() => setActiveTab('contact')}
                className={`font-semibold pb-1 transition-all duration-300 ${
                  activeTab === 'contact' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500'
                }`}
              >
                Contact Us
              </button>
            </div>
            {activeTab === 'feedback' && (
              <p className="text-sm text-gray-600 mb-4">
                Like Swipe or have any feedback for us? Use the form below to send us your comments or
                report any problems you experienced using the app. We read all feedback carefully, and do our
                best to improve the app every day!
              </p>
            )}
            {activeTab === 'contact' && (
              <p className="text-sm text-gray-600 mb-4">
                Need to get in touch with our support team? Use this form to contact us directly.
                We'll get back to you as soon as possible.
              </p>
            )}
          </div>
          <form>
            <input
              type="email"
              value="varun123024@gmail.com"
              readOnly
              className="w-full p-2 mb-4 border rounded bg-gray-100"
            />
            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 mb-4 border rounded"
            />
            <textarea
              placeholder={activeTab === 'feedback' 
                ? "Please provide your feedback here, describing it in detail. If possible, include screenshots or links to help us evaluate it more efficiently."
                : "Please describe your issue or question in detail. We'll get back to you as soon as possible."
              }
              className="w-full p-2 mb-4 border rounded h-32 resize-none"
            />
            <div className="flex justify-between items-center">
              <button type="button" className="flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
                Upload
              </button>
              <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded">
                {activeTab === 'feedback' ? 'Submit Feedback' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Feedback;