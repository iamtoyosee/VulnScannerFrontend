import React, { useState } from 'react';
import { scanPorts } from '../services/api';

const PortScanForm = ({ setResponseMessage, setLoading, setErrorMessage }) => {
  const [ipAddress, setIpAddress] = useState('');

  const handlePortScan = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    try {
      const response = await scanPorts(ipAddress);
      setResponseMessage(`Open Ports: ${JSON.stringify(response.open_ports)}`);
    } catch (error) {
      setErrorMessage('Error scanning ports.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Scan EC2 Instance Ports</h2>
      <form onSubmit={handlePortScan} className="space-y-4">
        <input
          type="text"
          placeholder="Instance Public IP"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
          Scan Ports
        </button>
      </form>
    </div>
  );
};

export default PortScanForm;
