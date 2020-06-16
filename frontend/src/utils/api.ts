import axios from 'axios';

/**
 * Wrapper for axios that uses our configuration.
 */
export default axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8000'
});
