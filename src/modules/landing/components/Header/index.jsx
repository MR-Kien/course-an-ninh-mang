// import { Button } from "../../components/ui/button";
import Button from "@mui/material/Button";
import { LogIn, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "@/routes/endPoints";
import AIchat from "../../../../assets/icons/Group.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-[#a10ea4]" strokeWidth={2} />
            <span className="text-xl font-bold text-white">LozoAcademy</span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#courses"
              className="text-white/80 hover:text-white font-bold text-base transition-colors"
            >
              Khóa học
            </a>
            <a
              href="/lab"
              className="text-white/80 hover:text-white font-bold text-base transition-colors"
            >
              Phòng lab
            </a>
            <a
              href="/ctf"
              className="text-white/80 hover:text-white font-bold text-base transition-colors"
            >
              CTF
            </a>
            <a
              href="/about"
              className="text-white/80 hover:text-white font-bold text-base transition-colors"
            >
              Giới thiệu
            </a>
            <a
              href="/contact"
              className="text-white/80 hover:text-white font-bold text-base transition-colors"
            >
              <img
                src={AIchat}
                alt="AI chat"
                className="h-10 w-10 inline-block"
              />
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link to={ENDPOINTS.AUTH.LOGIN}>
              <Button className="flex items-center space-x-2 !text-white/80 hover:!text-white font-bold text-base transition-colors">
                <LogIn className="h-6 w-6 pr-1" />
                Đăng nhập
              </Button>
            </Link>
            <Link to={ENDPOINTS.AUTH.SIGNIN}>
              <Button className="normal-case w-24 bg-gradient-to-r from-[#A10EA4] to-[#E310D5] hover:from-brand-primary/90 hover:to-brand-secondary/90 !text-white px-6 py-2 rounded-lg font-medium text-base shadow-lg shadow-black/10">
                Đăng ký
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          {/* <button className="lg:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button> */}
        </div>
      </div>
    </header>
  );
}
