import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/authContext';
import { CircularProgress, Box } from '@mui/material';

/**
 * Role-based route protection component
 * @param {Object} props - Component props
 * @param {Array} props.allowedRoles - Array of roles allowed to access the route
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.redirectTo - Redirect path for unauthorized users
 */
const ProtectedRoute = ({ 
  allowedRoles = [], 
  children, 
  redirectTo = '/authentication/login' 
}) => {
  const { isLoggedIn, user, loading } = useAuth();
  const router = useRouter();
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    // Wait for auth context to load
    if (!loading) {
      if (!isLoggedIn) {
        // Not logged in, redirect to login
        router.push(redirectTo);
      } else if (allowedRoles.length > 0) {
        // Check if user role is allowed
        const userRole = user?.user?.role;
        
        if (!userRole || !allowedRoles.includes(userRole)) {
          // User role not allowed, redirect to dashboard or home
          router.push('/');
        }
      }
      // Verification complete
      setIsVerifying(false);
    }
  }, [isLoggedIn, user, loading, allowedRoles, router, redirectTo]);

  // Show loading spinner while verifying
  if (loading || isVerifying) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  // Render children if authenticated and authorized
  return children;
};

export default ProtectedRoute;