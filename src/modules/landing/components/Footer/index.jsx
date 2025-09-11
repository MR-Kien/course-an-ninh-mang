import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
// import { Input } from "../../components/ui/input";
import { Shield, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#5d2b59] bg-gradient-to-b from-[#4B1447] to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-brand-primary" strokeWidth={2} />
              <span className="text-2xl font-bold text-white">LozoAcademy</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Trao quyền cho thế hệ chuyên gia an ninh mạng tiếp theo thông qua học tập thực hành và ứng dụng thực tế.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-brand-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-brand-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-brand-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Khóa học</h3>
            <ul className="space-y-3">
              {[
                "An ninh mạng cơ bản",
                "Ethical Hacking",
                "Dịch ngược mã nguồn",
                "Bảo mật Ứng dụng Web",
                "Điều tra số",
                "Bảo mật Di động"
              ].map((course, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Tài nguyên</h3>
            <ul className="space-y-3">
              {[
                "Blog",
                "Hướng dẫn",
                "Luyện thi chứng chỉ",
                "Hướng dẫn nghề nghiệp",
                "Diễn đàn cộng đồng",
                "Trung tâm hỗ trợ"
              ].map((resource, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Liên hệ</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-primary" />
                <span className="text-white/70">lozostudio25@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-primary" />
                <span className="text-white/70">+84 385555040 (Mr.Nhat)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-primary" />
                <span className="text-white/70">+84 815024919 (Mrs.Duyen)</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-brand-primary" />
                <span className="text-white/70">Hồ Chí Minh, Việt Nam</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="text-base font-medium text-white">Cập nhật tin tức</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Nhập email của bạn"
                  className="h-16 flex-1 pl-2 rounded-[10px] bg-white/10 border border-white/20 !text-white placeholder:text-white/50 focus:border-brand-primary"
                />
                <Button className="w-6 h-16 bg-gradient-to-r !rounded-[10px] !text-white from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 px-6">
                  Đăng ký
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-sm">
            © 2024 LozoAcademy. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Chính sách bảo mật
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Điều khoản dịch vụ
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Chính sách Cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
