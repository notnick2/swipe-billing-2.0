import React from 'react';

function SalesContent() {
  return (
    <div className='flex flex-col m-4'>
    <div className="bg-[#E6F2FF] py-4 px-6 text-center rounded-md ">
      <p className="text-lg text-blue-700">
        Enjoy customizable templates, GST reports, and premium support! ⭐⭐⭐
        <span className="ml-2 font-medium bg-white border-2 border-slate-200 p-2 rounded-3xl">Subscribe Now! 🚀</span>
      </p>
    </div>
    <div className="mt-4 h-full">
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Sales</h2>
            <div className="space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Document Settings
              </button>
              <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700">
                POS Billing
              </button>
              <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                + Create Invoice
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <img src="https://vx-erp-resources.s3.ap-south-1.amazonaws.com/experience/sales.webp" alt="Invoice creation illustration" className="w-full" />
            </div>
            <div className='p-10'>
              <h3 className="text-2xl font-bold mb-4">Creating invoices lightning fast.</h3>
              <p className="text-gray-600 mb-4">Get a detailed summary of all your sales transactions.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  Create invoices in 10 seconds & share them with customers
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  Discover templates that's perfect for your business
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  Keep track of your day-to-day transactions
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                + Create your first invoice
              </button>
              <div className="mt-4 text-sm">
                <a href="#" className="text-blue-600 hover:text-blue-800">Talk to a specialist</a>
              </div>
              <div className="mt-2 text-sm">
                <a href="#" className="text-blue-600 hover:text-blue-800">Watch a quick video here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SalesContent;