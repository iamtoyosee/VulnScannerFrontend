import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ContentArea from '../components/ContentArea';
import { fetchEC2Instances } from '../services/api';

const Dashboard = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [ec2Instances, setEc2Instances] = useState([]);
  const [currentSection, setCurrentSection] = useState('Dashboard');

  // Fetch EC2 instances handler
  const handleFetchEC2Instances = async () => {
    setLoading(true);
    setErrorMessage('');
    try {
      const data = await fetchEC2Instances();
      setEc2Instances(data.instances);
    } catch (error) {
      setErrorMessage('Error fetching EC2 instances.');
    } finally {
      setLoading(false);
    }
  };

  // Menu items for the sidebar
  const menuItems = ['Dashboard', 'EC2 Instances', 'Security Groups', 'Port Scanning', 'AWS Credentials'];

  return (
    <div className="flex font-worksans bg-gray-900 min-h-screen ">
      {/* Sidebar */}
      <Sidebar
        menuItems={menuItems}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      {/* Main Content */}
      <ContentArea
        currentSection={currentSection}
        ec2Instances={ec2Instances}
        handleFetchEC2Instances={handleFetchEC2Instances}
        setResponseMessage={setResponseMessage}
        setLoading={setLoading}
        setErrorMessage={setErrorMessage}
        responseMessage={responseMessage}
        loading={loading}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default Dashboard;
