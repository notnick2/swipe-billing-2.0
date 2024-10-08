import React from 'react';
import Banner from './Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function EWayBills() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/bfeedback');
  };

  const features = [
    "Easily create E-way bills with a click",
    "Sync your E-way bills to govt portal",
    "Avoid hassles and delays on your transport"

  ];

  return (
    <div className='flex flex-col m-4'>
    <Banner/>
    <div className="mt-4 h-full">
      <div className="bg-white shadow rounded-lg h-full">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">E-way Bills</h2>
            <div className="space-x-2">
              
              
              <Link className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700" to = {'/bfeedback'}>
                + Connect to E-way Bill Portal
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 pr-[200px] pl-[150px] pt-10">
            <div> 
              <img src="https://vx-erp-resources.s3.ap-south-1.amazonaws.com/experience/ewaybill.webp" alt="Invoice creation illustration" className="w-full" />
            </div>
            <div className=''>
              <h3 className="text-2xl font-bold mb-4 pb-1">Hassle free E-way bills.</h3>
              <p className="text-gray-600 mb-4 pb-1">Simplify logistics with our effortless E-way bill creation.</p>
                {features.map((feature, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }} className='pb-1'>
                    <FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '10px' }} />
                    <span>{feature}</span>
                  </div>
                ))}
              
              <Link className="w-full bg-[#ffd30e] text-white font-bold py-2 px-4 rounded" to = {'/bfeedback'}>
                Upgrade Now 🚀
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

export default EWayBills;