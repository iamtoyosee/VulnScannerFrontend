import React from 'react';

const RiskGauge = ({ score }) => {
  const riskLevel = score >= 80 ? 'High' : score >= 50 ? 'Medium' : 'Low';
  const riskColor = score >= 80 ? 'text-red-500' : score >= 50 ? 'text-yellow-500' : 'text-green-500';

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
      <div className="relative w-40 h-40">
        <div className="absolute w-full h-full rounded-full border-4 border-gray-300">
          <div
            className="absolute w-full h-full rounded-full border-4 transform origin-bottom border-blue-500"
            style={{ transform: `rotate(${(score / 100) * 180}deg)` }}
          ></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold">
          {score}
        </div>
      </div>
      <p className={`mt-4 text-xl ${riskColor} font-semibold`}>{riskLevel} Risk</p>
    </div>
  );
};

export default RiskGauge;
