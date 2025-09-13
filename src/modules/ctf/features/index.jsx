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
  Flag,
  Play,
  ArrowRight,
  Eye,
  FileText,
  BookOpen,
  Target,
  Key,
  Code2,
  Wifi,
  Database,
  Lock,
} from "lucide-react";
import Header from "../../../components/Header/Header";

const CTF = () => {
  return (
    <div className="min-h-screen bg-[#1A0B2E]">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-8 lg:px-80 py-8 sm:py-12 lg:py-16 border-b border-lozo-primary/20 bg-gradient-to-b from-lozo-primary/30 to-lozo-secondary/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-8 sm:py-12 lg:py-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-lozo-primary/30 bg-lozo-primary/20 mb-6">
            <Flag className="w-4 h-4 text-lozo-primary" />
            <span className="text-lozo-primary text-sm font-medium">
              Nền tảng luyện tập CTF toàn diện
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-lozo-primary to-lozo-secondary bg-clip-text text-transparent">
            Luyện tập CTF Skills
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Nâng cao kỹ năng bảo mật thông qua các thử thách CTF thực tế. Từ cơ
            bản đến nâng cao, mọi level đều có thể tham gia.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-lozo-dark to-lozo-secondary text-white rounded-lg font-semibold shadow-lg shadow-lozo-primary/25 hover:shadow-xl transition-all w-full sm:w-auto">
              <Play className="w-5 h-5" />
              <span>Bắt đầu luyện tập</span>
            </button>
            <button className="flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 border border-gray-600/50 bg-gray-800/50 text-white rounded-lg font-semibold hover:bg-gray-700/50 transition-all w-full sm:w-auto">
              <BookOpen className="w-5 h-5" />
              <span>Hướng dẫn CTF</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1280px] mx-auto px-4 sm:px-8 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Main Content Area */}
          <div className="flex-1">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
              <div className="flex-1 relative sm:mr-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm challenges..."
                  className="w-full pl-10 pr-4 py-3 sm:py-4 rounded-lg border border-lozo-primary/30 bg-violet-1750 text-white placeholder-gray-400 focus:outline-none focus:border-lozo-primary"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <select className="px-4 sm:px-5 py-3 sm:py-4 rounded-lg border border-lozo-primary/30 bg-violet-1750 text-white focus:outline-none focus:border-lozo-primary">
                  <option>Tất cả danh mục</option>
                  <option>Crypto</option>
                  <option>Web</option>
                  <option>Forensics</option>
                  <option>Binary</option>
                  <option>Network</option>
                </select>
                <select className="px-4 sm:px-5 py-3 sm:py-4 rounded-lg border border-lozo-primary/30 bg-violet-1750 text-white focus:outline-none focus:border-lozo-primary">
                  <option>Tất cả độ khó</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>

            {/* Challenge Cards */}
            <div className="space-y-6">
              {/* Caesar Cipher Basics - Completed */}
              <div className="p-4 sm:p-6 rounded-xl border border-lozo-primary/20 bg-violet-1730 backdrop-blur-sm">
                <div className="flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-start mb-4">
                      <CheckCircle className="w-5 h-5 text-difficulty-basic mt-1 mr-3 sm:mr-4 flex-shrink-0" />
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-experience to-experience-dark flex items-center justify-center shadow-lg mr-3 sm:mr-4 flex-shrink-0">
                        <Key className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-3">
                          <h3 className="text-lg sm:text-xl font-medium text-white">
                            Caesar Cipher Basics
                          </h3>
                          <div className="flex items-center space-x-2">
                            <span className="px-2 py-1 text-xs rounded-full bg-gray-600/50 text-gray-300">
                              Crypto
                            </span>
                            <span className="px-3 py-1 text-xs rounded-full border border-difficulty-basic/30 bg-difficulty-basic/20 text-difficulty-basic">
                              Beginner
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          Học cách giải mã Caesar cipher cơ bản. Thử thách này
                          sẽ giúp bạn hiểu về các phương pháp mã hóa đơn giản.
                        </p>
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center text-gray-400 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>15 phút</span>
                          </div>
                          <span className="text-lozo-primary text-sm">
                            by HieuBM
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 mt-3">
                          <span className="px-3 py-1 text-xs rounded-full border border-lozo-primary/30 bg-lozo-primary/20 text-lozo-primary">
                            #caesar
                          </span>
                          <span className="px-3 py-1 text-xs rounded-full border border-lozo-primary/30 bg-lozo-primary/20 text-lozo-primary">
                            #substitution
                          </span>
                          <span className="px-3 py-1 text-xs rounded-full border border-lozo-primary/30 bg-lozo-primary/20 text-lozo-primary">
                            #basic
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 mt-3">
                          <div className="flex items-center text-blue-400 text-xs">
                            <Eye className="w-3 h-3 mr-1" />
                            <span>Có gợi ý</span>
                          </div>
                          <div className="flex items-center text-difficulty-basic text-xs">
                            <FileText className="w-3 h-3 mr-1" />
                            <span>Có writeup</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start space-x-4 lg:space-x-0 lg:space-y-4">
                    <div className="text-center lg:text-right">
                      <div className="text-2xl sm:text-3xl font-normal text-experience">
                        50
                      </div>
                      <div className="text-xs text-gray-400">điểm</div>
                    </div>
                    <button className="px-4 sm:px-6 py-2 sm:py-3 bg-success/20 border border-difficulty-basic/30 text-difficulty-basic rounded-lg font-medium flex items-center space-x-2 flex-shrink-0">
                      <CheckCircle className="w-4 h-4" />
                      <span>Hoàn thành</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* SQL Injection 101 - Available */}
              <div className="p-6 rounded-xl border border-lozo-primary/20 bg-violet-1730 backdrop-blur-sm">
                <div className="flex justify-between">
                  <div className="flex-1">
                    <div className="flex items-start mb-4">
                      <Play className="w-5 h-5 text-lozo-primary mt-1 mr-4" />
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-lozo-primary to-lozo-secondary flex items-center justify-center shadow-lg mr-4">
                        <Code2 className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-xl font-medium text-white">
                            SQL Injection 101
                          </h3>
                          <span className="px-2 py-1 text-xs rounded-full bg-gray-600/50 text-gray-300">
                            Web
                          </span>
                          <span className="px-3 py-1 text-xs rounded-full border border-difficulty-basic/30 bg-difficulty-basic/20 text-difficulty-basic">
                            Beginner
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          Tìm hiểu về lỗ hổng SQL Injection và cách khai thác
                          chúng trong môi trường an toàn.
                        </p>
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center text-gray-400 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>30 phút</span>
                          </div>
                          <span className="text-lozo-primary text-sm">
                            by CuongNV
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 mt-3">
                          <span className="px-3 py-1 text-xs rounded-full border border-lozo-primary/30 bg-lozo-primary/20 text-lozo-primary">
                            #sql
                          </span>
                          <span className="px-3 py-1 text-xs rounded-full border border-lozo-primary/30 bg-lozo-primary/20 text-lozo-primary">
                            #injection
                          </span>
                          <span className="px-3 py-1 text-xs rounded-full border border-lozo-primary/30 bg-lozo-primary/20 text-lozo-primary">
                            #database
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 mt-3">
                          <div className="flex items-center text-blue-400 text-xs">
                            <Eye className="w-3 h-3 mr-1" />
                            <span>Có gợi ý</span>
                          </div>
                          <div className="flex items-center text-difficulty-basic text-xs">
                            <FileText className="w-3 h-3 mr-1" />
                            <span>Có writeup</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-4">
                    <div className="text-right">
                      <div className="text-3xl font-normal text-experience">
                        75
                      </div>
                      <div className="text-xs text-gray-400">điểm</div>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-lozo-dark to-lozo-secondary text-white rounded-lg font-medium flex items-center space-x-2 shadow-lg shadow-lozo-primary/25">
                      <span>Bắt đầu</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Memory Forensics - Available */}
              <div className="p-6 rounded-xl border border-lozo-primary/20 bg-violet-1730 backdrop-blur-sm">
                <div className="flex justify-between">
                  <div className="flex-1">
                    <div className="flex items-start mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-difficulty-basic to-success-light flex items-center justify-center shadow-lg mr-4">
                        <Search className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-xl font-medium text-white">
                            Memory Forensics
                          </h3>
                          <span className="px-2 py-1 text-xs rounded-full bg-gray-600/50 text-gray-300">
                            Forensics
                          </span>
                          <span className="px-3 py-1 text-xs rounded-full border border-difficulty-intermediate/30 bg-difficulty-intermediate/20 text-difficulty-intermediate">
                            Intermediate
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          Phân tích memory dump để tìm ra thông tin ẩn và
                          artifacts quan trọng.
                        </p>
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center text-gray-400 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>45 phút</span>
                          </div>
                          <span className="text-lozo-primary text-sm">
                            by KhoaND
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 mt-3">
                          <span className="px-3 py-1 text-xs rounded-full border border-lozo-primary/30 bg-lozo-primary/20 text-lozo-primary">
                            #memory
                          </span>
                          <span className="px-3 py-1 text-xs rounded-full border border-lozo-primary/30 bg-lozo-primary/20 text-lozo-primary">
                            #volatility
                          </span>
                          <span className="px-3 py-1 text-xs rounded-full border border-lozo-primary/30 bg-lozo-primary/20 text-lozo-primary">
                            #analysis
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 mt-3">
                          <div className="flex items-center text-difficulty-basic text-xs">
                            <FileText className="w-3 h-3 mr-1" />
                            <span>Có writeup</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-4">
                    <div className="text-right">
                      <div className="text-3xl font-normal text-experience">
                        150
                      </div>
                      <div className="text-xs text-gray-400">điểm</div>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-lozo-dark to-lozo-secondary text-white rounded-lg font-medium flex items-center space-x-2 shadow-lg shadow-lozo-primary/25">
                      <span>Bắt đầu</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Buffer Overflow Basics */}
              <div className="p-6 rounded-xl border border-lozo-primary/20 bg-violet-1730 backdrop-blur-sm">
                <div className="flex justify-between">
                  <div className="flex-1">
                    <div className="flex items-start mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center shadow-lg mr-4">
                        <Target className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-xl font-medium text-white">
                            Buffer Overflow Basics
                          </h3>
                          <span className="px-2 py-1 text-xs rounded-full bg-gray-600/50 text-gray-300">
                            Binary
                          </span>
                          <span className="px-3 py-1 text-xs rounded-full border border-difficulty-intermediate/30 bg-difficulty-intermediate/20 text-difficulty-intermediate">
                            Intermediate
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          Học cách khai thác lỗ hổng buffer overflow trong các
                          chương trình C đơn giản.
                        </p>
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center text-gray-400 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>60 phút</span>
                          </div>
                          <span className="text-lozo-primary text-sm">
                            by QuanTQ
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 mt-3">
                          <span className="px-3 py-1 text-xs rounded-full border border-lozo-primary/30 bg-lozo-primary/20 text-lozo-primary">
                            #overflow
                          </span>
                          <span className="px-3 py-1 text-xs rounded-full border border-lozo-primary/30 bg-lozo-primary/20 text-lozo-primary">
                            #exploitation
                          </span>
                          <span className="px-3 py-1 text-xs rounded-full border border-lozo-primary/30 bg-lozo-primary/20 text-lozo-primary">
                            #c
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 mt-3">
                          <div className="flex items-center text-blue-400 text-xs">
                            <Eye className="w-3 h-3 mr-1" />
                            <span>Có gợi ý</span>
                          </div>
                          <div className="flex items-center text-difficulty-basic text-xs">
                            <FileText className="w-3 h-3 mr-1" />
                            <span>Có writeup</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-4">
                    <div className="text-right">
                      <div className="text-3xl font-normal text-experience">
                        200
                      </div>
                      <div className="text-xs text-gray-400">điểm</div>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-lozo-dark to-lozo-secondary text-white rounded-lg font-medium flex items-center space-x-2 shadow-lg shadow-lozo-primary/25">
                      <span>Bắt đầu</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Network Protocol Analysis */}
              <div className="p-6 rounded-xl border border-lozo-primary/20 bg-violet-1730 backdrop-blur-sm">
                <div className="flex justify-between">
                  <div className="flex-1">
                    <div className="flex items-start mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-lozo-primary to-lozo-secondary flex items-center justify-center shadow-lg mr-4">
                        <Wifi className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-xl font-medium text-white">
                            Network Protocol Analysis
                          </h3>
                          <span className="px-2 py-1 text-xs rounded-full bg-gray-600/50 text-gray-300">
                            Network
                          </span>
                          <span className="px-3 py-1 text-xs rounded-full border border-difficulty-intermediate/30 bg-difficulty-intermediate/20 text-difficulty-intermediate">
                            Intermediate
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          Phân tích traffic mạng để tìm ra thông tin nhạy cảm
                          được truyền tải.
                        </p>
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center text-gray-400 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>40 phút</span>
                          </div>
                          <span className="text-lozo-primary text-sm">
                            by NghiaNT
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 mt-3">
                          <span className="px-3 py-1 text-xs rounded-full border border-lozo-primary/30 bg-lozo-primary/20 text-lozo-primary">
                            #wireshark
                          </span>
                          <span className="px-3 py-1 text-xs rounded-full border border-lozo-primary/30 bg-lozo-primary/20 text-lozo-primary">
                            #pcap
                          </span>
                          <span className="px-3 py-1 text-xs rounded-full border border-lozo-primary/30 bg-lozo-primary/20 text-lozo-primary">
                            #protocols
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 mt-3">
                          <div className="flex items-center text-blue-400 text-xs">
                            <Eye className="w-3 h-3 mr-1" />
                            <span>Có gợi ý</span>
                          </div>
                          <div className="flex items-center text-difficulty-basic text-xs">
                            <FileText className="w-3 h-3 mr-1" />
                            <span>Có writeup</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-4">
                    <div className="text-right">
                      <div className="text-3xl font-normal text-experience">
                        125
                      </div>
                      <div className="text-xs text-gray-400">điểm</div>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-lozo-dark to-lozo-secondary text-white rounded-lg font-medium flex items-center space-x-2 shadow-lg shadow-lozo-primary/25">
                      <span>Bắt đầu</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Advanced Cryptography - Locked */}
              <div className="p-6 rounded-xl border border-lozo-primary/20 bg-violet-1730 backdrop-blur-sm opacity-60">
                <div className="flex justify-between">
                  <div className="flex-1">
                    <div className="flex items-start mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-experience to-experience-dark flex items-center justify-center shadow-lg mr-4">
                        <Key className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-xl font-medium text-white">
                            Advanced Cryptography
                          </h3>
                          <span className="px-2 py-1 text-xs rounded-full bg-gray-600/50 text-gray-300">
                            Crypto
                          </span>
                          <span className="px-3 py-1 text-xs rounded-full border border-orange-500/30 bg-orange-500/20 text-orange-400">
                            Advanced
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          Thử thách mã hóa nâng cao với RSA và các thuật toán
                          phức tạp.
                        </p>
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center text-gray-400 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>90 phút</span>
                          </div>
                          <span className="text-gray-400 text-sm">
                            89 đã giải
                          </span>
                          <span className="text-lozo-primary text-sm">
                            by CryptoMaster
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 mt-3">
                          <span className="px-3 py-1 text-xs rounded-full border border-lozo-primary/30 bg-lozo-primary/20 text-lozo-primary">
                            #rsa
                          </span>
                          <span className="px-3 py-1 text-xs rounded-full border border-lozo-primary/30 bg-lozo-primary/20 text-lozo-primary">
                            #advanced
                          </span>
                          <span className="px-3 py-1 text-xs rounded-full border border-lozo-primary/30 bg-lozo-primary/20 text-lozo-primary">
                            #mathematics
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-4">
                    <div className="text-right">
                      <div className="text-3xl font-normal text-experience">
                        300
                      </div>
                      <div className="text-xs text-gray-400">điểm</div>
                    </div>
                    <button
                      className="px-6 py-3 bg-gray-600/50 text-gray-400 rounded-lg font-medium"
                      disabled
                    >
                      <Lock className="w-4 h-4 mr-2 inline" />
                      Khóa
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 space-y-6">
            {/* Progress Overview */}
            <div className="p-6 rounded-xl border border-lozo-primary/20 bg-violet-1730 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-5 h-5 text-experience" />
                <h3 className="text-lg font-semibold text-white">
                  Tiến độ của bạn
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Challenges hoàn thành</span>
                  <span className="text-white">1/6</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tổng điểm</span>
                  <span className="text-experience">50</span>
                </div>
                <div className="w-full bg-gray-600/50 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-lozo-primary to-lozo-secondary h-3 rounded-full shadow-lg shadow-lozo-primary/25"
                    style={{ width: "17%" }}
                  ></div>
                </div>
                <div className="text-center text-gray-400 text-sm">
                  17% hoàn thành
                </div>
              </div>
            </div>

            {/* Category Progress */}
            <div className="p-6 rounded-xl border border-lozo-primary/20 bg-violet-1730 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-4">
                Tiến độ theo danh mục
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Crypto", icon: Key, progress: "1/2" },
                  { name: "Web", icon: Code2, progress: "0/1" },
                  { name: "Forensics", icon: Search, progress: "0/1" },
                  { name: "Binary", icon: Target, progress: "0/1" },
                  { name: "Network", icon: Shield, progress: "0/1" },
                  { name: "Misc", icon: null, progress: "0/0" },
                ].map((category) => (
                  <div
                    key={category.name}
                    className="flex items-center justify-between p-2 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      {category.icon && (
                        <category.icon className="w-4 h-4 text-lozo-primary" />
                      )}
                      <span className="text-gray-300">{category.name}</span>
                    </div>
                    <span className="text-white text-sm">
                      {category.progress}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Resources */}
            <div className="p-6 rounded-xl border border-lozo-primary/20 bg-violet-1730 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-4">
                Tài liệu học tập
              </h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg border border-lozo-primary/20 bg-lozo-primary/10">
                  <div className="flex items-center space-x-2 mb-1">
                    <BookOpen className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">
                      CTF Handbook
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs">
                    Hướng dẫn toàn diện về CTF
                  </p>
                </div>
                <div className="p-3 rounded-lg border border-difficulty-basic/20 bg-difficulty-basic/10">
                  <div className="flex items-center space-x-2 mb-1">
                    <Database className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">
                      Tools & Scripts
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs">
                    Công cụ hỗ trợ giải CTF
                  </p>
                </div>
                <div className="p-3 rounded-lg border border-blue-500/20 bg-blue-500/10">
                  <div className="flex items-center space-x-2 mb-1">
                    <Users className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">
                      Community
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs">
                    Tham gia cộng đồng CTF
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CTF;
