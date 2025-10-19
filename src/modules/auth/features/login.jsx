// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ENDPOINTS } from "../../../routes/endPoints";
// import { useAuth } from "../../../hooks/useAuth";
// import axios from "axios";
// export default function Login() {
//   const [rememberMe, setRememberMe] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert("⚠️ Vui lòng nhập đầy đủ thông tin.");
//       return;
//     }

//     login({ email, matkhau: password });
//     // Nếu có rememberMe thì lưu email + password
//     if (rememberMe) {
//       localStorage.setItem("email", email);
//       localStorage.setItem("password", password);
//     } else {
//       localStorage.removeItem("email");
//       localStorage.removeItem("password");
//     }
//   };
//   return (
//     <div className="min-h-screen bg-lozo-dark relative overflow-hidden">
//       {/* Background gradient elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Top right blur */}
//         <div className="absolute top-14 right-48 w-72 h-72 rounded-full opacity-80 blur-[30px] bg-gradient-to-b from-lozo-purple via-transparent to-transparent"></div>

//         {/* Bottom left blur */}
//         <div className="absolute bottom-32 left-52 w-96 h-96 rounded-full opacity-70 blur-[30px] bg-gradient-to-b from-lozo-purple via-lozo-green to-lozo-dark"></div>

//         {/* Bottom right blur */}
//         <div className="absolute bottom-48 right-72 w-80 h-80 rounded-full opacity-60 blur-[30px] bg-gradient-to-b from-lozo-purple via-lozo-purple-dark to-lozo-dark"></div>

//         {/* Additional top center blur */}
//         <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full opacity-50 blur-[30px] bg-gradient-to-b from-lozo-purple to-transparent"></div>
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 min-h-screen flex flex-col">
//         {/* Logo */}
//         <div className="flex items-center gap-2 p-8 md:p-12">
//           <div className="w-8 h-8 relative">
//             <svg
//               width="32"
//               height="32"
//               viewBox="0 0 32 32"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M26.6668 17.3333C26.6668 23.9999 22.0002 27.3333 16.4535 29.2666C16.163 29.365 15.8475 29.3603 15.5602 29.2533C10.0002 27.3333 5.3335 23.9999 5.3335 17.3333V7.99995C5.3335 7.64633 5.47397 7.30719 5.72402 7.05714C5.97407 6.80709 6.31321 6.66662 6.66683 6.66662C9.3335 6.66662 12.6668 5.06662 14.9868 3.03995C15.2693 2.79861 15.6286 2.66602 16.0002 2.66602C16.3717 2.66602 16.731 2.79861 17.0135 3.03995C19.3468 5.07995 22.6668 6.66662 25.3335 6.66662C25.6871 6.66662 26.0263 6.80709 26.2763 7.05714C26.5264 7.30719 26.6668 7.64633 26.6668 7.99995V17.3333Z"
//                 stroke="#A10EA4"
//                 strokeWidth="2.66667"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//           <span className="text-white font-inter font-bold text-xl">
//             LozoAcademy
//           </span>
//         </div>

//         {/* Main layout */}
//         <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 gap-12 lg:gap-24">
//           {/* Left side - Welcome content */}
//           <div className="flex-1 max-w-2xl lg:max-w-3xl text-center lg:text-left">
//             <h1 className="font-bank-gothic text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-normal mb-6 lg:mb-8 leading-tight tracking-wider">
//               WELCOME HACKER!
//             </h1>

//             <p className="font-crimson text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-8 lg:mb-12 leading-normal max-w-2xl mx-auto lg:mx-0">
//               Hành trình của bạn để chinh phục kỹ năng hacking mũ trắng, phòng
//               thủ số và tấn công an ninh mạng bắt đầu từ đây.
//             </p>

//             <button className="inline-flex items-center justify-center font-sans font-medium text-lg sm:text-xl lg:text-2xl text-white border border-white rounded-full px-8 py-3 lg:px-12 lg:py-4 hover:bg-white hover:text-lozo-dark transition-colors duration-200 italic">
//               BEGIN THE JOURNEY
//             </button>
//           </div>

