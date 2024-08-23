import React from 'react';
import Banner from './Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const SearchInput = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/bfeedback');
  };
    return (
      <div className='flex flex-row'>
      <div className="flex items-center border border-gray-300 rounded-lg p-2 shadow-sm">
        <div className="flex items-center flex-grow">
          <svg 
            className="w-10 h-5 text-gray-500 mr-2"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m2.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            className="w-[300px] focus:outline-none" 
            placeholder="Search Customers by name, phone etc.." 
          />
        </div>
      </div>
        <Link className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-blue-600 hover:bg-blue-700" to = {'/bfeedback'}>
          + New Customer
        </Link>
        <button className="animated-border-button" onClick={handleClick}>
                click here
              </button>
        </div>
    );
  };

function Customers() {

  const features = [
    "Know your customers better",
    "Organize your customer data effortlessly",
    "Get insights of your GST-verified customers"

  ];

  return (
    <div className='flex flex-col m-4'>
    <Banner/>
    <div className="mt-4 h-full">
      <div className="bg-white shadow rounded-lg h-full">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Customers</h2>
            <div className="space-x-2">
          <SearchInput/>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 pr-[200px] pl-[150px] pt-10">
            <div> 
              <img src="https://vx-erp-resources.s3.ap-south-1.amazonaws.com/experience/customers.webp" alt="Invoice creation illustration" className="w-full" />
            </div>
            <div className=''>
              <h3 className="text-2xl font-bold mb-4 pb-1">Managing customers have never been so easy.</h3>
              <p className="text-gray-600 mb-4 pb-1">Effortlessly manage customer details, payments & invoices to ensure your business runs smoothly.</p>
                {features.map((feature, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }} className='pb-1'>
                    <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '10px' }} />
                    <span>{feature}</span>
                  </div>
                ))}
              
              <Link className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to = {'/bfeedback'}>
                + Start adding your customers
              </Link>
              <div className="mt-4 text-sm">
              <FontAwesomeIcon icon={faHeadphones} style={{ marginRight: '10px', color: '#4a5568' }} />
                <a href="#" className="text-gray-500 hover:text-gray-600">Talk to a specialist</a>
              </div>
              <div className="mt-2 text-sm">
              <FontAwesomeIcon icon={faYoutube} style={{ marginRight: '10px',color: '#4a5568' }} />
                <a href="#" className="text-gray-500 hover:text-gray-600">Watch a quick video here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Customers;