import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000'; // Replace with your Flask API URL if hosted elsewhere

// User registration
export const registerUser = async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  // User login
  export const loginUser = async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  // Function to set up the headers for requests
  export const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  };

// Function to fetch EC2 instances
export const fetchEC2Instances = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/instances`);
      return response.data;
    } catch (error) {
      console.error("Error fetching EC2 instances:", error);
      throw error;
    }
  };
  

// Function to set AWS credentials
export const setAWSCredentials = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/aws/set`, credentials);
    return response.data;
  } catch (error) {
    console.error("Error setting AWS credentials:", error);
    throw error;
  }
};


// Function to inspect EC2 instance's security groups
export const checkSecurityGroups = async (instanceId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/security-groups`, {
      instance_id: instanceId
    });
    return response.data;
  } catch (error) {
    console.error("Error checking security groups:", error);
    throw error;
  }
};

// Function to scan EC2 instance for open ports
export const scanPorts = async (ipAddress) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ports`, {
      ip_address: ipAddress
    });
    return response.data;
  } catch (error) {
    console.error("Error scanning ports:", error);
    throw error;
  }
};
