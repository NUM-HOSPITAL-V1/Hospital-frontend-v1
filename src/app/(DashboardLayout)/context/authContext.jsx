import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import authService from "../../../utils/authService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = () => {
      if (typeof window !== "undefined") {
        const storedUser = localStorage.getItem("USER");
        if (storedUser) {
          try {
            setUser(JSON.parse(storedUser));
          } catch (error) {
            console.error("User parse алдаа:", error);
            localStorage.removeItem("USER");
          }
        }
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  /**
   * Login user with credentials
   */
  const login = async (credentials) => {
    try {
      setLoading(true);
      const data = await authService.login(credentials);
      
      // Store user data in localStorage
      const userData = {
        token: data.accessToken,
        user: data.user,
      };
      
      localStorage.setItem("USER", JSON.stringify(userData));
      setUser(userData);
      
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  /**
   * Register a new user
   */
  const register = async (userData) => {
    try {
      setLoading(true);
      const data = await authService.register(userData);
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  /**
   * Logout user
   */
  const logout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("USER");
    
    // Reset user state
    setUser(null);
    
    // Redirect to login page
    if (typeof window !== "undefined") {
      window.location.href = "/authentication/login";
    }
  };

  // Check if user is logged in
  const isLoggedIn = !!user;
  
  // Get token from user object
  const token = user?.token;
  
  // Get user role from user object
  const role = user?.user?.role;

  // Context value
  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isLoggedIn,
    token,
    role,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);