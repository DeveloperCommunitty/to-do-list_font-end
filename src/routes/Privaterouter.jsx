// import { useContext } from "react";
import { Navigate,Outlet} from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import React from "react";


// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({requiredRole}) => {

    const {user,signed} = useAuth();

    const role = user?.role || 'USER';

    if (!signed) {
        return <Navigate to ='/' />;
}

    // eslint-disable-next-line react/prop-types
    if (requiredRole && !requiredRole.includes(role)) {
        return <Navigate to='/unauthorized' />;
    }
    return <Outlet />;
}