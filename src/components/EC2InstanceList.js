import React from 'react';

const EC2InstanceList = ({ instances }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">EC2 Instances</h2>
      <ul className="mt-4 space-y-2">
        {instances.map((instance) => (
          <li key={instance.InstanceId} className="border-b py-2">
            <strong>ID:</strong> {instance.InstanceId}, <strong>State:</strong> {instance.State}, <strong>Public IP:</strong> {instance.PublicIpAddress}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EC2InstanceList;
