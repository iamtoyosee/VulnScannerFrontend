import React from 'react';

const ActionButtons = () => {
  return (
    <div className="mt-8">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mr-4">
        Rescan Instances
      </button>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mr-4">
        View Logs
      </button>
      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg">
        Resolve Issues
      </button>
    </div>
  );
};

export default ActionButtons;
