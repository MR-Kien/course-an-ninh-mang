// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { ArrowLeft, CheckCircle, Clock, FileDown } from "lucide-react";
// import Header from "../../../components/Header/Header";

// const ctfDetail = () => {
//   const { id } = useParams(); // lấy ID ctf từ URL
//   const [ctf, setctf] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const token = localStorage.getItem("access_token");

//   useEffect(() => {
//     const fetchctf = async () => {
//       try {
//         const res = await axios.get(
//           `https://course-an-ninh-mang-backend.vercel.app/api/courses/ctf-detail/${id}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         setctf(res.data);
//       } catch (error) {
//         console.error("Lỗi khi tải ctf:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchctf();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-white">
//         Đang tải ctf...
//       </div>
//     );
//   }

//   if (!ctf) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-white">
//         Không tìm thấy ctf
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-lozo-dark to-lozo-darker text-white">
//       <Header />

//       <div className="max-w-5xl mx-auto px-8 py-12">
//         {/* Nút quay lại */}
//         <a
//           href="/ctfs"
//           className="inline-flex items-center text-lozo-primary hover:underline mb-8"
//         >
//           <ArrowLeft className="w-5 h-5 mr-2" /> Quay lại danh sách ctfs
//         </a>

//         {/* Thông tin ctf */}
//         <div className="p-8 rounded-2xl border border-gray-600/50 bg-gray-900/40 backdrop-blur-sm mb-8">
//           <div className="flex items-center justify-between mb-4">
//             <h1 className="text-3xl font-bold">{ctf.title}</h1>
//             {ctf.status === "completed" && (
//               <CheckCircle className="w-6 h-6 text-green-400" />
//             )}
//           </div>
//           <p className="text-gray-300 mb-4">{ctf.description}</p>

//           <div className="flex items-center text-gray-400 text-sm space-x-4">
//             <span className="px-3 py-1 border border-gray-600/40 rounded">
//               {ctf.difficulty}
//             </span>
//             <span className="flex items-center">
//               <Clock className="w-4 h-4 mr-1" />{" "}
//               {ctf.estimatedTime || "30 phút"}
//             </span>
//           </div>
//         </div>

