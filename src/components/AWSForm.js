import React, { useState } from 'react';
import { setAWSCredentials } from '../services/api';

const AWSForm = ({ setResponseMessage, setLoading, setErrorMessage }) => {
  const [awsAccessKey, setAwsAccessKey] = useState('');
  const [awsSecretKey, setAwsSecretKey] = useState('');
  const [awsRegion, setAwsRegion] = useState('');

  const handleSetCredentials = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    const credentials = {
      aws_access_key: awsAccessKey,
      aws_secret_key: awsSecretKey,
      aws_region: awsRegion,
    };
    try {
      await setAWSCredentials(credentials);
      setResponseMessage('Credentials set successfully!');
    } catch (error) {
      setErrorMessage('Failed to set credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Set AWS Credentials</h2>
      <form onSubmit={handleSetCredentials} className="space-y-4">
        <input
          type="text"
          placeholder="AWS Access Key"
          value={awsAccessKey}
          onChange={(e) => setAwsAccessKey(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="AWS Secret Key"
          value={awsSecretKey}
          onChange={(e) => setAwsSecretKey(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="AWS Region"
          value={awsRegion}
          onChange={(e) => setAwsRegion(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Set Credentials
        </button>
      </form>
    </div>
  );
};

export default AWSForm;
