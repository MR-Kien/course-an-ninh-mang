// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ENDPOINTS } from "../../../routes/endPoints";
// import ForgotPasswordForm from "../components/forgotfasswordform";
// import CodeForm from "../components/codeform";
// import NewPasswordForm from "../components/newpassword";
// import { useAuth } from "../../../hooks/useAuth";
// import { toast } from "react-toastify";

// const ForgotPassword = () => {
//   const [showCodeForm, setShowCodeForm] = React.useState(false);
//   const [userEmail, setUserEmail] = React.useState("");
//   const [username, setUsername] = React.useState("");
//   const [showNewPasswordForm, setShowNewPasswordForm] = React.useState(false);
//   const [verifyToken, setVerifyToken] = React.useState("");
//   const navigate = useNavigate();
//   const { forgotPassword, verificationOtp, resetPassword } = useAuth();

//   // Gửi yêu cầu lấy OTP
//   const handleSubmit = async ({ username, email }) => {
//     try {
//       const response = await forgotPassword({ username, email });
//       if (response) {
//         setShowCodeForm(true);
//         setUserEmail(email);
//         setUsername(username);
//         toast.success("Gửi mã OTP thành công!");
//       } else {
//         toast.error("Gửi OTP thất bại");
//       }
//     } catch (error) {
//       console.error("Error in forgotPassword:", error);
//       toast.error("Lỗi khi gửi OTP");
//     }
//   };

//   // Gửi lại OTP
//   const handleResend = async () => {
//     try {
//       const response = await forgotPassword({ username, email: userEmail });
//       if (response.code === 1000) {
//         setShowCodeForm(true);
//         setShowNewPasswordForm(false);
//         toast.success("Gửi lại OTP thành công!");
//       } else {
//         toast.error("Gửi lại OTP thất bại");
//       }
//     } catch (error) {
//       toast.error("Lỗi khi gửi lại OTP");
//     }
//   };

//   // Xác minh OTP
//   const handleCodeSubmit = async (code) => {
//     try {
//       const response = await verificationOtp({ otp: code.code });
//       if (response && response.verificationToken) {
//         setVerifyToken(response.verificationToken);
//         setShowNewPasswordForm(true);
//         toast.success("Xác minh OTP thành công!");
//       } else {
//         toast.error("OTP không hợp lệ");
//       }
//     } catch (error) {
//       toast.error("Lỗi xác minh OTP");
//     }
//   };

//   // Đặt lại mật khẩu
//   const handleNewPasswordSubmit = async (newPasswordObj) => {
//     const payload = {
//       username,
//       newPassword: newPasswordObj.newPassword,
//       token: verifyToken,
//     };

//     try {
//       const response = await resetPassword(payload);
//       if (response) {
//         toast.success("Đặt lại mật khẩu thành công!");
//         setTimeout(() => navigate(ENDPOINTS.AUTH.LOGIN), 1500);
//       } else {
//         toast.error("Đặt lại mật khẩu thất bại");
//       }
//     } catch (error) {
//       toast.error("Lỗi khi đặt lại mật khẩu");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-lozo-dark relative overflow-hidden">
//       {/* Background gradient elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-14 right-48 w-72 h-72 rounded-full opacity-80 blur-[30px] bg-gradient-to-b from-lozo-purple via-transparent to-transparent"></div>
//         <div className="absolute bottom-32 left-52 w-96 h-96 rounded-full opacity-70 blur-[30px] bg-gradient-to-b from-lozo-purple via-lozo-green to-lozo-dark"></div>
//         <div className="absolute bottom-48 right-72 w-80 h-80 rounded-full opacity-60 blur-[30px] bg-gradient-to-b from-lozo-purple via-lozo-purple-dark to-lozo-dark"></div>
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

//         {/* Main form layout */}
//         <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 gap-12 lg:gap-24">
//           {/* Left content */}
//           <div className="flex-1 max-w-2xl lg:max-w-3xl text-center lg:text-left">
//             <h1 className="font-bank-gothic text-5xl md:text-6xl lg:text-7xl text-white mb-6 lg:mb-8 tracking-wider">
//               FORGOT PASSWORD?
//             </h1>
//             <p className="font-crimson text-lg sm:text-xl md:text-2xl text-white mb-8 lg:mb-12 leading-normal max-w-2xl mx-auto lg:mx-0">
//               Nhập tên người dùng và email để nhận mã xác minh. Sau khi xác
//               nhận, bạn có thể đặt lại mật khẩu mới một cách nhanh chóng và an
//               toàn.
//             </p>
//             <button
//               onClick={() => navigate(ENDPOINTS.AUTH.LOGIN)}
//               className="inline-flex items-center justify-center font-sans font-medium text-lg text-white border border-white rounded-full px-8 py-3 hover:bg-white hover:text-lozo-dark transition-colors duration-200 italic"
//             >
//               Back to Login
//             </button>
//           </div>

