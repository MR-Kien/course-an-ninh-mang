// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { ENDPOINTS } from "../../../routes/endPoints";
// import {
//   Shield,
//   Users,
//   LogOut,
//   Search,
//   CheckCircle,
//   Clock,
//   Flag,
//   Play,
//   BookOpen,
//   Target,
//   Key,
//   Code2,
//   Wifi,
//   Database,
//   Lock,
//   RefreshCw,
//   Bell,
// } from "lucide-react";

// const CTF = () => {
//   const [ctfData, setCtfData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [difficulty, setDifficulty] = useState("");
//   const [status, setStatus] = useState("");

//   // Lấy token từ localStorage hoặc context (giả sử dùng JWT)
//   const token = localStorage.getItem("access_token") || null;
//   const username = JSON.parse(localStorage.getItem("user"))?.name || "Admin";

//   // Hàm gọi API với bộ lọc
//   const fetchCTFData = async () => {
//     try {
//       setLoading(true);
//       setError("");
//       const params = {};
//       if (search) params.search = search;
//       if (category) params.category = category;
//       if (difficulty) params.difficulty = difficulty;
//       if (status) params.status = status;

//       const response = await axios.get(
//         "https://course-an-ninh-mang-backend.vercel.app/api/courses/ctf",
//         {
//           params,
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setCtfData(response.data);
//     } catch (err) {
//       console.error("Error fetching CTF data:", err);
//       if (err.response?.status === 401) {
//         setError("Vui lòng đăng nhập để xem CTF");
//       } else if (err.response?.status === 404) {
//         setError("Không có dữ liệu CTF phù hợp");
//       } else {
//         setError("Lỗi khi tải dữ liệu CTF");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Gọi API khi thay đổi bộ lọc hoặc tìm kiếm
//   useEffect(() => {
//     fetchCTFData();
//   }, [search, category, difficulty, status]);

//   // Reset bộ lọc
//   const handleResetFilters = () => {
//     setSearch("");
//     setCategory("");
//     setDifficulty("");
//     setStatus("");
//   };

