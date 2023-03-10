let apiURL;

// Check if the environment is development
if (process.env.NODE_ENV === 'development') {
  // Set the apiURL to the REACT_APP_API_URL environment variable, or to the local server's URL
  apiURL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';
} else {
  // Set the apiURL to the '/api' path
  apiURL = '/api'
}

// Export the apiURL
export default apiURL;
