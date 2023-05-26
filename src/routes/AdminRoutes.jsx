import React from "react";
import { lazy } from "react";
import FullLayout from "../layout/FullLayout";

const AdminCreate = lazy(() => import("../pages/admin/customer/create"));
const AdminList = lazy(() => import("../pages/admin/customer/list"));

const AdminRoutes = () => {
    return {
        path: "/" ,
        element: <FullLayout />,
        children: [
        {
            path: "/",
            element: <AdminList />
        },
        {
            path: "/create",
            element: <AdminCreate />
        },
    ], 
  };
};

export default AdminRoutes;