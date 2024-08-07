import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const InProgress = () => {
  return (
    <div className='flex flex-col m-4 mt-0 p-6 w-full ml-[-80px] bg-white'>
    <div className="flex items-center p-4 bg-blue-50 border border-blue-200 rounded-lg shadow-md">
      <FontAwesomeIcon icon={faSpinner} className="h-6 w-6 text-blue-600 mr-3 animate-spin" />
      <div>
        <h2 className="text-lg font-semibold text-blue-700">Task In Progress</h2>
        <p className="text-blue-600">We're currently working on this task. Please check back later for updates.</p>
      </div>
      <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 text-green-600 ml-auto" />
    </div>
    </div>
  );
};

export default InProgress;
