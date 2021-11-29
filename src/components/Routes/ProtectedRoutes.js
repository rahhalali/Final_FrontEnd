import React from 'react';
import { Navigate } from 'react-router';
const ProtectedRoute = ({ children }) => {
    return localStorage.getItem("login") !== null ?
        children : <Navigate to="/" replace /> }
export default ProtectedRoute;