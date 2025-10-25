// import Sidebar from "../components/Sidebar";
// import DashboardHeader from "../components/DashboardHeader";
// import CourseCard from "../components/CourseCard";
// import Header from "../../../components/Header/Header";
// import pic1 from "../../../assets/images/pic1.jpg";
// import pic2 from "../../../assets/images/pic2.png";
// import pic3 from "../../../assets/images/pic3.png";
// import pic4 from "../../../assets/images/pic4.png";
// import pic5 from "../../../assets/images/pic5.png";
// import pic6 from "../../../assets/images/pic6.png";
// // Sample course data based on the Figma design
// const courses = [
//   {
//     id: "1",
//     title: "An ninh mạng cơ bản",
//     description: "Học các nguyên tắc cơ bản về an ninh mạng, bao gồm định nghĩa mối đe dọa, nguyên tắc bảo mật và chiến lược phòng thủ cơ bản.",
//     instructor: "Security Expert",
//     timeAgo: "2 ngày trước",
//     rating: 4.8,
//     level: "basic",
//     status: "published",
//     image: pic1,
//     students: 1240,
//     completion: 85,
//     reviews: 156,
//     avgViewTime: "45 phút",
//     tags: ["#Network Security", "#Basic Security"]
//   },
//   {
//     id: "2",
//     title: "Ethical Hacking cơ bản",
//     description: "Tham gia nghề thuật ethical hacking với các kỹ thuật penetration testing thực hành và đánh giá lỗ hổng bảo mật.",
//     instructor: "Ethical Hacker Pro",
//     timeAgo: "1 tuần trước",
//     rating: 4.9,
//     level: "intermediate",
//     status: "published",
//     image: pic2,
//     students: 856,
//     completion: 78,
//     reviews: 89,
//     avgViewTime: "52 phút",
//     tags: ["#Penetration Testing", "#Ethical Hacking"]
//   },
//   {
//     id: "3",
//     title: "Dịch vụ Mã nguồn",
//     description: "Phân tích và đánh giá các lỗ hổng Capture The Flag bao gồm mật mã học, reverse engineering và nhiều hơn nữa.",
//     instructor: "Reverse Engineering",
//     timeAgo: "3 ngày trước",
//     rating: 4.7,
//     level: "advanced",
//     status: "published",
//     image: pic3,
//     students: 432,
//     completion: 92,
//     reviews: 67,
//     avgViewTime: "58 phút",
//     tags: ["#Malware Analysis", "#Reverse Engineering"]
//   },
//   {
//     id: "4",
//     title: "Bảo mật ứng dụng Web",
//     description: "Tìm hiểu cách bảo vệ ứng dụng web, OWASP Top 10, và các kỹ thuật tấn công phổ biến nhất.",
//     instructor: "Web Security",
//     timeAgo: "5 ngày trước",
//     rating: 4.6,
//     level: "intermediate",
//     status: "draft",
//     image: pic4,
//     students: 678,
//     completion: 73,
//     reviews: 94,
//     avgViewTime: "41 phút",
//     tags: ["#OWASP Top 10", "#SQL Injection"]
//   },
//   {
//     id: "5",
//     title: "Điều tra số (Digital Forensics)",
//     description: "Học cách thu thập, phân tích và bảo toàn bằng chứng số trong các cuộc điều tra an ninh mạng.",
//     instructor: "Forensics Expert",
//     timeAgo: "1 ngày trước",
//     rating: 4.9,
//     level: "advanced",
//     status: "scheduled",
//     image: pic5,
//     students: 324,
//     completion: 88,
//     reviews: 45,
//     avgViewTime: "62 phút",
//     tags: ["#Digital Investigation", "#Evidence Collection"]
//   },
//   {
//     id: "6",
//     title: "Bảo mật di động",
//     description: "Khám phá bảo mật cho các ứng dụng di động Android và iOS, bao gồm phân tích tĩnh và động.",
//     instructor: "Mobile Security",
//     timeAgo: "4 ngày trước",
//     rating: 4.6,
//     level: "intermediate",
//     status: "published",
//     image: pic6,
//     students: 445,
//     completion: 81,
//     reviews: 72,
//     avgViewTime: "38 phút",
//     tags: ["#Mobile Android", "#Mobile iOS"]
//   }
// ];

// export default function Index() {
//   return (
//     <div className="min-h-screen bg-slate-900">
//       {/* Sidebar */}
//       <Header />
//       <div className="flex">
//         <Sidebar />

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           {/* Dashboard Header */}
//           <DashboardHeader />

//           {/* Course Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//             {courses.map((course) => (
//               <CourseCard key={course.id} {...course} />
//             ))}
//           </div>

//           {/* View All Button */}
//           <div className="flex justify-center mt-8 pt-4">
//             <button className="px-8 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white hover:bg-slate-700 transition-colors">
//               Xem tất cả khóa học
//             </button>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import CourseCard from "../components/CourseCard";
import { ENDPOINTS } from "../../../routes/endPoints";
import { Shield, Users, Bell, LogOut } from "lucide-react";

export default function Index() {
  const [data, setData] = useState({ sidebar: {}, courses: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const username = JSON.parse(localStorage.getItem("user"))?.name || "Admin";
  const token = localStorage.getItem("access_token");
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        if (!token) {
          throw new Error("Vui lòng đăng nhập");
        }

        const response = await axios.get(
          "https://course-an-ninh-mang-backend.vercel.app/api/courses/management",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Lỗi khi tải dữ liệu khóa học");
        setLoading(false);
        if (err.message === "Vui lòng đăng nhập") {
          navigate(ENDPOINTS.USER.LOGIN);
        }
      }
    };

    fetchCourses();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <span className="text-white">Đang tải...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <span className="text-red-400">{error}</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
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
      <div className="flex">
        <Sidebar
          categories={data.sidebar.categories || []}
          statuses={data.sidebar.statuses || []}
          overview={data.sidebar.overview || {}}
        />
        <main className="flex-1 p-6">
          <DashboardHeader />
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {data.courses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                onClick={() =>
                  navigate(ENDPOINTS.USER.DEMO.replace(":id", course.id))
                }
              />
            ))}
          </div>
          <div className="flex justify-center mt-8 pt-4">
            <button className="px-8 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white hover:bg-slate-700 transition-colors">
              Xem tất cả khóa học
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
