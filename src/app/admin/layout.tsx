"use client";

import Login from "@/components/admin-panel/Login";
import { useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";
import React from "react";

// Corrected component name to start with an uppercase letter
const Layout = () => {
  // Comment out or remove the unused variable to avoid the ESLint warning
  const isLoading = useAppSelector((store) => store.loadingReducer);
  const { data: session } = useSession();

  // Use the isLoading variable if needed, or remove it if unnecessary
  // For demonstration, we'll use it in a simple condition:
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Show login page if the user is not authenticated
  if (!session?.user) {
    return <Login />;
  }

  // Render the main content if the user is authenticated
  return <div>this is layout</div>;
};

export default Layout; // Make sure to export the component with a capitalized name
