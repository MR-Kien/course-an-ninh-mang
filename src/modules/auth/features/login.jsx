import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../../routes/endPoints";
import { useAuth } from "../../../hooks/useAuth"; // đảm bảo đúng đường dẫn
import { toast } from "react-toastify";
import "../styles/animated-border.css";
const Login = () => {
  const { login, isLoggingIn, loginError } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    username: "",
    password: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    setFieldErrors({ username: "", password: "" });
    if (!username.trim() || !password.trim()) {
      toast.error("Please enter your full username and password!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    login({ username, password });
  };
  useEffect(() => {
    if (loginError) {
      const message = loginError?.response?.data?.message || "Login failed";
      const field = message.toLowerCase().includes("password")
        ? "password"
        : "username";
      setFieldErrors({ [field]: message });
      // toast.error(message, {
      //   position: "top-right",
      //   autoClose: 3000,
      // });
    }
  }, [loginError]);

  return (
    <div className="flex h-screen w-full">
      {/* Left - Login Form */}
      <div className="w-1/2 bg-white flex flex-col items-center justify-center px-12 relative">
        {/* Logo + Welcome */}
        <div className="absolute top-10 left-1/2 flex items-center gap-4">
          <Link to={ENDPOINTS.INDEX}>
            <img
              src="https://c.animaapp.com/dMPYuAuq/img/blood-donation-icon-png-3@2x.png"
              alt="Logo"
              className="w-[70px] h-[70px] absolute top-[-30px] left-10 z-20"
            />
          </Link>
          <div className="bg-white w-[900px] ml-[60px] bg-opacity-80 backdrop-blur-md rounded-[15px] px-6 py-2 shadow-md text-[28px] font-bold text-[#a10101] text-center z-10">
            Welcome Back
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="w-full max-w-[400px] animated-border bg-white rounded-lg p-6 shadow-md"
        >
          <h2 className="text-[#a10101] text-3xl font-bold mb-2 text-center">
            Login
          </h2>
          <p className="text-gray-500 text-sm text-center mb-6">
            Enter your username and password to sign in
          </p>

          {/* Username */}
          <label htmlFor="username" className="text-sm text-gray-700">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`w-full px-4 py-3 mt-1 mb-1 border rounded-lg focus:outline-none focus:ring-2 ${
              fieldErrors.username
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-[#a10101]"
            }`}
          />
          {fieldErrors.username && (
            <p className="text-red-500 text-sm mb-3">{fieldErrors.username}</p>
          )}

          {/* Password */}
          <label htmlFor="password" className="text-sm text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3 mt-1 mb-1 border rounded-lg pr-12 focus:outline-none focus:ring-2 ${
                fieldErrors.password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-[#a10101]"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              {showPassword ? (
                // 👁️ Mở mắt
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ) : (
                // 👁️‍🗨️ Đóng mắt
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.269-2.943-9.543-7a10.08 10.08 0 012.134-3.294m3.294-2.134A10.08 10.08 0 0112 5c4.478 0 8.269 2.943 9.543 7a10.08 10.08 0 01-4.347 5.306M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 6L3 3"
                  />
                </svg>
              )}
            </button>
          </div>
          {fieldErrors.password && (
            <p className="text-red-500 text-sm mb-3">{fieldErrors.password}</p>
          )}
          {/* Error message */}
          {/*loginError && (
            <p className="text-red-600 text-sm mt-2 mb-4 text-center">
              {loginError}
            </p>
          )*/}

          {/* Remember me + Forgot */}
          <div className="flex justify-between items-center mt-2 mb-6 text-sm">
            <label className="flex items-center gap-2"></label>
            <Link
              to={ENDPOINTS.AUTH.FORGOT_PASSWORD}
              className="text-[#a10101] font-semibold"
            >
              Forget password?
            </Link>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full py-3 bg-gradient-to-r from-[#fa0101] to-[#a10101] text-white font-bold rounded-lg shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoggingIn ? "Signing in..." : "SIGN IN"}
          </button>
        </form>
      </div>

      {/* Right - Background */}
      <div className="w-1/2 relative flex items-center justify-center">
        <img
          src="https://c.animaapp.com/dMPYuAuq/img/image.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="text-white text-center z-10">
          <h1 className="text-4xl font-bold mb-4">Hematology Analyzer</h1>
          <h2 className="text-4xl font-bold">MANAGEMENT SYSTEM</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
