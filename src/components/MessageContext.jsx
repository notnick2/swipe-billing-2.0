// MessageContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a Context for the messages
const MessageContext = createContext();

// Create a Provider component
export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
};

// Custom hook to use the MessageContext
export const useMessages = () => useContext(MessageContext);
