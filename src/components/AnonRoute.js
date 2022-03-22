import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const AnonRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  return !!user ? <Navigate to="/dashboard" replace /> : children;
};