//           {/* Right side - Login form */}
//           <div className="w-full max-w-md lg:max-w-lg">
//             <div className="relative">
//               {/* Form container with border */}
//               <div className="border-4 border-lozo-purple border-opacity-70 rounded-3xl p-8 lg:p-12 bg-lozo-dark bg-opacity-50 backdrop-blur-sm">
//                 <h2 className="font-bank-gothic text-3xl md:text-4xl lg:text-5xl text-white text-center mb-8 lg:mb-12 tracking-wider">
//                   Login
//                 </h2>

//                 <form className="space-y-6">
//                   {/* Email input */}
//                   <div className="relative">
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="Nhập tên hoặc Email"
//                       className="w-full h-16 px-6 rounded-2xl border border-gray-300 bg-transparent text-white placeholder-white placeholder-opacity-60 font-chakra text-xl lg:text-2xl focus:outline-none focus:border-lozo-purple transition-colors"
//                     />
//                   </div>

//                   {/* Password input */}
//                   <div className="relative">
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Mật khẩu"
//                       className="w-full h-16 px-6 rounded-2xl border border-gray-300 bg-transparent text-white placeholder-white placeholder-opacity-60 font-chakra text-xl lg:text-2xl focus:outline-none focus:border-lozo-purple transition-colors"
//                     />
//                   </div>

//                   {/* Remember me checkbox */}
//                   <div className="flex items-center gap-3">
//                     <div className="relative">
//                       <input
//                         type="checkbox"
//                         id="remember"
//                         checked={rememberMe}
//                         onChange={(e) => setRememberMe(e.target.checked)}
//                         className="w-4 h-4 opacity-0 absolute"
//                       />
//                       <div className="w-4 h-4 bg-gray-300 cursor-pointer relative">
//                         {rememberMe && (
//                           <svg
//                             width="16"
//                             height="16"
//                             viewBox="0 0 16 16"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="absolute inset-0"
//                           >
//                             <path
//                               d="M2.3999 8.00004L6.39985 12.0001L13.5999 4.80008L12.4719 3.66406L6.39985 9.73604L3.52795 6.86406L2.3999 8.00004Z"
//                               fill="black"
//                             />
//                           </svg>
//                         )}
//                       </div>
//                     </div>
//                     <label
//                       htmlFor="remember"
//                       className="text-white font-chakra text-lg lg:text-xl cursor-pointer"
//                     >
//                       Remember me
//                     </label>
//                   </div>

//                   {/* Login button */}
//                   <button
//                     type="submit"
//                     onClick={handleSubmit}
//                     className="w-full h-16 rounded-2xl bg-gradient-to-r from-lozo-form-bg via-lozo-form-mid to-lozo-purple-light border border-white border-opacity-30 text-white font-chakra text-2xl lg:text-3xl font-medium hover:opacity-90 transition-opacity"
//                   >
//                     Login
//                   </button>

//                   {/* Forgot password */}
//                   <div className="text-center">
//                     <Link
//                       to={ENDPOINTS.AUTH.FORGOT_PASSWORD}
//                       href="#"
//                       className="text-white font-chakra text-lg lg:text-xl hover:underline"
//                     >
//                       Bạn quên mật khẩu?
//                     </Link>
//                   </div>

//                   {/* Divider */}
//                   <div className="flex items-center gap-4 my-6">
//                     <div className="flex-1 h-px bg-white"></div>
//                     <span className="text-white font-chakra text-lg lg:text-xl">
//                       Or
//                     </span>
//                     <div className="flex-1 h-px bg-white"></div>
//                   </div>

