import { useState } from "react";
import {
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Cpu,
  HardDrive,
  Database,
  Wifi,
  Server,
  Zap,
  Eye,
  Bell,
  LogOut,
  Shield,
  Download,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample data for demonstration
  const stats = [
    {
      title: "Tổng người dùng",
      value: "98",
      subtitle: "6 đăng ký hôm nay",
      trend: "+12%",
      icon: Users,
      color: "blue",
    },
    {
      title: "Nội dung",
      value: "50",
      subtitle: "23 chờ duyệt",
      trend: "+5%",
      icon: BookOpen,
      color: "red",
    },
    {
      title: "Chứng chỉ",
      value: "6",
      subtitle: "12 ngày vừa qua",
      trend: "+100%",
      icon: Award,
      color: "yellow",
    },
    {
      title: "Doanh thu",
      value: "N/A",
      subtitle: "Tỷ lệ chuyển đổi: 12.5%",
      trend: "+N/A%",
      icon: TrendingUp,
      color: "green",
    },
  ];

  const systemMetrics = [
    { name: "CPU Usage", value: "52%", icon: Cpu, color: "green" },
    { name: "Memory", value: "35%", icon: HardDrive, color: "yellow" },
    { name: "Storage", value: "61%", icon: Database, color: "green" },
    { name: "Network", value: "89%", icon: Wifi, color: "green" },
    { name: "Database", value: "34%", icon: Server, color: "green" },
    { name: "API Response", value: "156ms", icon: Zap, color: "green" },
  ];

  const recentActivities = [
    {
      title: "Phát hiện nhiều lần đăng nhập thất bại từ IP 192.168.1.100",
      time: "2 phút trước",
      user: "System",
      priority: "HIGH",
      type: "error",
    },
    {
      title: 'Khóa học "Advanced SQL Injection" bị báo cáo vi phạm nội dung',
      time: "5 phút trước",
      user: "nhatphamyt@gmail.com",
      priority: "HIGH",
      type: "error",
    },
    {
      title:
        "Người dùng buiminhhieu123@gmail.com bị tạm khóa do vi phạm điều khoản",
      time: "15 phút trước",
      user: "admin",
      priority: "MEDIUM",
      type: "warning",
    },
    {
      title: 'Series "Web Security Basics" đã được duyệt và xuất bản',
      time: "1 giờ trước",
      user: "QuanTQ",
      priority: "LOW",
      type: "success",
    },
  ];

  const actionCards = [
    {
      title: "Duyệt nội dung",
      subtitle: "23 nội dung chờ duyệt",
      button: "Xem ngay",
      color: "blue",
      icon: Eye,
    },
    {
      title: "Kiểm tra chứng chỉ",
      subtitle: "12 chứng đ�� được cấp cho học viên",
      button: "Kiểm tra",
      color: "orange",
      icon: Shield,
    },
    {
      title: "Tạo báo cáo",
      subtitle: "Xuất báo cáo hệ thống",
      button: "Tạo báo cáo",
      color: "purple",
      icon: Download,
    },
  ];

  const getColorClasses = (color, type) => {
    const colors = {
      blue: {
        bg: "bg-blue-500",
        text: "text-blue-400",
        border: "border-blue-500/30",
      },
      red: {
        bg: "bg-red-500",
        text: "text-red-400",
        border: "border-red-500/30",
      },
      yellow: {
        bg: "bg-yellow-500",
        text: "text-yellow-400",
        border: "border-yellow-500/30",
      },
      green: {
        bg: "bg-green-500",
        text: "text-green-400",
        border: "border-green-500/30",
      },
      orange: {
        bg: "bg-orange-500",
        text: "text-orange-400",
        border: "border-orange-500/30",
      },
      purple: {
        bg: "bg-purple-500",
        text: "text-purple-400",
        border: "border-purple-500/30",
      },
    };
    return (colors[color] && colors[color][type]) || colors.blue[type];
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "HIGH":
        return "bg-gradient-to-r from-red-500 to-red-600";
      case "MEDIUM":
        return "bg-gradient-to-r from-yellow-500 to-yellow-600";
      case "LOW":
        return "bg-gradient-to-r from-green-500 to-green-600";
      default:
        return "bg-gray-500";
    }
  };

  const getActivityBorderColor = (type) => {
    switch (type) {
      case "error":
        return "border-l-red-500";
      case "warning":
        return "border-l-yellow-500";
      case "success":
        return "border-l-green-500";
      default:
        return "border-l-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lozo-dark via-gray-900 to-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-900 to-orange-800 border-b border-orange-700/50 px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Branding */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">LozoAcademy</span>
              <div className="bg-red-600 px-2 py-1 rounded text-white text-sm font-medium">
                ADMIN
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors">
              <Users className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors relative">
              <Bell className="w-4 h-4" />
              <span>Xin chào, admin</span>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
                3
              </div>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors">
              <LogOut className="w-4 h-4" />
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-8 space-y-8">
        {/* Dashboard Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-gray-400 text-xl mt-2">
              Quản lý và giám sát hệ thống LozoAcademy
            </p>
          </div>

          <button className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-xl font-medium hover:from-red-600 hover:to-red-700 transition-all shadow-lg">
            <Download className="w-4 h-4" />
            Xuất báo cáo
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`p-4 rounded-xl border ${getColorClasses(stat.color, "border")} bg-gradient-to-br ${getColorClasses(stat.color, "bg")}/20`}
                  >
                    <IconComponent
                      className={`w-8 h-8 ${getColorClasses(stat.color, "text")}`}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 font-medium">
                      {stat.trend}
                    </span>
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-400 text-lg">{stat.title}</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-gray-500">{stat.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* System Status */}
        <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-8 p-6 bg-gradient-to-r from-red-500/10 to-transparent rounded-lg">
            <Activity className="w-7 h-7 text-red-400" />
            <h2 className="text-2xl font-bold text-gray-200">
              Tình trạng hệ thống
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {systemMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gray-700/50 rounded-xl p-4 mb-4">
                    <IconComponent className="w-8 h-8 text-gray-400 mx-auto" />
                    <div className="mt-4 h-1 bg-gray-600 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getColorClasses(metric.color)} transition-all duration-500`}
                        style={{
                          width:
                            metric.name === "API Response"
                              ? "75%"
                              : metric.value,
                        }}
                      />
                    </div>
                  </div>
                  <p className="text-xl font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {metric.value}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{metric.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-2">
          <div className="flex flex-wrap gap-2">
            {[
              "Tổng quan",
              "Quản lý nội dung",
              "Quản lý người dùng",
              "Chứng chỉ",
            ].map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className="px-8 py-3 text-gray-400 hover:text-white transition-colors rounded-xl text-lg"
              >
                {tab}
              </button>
            ))}
            <div className="ml-auto">
              <div className="w-9 h-9 bg-red-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="xl:col-span-2">
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Hoạt động gần đây
                </h3>
                <button className="text-red-400 hover:text-red-300 transition-colors font-medium text-lg">
                  Làm mới
                </button>
              </div>

              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className={`border-l-4 ${getActivityBorderColor(activity.type)} bg-${activity.type === "error" ? "red" : activity.type === "warning" ? "yellow" : "green"}-500/5 backdrop-blur-sm rounded-r-xl p-6`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-3">
                        <p className="text-gray-200 text-lg">
                          {activity.title}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-500 rounded-full" />
                            <span>{activity.time}</span>
                          </div>
                          <span>by {activity.user}</span>
                          <span
                            className={`px-3 py-1 rounded-full text-white text-xs font-medium ${getPriorityColor(activity.priority)}`}
                          >
                            {activity.priority}
                          </span>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Cards */}
          <div className="space-y-8">
            {actionCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 shadow-lg"
                >
                  <div className="text-center space-y-6">
                    <div
                      className={`w-20 h-20 mx-auto rounded-2xl border border-gray-600 bg-gradient-to-br ${getColorClasses(card.color, "bg")}/20 flex items-center justify-center`}
                    >
                      <IconComponent
                        className={`w-10 h-10 ${getColorClasses(card.color, "text")}`}
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                        {card.title}
                      </h4>
                      <p className="text-gray-400">{card.subtitle}</p>
                    </div>
                    <button
                      className={`w-full py-3 rounded-xl text-white font-medium bg-gradient-to-r ${card.color === "blue" ? "from-blue-500 to-blue-600" : card.color === "orange" ? "from-orange-500 to-orange-600" : "from-purple-500 to-purple-600"} hover:opacity-90 transition-opacity shadow-lg`}
                    >
                      {card.button}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