//         {/* PDF Viewer */}
//         <div className="p-8 rounded-2xl border border-gray-700/50 bg-gray-900/40">
//           <h2 className="text-2xl font-semibold mb-4">Bài tập PDF</h2>
//           {ctf.pdfUrl ? (
//             <>
//               <iframe
//                 src={ctf.pdfUrl}
//                 title="ctf PDF"
//                 className="w-full h-[600px] border border-gray-600 rounded-lg mb-4"
//               />
//               <a
//                 href={ctf.pdfUrl}
//                 download
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center bg-lozo-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-lozo-secondary transition"
//               >
//                 <FileDown className="w-4 h-4 mr-2" />
//                 Tải về file PDF
//               </a>
//             </>
//           ) : (
//             <p className="text-gray-400">Không có file PDF cho ctf này.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ctfDetail;
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import {
//   ArrowLeft,
//   FileDown,
//   Shield,
//   Users,
//   LogOut,
//   Bell,
//   Star,
//   User,
//   Clock,
// } from "lucide-react";
// import Header from "../../../components/Header/Header";
// import { ENDPOINTS } from "../../../routes/endPoints";

// const CTFDetail = () => {
//   const { id } = useParams(); // lấy ID ctf từ URL
//   const navigate = useNavigate();
//   const [ctf, setctf] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const token = localStorage.getItem("access_token");
//   const userrole = JSON.parse(localStorage.getItem("user"))?.role || "user";
//   const username = JSON.parse(localStorage.getItem("user"))?.name || "User";

//   useEffect(() => {
//     const fetchctf = async () => {
//       try {
//         const res = await axios.get(
//           `https://course-an-ninh-mang-backend.vercel.app/api/courses/ctf-detail/${id}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         setctf(res.data);
//       } catch (error) {
//         console.error("Lỗi khi tải ctf:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchctf();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-white">
//         Đang tải ctf...
//       </div>
//     );
//   }

//   if (!ctf) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-white">
//         Không tìm thấy ctf
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-lozo-dark to-lozo-darker text-white">
//       {/* Header */}
//       {userrole === "admin" ? (
//         <header className="bg-gradient-to-r from-orange-900 to-orange-800 border-b border-orange-700/50 px-6 py-3">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
//                 <Shield className="w-5 h-5 text-white" />
//               </div>
//               <span className="text-white font-bold text-xl">LozoAcademy</span>
//               <div className="bg-red-600 px-2 py-1 rounded text-white text-sm font-medium">
//                 ADMIN
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <Link
//                 to={ENDPOINTS.USER.MANAMENT}
//                 className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
//               >
//                 <Users className="w-4 h-4" />
//                 <span>Quản lý khóa học</span>
//               </Link>
//               <Link
//                 to={ENDPOINTS.USER.ADMINDASHBOARD}
//                 className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
//               >
//                 <Users className="w-4 h-4" />
//                 <span>Dashboard</span>
//               </Link>
//               <button className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors">
//                 <Bell className="w-4 h-4" />
//                 <span>Xin chào, {username}</span>
//               </button>
//               <Link
//                 to="/"
//                 className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
//               >
//                 <LogOut className="w-4 h-4" />
//                 <span>Đăng xuất</span>
//               </Link>
//             </div>
//           </div>
//         </header>
//       ) : (
//         <Header />
//       )}

//       {/* Nội dung */}
//       <div className="max-w-5xl mx-auto px-8 py-12">
//         {/* Nút quay lại */}
//         <button
//           onClick={() => navigate(-1)}
//           className="inline-flex items-center text-lozo-primary hover:underline mb-8"
//         >
//           <ArrowLeft className="w-5 h-5 mr-2" /> Quay lại danh sách ctfs
//         </button>

//         {/* Thông tin CTF */}
//         <div className="p-8 rounded-2xl border border-gray-600/50 bg-gray-900/40 backdrop-blur-sm mb-8">
//           <h1 className="text-3xl font-bold mb-4">{ctf.ten}</h1>
//           <p className="text-gray-300 mb-4">{ctf.mota}</p>

//           <div className="bg-white shadow-lg rounded-2xl p-6">
//             <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-700">
//               <div className="flex items-center gap-2">
//                 <Star size={16} className="text-yellow-500" />
//                 <span>
//                   <strong>Loại CTF:</strong> {ctf.loaictf}
//                 </span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <User size={16} className="text-blue-500" />
//                 <span>
//                   <strong>Tác giả:</strong> {ctf.tacgia}
//                 </span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock size={16} className="text-green-500" />
//                 <span>
//                   <strong>Thời lượng:</strong>{" "}
//                   {ctf.duration.seconds || "Không giới hạn"}
//                 </span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Star size={16} className="text-orange-500" />
//                 <span>
//                   <strong>Điểm:</strong> {ctf.points || 0} pts
//                 </span>
//               </div>
//               <div className="col-span-2">
//                 <strong>Chỗ AI:</strong> {ctf.choai || "Không có"}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* PDF Viewer */}
//         <div className="p-8 rounded-2xl border border-gray-700/50 bg-gray-900/40">
//           <h2 className="text-2xl font-semibold mb-4">Bài tập PDF</h2>
//           {ctf.pdf_url ? (
//             <>
//               <iframe
//                 src={ctf.pdf_url}
//                 title="ctf PDF"
//                 className="w-full h-[600px] border border-gray-600 rounded-lg mb-4"
//               />
//               <a
//                 href={ctf.pdf_url}
//                 download
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center bg-lozo-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-lozo-secondary transition"
//               >
//                 <FileDown className="w-4 h-4 mr-2" />
//                 Tải về file PDF
//               </a>
//             </>
//           ) : (
//             <p className="text-gray-400">Không có file PDF cho ctf này.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CTFDetail;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  ArrowLeft,
  FileDown,
  Shield,
  Users,
  LogOut,
  Bell,
  Star,
  User,
  Clock,
  CheckCircle, // 👈 THÊM MỚI
  XCircle, // 👈 THÊM MỚI
} from "lucide-react";
// import Header from "../../../components/Header/Header"; // 👈 ĐÃ XÓA do lỗi import
// import { ENDPOINTS } from "../../../routes/endPoints"; // 👈 ĐÃ XÓA do lỗi import

// 🔽 GIẢ LẬP ENDPOINTS ĐỂ SỬA LỖI
const ENDPOINTS = {
  USER: {
    MANAMENT: "/admin/management", // Đường dẫn giả lập
    ADMINDASHBOARD: "/admin/dashboard", // Đường dẫn giả lập
  },
};

// 🔽 GIẢ LẬP HEADER ĐỂ SỬA LỖI
const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <p>Header (Giả lập)</p>
  </header>
);

