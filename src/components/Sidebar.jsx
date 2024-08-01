import React, { useState } from 'react';
import {FaChevronDown, FaChevronUp, FaShoppingCart, FaFileAlt, FaReceipt, FaBoxes, FaWarehouse, FaCreditCard, FaUsers, FaUserTie, FaChartLine, FaFileInvoiceDollar, FaStore, FaCloudUploadAlt, FaCog, FaQuestionCircle, FaCommentAlt, FaBars, FaMoneyBillWave } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MenuItem = ({ icon, text, hasSubItems = false, isNew = false, isCollapsed, subItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubItems = (e) => {
    if (hasSubItems) {
      setIsOpen(!isOpen);
    } else {
      // Allow navigation only if there are no sub-items
      return;
    }
    e.preventDefault(); // Prevent navigation if there are sub-items
  };

  return (
    <div>
      <div 
        className={`flex items-center ${isCollapsed ? "py-3" : "py-1"} px-4 hover:bg-gray-100 cursor-pointer`}
        onClick={toggleSubItems}
      >
        <span className={`text-gray-700 font-[600] ${isCollapsed ? "" : "text-[13px]"} font-inter leading-6`}>{icon}</span>
        {!isCollapsed && (
          <>
            <Link 
              to={`/${text.toLowerCase().replace(/ /g, '')}`} 
              className="text-gray-700 font-[600] text-[13px] leading-6 font-inter pl-2 pr-1"
              onClick={toggleSubItems} // Call toggleSubItems to handle sub-items
            >
              {text}
            </Link>
            {hasSubItems && (
              isOpen ? <FaChevronUp className="text-gray-700 font-[600] text-[13px] leading-6 font-inter" /> 
                     : <FaChevronDown className="text-gray-700 font-[600] text-[13px] leading-6 font-inter" />
            )}
            {isNew && (
              <span className="font-[600] text-[13px] leading-6 italic ml-1 bg-blue-600 text-white text-xs px-1 rounded">NEW</span>
            )}
          </>
        )}
      </div>
      {hasSubItems && isOpen && !isCollapsed && (
        <div className="flex flex-col ml-8">
          {subItems.map((item, index) => (
            <Link 
              key={index} 
              to={`/${item.toLowerCase().replace(/ /g, '')}`} 
              className="text-gray-700 font-[600] text-[13px] leading-6 font-inter cursor-pointer hover:bg-gray-100 px-2 py-1"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};


const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`bg-[#f9f9f9] h-screen ${isOpen ? 'w-[335px]' : 'w-12'} transition-all duration-300 ease-in-out   flex flex-col pt-2`}>
        <div className="flex-grow overflow-y-auto">
      <MenuItem 
        icon={<FaMoneyBillWave />} 
        text="Sales" 
        hasSubItems 
        isCollapsed={!isOpen}
        subItems={['Invoices', 'Credit Notes', 'E-Invoices', 'Subscriptions']}
      />
      <MenuItem icon={<FaShoppingCart />} text="Purchases" hasSubItems isCollapsed={!isOpen} subItems={['Purchases','Purchase Orders','Debit Notes']}/>
      <MenuItem icon={<FaFileAlt />} text="Quotations" hasSubItems isCollapsed={!isOpen} subItems={['Quotations','Pro Form Invoices','Delivery Challans']}/>
      <MenuItem icon={<FaReceipt />} text="Expenses+" hasSubItems isCollapsed={!isOpen} subItems={['Expenses','Indirect Income']}/>
      <div className={`my-2 ${!isOpen ? 'border-t border-gray-200' : ''}`}></div>
      <MenuItem icon={<FaBoxes />} text="Products & Services" isCollapsed={!isOpen} />
      <MenuItem icon={<FaWarehouse />} text="Inventory" hasSubItems isCollapsed={!isOpen} subItems={['Warehouses','Timeline']}/>
      <MenuItem icon={<FaCreditCard />} text="Payments" hasSubItems isCollapsed={!isOpen} subItems={['Timline','Settlements','Payment Links','Journals']}/>
      <MenuItem icon={<FaUsers />} text="Customers" isCollapsed={!isOpen} />
      <MenuItem icon={<FaUserTie />} text="Vendors" isCollapsed={!isOpen} />
      <div className={`my-2 ${!isOpen ? 'border-t border-gray-200' : ''}`}></div>
      <MenuItem icon={<FaChartLine />} text="Insights" isNew isCollapsed={!isOpen} />
      <MenuItem icon={<FaFileAlt />} text="Reports" isCollapsed={!isOpen} />
      <MenuItem icon={<FaFileInvoiceDollar />} text="E-way Bills" isCollapsed={!isOpen} />
      <MenuItem icon={<FaStore />} text="OnlineStore" isCollapsed={!isOpen} />
      <MenuItem icon={<FaCloudUploadAlt />} text="My Drive" isCollapsed={!isOpen} />
      <div className={`my-2 ${!isOpen ? 'border-t border-gray-200' : ''}`}></div>
      <MenuItem icon={<FaCog />} text="Settings" isCollapsed={!isOpen} />
      <MenuItem icon={<FaQuestionCircle />} text="Tutorials" isCollapsed={!isOpen} />
      <MenuItem icon={<FaCommentAlt />} text="Feedback" isCollapsed={!isOpen} />
      <div className={`m-3 p-4 rounded-lg bg-[#E6F2FF] flex justify-center flex-col ${!isOpen ? 'hidden' : ''}`}>
        <p className="font-inter font-extrabold text-[13px] text-center">Enjoy customizable templates, GST reports, and premium support</p>
        <button className="mt-2 bg-white text-black font-extrabold rounded-2xl border-slate-200 border-2 text-sm p-2">Subscribe Now! 🚀</button>
      </div>
    </div>
      <button
        className="absolute bottom-4 left-2 p-2 "
        onClick={toggleSidebar}
      >
        <FaBars className={`transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};

export default Sidebar;