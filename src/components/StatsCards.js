import React from "react";

const StatsCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      {[
        { title: "EC2 Instances", value: stats.ec2Instances || 0, color: "bg-blue-50", text: "text-blue-600" },
        { title: "Security Groups", value: stats.securityGroups || 0, color: "bg-green-50", text: "text-green-600" },
        { title: "AWS Accounts", value: stats.awsAccounts || 0, color: "bg-yellow-50", text: "text-yellow-600" },
        { title: "Vulnerabilities", value: stats.vulnerabilities || 0, color: "bg-red-50", text: "text-red-600" },
      ].map((item, index) => (
        <div
          key={index}
          className={`${item.color} p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all`}
        >
          <h3 className={`text-lg font-medium ${item.text}`}>{item.title}</h3>
          <p className="text-4xl font-bold text-gray-800">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
