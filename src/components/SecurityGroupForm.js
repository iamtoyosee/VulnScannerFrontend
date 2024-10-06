import React, { useState } from 'react';
import { checkSecurityGroups } from '../services/api';

const SecurityGroupForm = ({ setResponseMessage, setLoading, setErrorMessage }) => {
  const [instanceId, setInstanceId] = useState('');

  const handleCheckSecurityGroups = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    try {
        console.log(instanceId)
      const response = await checkSecurityGroups(instanceId);
      setResponseMessage(JSON.stringify(response));
    } catch (error) {
      setErrorMessage('Error checking security groups.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Check EC2 Instance Security Groups</h2>
      <form onSubmit={handleCheckSecurityGroups} className="space-y-4">
        <input
          type="text"
          placeholder="EC2 Instance ID"
          value={instanceId}
          onChange={(e) => setInstanceId(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
          Check Security Groups
        </button>
      </form>
    </div>
  );
};

export default SecurityGroupForm;
