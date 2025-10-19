import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

const CodeForm = ({ email, onSubmit, onResend }) => {
  const [code, setCode] = useState(Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(60);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length === 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (index < 5 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    }

    if (value.length === 6) {
      const values = value.slice(0, 6).split("");
      setCode(values);
      values.forEach((digit, i) => {
        if (inputRefs.current[i]) {
          inputRefs.current[i].value = digit;
        }
      });
      if (inputRefs.current[5]) inputRefs.current[5].focus();
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("Text").replace(/\D/g, "");
    if (pastedData.length === 6) {
      const values = pastedData.split("");
      setCode(values);
      values.forEach((digit, i) => {
        if (inputRefs.current[i]) {
          inputRefs.current[i].value = digit;
        }
      });
      if (inputRefs.current[5]) inputRefs.current[5].focus();
      e.preventDefault();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newCode = [...code];
      if (!code[index] && index > 0) {
        newCode[index - 1] = "";
        setCode(newCode);
        if (inputRefs.current[index - 1]) inputRefs.current[index - 1].focus();
      } else {
        newCode[index] = "";
        setCode(newCode);
      }
    }

    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const enteredCode = code.join("");

    try {
      await onSubmit({ code: enteredCode });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResend = () => {
    onResend?.();
    setCode(Array(6).fill(""));
    setTimeLeft(60);
    inputRefs.current[0]?.focus();
  };

  const isExpired = timeLeft <= 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="text-sm text-white block mb-1 font-bold">
          OTP code đã gửi đến{" "}
          <span className="text-purple-400 font-semibold">{email}</span>
        </label>
      </div>

      <div className="flex justify-between gap-2" onPaste={handlePaste}>
        {code.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            disabled={isExpired}
            className="w-12 h-12 text-center text-xl border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent text-white placeholder-white"
          />
        ))}
      </div>

      <div className="text-sm font-bold text-white">
        {isExpired ? (
          <button
            type="button"
            onClick={handleResend}
            className="text-purple-400 underline hover:text-purple-600 transition"
          >
            Send code again
          </button>
        ) : (
          `Code có hiệu lực trong ${timeLeft}s`
        )}
      </div>

      <button
        type="submit"
        disabled={isExpired || isSubmitting}
        className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:opacity-90 transition disabled:opacity-50"
      >
        {isSubmitting ? "Confirming..." : "Confirm"}
      </button>
    </form>
  );
};

CodeForm.propTypes = {
  email: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onResend: PropTypes.func,
};

export default CodeForm;

// import PropTypes from "prop-types";
// import { useState, useEffect, useRef } from "react";

// const CodeForm = ({ email, onSubmit, onResend }) => {
//   const [code, setCode] = useState(Array(6).fill(""));
//   const [timeLeft, setTimeLeft] = useState(60);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const inputRefs = useRef([]);

//   useEffect(() => {
//     if (timeLeft <= 0) return;
//     const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
//     return () => clearInterval(timer);
//   }, [timeLeft]);

//   const handleChange = (e, index) => {
//     const value = e.target.value.replace(/\D/g, ""); // chỉ cho số

//     if (value.length === 1) {
//       const newCode = [...code];
//       newCode[index] = value;
//       setCode(newCode);

//       console.log(`✅ Nhập ký tự ở ô ${index + 1}:`, value);
//       console.log("👉 Mã hiện tại:", newCode.join(""));

//       if (index < 5 && inputRefs.current[index + 1]) {
//         inputRefs.current[index + 1].focus();
//       }
//     }

//     // Khi người dùng dán 1 chuỗi gồm 6 số
//     if (value.length === 6) {
//       const values = value.slice(0, 6).split("");
//       setCode(values);
//       console.log("📋 Người dùng dán mã OTP:", values.join(""));
//       values.forEach((digit, i) => {
//         if (inputRefs.current[i]) {
//           inputRefs.current[i].value = digit;
//         }
//       });
//       if (inputRefs.current[5]) inputRefs.current[5].focus();
//     }
//   };

//   const handlePaste = (e) => {
//     const pastedData = e.clipboardData.getData("Text").replace(/\D/g, "");
//     if (pastedData.length === 6) {
//       const values = pastedData.split("");
//       setCode(values);
//       console.log("📋 Người dùng dán mã OTP:", pastedData);
//       values.forEach((digit, i) => {
//         if (inputRefs.current[i]) {
//           inputRefs.current[i].value = digit;
//         }
//       });
//       if (inputRefs.current[5]) inputRefs.current[5].focus();
//       e.preventDefault();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace") {
//       const newCode = [...code];
//       if (!code[index] && index > 0) {
//         newCode[index - 1] = "";
//         setCode(newCode);
//         if (inputRefs.current[index - 1]) {
//           inputRefs.current[index - 1].focus();
//         }
//       } else {
//         newCode[index] = "";
//         setCode(newCode);
//       }
//       console.log("⌫ Xóa ký tự:", newCode.join(""));
//     }

//     if (e.key === "ArrowLeft" && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }

//     if (e.key === "ArrowRight" && index < 5) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     const enteredCode = code.join("");
//     console.log("🚀 Gửi mã OTP:", enteredCode);

//     try {
//       await onSubmit({ code: enteredCode });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleResend = () => {
//     onResend?.();
//     setCode(Array(6).fill(""));
//     setTimeLeft(60);
//     inputRefs.current[0]?.focus();
//     console.log("🔄 Gửi lại mã OTP mới");
//   };

//   const isExpired = timeLeft <= 0;

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div>
//         <label className="text-sm block mb-1 font-bold">
//           OTP code đã gửi đến{" "}
//           <span className="text-red-600 font-semibold">{email}</span>
//         </label>
//       </div>

//       <div className="flex justify-between gap-2" onPaste={handlePaste}>
//         {code.map((digit, index) => (
//           <input
//             key={index}
//             ref={(el) => (inputRefs.current[index] = el)}
//             type="text"
//             maxLength={1}
//             value={digit}
//             onChange={(e) => handleChange(e, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             disabled={isExpired}
//             className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//           />
//         ))}
//       </div>

//       <div className="text-sm font-bold text-red-600">
//         {isExpired ? (
//           <button
//             type="button"
//             onClick={handleResend}
//             className="text-blue-600 underline hover:text-blue-800 transition"
//           >
//             Send code again
//           </button>
//         ) : (
//           `Code có hiệu lực trong ${timeLeft}s`
//         )}
//       </div>

//       <button
//         type="submit"
//         disabled={isExpired || isSubmitting}
//         className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 to-red-800 hover:opacity-90 transition disabled:opacity-50"
//       >
//         {isSubmitting ? "Confirming..." : "Confirm"}
//       </button>
//     </form>
//   );
// };

// CodeForm.propTypes = {
//   email: PropTypes.string.isRequired,
//   onSubmit: PropTypes.func.isRequired,
//   onResend: PropTypes.func,
// };

// export default CodeForm;
