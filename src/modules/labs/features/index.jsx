import React, { useEffect, useState } from "react";
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
} from "lucide-react";
import Header from "../../../components/Header/Header";

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

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        const res = await axios.get(
          "https://course-an-ninh-mang-backend-huqnjcr43-kiens-projects-6b39ee18.vercel.app/api/courses/lab",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
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
  }, []);

  // Tìm kiếm + lọc
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Đang tải dữ liệu Labs...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Không thể tải dữ liệu Labs
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-lozo-dark to-lozo-darker">
      <Header />

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
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: "Labs hoàn thành",
              value: data.completed_labs_count,
              icon: <CheckCircle className="w-6 h-6 text-white" />,
              color: "from-lozo-primary to-lozo-secondary",
            },
            {
              label: "Giờ thực hành",
              value: data.total_hours,
              icon: <Clock className="w-6 h-6 text-white" />,
              color: "from-lozo-primary to-lozo-secondary",
            },
            {
              label: "Điểm kinh nghiệm",
              value: data.total_xp,
              icon: <Award className="w-6 h-6 text-white" />,
              color: "from-experience to-experience-dark",
            },
            {
              label: "Xếp hạng",
              value: data.rank,
              icon: <Users className="w-6 h-6 text-white" />,
              color: "from-lozo-secondary to-lozo-primary",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-gray-600/50 bg-gray-900/50 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-semibold text-white mb-1">
                    {card.value}
                  </div>
                  <div className="text-gray-400 text-sm font-semibold">
                    {card.label}
                  </div>
                </div>
                <div
                  className={`w-12 h-12 rounded-[10px] bg-gradient-to-r ${card.color} flex items-center justify-center`}
                >
                  {card.icon}
                </div>
              </div>
            </div>
          ))}
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
            const progress = parseInt(lab.progress) || 0;
            const isCompleted = lab.status === "completed";
            const isLocked = lab.status === "locked";

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
                  {isCompleted && (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  )}
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {lab.description}
                </p>

                {lab.subLabsCount && (
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{lab.subLabsCount}</span>
                  </div>
                )}

                {isLocked ? (
                  <button
                    className="w-full bg-gray-600 text-gray-400 py-3 rounded-[10px] font-semibold"
                    disabled
                  >
                    Đã khóa
                  </button>
                ) : isCompleted ? (
                  <button className="w-full bg-success text-white py-3 rounded-[10px] font-semibold flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Hoàn thành</span>
                  </button>
                ) : (
                  <button className="w-full bg-gradient-to-r from-lozo-dark to-lozo-secondary text-white py-3 rounded-[10px] font-semibold flex items-center justify-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>Tiếp tục</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Achievements */}
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
            {data.achievements.map((ach, i) => {
              const Icon = iconMap[ach.icon] || Award;
              return (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-lozo-primary/20 bg-gray-900/50 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-lozo-primary to-lozo-secondary flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {ach.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{ach.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Labs;
