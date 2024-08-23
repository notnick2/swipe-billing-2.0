import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Banner() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/swipeAI');
  };

  return (
    <div className="bg-[#E6F2FF] py-2 px-6 text-center rounded-md ">
    <p className="text-lg text-blue-700">
      Introducing Swipe AI, AI assistant for your business that understands your business 🌟🌟🌟
      <button className="animated-border-button" onClick={handleClick}>
                  Try swipe AI now 🚀
              </button>
    </p>
  </div>
  );
}

export default Banner;
