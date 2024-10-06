import React from 'react';

const Loader = ({ loading }) => {
  if (!loading) return null;
  return <p className="text-blue-500 mb-4">Loading...</p>;
};

export default Loader;
