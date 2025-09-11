import { Shield, BookOpen, Target } from "lucide-react";
import Header from "../../../components/Header/Header";
import HeroSection from "../component/Hero";
import CourseCard from "../component/CourseCard";
import FeatureCard from "../component/FeatureCard";
import pic1 from "../../../assets/images/pic1.jpg";
import pic2 from "../../../assets/images/pic2.png";
import pic3 from "../../../assets/images/pic3.png";
import pic4 from "../../../assets/images/pic4.png";
import pic5 from "../../../assets/images/pic5.png";
import pic6 from "../../../assets/images/pic6.png";

export default function Index() {
  const courseData = [
    {
      id: 1,
      title: "An ninh mạng cơ bản",
      description: "Học các nguyên tắc cơ bản về an ninh mạng, bao gồm cảnh quan mối đe dọa, nguyên tắc bảo mật và chiến lược phòng thủ cơ bản.",
      level: "Cơ bản",
      levelColor: "bg-gradient-to-r from-green-500 to-emerald-500",
      rating: 4.8,
      popularity: 95,
      duration: "8 tuần",
      flashcards: "12 thẻ",
      progress: 75,
      tags: ["Nguyên tắc bảo mật", "Đánh giá rủi ro"],
      image: pic1,
      badges: ["Hot"]
    },
    {
      id: 2,
      title: "Ethical Hacking cơ bản",
      description: "Thành thạo nghệ thuật ethical hacking với các kỹ thuật penetration testing thực hành và đánh giá lỗ hổng bảo mật.",
      level: "Trung cấp",
      levelColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
      rating: 4.9,
      popularity: 88,
      duration: "12 tuần",
      flashcards: "15 thẻ",
      progress: 47,
      tags: ["Penetration Testing", "Quét lỗ hổng"],
      image: pic2,
      badges: ["Mới"]
    },
    {
      id: 3,
      title: "Dịch ngược Mã nguồn",
      description: "Rèn luyện kỹ năng với các thử thách Capture The Flag bao gồm mật mã học, reverse engineering và nhiều hơn nữa.",
      level: "Nâng cao",
      levelColor: "bg-gradient-to-r from-red-500 to-pink-500",
      rating: 4.7,
      popularity: 30,
      duration: "Tự học",
      flashcards: "10 thẻ",
      progress: 30,
      tags: ["Mật mã học", "Reverse Engineering"],
      image: pic3
    },
    {
      id: 4,
      title: "Bảo mật ứng dụng Web",
      description: "Tìm hiểu sâu về bảo mật ứng dụng web, OWASP Top 10, và các kỹ thuật tấn công phòng thủ hiện ��ại.",
      level: "Trung cấp",
      levelColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
      rating: 4.8,
      popularity: 92,
      duration: "10 tuần",
      flashcards: "18 thẻ",
      progress: 67,
      tags: ["OWASP Top 10", "SQL Injection"],
      image: pic4,
      badges: ["Hot"]
    },
    {
      id: 5,
      title: "Điều tra số (Digital Forensics)",
      description: "Học cách thu thập, phân tích và bảo toàn bằng chứng số trong các cuộc điều tra an ninh mạng.",
      level: "Nâng cao",
      levelColor: "bg-gradient-to-r from-red-500 to-pink-500",
      rating: 4.9,
      popularity: 84,
      duration: "14 tuần",
      flashcards: "14 thẻ",
      progress: 57,
      tags: ["Thu thập chứng cứ", "Phân tích malware"],
      image: pic5
    },
    {
      id: 6,
      title: "Bảo mật di động",
      description: "Khám phá bảo mật cho các ứng dụng di động Android và iOS, bao gồm phân tích tĩnh và động.",
      level: "Trung cấp",
      levelColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
      rating: 4.6,
      popularity: 79,
      duration: "8 tuần",
      flashcards: "16 thẻ",
      progress: 31,
      tags: ["Bảo mật Android", "Phân tích iOS"],
      image: pic6,
      badges: ["Mới"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-pink-900/10" />

      {/* Floating background dots */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <Header />

      <main className="relative z-10">
        <HeroSection />

        {/* Course Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseData.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={BookOpen}
                title="Khám phá khóa học"
                description="Tìm hiểu các khóa học mới nhất"
                gradient="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30"
              />
              <FeatureCard
                icon={Target}
                title="Phòng Lab"
                description="Luyện tập với bài tập thực tế"
                gradient="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30"
              />
              <FeatureCard
                icon={Shield}
                title="Thử thách CTF"
                description="Tham gia các cuộc thi CTF"
                gradient="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
