import {
  Check,
  Shield,
  Book,
  Zap,
  Award,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import Header from "../../../components/Header/Header";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../../routes/endPoints";
const Hero = () => (
  <section className="relative py-20 px-4 bg-gradient-to-br from-magenta-light via-violet-dark/30 to-black/100">
    <div className="max-w-7xl mx-auto text-center">
      {/* Badge */}
      <div className="inline-flex items-center px-6 py-2 rounded-full border border-magenta-light bg-magenta-lighter mb-12">
        <span className="text-magenta-secondary text-sm">
          💎 Gói học tập và chứng chỉ
        </span>
      </div>

      {/* Main heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
        <span className="font-roboto">Chọn gói học phù hợp cho </span>
        <span className="bg-gradient-to-r from-magenta-primary via-purple-500 to-magenta-secondary bg-clip-text text-transparent font-roboto">
          hành trình học tập
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-azure-84 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
        Tham gia cùng hàng nghìn chuyên gia học tập ethical hacking, penetration
        testing và các nguyên tắc cơ bản về an ninh mạng thông qua các gói học
        tập chất lượng cao.
      </p>
    </div>
  </section>
);

const PricingCard = ({
  title,
  price,
  period,
  features,
  buttonText,
  buttonVariant = "default",
  icon,
  badge,
  highlighted = false,
}) => (
  <div
    className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all hover:scale-105 ${
      highlighted
        ? "border-magenta-primary/50 bg-gradient-to-br from-magenta-lighter to-magenta-secondary/20"
        : "border-glass-border bg-glass-white"
    }`}
  >
    {badge && (
      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-magenta-primary to-magenta-secondary px-4 py-1 rounded-full">
        <span className="text-white text-sm font-medium">{badge}</span>
      </div>
    )}

    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white text-2xl font-bold font-roboto">{title}</h3>
        <div className="text-magenta-primary">{icon}</div>
      </div>

      <div className="mb-2">
        <span className="text-white text-4xl font-bold font-roboto">
          {price}
        </span>
      </div>

      <p className="text-azure-65 text-base">{period}</p>
    </div>

    <div className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3">
          <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
          <span className="text-azure-84 text-base leading-6">{feature}</span>
        </div>
      ))}
    </div>

    <Link
      to={ENDPOINTS.USER.PAYMENT}
      state={{
        title: title,
        price: price,
        period: period,
        features: features,
      }}
    >
      <button
        className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
          buttonVariant === "primary"
            ? "bg-gradient-to-r from-magenta-primary to-magenta-secondary text-white shadow-lg hover:shadow-xl"
            : buttonVariant === "certificate"
              ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg hover:shadow-xl"
              : "bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-500 hover:to-gray-600"
        }`}
      >
        {buttonText}
      </button>
    </Link>
  </div>
);

const Pricing = () => (
  <section className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        <PricingCard
          title="Gói Cơ Bản"
          price={39000}
          period="VNĐ / tháng"
          icon={<Book className="w-8 h-8" />}
          features={[
            "Truy cập 20+ khóa học cơ bản",
            "Tài liệu học tập PDF",
            "Video bài giảng HD",
            "Diễn đàn thảo luận",
            "Hỗ trợ email cơ bản",
          ]}
          buttonText="Bắt đầu học ngay"
        />

        <PricingCard
          title="Gói Nâng Cao"
          price={89000}
          period="VNĐ / tháng"
          icon={<Zap className="w-8 h-8" />}
          features={[
            "Tất cả tính năng gói Cơ Bản",
            "Truy cập 100+ khóa học cao cấp",
            "Phòng lab thực hành cao cấp",
            "Bài tập thực hành CTF",
            "Dự án thực tế với doanh nghiệp",
          ]}
          buttonText="Chọn gói này"
          buttonVariant="primary"
          badge="Phổ biến"
          highlighted={true}
        />

        <PricingCard
          title="Khóa Chứng Chỉ"
          price={1299000}
          period="VNĐ / khóa học"
          icon={<Award className="w-8 h-8" />}
          features={[
            "Khóa học chuyên sâu 3-6 tháng",
            "Chứng chỉ LozoAcademy",
            "Bài tập thực hành chuyên sâu",
            "Mock exam và đánh giá",
            "Hỗ trợ đăng ký thi chính thức",
          ]}
          buttonText="Xem các khóa chứng chỉ"
          buttonVariant="certificate"
        />
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    {
      question: "Tôi có thể nâng cấp gói học bất kỳ lúc nào không?",
      answer:
        "Có, bạn có thể nâng cấp từ gói Cơ Bản lên gói Nâng Cao bất kỳ lúc nào. Phí chênh lệch sẽ được tính theo tỷ lệ thời gian còn lại.",
    },
    {
      question: "Khóa học chứng chỉ có những loại nào?",
      answer:
        "Chúng tôi cung cấp khóa học chuẩn bị cho các chứng chỉ hàng đầu như CEH (499K), CISSP (899K), OSCP (1.2M), CISM (799K) và nhiều chứng chỉ khác. Giá khóa học tùy thuộc vào độ phức tạp và thời gian học.",
    },
    {
      question: "Điều kiện để tham gia khóa học chứng chỉ là gì?",
      answer:
        "Bạn cần hoàn thành ít nhất 80% khóa học trong gói Nâng Cao và vượt qua tất cả các bài kiểm tra thực hành với điểm tối thiểu 75%. Một số chứng chỉ cao cấp có thể yêu cầu kinh nghiệm thực tế.",
    },
    {
      question: "Tôi có thể hủy gói học bất kỳ lúc nào không?",
      answer:
        "Có, bạn có thể hủy gói học bất kỳ lúc nào. Chúng tôi sẽ hoàn lại tiền theo tỷ lệ thời gian chưa sử dụng trong vòng 30 ngày. Đối với khóa học chứng chỉ, chính sách hoàn tiền áp dụng trong 14 ngày đầu.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-roboto">
            Câu hỏi thường gặp
          </h2>
          <p className="text-azure-84 text-lg">
            Giải đáp những thắc mắc phổ biến về các gói học tập
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-glass-border bg-glass-white rounded-lg p-6 backdrop-blur-sm"
            >
              <h3 className="text-white text-lg font-bold mb-3 font-roboto">
                {faq.question}
              </h3>
              <p className="text-azure-84 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-20 px-4 bg-black/20 relative">
    <div className="absolute inset-0 bg-gradient-to-r from-magenta-lightest to-magenta-secondary/10"></div>
    <div className="max-w-6xl mx-auto text-center relative">
      <h2 className="text-5xl font-bold text-white mb-6 font-roboto">
        Sẵn sàng bắt đầu hành trình học tập?
      </h2>
      <p className="text-azure-84 text-xl mb-8 max-w-2xl mx-auto">
        Tham gia cộng đồng chuyên gia an ninh mạng và phát triển sự nghiệp của
        bạn
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-gradient-to-r from-magenta-primary to-magenta-secondary px-8 py-4 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all">
          Dùng thử miễn phí 7 ngày
        </button>
        <button className="border border-glass-white-20 bg-glass-white-10 px-8 py-4 rounded-lg text-white font-medium backdrop-blur-sm hover:bg-glass-white-20 transition-all">
          Liên hệ tư vấn
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-glass-white-10 bg-gradient-to-br from-magenta-light via-violet-dark/30 to-black">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-magenta-primary" />
            <span className="text-white text-2xl font-bold font-inter">
              LozoAcademy
            </span>
          </div>
          <p className="text-white/70 leading-relaxed">
            Trao quyền cho thế hệ chuyên gia an ninh mạng tiếp theo thông qua
            học tập thực hành và ứng dụng thực tế.
          </p>
        </div>

        {/* Courses */}
        <div className="space-y-6">
          <h3 className="text-white text-lg font-bold font-inter">Khóa học</h3>
          <div className="space-y-3">
            {[
              "An ninh mạng cơ bản",
              "Ethical Hacking",
              "Dịch ngược mã nguồn",
              "Bảo mật Ứng dụng Web",
              "Điều tra số",
              "Bảo mật Di động",
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block text-white/70 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="space-y-6">
          <h3 className="text-white text-lg font-bold font-inter">
            Tài nguyên
          </h3>
          <div className="space-y-3">
            {[
              "Blog",
              "Hướng dẫn",
              "Luyện thi chứng chỉ",
              "Hướng dẫn nghề nghiệp",
              "Diễn đàn cộng đồng",
              "Trung tâm hỗ trợ",
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block text-white/70 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h3 className="text-white text-lg font-bold font-inter">Liên hệ</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-magenta-primary" />
              <span className="text-white/70">lozostudio25@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-magenta-primary" />
              <span className="text-white/70">+84 385555040 ( Mr.Nhat )</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-magenta-primary" />
              <span className="text-white/70">+84 815024919 ( Mrs.Duyen )</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-magenta-primary" />
              <span className="text-white/70">Hồ Chí Minh, Việt Nam</span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="text-white font-medium">Cập nhật tin tức</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-3 py-2 rounded-lg border border-glass-white-20 bg-glass-white-10 text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:border-magenta-primary"
              />
              <button className="bg-gradient-to-r from-magenta-primary to-magenta-secondary px-4 py-2 rounded-lg text-white hover:shadow-lg transition-all">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-glass-white-10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/60 text-sm">
          © 2024 LozoAcademy. Tất cả quyền được bảo lưu.
        </p>
        <div className="flex gap-6 text-sm">
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors"
          >
            Chính sách bảo mật
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors"
          >
            Điều khoản dịch vụ
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors"
          >
            Chính sách Cookie
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default function Courses() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-violet-dark to-black text-white font-inter">
      <Header />
      <Hero />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
