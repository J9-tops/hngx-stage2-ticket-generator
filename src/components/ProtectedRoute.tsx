import React from "react";
import { Navigate } from "react-router-dom";
import { useTicketContext } from "../schema/TicketProvider";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { formData } = useTicketContext();
  const shouldRedirect =
    formData.profilePicture === "" ||
    formData.user.email === "" ||
    formData.user.name === "";
  return shouldRedirect ? <Navigate to="/details" replace /> : children;
};

export default ProtectedRoute;
