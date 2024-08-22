import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className="bg-[#E6F2FF] py-2 px-6 text-center rounded-md ">
    <p className="text-lg text-blue-700">
      Introducing Swipe AI, AI assistant for your business that understands your business 🌟🌟🌟
      <Link className="ml-2 font-medium bg-white border-2 border-slate-200 p-1 rounded-3xl" to ={'/swipeAI'}>Try swipe AI now 🚀</Link>
    </p>
  </div>
  );
}

export default Banner;