//                   {/* Social login buttons */}
//                   <div className="flex justify-center gap-4">
//                     <button
//                       type="button"
//                       className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors"
//                     >
//                       <svg
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                       >
//                         <path
//                           d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                           fill="#4285F4"
//                         />
//                         <path
//                           d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                           fill="#34A853"
//                         />
//                         <path
//                           d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                           fill="#FBBC05"
//                         />
//                         <path
//                           d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                           fill="#EA4335"
//                         />
//                       </svg>
//                     </button>
//                     {/* GitHub */}
//                     <button
//                       type="button"
//                       className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors"
//                     >
//                       <svg
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="text-black"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           clipRule="evenodd"
//                           d="M12 .297c-6.63 0-12 5.373-12
//         12 0 5.303 3.438 9.8 8.205
//         11.387.6.113.82-.258.82-.577
//         0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729
//         1.205.084 1.84 1.236 1.84 1.236
//         1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.931
//         0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176
//         0 0 1.008-.322 3.301 1.23a11.52 11.52
//         0 013.003-.404c1.018.005 2.045.138
//         3.003.404 2.291-1.552 3.297-1.23
//         3.297-1.23.655 1.653.243 2.873.119
//         3.176.77.84 1.235 1.91 1.235 3.221
//         0 4.609-2.807 5.628-5.479 5.922.43.372.823 1.103.823
//         2.222 0 1.604-.015 2.896-.015
//         3.286 0 .322.216.694.825.576C20.565
//         22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 </form>
//                 <div className="text-center">
//                   <span className="text-white font-chakra text-lg lg:text-xl">
//                     Bạn chưa có tài khoản?{" "}
//                   </span>
//                   <Link
//                     to="/signin"
//                     className="text-lozo-purple font-chakra text-lg lg:text-xl hover:underline"
//                   >
//                     Đăng ký
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../../routes/endPoints";
import { useAuth } from "../../../hooks/useAuth";
import axios from "axios";

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("⚠️ Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    login({ email, matkhau: password });
    if (rememberMe) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
  };

  return (
    <div className="min-h-screen bg-lozo-dark relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-14 right-48 w-72 h-72 rounded-full opacity-80 blur-[30px] bg-gradient-to-b from-lozo-purple via-transparent to-transparent"></div>
        <div className="absolute bottom-32 left-52 w-96 h-96 rounded-full opacity-70 blur-[30px] bg-gradient-to-b from-lozo-purple via-lozo-green to-lozo-dark"></div>
        <div className="absolute bottom-48 right-72 w-80 h-80 rounded-full opacity-60 blur-[30px] bg-gradient-to-b from-lozo-purple via-lozo-purple-dark to-lozo-dark"></div>
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full opacity-50 blur-[30px] bg-gradient-to-b from-lozo-purple to-transparent"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-2 p-8 md:p-12">
          <div className="w-8 h-8 relative">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6668 17.3333C26.6668 23.9999 22.0002 27.3333 16.4535 29.2666C16.163 29.365 15.8475 29.3603 15.5602 29.2533C10.0002 27.3333 5.3335 23.9999 5.3335 17.3333V7.99995C5.3335 7.64633 5.47397 7.30719 5.72402 7.05714C5.97407 6.80709 6.31321 6.66662 6.66683 6.66662C9.3335 6.66662 12.6668 5.06662 14.9868 3.03995C15.2693 2.79861 15.6286 2.66602 16.0002 2.66602C16.3717 2.66602 16.731 2.79861 17.0135 3.03995C19.3468 5.07995 22.6668 6.66662 25.3335 6.66662C25.6871 6.66662 26.0263 6.80709 26.2763 7.05714C26.5264 7.30719 26.6668 7.64633 26.6668 7.99995V17.3333Z"
                stroke="#A10EA4"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-white font-inter font-bold text-xl">
            LozoAcademy
          </span>
        </div>

        {/* Main layout */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 gap-12 lg:gap-24">
          {/* Left side */}
          <div className="flex-1 max-w-2xl lg:max-w-3xl text-center lg:text-left">
            <h1 className="font-bank-gothic text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-normal mb-6 lg:mb-8 leading-tight tracking-wider">
              WELCOME HACKER!
            </h1>
            <p className="font-crimson text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-8 lg:mb-12 leading-normal max-w-2xl mx-auto lg:mx-0">
              Hành trình của bạn để chinh phục kỹ năng hacking mũ trắng, phòng
              thủ số và tấn công an ninh mạng bắt đầu từ đây.
            </p>
            <button className="inline-flex items-center justify-center font-sans font-medium text-lg sm:text-xl lg:text-2xl text-white border border-white rounded-full px-8 py-3 lg:px-12 lg:py-4 hover:bg-white hover:text-lozo-dark transition-colors duration-200 italic">
              BEGIN THE JOURNEY
            </button>
          </div>

          {/* Right side - Login form */}
          <div className="w-full max-w-md lg:max-w-lg">
            <div className="relative border-4 border-lozo-purple border-opacity-70 rounded-3xl p-8 lg:p-12 bg-lozo-dark bg-opacity-50 backdrop-blur-sm">
              <h2 className="font-bank-gothic text-3xl md:text-4xl lg:text-5xl text-white text-center mb-8 lg:mb-12 tracking-wider">
                Login
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Email input */}
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full h-16 px-6 rounded-2xl border border-gray-300 bg-transparent text-white placeholder-white placeholder-opacity-60 font-chakra text-xl lg:text-2xl focus:outline-none focus:border-lozo-purple transition-colors"
                  />
                </div>

                {/* Password input with eye toggle */}
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mật khẩu"
                    className="w-full h-16 px-6 pr-14 rounded-2xl border border-gray-300 bg-transparent text-white placeholder-white placeholder-opacity-60 font-chakra text-xl lg:text-2xl focus:outline-none focus:border-lozo-purple transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-4 flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      // Mắt mở
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    ) : (
                      // Mắt đóng
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.384-3.947m3.029-2.272A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.955 9.955 0 01-4.108 5.293M3 3l18 18"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Remember me */}
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="remember"
                    className="flex items-center gap-2 cursor-pointer select-none"
                  >
                    <div
                      className={`w-5 h-5 rounded-[4px] border-2 flex items-center justify-center transition-colors duration-200 ${
                        rememberMe
                          ? "bg-blue-500 border-blue-500"
                          : "bg-transparent border-gray-400 hover:border-blue-400"
                      }`}
                    >
                      {rememberMe && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform duration-200 scale-100"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <span className="text-white font-chakra text-lg lg:text-xl">
                      Remember me
                    </span>
                  </label>

                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="hidden"
                  />
                </div>

                {/* Login button */}
                <button
                  type="submit"
                  className="w-full h-16 rounded-2xl bg-gradient-to-r from-lozo-form-bg via-lozo-form-mid to-lozo-purple-light border border-white border-opacity-30 text-white font-chakra text-2xl lg:text-3xl font-medium hover:opacity-90 transition-opacity"
                >
                  Login
                </button>

                {/* Forgot password */}
                <div className="text-center">
                  <Link
                    to={ENDPOINTS.AUTH.FORGOT_PASSWORD}
                    className="text-white font-chakra text-lg lg:text-xl hover:underline"
                  >
                    Bạn quên mật khẩu?
                  </Link>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 my-6">
                  <div className="flex-1 h-px bg-white"></div>
                  <span className="text-white font-chakra text-lg lg:text-xl">
                    Or
                  </span>
                  <div className="flex-1 h-px bg-white"></div>
                </div>

                {/* Social login buttons */}
                <div className="flex justify-center gap-4">
                  {/* Google */}
                  <button
                    type="button"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  </button>

                  {/* GitHub */}
                  <button
                    type="button"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-black"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 .297c-6.63 0-12 5.373-12 
        12 0 5.303 3.438 9.8 8.205 
        11.387.6.113.82-.258.82-.577 
        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 
        1.205.084 1.84 1.236 1.84 1.236 
        1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.931 
        0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 
        0 0 1.008-.322 3.301 1.23a11.52 11.52 
        0 013.003-.404c1.018.005 2.045.138 
        3.003.404 2.291-1.552 3.297-1.23 
        3.297-1.23.655 1.653.243 2.873.119 
        3.176.77.84 1.235 1.91 1.235 3.221 
        0 4.609-2.807 5.628-5.479 5.922.43.372.823 1.103.823 
        2.222 0 1.604-.015 2.896-.015 
        3.286 0 .322.216.694.825.576C20.565 
        22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                      />
                    </svg>
                  </button>
                </div>
              </form>

              <div className="text-center mt-6">
                <span className="text-white font-chakra text-lg lg:text-xl">
                  Bạn chưa có tài khoản?{" "}
                </span>
                <Link
                  to="/signin"
                  className="text-lozo-purple font-chakra text-lg lg:text-xl hover:underline"
                >
                  Đăng ký
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
