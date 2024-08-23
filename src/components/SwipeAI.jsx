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
        timeout = setTimeout(typeResponse, Math.random() * 5);
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

  const questionBuffer = [
    "cash in and cash out for this month",
    "how many products did we sold this month", "how many active customers do we have", "What is the value of total pending invoices", 
    "total sales and expenses for this month", "what were the top categories by sales we had ?", 
    "what was the top best selling product by sales", "do we have any low inventory products? ", "what were the peek performing days",
    "who is our top customer by sales", "how much is our current recurring revenue","list out all the vendors that we have", "generate a price quotation for 100 macbook pro"
  ];

  const [displayedQuestions, setDisplayedQuestions] = useState(questionBuffer.slice(0, 5));

  useEffect(() => {
    const initialMessages = [
      { isUser: false, text: 'Thank you so much for taking the time to review my work for your organization. I have been working diligently for over three weeks, despite continuous examinations, to prove my capabilities and secure an internship at Swipe. I have always wanted to work at a YC startup, and discovering a startup like Swipe from Hyderabad makes it impossible for me not to invest my utmost effort in experiencing the opportunity to work with you. This web app is proof of my capabilities, responsibility, and passion for working at Swipe. Please give me one opportunity. It all starts with one chance—just remember that someone gave you an opportunity that helped shape who you are today. I truly believe in working hard and being surrounded by amazing people, but unfortunately, I haven’t had the chance to be in an environment where my passion and capabilities can be tested to their fullest. I\'m going into my third year next month, and I will be given an NOC to do an internship by my college. So, this is the best time for me to work with someone as amazing as Swipe. Here are some questions you can ask:' },
    ];
    setMessages(initialMessages);
  }, []);

  const handleQuestionClick = async (question) => {
    handleSubmit(question);

    setDisplayedQuestions(prevQuestions => {
      const nextBufferIndex = questionBuffer.indexOf(prevQuestions[4]) + 1;
      const newQuestions = [...prevQuestions.slice(1), questionBuffer[nextBufferIndex] || ''];
      return newQuestions.filter(Boolean);
    });
  };

  const handleSubmit = async (submittedMessage) => {
    if (submittedMessage.trim() !== '') {
      setLoading(true);
      setMessages((prevMessages) => [...prevMessages, { isUser: true, text: submittedMessage }]);
      try {
        const response = await fetch('https://late-fog-e895.varun123024.workers.dev/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message: submittedMessage })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseText = await response.text();
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
  }, [messages]);

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
          <div className="flex flex-wrap mt-4">
            {displayedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(question)}
                className="bg-[#f9f9f9] border border-blue-600 text-xs text-blue-600 font-bold py-2 px-4 rounded-full m-1 hover:bg-blue-600 hover:text-white"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(message); }} className="flex justify-center mt-4">
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ask swipeAI anything..."
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
