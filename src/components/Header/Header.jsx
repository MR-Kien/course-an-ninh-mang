// import { Button } from "../../components/ui/button";
import Button from "@mui/material/Button";
// import { LogIn, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ENDPOINTS } from "@/routes/endPoints";
import AIchat from "../../assets/icons/Group.png";
import { Users, LogOut } from "lucide-react";
export default function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  const menuItems = [
    { name: "Khóa học", path: ENDPOINTS.USER.COURSES },
    { name: "Phòng lab", path: ENDPOINTS.USER.LABS },
    { name: "CTF", path: ENDPOINTS.USER.CFT },
    { name: "Giới thiệu", path: ENDPOINTS.USER.ABOUT },
  ];
  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6667 17.3333C26.6667 23.9999 22 27.3333 16.4534 29.2666C16.1629 29.365 15.8474 29.3603 15.56 29.2533C10 27.3333 5.33337 23.9999 5.33337 17.3333V7.99995C5.33337 7.64633 5.47385 7.30719 5.7239 7.05714C5.97395 6.80709 6.31309 6.66662 6.66671 6.66662C9.33337 6.66662 12.6667 5.06662 14.9867 3.03995C15.2692 2.79861 15.6285 2.66602 16 2.66602C16.3716 2.66602 16.7309 2.79861 17.0134 3.03995C19.3467 5.07995 22.6667 6.66662 25.3334 6.66662C25.687 6.66662 26.0261 6.80709 26.2762 7.05714C26.5262 7.30719 26.6667 7.64633 26.6667 7.99995V17.3333Z"
                    stroke="#A10EA4"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-white font-bold text-xl">LozoAcademy</span>
            </div>

            <nav className="flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white/80 hover:text-white font-bold text-sm px-4 py-2 rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to={ENDPOINTS.USER.CHATBOT}
                className="text-white/80 hover:text-white font-bold text-base transition-colors"
              >
                <img
                  src={AIchat}
                  alt="AI chat"
                  className="h-10 w-10 inline-block"
                />
              </Link>
            </nav>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <Link
              to={ENDPOINTS.USER.DASHBOARD}
              className="flex items-center gap-2 text-white/80 hover:text-white font-bold text-sm px-4 py-2 rounded-md transition-colors"
            >
              <Users className="w-4 h-4" />
              Dashboard
            </Link>

            <div className="text-white/80 font-bold text-sm">
              Xin chào, user
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-white/80 hover:text-white font-bold text-sm px-4 py-2 rounded-md transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
    </header>
    // <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
    //   <div className="max-w-7xl mx-auto px-6 lg:px-24">
    //     <div className="flex items-center justify-start h-18 py-4">
    //       {/* Logo */}
    //       <div className="flex items-center space-x-2">
    //         <Link to={ENDPOINTS.INDEX} className="flex items-center">
    //           <Shield className="h-8 w-8 text-[#a10ea4]" strokeWidth={2} />
    //           <span className="text-xl font-bold text-white">LozoAcademy</span>
    //         </Link>
    //       </div>

    //       {/* Navigation */}
    //       <nav className="hidden lg:flex items-center space-x-8 ml-60">
    //         <Link
    //           to={ENDPOINTS.USER.COURSES}
    //           className="text-white/80 hover:text-white font-bold text-base transition-colors"
    //         >
    //           Khóa học
    //         </Link>
    //         <Link
    //           to={ENDPOINTS.USER.LABS}
    //           className="text-white/80 hover:text-white font-bold text-base transition-colors"
    //         >
    //           Phòng lab
    //         </Link>
    //         <Link
    //           to={ENDPOINTS.USER.CFT}
    //           className="text-white/80 hover:text-white font-bold text-base transition-colors"
    //         >
    //           CTF
    //         </Link>
    //         <Link
    //           to={ENDPOINTS.USER.ABOUT}
    //           className="text-white/80 hover:text-white font-bold text-base transition-colors"
    //         >
    //           Giới thiệu
    //         </Link>
    //         <Link
    //           to={ENDPOINTS.USER.CHATBOT}
    //           className="text-white/80 hover:text-white font-bold text-base transition-colors"
    //         >
    //           <img
    //             src={AIchat}
    //             alt="AI chat"
    //             className="h-10 w-10 inline-block"
    //           />
    //         </Link>
    //       </nav>

    //       {/* Auth Buttons */}
    //       {/* <div className="flex items-center space-x-4">
    //         <Link to={ENDPOINTS.USER.DEMO}>
    //           <Button className="flex items-center space-x-2 !text-white/80 hover:!text-white font-bold text-base transition-colors">
    //             <LogIn className="h-6 w-6 pr-1" />
    //               Đăng nhập
    //           </Button>
    //         </Link>
    //         <Link to={ENDPOINTS.USER.OOPS}>
    //           <Button className="normal-case w-24 bg-gradient-to-r from-[#A10EA4] to-[#E310D5] hover:from-brand-primary/90 hover:to-brand-secondary/90 !text-white px-6 py-2 rounded-lg font-medium text-base shadow-lg shadow-black/10">
    //             Đăng ký
    //           </Button>
    //         </Link>
    //       </div> */}

    //       {/* Mobile menu button */}
    //       {/* <button className="lg:hidden text-white">
    //         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    //         </svg>
    //       </button> */}
    //     </div>
    //   </div>
    // </header>
  );
}
