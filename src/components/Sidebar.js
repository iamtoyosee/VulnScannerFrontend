import React from 'react';

const Sidebar = ({ menuItems, currentSection, setCurrentSection }) => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white fixed">
      <div className="p-4 text-xl font-bold">EC2 Inspector</div>
      <hr></hr>
      <ul className="mt-6">
        {menuItems.map((item) => (
          <li
            key={item}
            className={`p-4 cursor-pointer ${
              currentSection === item ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
            onClick={() => setCurrentSection(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
