import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  const modules = [
    {
      id: 1,
      title: "Giới thiệu An ninh mạng",
      duration: "45 phút",
      description: "Tổng quan về an ninh mạng và các khái niệm cơ bản",
      completed: true,
      featured: true,
    },
    {
      id: 2,
      title: "Giao thức mạng & Dịch vụ",
      duration: "60 phút",
      description: "Tìm hiểu các giao thức TCP/IP, DNS, HTTP/HTTPS",
      completed: true,
    },
    {
      id: 3,
      title: "Quét mạng & Trinh sát",
      duration: "75 phút",
      description: "Kỹ thuật quét mạng và thu thập thông tin",
      completed: false,
      locked: true,
      // pro: true,
    },
    {
      id: 4,
      title: "Tường lửa & Phòng thủ mạng",
      duration: "90 phút",
      description: "Cấu hình và quản lý tường lửa",
      completed: false,
      locked: true,
      // pro: true,
    },
    {
      id: 5,
      title: "Hệ thống phát hiện xâm nhập",
      duration: "50 phút",
      description: "IDS/IPS và giám sát an ninh mạng",
      completed: false,
      locked: true,
      // pro: true,
    },
    {
      id: 6,
      title: "Lý thuyết mã hóa mạng",
      duration: "70 phút",
      description: "Phân tích và khai thác lỗ hổng mạng",
      completed: false,
      locked: true,
      // pro: true,
    },
    {
      id: 7,
      title: "Bảo mật mạng không dây",
      duration: "65 phút",
      description: "WiFi security, WPA/WPA2, và các cuộc tấn công",
      completed: false,
      locked: true,
      // pro: true,
    },
    {
      id: 8,
      title: "Giám sát & Phân tích mạng",
      duration: "80 phút",
      description: "Wireshark, tcpdump và phân tích lưu lượng",
      completed: false,
      locked: true,
      // pro: true,
    },
  ];

  const completedModules = modules.filter(m => m.completed).length;
  const totalModules = modules.length;
  const progressPercentage = (completedModules / totalModules) * 100;

  const remainingModules = [
    { name: "Quét mạng & Trinh sát", duration: "75 phút" },
    { name: "Tường lửa & Phòng thủ mạng", duration: "90 phút" },
    { name: "Hệ thống phát hiện xâm nhập", duration: "50 phút" },
    { name: "Lý thuyết mã hóa mạng", duration: "70 phút" },
    { name: "Bảo mật mạng không dây", duration: "65 phút" },
    { name: "Giám sát & Phân tích mạng", duration: "80 phút" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-['Roboto',sans-serif]">
      {/* Header */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex">
        {/* Sidebar */}
        <Sidebar 
          totalModules={totalModules} 
          completedModules={completedModules} 
          progressPercentage={progressPercentage} 
          modules={modules} 
        />

        {/* Main Content */}
        <MainContent 
          totalModules={totalModules} 
          completedModules={completedModules} 
          progressPercentage={progressPercentage} 
          remainingModules={remainingModules} 
        />
      </div>
    </div>
  );
}