//   // Map icon động
//   const iconMap = {
//     Key,
//     Code2,
//     Search,
//     Target,
//     Wifi,
//     Shield,
//     BookOpen,
//     Database,
//     Users,
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-white text-xl bg-[#1A0B2E]">
//         <div className="flex items-center gap-2">
//           <RefreshCw className="w-6 h-6 animate-spin" />
//           Đang tải dữ liệu CTF...
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-red-400 text-lg bg-[#1A0B2E]">
//         <div className="text-center">
//           <p>{error}</p>
//           {error.includes("đăng nhập") && (
//             <button
//               className="mt-4 px-4 py-2 bg-lozo-primary text-white rounded-[10px]"
//               onClick={() => (window.location.href = "/login")}
//             >
//               Đăng nhập
//             </button>
//           )}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#1A0B2E]">
//       <header className="bg-gradient-to-r from-orange-900 to-orange-800 border-b border-orange-700/50 px-6 py-3">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
//               <Shield className="w-5 h-5 text-white" />
//             </div>
//             <span className="text-white font-bold text-xl">LozoAcademy</span>
//             <div className="bg-red-600 px-2 py-1 rounded text-white text-sm font-medium">
//               ADMIN
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <Link
//               to={ENDPOINTS.USER.MANAMENT}
//               className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
//             >
//               <Users className="w-4 h-4" />
//               <span>Quản lý khóa học</span>
//             </Link>
//             <Link
//               to={ENDPOINTS.USER.ADMINDASHBOARD}
//               className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
//             >
//               <Users className="w-4 h-4" />
//               <span>Dashboard</span>
//             </Link>
//             <button className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors">
//               <Bell className="w-4 h-4" />
//               <span>Xin chào, {username}</span>
//             </button>
//             <Link
//               to="/"
//               className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
//             >
//               <LogOut className="w-4 h-4" />
//               <span>Đăng xuất</span>
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative px-4 sm:px-8 lg:px-80 py-8 border-b border-lozo-primary/20 bg-gradient-to-b from-lozo-primary/30 to-lozo-secondary/30 text-center">
//         <div className="max-w-[1280px] mx-auto py-12">
//           <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-[10px] border border-lozo-primary/30 bg-lozo-primary/20 mb-6">
//             <Flag className="w-4 h-4 text-lozo-primary" />
//             <span className="text-lozo-primary text-sm font-medium">
//               Nền tảng luyện tập CTF toàn diện
//             </span>
//           </div>

//           <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-lozo-primary to-lozo-secondary bg-clip-text text-transparent">
//             Luyện tập CTF Skills
//           </h1>

//           <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
//             Nâng cao kỹ năng bảo mật thông qua các thử thách thực tế — từ cơ bản
//             đến nâng cao.
//           </p>

//           <button className="px-8 py-4 bg-gradient-to-r from-lozo-dark to-lozo-secondary text-white rounded-[10px] font-semibold shadow-lg hover:shadow-xl transition-all">
//             <Play className="w-5 h-5 inline mr-2" />
//             Bắt đầu luyện tập
//           </button>
//         </div>
//       </section>

//       {/* Main Content */}
//       <main className="max-w-[1280px] mx-auto px-4 sm:px-8 py-10">
//         {/* Summary Section */}
//         <section className="mb-10">
//           <h2 className="text-2xl font-bold text-white mb-4">Tổng quan</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             <div className="p-4 rounded-[10px] bg-violet-1730 border border-lozo-primary/20">
//               <p className="text-gray-300">Tổng thử thách</p>
//               <p className="text-xl font-bold text-white">
//                 {ctfData?.completed_total || "0/0"}
//               </p>
//             </div>
//             <div className="p-4 rounded-[10px] bg-violet-1730 border border-lozo-primary/20">
//               <p className="text-gray-300">Tổng điểm</p>
//               <p className="text-xl font-bold text-white">
//                 {ctfData?.total_points || 0}
//               </p>
//             </div>
//             <div className="p-4 rounded-[10px] bg-violet-1730 border border-lozo-primary/20">
//               <p className="text-gray-300">Tiến độ tổng</p>
//               <p className="text-xl font-bold text-white">
//                 {ctfData?.overall_percentage || "0%"}
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Category Progress */}
//         <section className="mb-10">
//           <h2 className="text-2xl font-bold text-white mb-4">
//             Tiến độ theo danh mục
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {ctfData?.category_progress?.map((cat, index) => {
//               const Icon = iconMap[cat.icon] || Shield;
//               return (
//                 <div
//                   key={index}
//                   className="p-4 rounded-[10px] bg-violet-1730 border border-lozo-primary/20 flex items-center gap-4"
//                 >
//                   <Icon className="w-6 h-6 text-lozo-primary" />
//                   <div>
//                     <p className="text-white font-semibold">{cat.name}</p>
//                     <p className="text-gray-300">{cat.progress}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         {/* Search & Filters */}
//         <section className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
//           <div className="relative w-full sm:w-auto flex-1">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Tìm kiếm challenges..."
//               className="w-full pl-10 pr-4 py-3 rounded-[10px] border border-lozo-primary/30 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lozo-primary transition-all"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           <select
//             className="px-4 py-3 rounded-[10px] border border-lozo-primary/30 bg-white text-black focus:ring-2 focus:ring-lozo-primary transition-all"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="">Tất cả danh mục</option>
//             <option value="Crypto">Crypto</option>
//             <option value="Web">Web</option>
//             <option value="Forensics">Forensics</option>
//             <option value="Binary">Binary</option>
//             <option value="Network">Network</option>
//           </select>

//           <select
//             className="px-4 py-3 rounded-[10px] border border-lozo-primary/30 bg-white text-black focus:ring-2 focus:ring-lozo-primary transition-all"
//             value={difficulty}
//             onChange={(e) => setDifficulty(e.target.value)}
//           >
//             <option value="">Tất cả độ khó</option>
//             <option value="Beginner">Beginner</option>
//             <option value="Intermediate">Intermediate</option>
//             <option value="Advanced">Advanced</option>
//           </select>

//           <select
//             className="px-4 py-3 rounded-[10px] border border-lozo-primary/30 bg-white text-black focus:ring-2 focus:ring-lozo-primary transition-all"
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//           >
//             <option value="">Tất cả trạng thái</option>
//             <option value="completed">Hoàn thành</option>
//             <option value="available">Có thể làm</option>
//             <option value="locked">Đã khóa</option>
//           </select>

//           <button
//             className="px-4 py-3 bg-lozo-primary text-white rounded-[10px] flex items-center gap-2 hover:bg-lozo-dark transition-all"
//             onClick={handleResetFilters}
//           >
//             <RefreshCw className="w-4 h-4" />
//             Reset
//           </button>
//         </section>

//         {/* Challenges */}
//         <section className="space-y-6">
//           <h2 className="text-2xl font-bold text-white mb-4">Thử thách CTF</h2>
//           {ctfData?.challenges?.length === 0 ? (
//             <p className="text-gray-400 text-center">
//               Không có thử thách nào phù hợp.
//             </p>
//           ) : (
//             ctfData?.challenges?.map((ch) => {
//               const Icon = iconMap[ch.icon] || Shield;
//               const isCompleted = ch.status === "completed";
//               const isLocked = ch.status === "locked";
//               return (
//                 <div
//                   key={ch.id}
//                   className="p-6 rounded-[10px] border border-lozo-primary/20 bg-violet-1730 backdrop-blur-sm"
//                 >
//                   <div className="flex justify-between flex-col lg:flex-row gap-4">
//                     <div className="flex items-start">
//                       <div className="w-14 h-14 rounded-[10px] bg-gradient-to-r from-lozo-primary to-lozo-secondary flex items-center justify-center mr-4">
//                         <Icon className="w-7 h-7 text-white" />
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-semibold text-white mb-2">
//                           {ch.title}
//                         </h3>
//                         <p className="text-gray-300 mb-3">{ch.description}</p>
//                         <div className="flex flex-wrap gap-2 text-sm">
//                           <span className="text-gray-400 flex items-center">
//                             <Clock className="w-4 h-4 mr-1" /> {ch.duration}
//                           </span>
//                           <span className="text-lozo-primary">
//                             {ch.author && `by ${ch.author}`}
//                           </span>
//                           <span className="text-gray-400">{ch.category}</span>
//                           <span className="text-gray-400">{ch.difficulty}</span>
//                         </div>
//                         {ch.tags.length > 0 && (
//                           <div className="flex flex-wrap gap-2 mt-2">
//                             {ch.tags.map((tag, index) => (
//                               <span
//                                 key={index}
//                                 className="px-2 py-1 bg-lozo-primary/20 text-lozo-primary rounded-[5px] text-xs"
//                               >
//                                 {tag}
//                               </span>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     <div className="text-right flex flex-col justify-between items-end">
//                       <div>
//                         <div className="text-3xl text-experience font-semibold">
//                           {ch.points}
//                         </div>
//                         <div className="text-xs text-gray-400">điểm</div>
//                       </div>
//                       {isCompleted ? (
//                         <button className="px-6 py-2 bg-green-700/30 text-green-400 rounded-[10px] flex items-center gap-2">
//                           <CheckCircle className="w-4 h-4" /> Hoàn thành
//                         </button>
//                       ) : isLocked ? (
//                         <button
//                           className="px-6 py-2 bg-gray-700/30 text-gray-400 rounded-[10px] flex items-center gap-2"
//                           disabled
//                         >
//                           <Lock className="w-4 h-4" /> Đã khóa
//                         </button>
//                       ) : (
//                         <button className="px-6 py-2 bg-gradient-to-r from-lozo-dark to-lozo-secondary text-white rounded-[10px] flex items-center gap-2">
//                           <Play className="w-4 h-4" /> Bắt đầu
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </section>

//         {/* Learning Resources */}
//         <section className="mt-10">
//           <h2 className="text-2xl font-bold text-white mb-4">
//             Tài nguyên học tập
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {ctfData?.learning_resources?.map((resource, index) => {
//               const Icon = iconMap[resource.icon] || BookOpen;
//               return (
//                 <div
//                   key={index}
//                   className="p-4 rounded-[10px] bg-violet-1730 border border-lozo-primary/20 flex items-center gap-4"
//                 >
//                   <Icon className="w-6 h-6 text-lozo-primary" />
//                   <div>
//                     <p className="text-white font-semibold">{resource.title}</p>
//                     <p className="text-gray-300">{resource.description}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default CTF;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../../routes/endPoints";
import {
  Shield,
  Users,
  LogOut,
  Search,
  CheckCircle,
  Clock,
  Flag,
  Play,
  BookOpen,
  Target,
  Key,
  Code2,
  Wifi,
  Database,
  Lock,
  RefreshCw,
  Bell,
  PlusCircle,
  X,
  FileUp,
} from "lucide-react";

const CTF = () => {
  const [ctfData, setCtfData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [status, setStatus] = useState("");

  // Popup / form states
  const [showPopup, setShowPopup] = useState(false);
  const [popupUploading, setPopupUploading] = useState(false);

  // state chính cho CTF mới — dùng đúng tên backend yêu cầu
  const [newCTF, setNewCTF] = useState({
    ten: "",
    mota: "",
    loaictf: "",
    tacgia: "",
    choai: "",
    pdf_url: "",
    points: "",
    duration: "", // ex: "45 minutes"
  });

  const token = localStorage.getItem("access_token") || null;
  const username = JSON.parse(localStorage.getItem("user"))?.name || "Admin";

  // Fetch danh sách CTF (GET)
  const fetchCTFData = async () => {
    try {
      setLoading(true);
      setError("");
      const params = {};
      if (search) params.search = search;
      if (category) params.category = category;
      if (difficulty) params.difficulty = difficulty;
      if (status) params.status = status;

      const response = await axios.get(
        "https://course-an-ninh-mang-backend.vercel.app/api/courses/ctf",
        {
          params,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCtfData(response.data);
    } catch (err) {
      console.error("Error fetching CTF data:", err);
      if (err.response?.status === 401) {
        setError("Vui lòng đăng nhập để xem CTF");
      } else if (err.response?.status === 404) {
        setError("Không có dữ liệu CTF phù hợp");
      } else {
        setError("Lỗi khi tải dữ liệu CTF");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCTFData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, category, difficulty, status]);

  const handleResetFilters = () => {
    setSearch("");
    setCategory("");
    setDifficulty("");
    setStatus("");
  };

  // ----- Hàm upload file PDF (theo đúng logic bạn đưa) -----
  const handlePopupSelectAndUpload = async (e) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;

    // kiểm tra type pdf (optional)
    if (file.type !== "application/pdf") {
      alert("Vui lòng chọn file PDF hợp lệ!");
      return;
    }

    try {
      setPopupUploading(true);

      // encode filename giống hàm bạn đưa
      const filename = encodeURIComponent(file.name);
      const backendURL =
        "https://course-an-ninh-mang-backend.vercel.app/api/upload/presign";

      // Lấy presigned URL từ backend (GET ?filename=...)
      const res = await axios.get(`${backendURL}?filename=${filename}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // backend trả { url } theo ví dụ của bạn
      const { url } = res.data;
      if (!url) throw new Error("Không nhận được presigned URL từ backend");

      // PUT file lên presigned URL
      await axios.put(url, file, {
        headers: { "Content-Type": "application/pdf" },
      });

      // lấy url sạch (bỏ querystring) -> lưu vào pdf_url
      const fileUrl = url.split("?")[0];
      setNewCTF((prev) => ({ ...prev, pdf_url: fileUrl }));

      alert("✅ Upload PDF thành công!");
    } catch (error) {
      console.error("Upload lỗi:", error);
      alert("❌ Upload PDF thất bại!");
    } finally {
      setPopupUploading(false);
    }
  };

  // ----- Tạo CTF (POST) sử dụng đúng tên field backend yêu cầu -----
  const handleCreateCTF = async () => {
    const { ten, mota, loaictf, tacgia, choai, pdf_url, points, duration } =
      newCTF;

    // validate giống backend: ten, loaictf, tacgia, choai là bắt buộc
    if (!ten || !loaictf || !tacgia || !choai) {
      alert(
        "⚠️ Vui lòng nhập đầy đủ Tên, Loại CTF, Tác giả và Chủ đề (choai)!"
      );
      return;
    }

    try {
      // Gửi về endpoint tạo CTF của backend - sử dụng cùng base với GET list
      const res = await axios.post(
        "https://course-an-ninh-mang-backend.vercel.app/api/courses/ctf",
        {
          ten,
          mota: mota || null,
          loaictf,
          tacgia,
          choai,
          pdf_url: pdf_url || null,
          points: points ? Number(points) : 0,
          duration: duration || "0 minutes",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // thành công
      alert("✅ Tạo CTF thành công!");
      setShowPopup(false);
      // reset form
      setNewCTF({
        ten: "",
        mota: "",
        loaictf: "",
        tacgia: "",
        choai: "",
        pdf_url: "",
        points: "",
        duration: "",
      });
      // reload danh sách
      fetchCTFData();
    } catch (err) {
      console.error("Lỗi khi tạo CTF:", err);
      const message =
        err?.response?.data?.error || "Không thể tạo CTF, vui lòng thử lại!";
      alert(`❌ ${message}`);
    }
  };

  // Map icon dynamic
  const iconMap = {
    Key,
    Code2,
    Search,
    Target,
    Wifi,
    Shield,
    BookOpen,
    Database,
    Users,
  };

  // Loading / error UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl bg-[#1A0B2E]">
        <div className="flex items-center gap-2">
          <RefreshCw className="w-6 h-6 animate-spin" />
          Đang tải dữ liệu CTF...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400 text-lg bg-[#1A0B2E]">
        <div className="text-center">
          <p>{error}</p>
          {error.includes("đăng nhập") && (
            <button
              className="mt-4 px-4 py-2 bg-lozo-primary text-white rounded-[10px]"
              onClick={() => (window.location.href = "/login")}
            >
              Đăng nhập
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A0B2E]">
      {/* Header */}
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
      <section className="relative px-4 sm:px-8 lg:px-80 py-8 border-b border-lozo-primary/20 bg-gradient-to-b from-lozo-primary/30 to-lozo-secondary/30 text-center">
        <div className="max-w-[1280px] mx-auto py-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-[10px] border border-lozo-primary/30 bg-lozo-primary/20 mb-6">
            <Flag className="w-4 h-4 text-lozo-primary" />
            <span className="text-lozo-primary text-sm font-medium">
              Nền tảng luyện tập CTF toàn diện
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-lozo-primary to-lozo-secondary bg-clip-text text-transparent">
            Luyện tập CTF Skills
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Nâng cao kỹ năng bảo mật thông qua các thử thách thực tế — từ cơ bản
            đến nâng cao.
          </p>

          <button
            onClick={() => setShowPopup(true)}
            className="px-8 py-4 bg-gradient-to-r from-lozo-dark to-lozo-secondary text-white rounded-[10px] font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <PlusCircle className="w-5 h-5 inline mr-2" />
            Thêm CTF mới
          </button>
        </div>
      </section>

      {/* Popup Thêm CTF */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-[#1E1B2E] p-6 rounded-[10px] w-[92%] max-w-[640px] relative border border-lozo-primary/30">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold text-white mb-4">
              Tạo thử thách CTF
            </h2>

            <div className="space-y-3 max-h-[62vh] overflow-y-auto pr-2">
              <div>
                <label className="block text-gray-300 mb-1">Tên (ten) *</label>
                <input
                  type="text"
                  value={newCTF.ten}
                  onChange={(e) =>
                    setNewCTF({ ...newCTF, ten: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-md bg-gray-800 text-white"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">Mô tả (mota)</label>
                <textarea
                  rows={3}
                  value={newCTF.mota}
                  onChange={(e) =>
                    setNewCTF({ ...newCTF, mota: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-md bg-gray-800 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 mb-1">
                    Loại CTF (loaictf) *
                  </label>
                  <input
                    type="text"
                    value={newCTF.loaictf}
                    onChange={(e) =>
                      setNewCTF({ ...newCTF, loaictf: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-md bg-gray-800 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">
                    Tác giả (tacgia) *
                  </label>
                  <input
                    type="text"
                    value={newCTF.tacgia}
                    onChange={(e) =>
                      setNewCTF({ ...newCTF, tacgia: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-md bg-gray-800 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-1">
                  Chủ đề / Choai (choai) *
                </label>
                <input
                  type="text"
                  value={newCTF.choai}
                  onChange={(e) =>
                    setNewCTF({ ...newCTF, choai: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-md bg-gray-800 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 mb-1">
                    Điểm (points)
                  </label>
                  <input
                    type="number"
                    value={newCTF.points}
                    onChange={(e) =>
                      setNewCTF({ ...newCTF, points: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-md bg-gray-800 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">
                    Thời lượng (duration) — ví dụ: &quot;45 minutes&quot;
                  </label>
                  <input
                    type="text"
                    value={newCTF.duration}
                    onChange={(e) =>
                      setNewCTF({ ...newCTF, duration: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-md bg-gray-800 text-white"
                  />
                </div>
              </div>

              {/* Upload PDF */}
              <div>
                <label className="block text-gray-300 mb-1">
                  Tệp PDF (upload lên S3)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    id="ctf-upload-pdf"
                    type="file"
                    accept="application/pdf"
                    onChange={handlePopupSelectAndUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="ctf-upload-pdf"
                    className="px-4 py-2 rounded-md bg-gray-700 text-white cursor-pointer inline-flex items-center gap-2"
                  >
                    <FileUp className="w-4 h-4" />
                    {popupUploading ? "Đang upload..." : "Chọn PDF"}
                  </label>
                  {newCTF.pdf_url && (
                    <a
                      href={newCTF.pdf_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-green-400 underline"
                    >
                      Xem file đã upload
                    </a>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Sau khi chọn file, hệ thống sẽ upload lên S3 và tự điền
                  pdf_url.
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => {
                  setShowPopup(false);
                }}
                className="px-4 py-2 bg-gray-700/40 text-white rounded-md"
              >
                Hủy
              </button>
              <button
                onClick={handleCreateCTF}
                className="px-4 py-2 bg-gradient-to-r from-lozo-primary to-lozo-secondary text-white rounded-md"
                disabled={popupUploading}
              >
                Tạo CTF
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main content (danh sách) */}
      <main className="max-w-[1280px] mx-auto px-4 sm:px-8 py-10">
        {/* Summary */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Tổng quan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-[10px] bg-violet-1730 border border-lozo-primary/20">
              <p className="text-gray-300">Tổng thử thách</p>
              <p className="text-xl font-bold text-white">
                {ctfData?.completed_total || "0/0"}
              </p>
            </div>
            <div className="p-4 rounded-[10px] bg-violet-1730 border border-lozo-primary/20">
              <p className="text-gray-300">Tổng điểm</p>
              <p className="text-xl font-bold text-white">
                {ctfData?.total_points || 0}
              </p>
            </div>
            <div className="p-4 rounded-[10px] bg-violet-1730 border border-lozo-primary/20">
              <p className="text-gray-300">Tiến độ tổng</p>
              <p className="text-xl font-bold text-white">
                {ctfData?.overall_percentage || "0%"}
              </p>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-4">Thử thách CTF</h2>
          {ctfData?.challenges?.length === 0 ? (
            <p className="text-gray-400 text-center">
              Không có thử thách nào phù hợp.
            </p>
          ) : (
            ctfData?.challenges?.map((ch) => {
              const Icon = iconMap[ch.icon] || Shield;
              {
                /* const isCompleted = ch.status === "completed";
              const isLocked = ch.status === "locked"; */
              }
              return (
                <div
                  key={ch.id}
                  className="p-6 rounded-[10px] border border-lozo-primary/20 bg-violet-1730 backdrop-blur-sm"
                >
                  <div className="flex justify-between flex-col lg:flex-row gap-4">
                    <div className="flex items-start">
                      <div className="w-14 h-14 rounded-[10px] bg-gradient-to-r from-lozo-primary to-lozo-secondary flex items-center justify-center mr-4">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {ch.title}
                        </h3>
                        <p className="text-gray-300 mb-3">{ch.description}</p>
                        <div className="flex flex-wrap gap-2 text-sm">
                          <span className="text-gray-400 flex items-center">
                            <Clock className="w-4 h-4 mr-1" /> {ch.duration}
                          </span>
                          <span className="text-lozo-primary">
                            {ch.author && `by ${ch.author}`}
                          </span>
                          <span className="text-gray-400">{ch.category}</span>
                          <span className="text-gray-400">{ch.difficulty}</span>
                        </div>
                        {ch.tags?.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {ch.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-lozo-primary/20 text-lozo-primary rounded-[5px] text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="text-right flex flex-col justify-between items-end">
                      <div>
                        <div className="text-3xl text-experience font-semibold">
                          {ch.points}
                        </div>
                        <div className="text-xs text-gray-400">điểm</div>
                      </div>

                      <Link
                        to={`/ctf/${ch.id}`}
                        className="px-6 py-2 bg-gradient-to-r from-lozo-dark to-lozo-secondary text-white rounded-[10px] flex items-center gap-2"
                      >
                        <Play className="w-4 h-4" /> Chi tiết
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </section>
      </main>
    </div>
  );
};

export default CTF;