const CTFDetail = () => {
  const { id } = useParams(); // lấy ID ctf từ URL
  const navigate = useNavigate();
  const [ctf, setctf] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("access_token");
  const userrole = JSON.parse(localStorage.getItem("user"))?.role || "user";
  const username = JSON.parse(localStorage.getItem("user"))?.name || "User";

  // 🔽 THÊM MỚI: State cho challenge hardcoded
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null); // null | 'correct' | 'incorrect'
  const CORRECT_ANSWER = "lozo{chao_mung_ban_choi_ctf}";

  useEffect(() => {
    const fetchctf = async () => {
      try {
        const res = await axios.get(
          `https://course-an-ninh-mang-backend.vercel.app/api/courses/ctf-detail/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setctf(res.data);
      } catch (error) {
        console.error("Lỗi khi tải ctf:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchctf();
  }, [id]);

  // 🔽 THÊM MỚI: Hàm xử lý nộp đáp án
  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    if (answer === CORRECT_ANSWER) {
      setResult("correct");
    } else {
      setResult("incorrect");
    }
  };

  // 🔽 THÊM MỚI: Hàm xử lý khi nhập input (reset kết quả)
  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
    setResult(null); // Reset kết quả khi người dùng gõ lại
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Đang tải ctf...
      </div>
    );
  }

  if (!ctf) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Không tìm thấy ctf
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-lozo-dark to-lozo-darker text-white">
      {/* Header */}
      {userrole === "admin" ? (
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
      ) : (
        <Header />
      )}

      {/* Nội dung */}
      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Nút quay lại */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-lozo-primary hover:underline mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Quay lại danh sách ctfs
        </button>

        {/* Thông tin CTF */}
        <div className="p-8 rounded-2xl border border-gray-600/50 bg-gray-900/40 backdrop-blur-sm mb-8">
          <h1 className="text-3xl font-bold mb-4">{ctf.ten}</h1>
          <p className="text-gray-300 mb-4">{ctf.mota}</p>

          <div className="bg-white shadow-lg rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Star size={16} className="text-yellow-500" />
                <span>
                  <strong>Loại CTF:</strong> {ctf.loaictf}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} className="text-blue-500" />
                <span>
                  <strong>Tác giả:</strong> {ctf.tacgia}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-green-500" />
                <span>
                  <strong>Thời lượng:</strong>{" "}
                  {ctf.duration?.seconds || "Không giới hạn"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-orange-500" />
                <span>
                  <strong>Điểm:</strong> {ctf.points || 0} pts
                </span>
              </div>
              <div className="col-span-2">
                <strong>Chỗ AI:</strong> {ctf.choai || "Không có"}
              </div>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="p-8 rounded-2xl border border-gray-700/50 bg-gray-900/40">
          <h2 className="text-2xl font-semibold mb-4">Bài tập PDF</h2>
          {ctf.pdf_url ? (
            <>
              <iframe
                src={ctf.pdf_url}
                title="ctf PDF"
                className="w-full h-[600px] border border-gray-600 rounded-lg mb-4"
              />
              <a
                href={ctf.pdf_url}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-lozo-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-lozo-secondary transition"
              >
                <FileDown className="w-4 h-4 mr-2" />
                Tải về file PDF
              </a>
            </>
          ) : (
            <p className="text-gray-400">Không có file PDF cho ctf này.</p>
          )}
        </div>

        {/* 🔽 SECTION MỚI: NỘP ĐÁP ÁN */}
        <section className="mt-8 p-8 rounded-2xl border border-gray-700/50 bg-gray-900/40">
          <h2 className="text-2xl font-semibold mb-4">Nộp Đáp Án</h2>
          <form
            onSubmit={handleSubmitAnswer}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="text"
              placeholder="Nhập flag của bạn: lozo{...}"
              className="flex-1 px-4 py-3 rounded-[10px] border border-lozo-primary/30 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lozo-primary transition-all"
              value={answer}
              onChange={handleAnswerChange}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-lozo-primary text-white rounded-[10px] font-semibold hover:bg-lozo-dark transition-all"
            >
              Nộp
            </button>
          </form>

          {/* Hiển thị kết quả */}
          {result === "correct" && (
            <div className="mt-4 flex items-center gap-2 text-green-500">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">
                Correct! Chúc mừng bạn, chính là nó!
              </span>
            </div>
          )}
          {result === "incorrect" && (
            <div className="mt-4 flex items-center gap-2 text-red-500">
              <XCircle className="w-5 h-5" />
              <span className="font-semibold">
                Không đúng. Vui lòng thử lại!
              </span>
            </div>
          )}
        </section>
        {/* 🔼 KẾT THÚC SECTION MỚI */}
      </div>
    </div>
  );
};

export default CTFDetail;
