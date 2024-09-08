"use client";

import Login from "@/components/admin-panel/Login";
import { useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";
import React from "react";

// Change the component name to start with an uppercase letter
const Layout = () => {
  const isLoading = useAppSelector((store) => store.loadingReducer); // Use this variable or remove it
  const { data: session } = useSession();

  // Use isLoading if needed; otherwise, remove it
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render Login component if no session is found
  if (!session?.user) {
    return <Login />;
  }

  return <div>this is layout</div>;
};

export default Layout; // Export the component with an uppercase letter
