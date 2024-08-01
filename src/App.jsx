import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
/*
import Sales from './components/Sales';
import Purchases from './components/Purchases';
import Quotations from './components/Quotations';
import Expenses from './components/Expenses';
import ProductsAndServices from './components/ProductsAndServices';
import Inventory from './components/Inventory';
import Payments from './components/Payments';
import Customers from './components/Customers';
import Vendors from './components/Vendors';
import Insights from './components/Insights';
import Reports from './components/Reports';
import EWayBills from './components/EWayBills';
import OnlineStore from './components/OnlineStore';
import MyDrive from './components/MyDrive';
import Settings from './components/Settings';
import Tutorials from './components/Tutorials';
import Feedback from './components/Feedback';

const router = createBrowserRouter([
  { path: "/", element: <Content /> },
  { path: "/sales", element: <Sales /> },
  { path: "/purchases", element: <Purchases /> },
  { path: "/quotations", element: <Quotations /> },
  { path: "/expenses", element: <Expenses /> },
  { path: "/productsandservices", element: <ProductsAndServices /> },
  { path: "/inventory", element: <Inventory /> },
  { path: "/payments", element: <Payments /> },
  { path: "/customers", element: <Customers /> },
  { path: "/vendors", element: <Vendors /> },
  { path: "/insights", element: <Insights /> },
  { path: "/reports", element: <Reports /> },
  { path: "/ewaybills", element: <EWayBills /> },
  { path: "/onlinestore", element: <OnlineStore /> },
  { path: "/mydrive", element: <MyDrive /> },
  { path: "/settings", element: <Settings /> },
  { path: "/tutorials", element: <Tutorials /> },
  { path: "/feedback", element: <Feedback /> }
]); */

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden bg-[#f9f9f9]">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <Content/>
          {/*<div className="flex-1 overflow-y-auto p-4">
            {/* Routes will be rendered here }
          </div> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
