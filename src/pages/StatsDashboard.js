import React, { useState, useEffect } from 'react';
import StatsCards from '../components/StatsCards';
import VulnerabilitiesTable from '../components/VulnerabilitiesTable';

const StatsDashboard = () => {
  const [stats, setStats] = useState({
    ec2Instances: null,
    securityGroups: null,
    awsAccounts: null,
    vulnerabilities: null,
  });
  const [vulnerabilities, setVulnerabilities] = useState([]);
  

  useEffect(() => {
    // Simulate fetching data with a timeout
    setTimeout(() => {
      // Fake data for illustration
      setStats({
        ec2Instances: 12,
        securityGroups: 8,
        awsAccounts: 3,
        vulnerabilities: 4,
      });

      // Simulate vulnerabilities
      setVulnerabilities([
        {
          id: 1,
          instanceId: 'i-1234567890abcdef0',
          securityGroup: 'sg-12345678',
          description: 'Open port 22 to the world',
          riskLevel: 'High',
        },
        {
          id: 2,
          instanceId: 'i-0987654321abcdef0',
          securityGroup: 'sg-87654321',
          description: 'Outdated software version',
          riskLevel: 'Medium',
        },
        {
            id: 2,
            instanceId: 'i-0987654321abcdef0',
            securityGroup: 'sg-87654321',
            description: 'Outdated software version',
            riskLevel: 'Medium',
          },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-worksans">
      <h1 className="text-4xl font-bold mb-16 text-center">Cloud Security Dashboard</h1>

      {/* Stats Cards */}
      <StatsCards stats={stats} />

      {/* Vulnerabilities Table */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Vulnerabilities</h2>
        <VulnerabilitiesTable vulnerabilities={vulnerabilities} />
        
      </div>
    </div>
  );
};

export default StatsDashboard;
