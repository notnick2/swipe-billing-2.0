import React, { useState, useEffect } from 'react';

const ChatGPTResponse = ({ response }) => {
  const [typedResponse, setTypedResponse] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);

  useEffect(() => {
    let timeout;
    let currentPosition = 0;

    const typeResponse = () => {
      if (currentPosition < response.length) {
        setTypedResponse(response.slice(0, currentPosition + 1));
        setCursorPosition(currentPosition + 1);
        currentPosition++;
        timeout = setTimeout(typeResponse, Math.random() * 10);
      } else {
        clearTimeout(timeout);
      }
    };

    typeResponse();
    return () => clearTimeout(timeout);
  }, [response]);

  return (
    <div className="chat-response">
      {typedResponse}
      <span className={`cursor ${cursorPosition === response.length ? 'hidden' : ''}`}>|</span>
    </div>
  );
};

const AIChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      setLoading(true);
      try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message: message })
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const responseText = await response.text();
        setMessages((prevMessages) => [...prevMessages, { isUser: true, text: message }]);
        setMessages((prevMessages) => [...prevMessages, { isUser: false, text: responseText }]);
        setMessage('');
      } catch (error) {
        console.error('Error:', error);
        setMessages((prevMessages) => [...prevMessages, { isUser: false, text: 'Oops, something went wrong. Please try again later.' }]);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const scrollContainer = document.getElementById('scrollContainer');

    function scrollToBottom() {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }

    scrollToBottom();
  }, [message, messages]);

  return (
    <div className="bg-[#f9f9f9] flex flex-col w-full justify-end">
      <div className="w-full bg-[#f9f9f9] rounded px-8 pt-6 pb-8 mb-4">
        <div className="h-[500px] overflow-y-auto transparent-container p-3" id="scrollContainer">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} mb-4`}
            >
              <div
                className={`bg-gray-200 px-4 py-2 rounded-lg max-w-[70%] ${
                  msg.isUser ? 'bg-blue-600 text-gray-900' : ''
                }`}
              >
                {msg.isUser ? msg.text : <ChatGPTResponse response={msg.text} />}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className={`bg-blue-600 ml-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChat;