import React from 'react';

const StatsCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">EC2 Instances</h3>
        <p className="text-3xl font-bold">{stats.ec2Instances || 0}</p>
      </div>

      <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Security Groups</h3>
        <p className="text-3xl font-bold">{stats.securityGroups || 0}</p>
      </div>

      <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">AWS Accounts</h3>
        <p className="text-3xl font-bold">{stats.awsAccounts || 0}</p>
      </div>

      <div className="bg-red-500 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Vulnerabilities</h3>
        <p className="text-3xl font-bold">{stats.vulnerabilities || 0}</p>
      </div>
    </div>
  );
};

export default StatsCards;
