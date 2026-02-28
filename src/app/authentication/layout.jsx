"use client";
import React from "react";
import { Box } from "@mui/material";
import { AuthProvider } from "../(DashboardLayout)/context/authContext";

export default function AuthLayout({ children }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}