import React from 'react';

function Header() {
  return (
    <>
    <header className="bg-white shadow-sm z-10 flex items-center justify-between p-2">
    
      <div className="flex items-center">
      <img src='https://app.getswipe.in/resources/images/logo.svg' className='h-[27px] pr-10'></img>
        
        <div className="bg-pink-200 text-pink-700 rounded-full w-8 h-8 flex items-center justify-center mr-2">YB</div>
        <div className='flex flex-col'>
        <h1 className="text-sm pt-[-5px] font-semibold">YOUR BUSINESS NAME</h1>
        <span className="text-gray-500 text-xs ml-1">+ Add Another Company</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <i className="fas fa-bolt"></i>
        <i className="fas fa-bell"></i>
        <i className="fas fa-question-circle"></i>
        <i className="fas fa-user-circle"></i>
      </div>
    </header>
    </>
  );
}

export default Header;