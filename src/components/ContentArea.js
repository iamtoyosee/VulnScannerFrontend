import React from 'react';
import AWSForm from './AWSForm';
import EC2InstanceList from './EC2InstanceList';
import SecurityGroupForm from './SecurityGroupForm';
import PortScanForm from './PortScanForm';
import StatsDashboard from '../pages/StatsDashboard';

const ContentArea = ({
  currentSection,
  ec2Instances,
  handleFetchEC2Instances,
  setResponseMessage,
  setLoading,
  setErrorMessage,
  responseMessage,
  loading,
  errorMessage
}) => {
  return (
    <div className="w-full ml-60 p-16 bg-transparent">
      {loading && <p className="text-blue-500">Loading...</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {responseMessage && <p className="text-green-500">{responseMessage}</p>}

      {currentSection === 'Dashboard' && (
          <StatsDashboard/>
      )}

      {currentSection === 'AWS Credentials' && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex justify-center">AWS Credentials</h2>
          <AWSForm
            setResponseMessage={setResponseMessage}
            setLoading={setLoading}
            setErrorMessage={setErrorMessage}
          />
        </div>
      )}

      {currentSection === 'EC2 Instances' && (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-semibold mb-4 flex justify-center">Fetch EC2 Instances</h2>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleFetchEC2Instances}
          >
            Fetch Instances
          </button>
          <EC2InstanceList instances={ec2Instances} />
        </div>
      )}

      {currentSection === 'Security Groups' && (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-bold mb-4 flex justify-center">Security Group Form</h2>
          <SecurityGroupForm
            setResponseMessage={setResponseMessage}
            setLoading={setLoading}
            setErrorMessage={setErrorMessage}
          />
        </div>
      )}

      {currentSection === 'Port Scanning' && (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-semibold mb-4">Port Scan Form</h2>
          <PortScanForm
            setResponseMessage={setResponseMessage}
            setLoading={setLoading}
            setErrorMessage={setErrorMessage}
          />
        </div>
      )}
    </div>
  );
};

export default ContentArea;