//           {/* Right side - Form */}
//           <div className="w-full max-w-md lg:max-w-lg">
//             <div className="border-4 border-lozo-purple border-opacity-70 rounded-3xl p-8 lg:p-12 bg-lozo-dark bg-opacity-50 backdrop-blur-sm">
//               <h2 className="font-bank-gothic text-3xl md:text-4xl lg:text-5xl text-white text-center mb-8 lg:mb-12 tracking-wider">
//                 Reset Password
//               </h2>

//               {showNewPasswordForm ? (
//                 <NewPasswordForm onSubmit={handleNewPasswordSubmit} />
//               ) : showCodeForm ? (
//                 <CodeForm
//                   email={userEmail}
//                   onSubmit={handleCodeSubmit}
//                   onResend={handleResend}
//                 />
//               ) : (
//                 <ForgotPasswordForm onSubmit={handleSubmit} />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;
import React from "react";
import { useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../../routes/endPoints";
import ForgotPasswordForm from "../components/forgotfasswordform";
import CodeForm from "../components/codeform";
import NewPasswordForm from "../components/newpassword";
import { useAuth } from "../../../hooks/useAuth";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [showCodeForm, setShowCodeForm] = React.useState(false);
  const [showNewPasswordForm, setShowNewPasswordForm] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userId, setUserId] = React.useState(null);
  const [code, setCode] = React.useState("");
  const navigate = useNavigate();

  const { forgotPassword, verificationOtp, resetPassword } = useAuth();

  // Gửi yêu cầu lấy mã xác nhận
  const handleSubmit = async ({ username, email }) => {
    try {
      const res = await forgotPassword({ ten: username, email });
      toast.success(res.message || "Gửi mã xác nhận thành công!");
      setUserEmail(email);
      setUserName(username);
      setShowCodeForm(true);
    } catch (error) {
      toast.error(error.response?.data?.message || "Lỗi khi gửi mã xác nhận");
    }
  };

  // Xác minh mã xác nhận
  const handleCodeSubmit = async ({ code }) => {
    try {
      const res = await verificationOtp({ email: userEmail, code });
      if (res.userId) {
        toast.success(res.message || "Mã xác nhận hợp lệ!");
        setUserId(res.userId);
        setCode(code);
        setShowNewPasswordForm(true);
      } else {
        toast.error("Mã xác nhận không hợp lệ!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Lỗi xác minh mã!");
    }
  };

  // Gửi lại mã xác nhận
  const handleResend = async () => {
    try {
      await forgotPassword({ ten: userName, email: userEmail });
      toast.success("Gửi lại mã xác nhận thành công!");
    } catch {
      toast.error("Không thể gửi lại mã xác nhận");
    }
  };

  // Đặt lại mật khẩu mới
  const handleNewPasswordSubmit = async ({ newPassword }) => {
    try {
      const res = await resetPassword({
        userId,
        code,
        newPassword,
      });
      toast.success(res.message || "Đặt lại mật khẩu thành công!");
      setTimeout(() => navigate(ENDPOINTS.AUTH.LOGIN), 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || "Lỗi khi đặt lại mật khẩu");
    }
  };

  return (
    <div className="min-h-screen bg-lozo-dark relative overflow-hidden">
      {/* Nền gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-14 right-48 w-72 h-72 rounded-full opacity-80 blur-[30px] bg-gradient-to-b from-lozo-purple via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        <div className="border-4 border-lozo-purple rounded-3xl p-8 lg:p-12 bg-lozo-dark bg-opacity-60 backdrop-blur-md w-full max-w-lg">
          <h2 className="text-white text-4xl font-bank-gothic text-center mb-8 tracking-wider">
            Reset Password
          </h2>

          {showNewPasswordForm ? (
            <NewPasswordForm onSubmit={handleNewPasswordSubmit} />
          ) : showCodeForm ? (
            <CodeForm
              email={userEmail}
              onSubmit={handleCodeSubmit}
              onResend={handleResend}
            />
          ) : (
            <ForgotPasswordForm onSubmit={handleSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
