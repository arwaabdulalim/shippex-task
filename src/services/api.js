// You can remove the axios import as we'll use the Fetch API which is built into modern browsers and environments like React Native
import { Platform } from 'react-native';

const baseURL = 'https://shippex-demo.bc.brandimic.com/api/';

// A helper function to perform fetch calls with common settings
const fetchWithSettings = async (url, options = {}) => {
  // Apply common headers here
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Simulate a request interceptor by modifying options before the request
  const modifiedOptions = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${baseURL}${url}`, modifiedOptions);
    // Simulate a response interceptor by checking and potentially modifying the response or catching errors
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'An error occurred');
    }
    return response.json(); // Automatically parse JSON response
  } catch (error) {
    // Simulate an error interceptor by modifying the error before throwing it
    error.originalMessage = error.message;
    throw error;
  }
};

// Expose a simplified API service interface
export const apiService = {
  get: (url, body, options) =>
    fetchWithSettings(url, {
      ...options,
      method: 'GET',
      body: JSON.stringify(body),
    }),
  post: (url, body, options) =>
    fetchWithSettings(url, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    }),
};
