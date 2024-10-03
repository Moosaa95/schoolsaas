// // // src/auth/PrivateRoute.tsx
// // import React from 'react';
// // import { Navigate } from 'react-router-dom';
// // import { useSelector } from 'react-redux';
// // import { RootState } from '../redux/store'; // Assuming you have a Redux store

// // interface PrivateRouteProps {
// //   allowedRole: 'admin' | 'teacher' | 'student' | 'parent';
// //   children: JSX.Element;
// // }

// // const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRole, children }) => {
// //   const { isAuthenticated, userRole } = useSelector((state: RootState) => state.auth);

// //   if (!isAuthenticated) {
// //     return <Navigate to="/login" />;
// //   }

// //   if (userRole !== allowedRole) {
// //     return <Navigate to="/unauthorized" />;
// //   }

// //   return children;
// // };

// // export default PrivateRoute;

// import { selectIsAuthenticated, selectUserRole } from "../redux/slices/authSlice";
// import { useAppSelector } from "../redux/hooks";
// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   const isAuthenticated = useAppSelector(selectIsAuthenticated);
//   const userRole = useAppSelector(selectUserRole);

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   // Redirect to the correct dashboard based on user role
//   const getDashboardPath = (role: string | null) => {
//     switch (role) {
//       case "admin":
//         return "/dashboard/admin";
//       case "student":
//         return "/dashboard/student";
//       case "teacher":
//         return "/dashboard/teacher";
//       case "parent":
//         return "/dashboard/parent";
//       default:
//         return "/unauthorized";
//     }
//   };

//   return <Navigate to={getDashboardPath(userRole)} replace />;
// };

// export default ProtectedRoute;

import { selectIsAuthenticated, selectUserRole } from "../redux/slices/authSlice";
import { useAppSelector } from "../redux/hooks";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// This component handles authentication checks for all protected routes
const ProtectedRoute: React.FC = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  // If the user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the children components (e.g., DashboardLayout and nested routes)
  return <Outlet />;
};

// Component for handling role-based redirection within the dashboard
const RoleBasedRedirect: React.FC = () => {
  const userRole = useAppSelector(selectUserRole);

  // Redirect to the correct dashboard based on user role
  const getDashboardPath = (role: string | null) => {
    switch (role) {
      case "admin":
        return "/dashboard/admin";
      case "student":
        return "/dashboard/student";
      case "teacher":
        return "/dashboard/teacher";
      case "parent":
        return "/dashboard/parent";
      default:
        return "/unauthorized";
    }
  };

  // Redirect the user to the appropriate dashboard or unauthorized page if role is invalid
  return <Navigate to={getDashboardPath(userRole)} replace />;
};

export { ProtectedRoute, RoleBasedRedirect };
