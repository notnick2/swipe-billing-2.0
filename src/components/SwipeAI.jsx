import React, { useState, useEffect } from 'react';
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey : import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

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
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              "role": "system",
              "content": [
                {
                  "text": "you are assistant for a billing software named swipe billing. if asked about anything use generalized data to give the responses. you are available at the dashboard of the billing software so you have the complete data of their business so whenever they ask about their business or past billings give them response according to their data. as this is just the testing environment we dont have any real data so use some random but appropriate data to respond to the query",
                  "type": "text"
                },
              ]
            },
            {
                "role": "user",
                "content": [
                  {
                    "type": "text",
                    "text": message
                  }
                ]
              }
          ],
          temperature: 1,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
          response_format: {
            "type": "text"
          },
        });
        setMessages((prevMessages) => [...prevMessages, { isUser: true, text: message }]);
        setMessages((prevMessages) => [...prevMessages, { isUser: false, text: response.choices[0].message.content }]);
        setMessage('');
      } catch (error) {
        console.error(error);
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
    },[message,messages])
  return (

        <div className=" bg-[#f9f9f9] flex flex-col w-full justify-end">
          <div className="w-full  bg-[#f9f9f9]  rounded px-8 pt-6 pb-8 mb-4">
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