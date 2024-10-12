import React from 'react';

const VulnerabilitiesTable = ({ vulnerabilities }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instance ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Security Group</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vulnerability</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Level</th>
          </tr>
        </thead>
        <tbody>
          {vulnerabilities.length > 0 ? (
            vulnerabilities.map((vuln) => (
              <tr key={vuln.id} className="border-b">
                <td className="px-6 py-4 whitespace-nowrap">{vuln.instanceId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{vuln.securityGroup}</td>
                <td className="px-6 py-4 whitespace-nowrap">{vuln.description}</td>
                <td className={`px-6 py-4 whitespace-nowrap ${vuln.riskLevel === 'High' ? 'text-red-600' : 'text-green-600'}`}>
                  {vuln.riskLevel}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                No vulnerabilities found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VulnerabilitiesTable;
