import React, { useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import CreditNotes from './components/CreditNotes';
import Customers from './components/Customers';
import DebitNotes from './components/DebitNotes';
import DeliveryChallans from './components/DeliveryChallans';
import Einvoices from './components/E-invoices';
import EWayBills from './components/EWayBills';
import Expenses from './components/Expenses';
import Warehouses from './components/Warehouses';
import Vendors from './components/Content';
import InventoryTimeline from './components/Timeline';
import Subscriptions from './components/Subscriptions';
import Settlements from './components/Settlements';
import Quotations from './components/Quotations';
import Purchases from './components/Purchases';
import PurchaseOrders from './components/PurchaseOrders';
import ProFormaInvoices from './components/ProFormaInvoices';
import ProductsAndServices from './components/ProductAndServices';
import PaymentTimeline from './components/PaymentTimeline';
import PaymentLinks from './components/PaymentLinks';
import Journals from './components/Journals';
import Invoices from './components/Invoices';
import IndirectIncome from './components/IndirectIncome';
import Tutorials from './components/Tutorials';
import Insights from './components/Insights';
import Settings from './components/Settings';
import InProgress from './components/Reports';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Content /> },
      { path: "/creditnotes", element: <CreditNotes /> },
      { path: "/customers", element: <Customers /> },
      { path: "/debitnotes", element: <DebitNotes /> },
      { path: "/deliverychallans", element: <DeliveryChallans /> },
      { path: "/e-invoices", element: <Einvoices /> },
      { path: "/e-waybills", element: <EWayBills /> },
      { path: "/expenses", element: <Expenses /> },
      { path: "/warehouses", element: <Warehouses /> },
      { path: "/vendors", element: <Vendors /> },
      { path: "/timeline", element: <InventoryTimeline /> },
      { path: "/subscriptions", element: <Subscriptions /> },
      { path: "/settlements", element: <Settlements /> },
      { path: "/quotations", element: <Quotations /> },
      { path: "/purchases", element: <Purchases /> },
      { path: "/purchaseorders", element: <PurchaseOrders /> },
      { path: "/proforminvoices", element: <ProFormaInvoices /> },
      { path: "/products&services", element: <ProductsAndServices /> },
      { path: "/timline", element: <PaymentTimeline /> },
      { path: "/paymentlinks", element: <PaymentLinks /> },
      { path: "/journals", element: <Journals /> },
      { path: "/invoices", element: <Invoices /> },
      { path: "/indirectincome", element: <IndirectIncome /> },
      { path: "/tutorials", element: <Tutorials />},
      { path: "/insights", element: <Insights />},
      { path: "/reports", element: <InProgress/>},
      { path: "/settings", element: <InProgress/>},
      { path: "/onlinestore", element: <InProgress/>},
      { path: "/mydrive", element: <InProgress/>},
    ],
  },
]);

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden bg-[#f9f9f9]">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <Outlet />
      </div>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
