import React, { useState } from 'react';
import AWSForm from './AWSForm';
import EC2InstanceList from './EC2InstanceList';
import SecurityGroupForm from './SecurityGroupForm';
import PortScanForm from './PortScanForm';
import Loader from './Loader';
import { fetchEC2Instances } from '../services/api';

const Inspector = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [ec2Instances, setEc2Instances] = useState([]);

  // Handle fetching EC2 instances
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

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-8">EC2 Inspector</h1>

        {/* Loading Indicator */}
        <Loader loading={loading} />

        {/* Error Message */}
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

        {/* Success/Response Message */}
        {responseMessage && <p className="text-green-500 mb-4">{responseMessage}</p>}

        {/* AWS Credentials Form */}
        <AWSForm
          setResponseMessage={setResponseMessage}
          setLoading={setLoading}
          setErrorMessage={setErrorMessage}
        />

        {/* Fetch EC2 Instances */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Fetch EC2 Instances</h2>
          <button
            onClick={handleFetchEC2Instances}
            className="bg-green-500 text-white px-4 py-2 rounded">
            Fetch Instances
          </button>

          {/* EC2 Instance List */}
          <EC2InstanceList instances={ec2Instances} />
        </div>

        {/* Security Group Form */}
        <div className="mt-8">
          <SecurityGroupForm
            setResponseMessage={setResponseMessage}
            setLoading={setLoading}
            setErrorMessage={setErrorMessage}
          />
        </div>

        {/* Port Scan Form */}
        <div className="mt-8">
          <PortScanForm
            setResponseMessage={setResponseMessage}
            setLoading={setLoading}
            setErrorMessage={setErrorMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default Inspector;
