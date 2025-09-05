// import React from "react";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
// import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import PropTypes from "prop-types";
import LoadingOverlay from "../components/LoadingOverlay/LoadingOverlay";
import NotificationPanel from "../components/NotificationPanel";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen bg-gray-100">
          <Header />
          <main className="flex-1 p-4">
            <LoadingOverlay />
            <NotificationPanel />
            {children}
          </main>
        </div>
      </div>
    </>
  );
};
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired, // hoặc .optional nếu bạn muốn không bắt buộc
};
export default DashboardLayout;
