import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import Admin from "./Admin";
import AdminOnlyRoute from "./AdminOnlyRoute";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/admin/:id"
        element={
          <AdminOnlyRoute>
            <Admin />
          </AdminOnlyRoute>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default AdminRoutes;
