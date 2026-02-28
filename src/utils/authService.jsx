/**
 * Authentication service for login and registration
 */
const API_BASE_URL = "http://localhost:8000/api";

const authService = {
  /**
   * Login with email and password
   * @param {Object} credentials - Login credentials
   * @returns {Promise} Promise with login response
   */
  login: async (credentials) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Нэвтрэхэд алдаа гарлаа!");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  /**
   * Register a new user
   * @param {Object} userData - User registration data
   * @returns {Promise} Promise with registration response
   */
  register: async (userData) => {
    try {
      // Log the data being sent for debugging
      console.log("Registration data:", userData);
      
      // Use patient registration endpoint since that's what our form collects data for
      const endpoint = "/auth/signup/patient";
      
      // Make the API call
      console.log(`Sending request to: ${API_BASE_URL}${endpoint}`);
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      // Log the response status for debugging
      console.log("Response status:", response.status);
      
      // If response is not ok, handle the error
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Registration error response:", errorData);
        throw new Error(errorData.error || "Бүртгэлд алдаа гарлаа!");
      }

      // Parse the response data
      const data = await response.json();
      console.log("Registration success response:", data);
      return data;
    } catch (error) {
      console.error("Registration error details:", error);
      throw error;
    }
  },
};

export default authService;