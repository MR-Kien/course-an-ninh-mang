const BASE_URL = "https://course-an-ninh-mang-backend.vercel.app/api";
export default {
  AUTH: {
    LOGIN: `${BASE_URL}/auth/login`,
    REGISTER: `${BASE_URL}/auth/register`,
    LOGOUT: `${BASE_URL}/auth/logout`,
    FORGOT: `${BASE_URL}/auth/forgot-password`,
    VERIFICATION_OTP: `${BASE_URL}/auth/verify-reset-code`,
    RESET_PASSWORD: `${BASE_URL}/auth/update-password`,
  },
  USER: {},
};
