import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Feedback = () => {
  const [activeTab, setActiveTab] = useState('feedback');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // This will navigate back to the previous route
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const templateParams = {
      from_email: email,
      subject: title,
      message: email + " " + message,
    };

    emailjs.send('service_rlt0qep', 'template_5w97ah7', templateParams, 'INHq7a0zDT61i0GRj')
      .then((response) => {
        setSuccess('Feedback sent successfully!');
        setEmail('');
        setTitle('');
        setMessage('');
      })
      .catch((err) => {
        setError('Failed to send feedback.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {/* Full-screen overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      
      {/* Modal content */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-full mx-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-gray-950 font-bold">Thankyou so much please please read the below </h2>
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
                Contact Me
              </button>
            </div>
            {activeTab === 'feedback' && (
              <p className="text-sm text-gray-600 mb-4">
                Thank you so much for taking time to looking at my work for your organization. I have been working for over 3 weeks despite continuous examinations trying to prove my capabilities to get an internship at Swipe.  always wanted to work at a YC startup and after discovering such a startup from hyderabad there is no way i cannot put my blood and sweat to experience working with a startup like yourself. this web app is the proof of my capabilities, responsibiliy and passion towards working at swipe. please give me one opportunity , it always starts with one opportunity just remember that someone has gave you a chance, a chance which made you what you are today! I really believe in working hard and surrounding among amazing people but unfortunately i didnt get any opportunity to be in amazing environments where my passion and capabilities can be tested at the fullest. I'm going to 3rd year next month and i will be offered an NOC to do an internship by our college , so this is the best time i can work for someone as amazing as swipe.   
                <span className='font-semibold'>
                    Please checkout <Link to="/swipeAI" className='underline'>SwipeAI</Link> It is amazing.
                </span>
              </p>
            )}
            {activeTab === 'contact' && (
              <p className="text-sm text-gray-600 mb-4">
                
              </p>
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="varun024123@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 border rounded bg-gray-100"
              required
            />
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <textarea
              placeholder={activeTab === 'feedback' 
                ? "Please provide your feedback here, looking forward to hear from you. This feedback works so feel free to try it out "
                : "Please describe your issue or question in detail. We'll get back to you as soon as possible."
              }
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 mb-4 border rounded h-32 resize-none"
              required
            />
            <div className="flex justify-between items-center">
              <a type="button" target="_blank" className="flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded" href="https://drive.google.com/file/d/12UKYl8KWFsfafwlVYU1uFFGi4ca4MZp2/view?usp=sharing">
                
                Resume
              </a>
            
              <button 
                type="submit" 
                className={`bg-blue-600 text-white px-4 py-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Sending...' : (activeTab === 'feedback' ? 'Submit Feedback' : 'Send Message')}
              </button>
            </div>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {success && <p className="text-green-500 mt-4">{success}</p>}
        </div>
      </div>
    </>
  );
};

export default Feedback;
