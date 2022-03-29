import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthentication } from "context";
const ProtectedRoutes = ({ specificPart }) => {
    const { authState } = useAuthentication();
    const { isLoggedIn } = authState;
    return (
        <>
            {isLoggedIn ? specificPart : <Navigate replace to="/login" />}
        </>)
}

export { ProtectedRoutes }