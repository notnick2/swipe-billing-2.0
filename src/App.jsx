import React, { useState } from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden bg-[#f9f9f9]">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Content />
      </div>
    </div>
  );
}

export default App;