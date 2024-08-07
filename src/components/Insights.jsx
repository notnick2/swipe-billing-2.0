import React from 'react';

const Insights = () => {
  return (
    <div className='w-full ml-[-100px]'>
    <div className="p-6 bg-white w-full">
      <h1 className="text-2xl font-bold mb-4">Insights</h1>
      
      <div className="grid grid-cols-5 gap-4 mb-6">
        {['Cash In', 'Cash Out', 'Products Sold', 'Customers', 'Pending Inv'].map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">{item}</p>
            <p className="text-xl font-semibold">₹ 0</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-4">Reports Overview</h2>
      <div className="mb-4">
        <input type="date" className="border rounded px-2 py-1" value="2024-07-01" />
        <span className="mx-2">-</span>
        <input type="date" className="border rounded px-2 py-1" value="2024-07-31" />
      </div>

      <div className="flex justify-center items-center h-48 bg-gray-100 rounded-lg mb-6">
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <p className="mt-2 text-gray-600">No data</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {['Total Sales', 'Total Purchases', 'Total Expenses', 'Total Indirect Income'].map((item, index) => (
          <div key={index} className={`p-4 rounded-lg ${index % 2 === 0 ? 'bg-blue-100' : 'bg-red-100'}`}>
            <p className="font-semibold">{item}</p>
            <p className="text-xl">₹ 0</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Insights;