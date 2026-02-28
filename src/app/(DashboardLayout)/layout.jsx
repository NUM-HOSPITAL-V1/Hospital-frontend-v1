"use client";
import { styled, Container, Box, CircularProgress, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "@/app/(DashboardLayout)/layout/header/Header";
import Sidebar from "@/app/(DashboardLayout)/layout/sidebar/Sidebar";
import { useRouter, usePathname } from "next/navigation";
import { AuthProvider, useAuth } from "./context/authContext";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
}));

// Define role-based route access with position distinctions
const routeAccess = {
  // Admin access
  Admin: {
    routes: [
      "/", 
      "/vitals", 
      "/treatment", 
      "/examination", 
      "/customer", 
      "/pharmacy", 
      "/report", 
      "/employee"
    ]
  },
  // Patient access
  Patient: {
    routes: [
      "/"
    ]
  },
  // Medical Staff access based on position
  MedicalStaff: {
    // Common routes for all medical staff
    common: [
      "/",
      "/vitals", 
      "/customer",
    ],
    // Doctor-specific routes
    Doctor: [
      "/examination",
      "/treatment",
      "/report"
    ],
    // Nurse-specific routes
    Nurse: [
      "/nurse",
      "/pharmacy",
      "/treatment"
    ]
  }
};

// Authentication exempt routes (public routes)
const publicRoutes = [
  "/authentication/login",
  "/authentication/register",
  "/authentication/forgot-password",
  "/authentication/reset-password",
];

// Unauthorized access page - shown when a user tries to access a forbidden route
const UnauthorizedAccess = () => {
  const { user } = useAuth();
  
  // Determine the correct home page based on user role and position
  const getHomePage = () => {
    if (!user || !user.user || !user.user.role) return "/";
    
    const role = user.user.role;
    
    if (role === "Patient") {
      return "/patient";
    } else if (role === "MedicalStaff") {
      const position = user.user.position;
      if (position === "Nurse") {
        return "/nurse";
      } else {
        // Default for Doctor and other medical staff
        return "/";
      }
    } else {
      // Admin and others
      return "/";
    }
  };
  
  const homePage = getHomePage();
  
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#f5f5f5" }}
    >
      <Typography variant="h2" color="error" gutterBottom>
        Хандах эрхгүй
      </Typography>
      <Typography variant="h6" color="textSecondary" sx={{ mb: 3 }}>
        Танд энэ хуудсанд хандах эрх байхгүй байна.
      </Typography>
      <Typography
        component="a"
        href={homePage}
        variant="body1"
        sx={{ 
          color: "primary.main", 
          textDecoration: "none",
          "&:hover": { textDecoration: "underline" } 
        }}
      >
        Үндсэн хуудас руу буцах
      </Typography>
    </Box>
  );
};

function LayoutContent({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isRouteChecked, setIsRouteChecked] = useState(false);
  const [showUnauthorized, setShowUnauthorized] = useState(false);

  // Check if a route is allowed for the current user
  const checkRouteAccess = (user, pathname) => {
    if (!user || !user.user || !user.user.role) return false;
    
    const userRole = user.user.role;
    let allowedRoutes = [];
    
    if (userRole === 'MedicalStaff') {
      // Get common routes for medical staff
      allowedRoutes = [...routeAccess.MedicalStaff.common];
      
      // Add position-specific routes
      const position = user.user.position;
      if (position && routeAccess.MedicalStaff[position]) {
        allowedRoutes = [...allowedRoutes, ...routeAccess.MedicalStaff[position]];
      }
    } else {
      // For Admin or Patient, get their routes
      allowedRoutes = routeAccess[userRole]?.routes || [];
    }
    
    // Check exact path match
    if (allowedRoutes.includes(pathname)) {
      return true;
    }
    
    // Check if current path is a sub-route of an allowed route
    // This allows accessing deeper paths like /customer/123 if /customer is allowed
    for (const route of allowedRoutes) {
      if (pathname.startsWith(route + '/')) {
        return true;
      }
    }
    
    return false;
  };

  useEffect(() => {
    // Skip route check for public routes
    if (publicRoutes.includes(pathname)) {
      setIsAuthorized(true);
      setIsRouteChecked(true);
      setShowUnauthorized(false);
      return;
    }

    // Wait for auth to load before checking routes
    if (!loading) {
      if (!user) {
        // Not logged in, redirect to login
        router.push("/authentication/login");
      } else {
        // Check if user has access to the current route
        const hasAccess = checkRouteAccess(user, pathname);
        
        if (hasAccess) {
          setIsAuthorized(true);
          setShowUnauthorized(false);
        } else {
          // Instead of automatic redirect, show unauthorized page
          setIsAuthorized(false);
          setShowUnauthorized(true);
        }
      }
      setIsRouteChecked(true);
    }
  }, [user, loading, pathname, router]);

  // Show loading spinner while checking authorization
  if (loading || !isRouteChecked) {
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

  // Show unauthorized access page if needed
  if (showUnauthorized) {
    return <UnauthorizedAccess />;
  }

  // If it's a public route or user is authorized, render content
  if (publicRoutes.includes(pathname) || isAuthorized) {
    // For public routes, don't show the dashboard layout
    if (publicRoutes.includes(pathname)) {
      return <Box>{children}</Box>;
    }

    // For protected routes, show the dashboard layout
    return (
      <MainWrapper className="mainwrapper">
        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
        />
        {/* Main Wrapper */}
        <PageWrapper className="page-wrapper">
          {/* Header */}
          <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
          {/* PageContent */}
          <Container sx={{ paddingTop: "20px", maxWidth: "1200px" }}>
            <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
          </Container>
        </PageWrapper>
      </MainWrapper>
    );
  }

  // If we get here, show loading (we should be redirecting)
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

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <LayoutContent>{children}</LayoutContent>
    </AuthProvider>
  );
}