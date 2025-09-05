// // import { useState } from "react";
// import { ENDPOINTS } from "../../routes/endPoints";
// import { Link, useLocation } from "react-router-dom";

// import {
//   Home,
//   Users,
//   TestTube,
//   UserCheck,
//   Shield,
//   FileText,
// } from "lucide-react";

// export default function Sidebar() {
//   const location = useLocation(); // để biết route hiện tại

//   const sidebarItems = [
//     { icon: Home, label: "Dashboard", to: ENDPOINTS.USER.DASHBOARD },
//     { icon: TestTube, label: "Test Order", to: ENDPOINTS.USER.TESTORDERS },
//     { icon: Users, label: "Users", to: ENDPOINTS.USER.USERS },
//     { icon: UserCheck, label: "Patient", to: ENDPOINTS.USER.PATIENTS },
//     { icon: Shield, label: "Role", to: ENDPOINTS.USER.ROLES },
//     { icon: FileText, label: "Log", to: ENDPOINTS.USER.LOG },
//   ];

//   return (
//     <div className="flex h-screen bg-white">
//       {/* Sidebar */}
//       <div className="w-[250px] bg-white border-r border-gray-200 flex flex-col">
//         {/* Logo */}
//         <div className="flex flex-col items-center md:items-start pl-8">
//           <img
//             src="https://c.animaapp.com/JykgXKim/img/blood-donation-icon-png-5@2x.png"
//             alt="Logo"
//             className="w-[100px] h-[100px]"
//           />
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 px-4 py-6">
//           <ul className="space-y-2">
//             {sidebarItems.map((item, index) => {
//               const isActive = location.pathname === item.to;

//               return (
//                 <li key={index}>
//                   <Link
//                     to={item.to}
//                     className={`flex items-center px-4 py-3 rounded-lg text-lg transition-colors relative ${
//                       isActive
//                         ? "text-red-600 bg-red-50"
//                         : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
//                     }`}
//                   >
//                     {isActive && (
//                       <div className="absolute left-0 top-0 w-1.5 h-full bg-red-600 rounded-r-lg"></div>
//                     )}
//                     <item.icon className="w-6 h-6 mr-4" />
//                     {item.label}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// }
import { ENDPOINTS } from "../../routes/endPoints";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  TestTube,
  UserCheck,
  Shield,
  FileText,
} from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  // Lấy thông tin người dùng và phân quyền từ localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const userPrivileges = user?.scope?.split(" ") || [];

  // Danh sách sidebar cùng với quyền tương ứng (nếu có)
  const sidebarItems = [
    { icon: Home, label: "Dashboard", to: ENDPOINTS.USER.DASHBOARD },
    {
      icon: TestTube,
      label: "Test Order",
      to: ENDPOINTS.USER.TESTORDERS,
      permission: "READ_TEST_ORDER",
    },
    {
      icon: Users,
      label: "Users",
      to: ENDPOINTS.USER.USERS,
      permission: "VIEW_USER",
    },
    {
      icon: UserCheck,
      label: "Patient",
      to: ENDPOINTS.USER.PATIENTS,
      permission: "VIEW_PATIENT",
      // permission: "VIEW_PATIENT",
    },
    {
      icon: Shield,
      label: "Role",
      to: ENDPOINTS.USER.ROLES,
      permission: "VIEW_ROLE",
    },
    {
      icon: FileText,
      label: "Log",
      to: ENDPOINTS.USER.LOG,
      permission: "READ_LOG",
    },
  ];

  // Chỉ hiển thị các mục mà người dùng có quyền hoặc không yêu cầu quyền
  const filteredSidebarItems = sidebarItems.filter(
    (item) => !item.permission || userPrivileges.includes(item.permission)
  );

  return (
    <div className="flex h-screen bg-white">
      <div className="w-[250px] bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start pl-8">
          <img
            src="https://c.animaapp.com/JykgXKim/img/blood-donation-icon-png-5@2x.png"
            alt="Logo"
            className="w-[100px] h-[100px]"
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {filteredSidebarItems.map((item, index) => {
              const isActive = location.pathname === item.to;

              return (
                <li key={index}>
                  <Link
                    to={item.to}
                    className={`flex items-center px-4 py-3 rounded-lg text-lg transition-colors relative ${
                      isActive
                        ? "text-red-600 bg-red-50"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 w-1.5 h-full bg-red-600 rounded-r-lg"></div>
                    )}
                    <item.icon className="w-6 h-6 mr-4" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
