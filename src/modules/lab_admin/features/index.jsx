import React, { useEffect, useState } from "react";
import { ENDPOINTS } from "../../../routes/endPoints";
import { Link } from "react-router-dom";
import axios from "axios";
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
  PlusCircle,
  X,
  Bell,
} from "lucide-react";

const iconMap = {
  Wifi,
  Database,
  Code2,
  Search,
  Shield,
  Activity,
};

const Labs = () => {
  const [data, setData] = useState(null);
  const [filteredLabs, setFilteredLabs] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Tất cả");
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("access_token");
  const username = JSON.parse(localStorage.getItem("user"))?.name || "Admin";

  // Popup states
  const [showPopup, setShowPopup] = useState(false);
  const [popupTen, setPopupTen] = useState("");
  const [popupLoai, setPopupLoai] = useState("");
  const [popupMota, setPopupMota] = useState("");
  const [popupFile, setPopupFile] = useState(null);
  const [popupUploading, setPopupUploading] = useState(false);
  const [popupUploadedUrl, setPopupUploadedUrl] = useState("");

  // 📦 Fetch Labs
  useEffect(() => {
    const fetchLabs = async () => {
      try {
        const res = await axios.get(
          "https://course-an-ninh-mang-backend.vercel.app/api/courses/lab",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setData(res.data);
        setFilteredLabs(res.data.labs || []);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu Labs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLabs();
  }, [token]);

  // 🔍 Tìm kiếm + lọc
  useEffect(() => {
    if (!data) return;
    let filtered = data.labs || [];
    if (search)
      filtered = filtered.filter((lab) =>
        lab.title.toLowerCase().includes(search.toLowerCase())
      );
    if (filter !== "Tất cả")
      filtered = filtered.filter((lab) => lab.difficulty === filter);
    setFilteredLabs(filtered);
  }, [search, filter, data]);

  // 🧠 Upload file PDF lên S3 (popup)
  const handlePopupSelectAndUpload = async (e) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;
    try {
      setPopupUploading(true);
      const filename = encodeURIComponent(file.name);
      const backendURL =
        "https://course-an-ninh-mang-backend.vercel.app/api/upload/presign";
      const res = await axios.get(`${backendURL}?filename=${filename}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { url } = res.data;

      await axios.put(url, file, {
        headers: { "Content-Type": "application/pdf" },
      });

      const fileUrl = url.split("?")[0];
      setPopupUploadedUrl(fileUrl);
      setPopupFile(file);
      alert("✅ Upload PDF thành công!");
    } catch (error) {
      console.error("Upload lỗi:", error);
      alert("❌ Upload PDF thất bại!");
    } finally {
      setPopupUploading(false);
    }
  };

  // 🧩 Gửi yêu cầu tạo Lab mới
  const handleCreateLab = async () => {
    if (!popupTen || !popupLoai)
      return alert("⚠️ Vui lòng nhập đầy đủ Tên và Loại lab!");

    try {
      const payload = {
        ten: popupTen,
        loai: popupLoai,
        mota: popupMota || null,
        pdf_url: popupUploadedUrl || null,
      };
      const res = await axios.post(
        "https://course-an-ninh-mang-backend.vercel.app/api/courses/lab",
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("✅ Tạo lab thành công!");
      setShowPopup(false);
      setData((prev) => ({
        ...prev,
        labs: [...(prev?.labs || []), res.data],
      }));
    } catch (error) {
      console.error("Lỗi khi tạo lab:", error);
      alert("❌ Tạo lab thất bại!");
    }
  };

  // 🕓 Loading / Error
  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Đang tải dữ liệu Labs...
      </div>
    );

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Không thể tải dữ liệu Labs
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-lozo-dark to-lozo-darker relative">
      <header className="bg-gradient-to-r from-orange-900 to-orange-800 border-b border-orange-700/50 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl">LozoAcademy</span>
            <div className="bg-red-600 px-2 py-1 rounded text-white text-sm font-medium">
              ADMIN
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to={ENDPOINTS.USER.MANAMENT}
              className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              <Users className="w-4 h-4" />
              <span>Quản lý khóa học</span>
            </Link>
            <Link
              to={ENDPOINTS.USER.ADMINDASHBOARD}
              className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              <Users className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors">
              <Bell className="w-4 h-4" />
              <span>Xin chào, {username}</span>
            </button>
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Đăng xuất</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-80 py-16 border-b border-lozo-primary/20 bg-gradient-to-b from-lozo-primary/30 to-lozo-secondary/30">
        <div className="max-w-[1280px] mx-auto px-8 py-16 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-lozo-primary/30 bg-lozo-primary/20 mb-8">
            <Flag className="w-4 h-4 text-lozo-primary" />
            <span className="text-lozo-primary text-sm font-medium">
              Nền tảng luyện tập CTF toàn diện
            </span>
          </div>

          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-lozo-primary to-lozo-secondary bg-clip-text text-transparent">
            Thực hành LABS
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Những bài Labs mô phỏng được thiết kế từ mức Cơ bản cho tới Nâng
            cao, giúp bạn rèn luyện kỹ năng an toàn thông tin trong môi trường
            thực tế.
          </p>
        </div>
      </section>

      {/* Main */}
      <main className="max-w-[1280px] mx-auto px-8 py-8 space-y-8">
        {/* Nút tạo lab */}
        <div className="flex justify-end">
          <button
            onClick={() => setShowPopup(true)}
            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-lozo-primary to-lozo-secondary text-white rounded-xl font-semibold hover:opacity-90"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Tạo Lab mới</span>
          </button>
        </div>

        {/* Search + Filter */}
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm labs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-4 rounded-[10px] border border-gray-600/50 bg-gray-900/50 text-white placeholder-gray-400 focus:outline-none focus:border-lozo-primary"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-4 rounded-[10px] border border-gray-600/50 bg-gray-900/50 text-white focus:outline-none focus:border-lozo-primary"
            >
              <option>Tất cả</option>
              <option>Cơ bản</option>
              <option>Trung cấp</option>
              <option>Nâng cao</option>
            </select>
          </div>
        </div>

        {/* Lab Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLabs.map((lab) => {
            const Icon = iconMap[lab.icon] || Shield;
            {
              /* const isCompleted = lab.status === "completed";
            const isLocked = lab.status === "locked"; */
            }

            return (
              <div
                key={lab.id}
                className="p-6 rounded-xl border border-gray-600/50 bg-gray-900/30 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-[10px] bg-gradient-to-r from-lozo-primary to-lozo-secondary flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {lab.title}
                      </h3>
                      <span className="inline-block px-2 py-1 text-xs rounded border border-gray-500/20 bg-gray-700/20 text-gray-300">
                        {lab.difficulty}
                      </span>
                    </div>
                  </div>
                  {/* {isCompleted && (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  )} */}
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {lab.description}
                </p>

                <Link
                  to={`/lab/${lab.id}`}
                  className={`w-full py-3 rounded-[10px] font-semibold flex items-center justify-center space-x-2 ${"bg-gradient-to-r from-lozo-dark to-lozo-secondary text-white"}`}
                >
                  {
                    <>
                      <Play className="w-4 h-4" />
                      <span>Tiếp tục</span>
                    </>
                  }
                </Link>
              </div>
            );
          })}
        </div>
      </main>

      {/* Popup tạo lab */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-2xl border border-lozo-primary/30 w-[500px] relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              🧪 Tạo Lab mới
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Tên lab *</label>
                <input
                  type="text"
                  value={popupTen}
                  onChange={(e) => setPopupTen(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-lozo-primary outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Loại lab *</label>
                <input
                  type="text"
                  value={popupLoai}
                  onChange={(e) => setPopupLoai(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-lozo-primary outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Mô tả</label>
                <textarea
                  value={popupMota}
                  onChange={(e) => setPopupMota(e.target.value)}
                  rows="3"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-lozo-primary outline-none"
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">
                  Tài liệu PDF (tùy chọn)
                </label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handlePopupSelectAndUpload}
                  disabled={popupUploading}
                  className="text-sm text-gray-300"
                />
                {popupUploading && (
                  <p className="text-sm text-gray-400 mt-1">Đang tải lên...</p>
                )}
                {popupUploadedUrl && (
                  <p className="text-sm text-green-400 mt-1 break-all">
                    ✅ Đã tải lên: {popupUploadedUrl}
                  </p>
                )}
              </div>
            </div>

            <button
              onClick={handleCreateLab}
              disabled={popupUploading}
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-lozo-primary to-lozo-secondary text-white font-semibold hover:opacity-90"
            >
              {popupUploading ? "Đang tải lên..." : "Tạo mới Lab"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Labs;
