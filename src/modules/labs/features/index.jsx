import React from "react";
import {
  Shield,
  Users,
  LogOut,
  Search,
  Filter,
  CheckCircle,
  Clock,
  Award,
  Wifi,
  Database,
  Code2,
  Play,
  Flag,
  Activity,
} from "lucide-react";
import Header from "../../../components/Header/Header";

const Labs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-lozo-dark to-lozo-darker">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative px-80 py-16 border-b border-lozo-primary/20 bg-gradient-to-b from-lozo-primary/30 to-lozo-secondary/30">
        <div className="max-w-[1280px] mx-auto px-8 py-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-lozo-primary/30 bg-lozo-primary/20 mb-8">
            <Flag className="w-4 h-4 text-lozo-primary" />
            <span className="text-lozo-primary text-sm font-medium">
              Nền tảng luyện tập CTF toàn diện
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-lozo-primary to-lozo-secondary bg-clip-text text-transparent">
            Thực hành LABS
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Những bài Labs mô phỏng được thiết kế từ mức Cơ bản cho tới Nâng cao
            cho người học rèn luyện kỹ năng an toàn thông tin trong môi trường
            thực tế, giúp củng cố kiến thức và nâng cao khả năng ứng phó với các
            tình huống tấn công mạng đa dạng.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1280px] mx-auto px-8 py-8 space-y-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl border border-gray-600/50 bg-gray-900/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-semibold text-white mb-1">28</div>
                <div className="text-gray-400 text-sm font-semibold">
                  Labs hoàn thành
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-lozo-primary to-lozo-secondary flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-gray-600/50 bg-gray-900/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-semibold text-white mb-1">
                  156
                </div>
                <div className="text-gray-400 text-sm font-semibold">
                  Giờ thực hành
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-lozo-primary to-lozo-secondary flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-gray-600/50 bg-gray-900/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-semibold text-white mb-1">
                  4,250
                </div>
                <div className="text-gray-400 text-sm font-semibold">
                  Điểm kinh nghiệm
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-experience to-experience-dark flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-gray-600/50 bg-gray-900/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-semibold text-white mb-1">
                  #127
                </div>
                <div className="text-gray-400 text-sm font-semibold">
                  Xếp hạng
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-lozo-secondary to-lozo-primary flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm labs..."
              className="w-full pl-10 pr-4 py-4 rounded-lg border border-gray-600/50 bg-gray-900/50 text-white placeholder-gray-400 focus:outline-none focus:border-lozo-primary"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select className="px-4 py-4 rounded-lg border border-gray-600/50 bg-gray-900/50 text-white focus:outline-none focus:border-lozo-primary">
              <option>Tất cả</option>
              <option>Cơ bản</option>
              <option>Trung cấp</option>
              <option>Nâng cao</option>
            </select>
          </div>
        </div>

        {/* Lab Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Network Security Basics - Completed */}
          <div className="p-6 rounded-xl border border-gray-600/50 bg-gray-900/30 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-lozo-primary to-lozo-secondary flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Network Security Basics
                  </h3>
                  <span className="inline-block px-2 py-1 text-xs rounded border border-difficulty-basic/20 bg-difficulty-basic/10 text-difficulty-basic">
                    Cơ bản
                  </span>
                </div>
              </div>
              <CheckCircle className="w-5 h-5 text-difficulty-basic" />
            </div>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Khám phá các khái niệm cơ bản về bảo mật mạng, phân tích traffic
              và phát hiện xâm nhập.
            </p>

            <div className="flex items-center text-gray-400 text-sm mb-4">
              <Clock className="w-4 h-4 mr-1" />
              <span>8 bài lab</span>
            </div>

            <button className="w-full bg-success text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Hoàn thành</span>
            </button>
          </div>

          {/* SQL Injection Practice - In Progress */}
          <div className="p-6 rounded-xl border border-gray-600/50 bg-gray-900/30 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-lozo-primary to-lozo-secondary flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    SQL Injection Practice
                  </h3>
                  <span className="inline-block px-2 py-1 text-xs rounded border border-difficulty-intermediate/20 bg-difficulty-intermediate/10 text-difficulty-intermediate">
                    Trung cấp
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Thực hành các kỹ thuật SQL Injection từ cơ bản đến nâng cao trên
              các ứng dụng web thực tế.
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Tiến độ</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-lozo-primary to-lozo-secondary h-2 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>

            <div className="flex items-center text-gray-400 text-sm mb-4">
              <Clock className="w-4 h-4 mr-1" />
              <span>12 bài lab</span>
            </div>

            <button className="w-full bg-gradient-to-r from-lozo-dark to-lozo-secondary text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2">
              <Play className="w-4 h-4" />
              <span>Tiếp tục</span>
            </button>
          </div>

          {/* Reverse Engineering Malware - In Progress */}
          <div className="p-6 rounded-xl border border-gray-600/50 bg-gray-900/30 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-lozo-primary to-lozo-secondary flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Reverse Engineering Malware
                  </h3>
                  <span className="inline-block px-2 py-1 text-xs rounded border border-difficulty-advanced/20 bg-difficulty-advanced/10 text-difficulty-advanced">
                    Nâng cao
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Phân tích mã độc, reverse engineering và hiểu rõ cách thức hoạt
              động của malware.
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Tiến độ</span>
                <span>23%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-lozo-primary to-lozo-secondary h-2 rounded-full"
                  style={{ width: "23%" }}
                ></div>
              </div>
            </div>

            <div className="flex items-center text-gray-400 text-sm mb-4">
              <Clock className="w-4 h-4 mr-1" />
              <span>15 bài lab</span>
            </div>

            <button className="w-full bg-gradient-to-r from-lozo-dark to-lozo-secondary text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2">
              <Play className="w-4 h-4" />
              <span>Tiếp tục</span>
            </button>
          </div>

          {/* Additional Lab Cards */}
          <div className="p-6 rounded-xl border border-gray-600/50 bg-gray-900/30 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-lozo-primary to-lozo-secondary flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Penetration Testing Lab
                  </h3>
                  <span className="inline-block px-2 py-1 text-xs rounded border border-difficulty-advanced/20 bg-difficulty-advanced/10 text-difficulty-advanced">
                    Nâng cao
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Thực hiện kiểm tra thâm nhập toàn diện trên hệ thống và ứng dụng
              web.
            </p>

            <div className="flex items-center text-gray-400 text-sm mb-4">
              <Clock className="w-4 h-4 mr-1" />
              <span>20 bài lab</span>
            </div>

            <button className="w-full bg-gradient-to-r from-lozo-dark to-lozo-secondary text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2">
              <span>Bắt đầu Lab</span>
            </button>
          </div>

          <div className="p-6 rounded-xl border border-gray-600/50 bg-gray-900/30 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-lozo-primary to-lozo-secondary flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Digital Forensics Investigation
                  </h3>
                  <span className="inline-block px-2 py-1 text-xs rounded border border-difficulty-intermediate/20 bg-difficulty-intermediate/10 text-difficulty-intermediate">
                    Trung cấp
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Điều tra số, phân tích bằng chứng kỹ thuật số và khôi phục dữ liệu
              đã bị xóa.
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Tiến độ</span>
                <span>40%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-lozo-primary to-lozo-secondary h-2 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>

            <div className="flex items-center text-gray-400 text-sm mb-4">
              <Clock className="w-4 h-4 mr-1" />
              <span>10 bài lab</span>
            </div>

            <button className="w-full bg-gradient-to-r from-lozo-dark to-lozo-secondary text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2">
              <Play className="w-4 h-4" />
              <span>Tiếp tục</span>
            </button>
          </div>

          <div className="p-6 rounded-xl border border-gray-600/50 bg-gray-900/30 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-lozo-primary to-lozo-secondary flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Mobile App Security Testing
                  </h3>
                  <span className="inline-block px-2 py-1 text-xs rounded border border-difficulty-advanced/20 bg-difficulty-advanced/10 text-difficulty-advanced">
                    Nâng cao
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Kiểm tra bảo mật ứng dụng di động, phân tích APK và iOS app
              security.
            </p>

            <div className="flex items-center text-gray-400 text-sm mb-4">
              <Clock className="w-4 h-4 mr-1" />
              <span>14 bài lab</span>
            </div>

            <button
              className="w-full bg-gray-600 text-gray-400 py-3 rounded-lg font-semibold"
              disabled
            >
              Đã khóa
            </button>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="p-8 rounded-2xl border border-lozo-primary/20 bg-gradient-to-r from-lozo-primary/20 to-lozo-secondary/20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Thành tựu gần đây
            </h2>
            <p className="text-gray-300">
              Chúc mừng bạn đã đạt được những mốc quan trọng!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-experience/20 bg-gray-900/50 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-experience to-experience-dark flex items-center justify-center">
                <Flag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                First Blood
              </h3>
              <p className="text-gray-400 text-sm">
                Hoàn thành Challenge CTF đầu tiên
              </p>
            </div>

            <div className="p-6 rounded-xl border border-lozo-primary/20 bg-gray-900/50 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-lozo-primary to-lozo-secondary flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                Security Expert
              </h3>
              <p className="text-gray-400 text-sm">Hoàn thành 25 labs</p>
            </div>

            <div className="p-6 rounded-xl border border-lozo-primary/20 bg-gray-900/50 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-lozo-primary to-lozo-secondary flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                Time Master
              </h3>
              <p className="text-gray-400 text-sm">100+ giờ thực hành</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Labs;
