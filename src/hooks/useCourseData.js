import { useState, useEffect, useCallback } from "react";
import axios from "axios"; // Giả sử bạn dùng Axios; nếu dùng fetch, thay thế bằng fetch

// Base URL cho API (có thể config từ env: process.env.REACT_APP_API_URL)
const API_BASE_URL = "https://course-an-ninh-mang-backend.vercel.app/api"; // Thay bằng URL backend của bạn

// Instance Axios với config chung (thêm auth nếu cần, ví dụ: Bearer token)
const token = localStorage.getItem("access_token");
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

// Hook chính
export const useCourseData = (courseId, lessonId) => {
  const [courseData, setCourseData] = useState(null);
  const [lessonData, setLessonData] = useState(null);
  const [selectedLessonId, setSelectedLessonId] = useState(lessonId || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 Hàm lấy nội dung bài học (dùng lại được khi click sidebar)
  const fetchLessonById = useCallback(async (lessonId) => {
    try {
      setLoading(true);
      const lessonResponse = await api.get(`/courses/${lessonId}/content`);
      setLessonData(lessonResponse.data);
      setSelectedLessonId(lessonId);
      console.log("📗 Lesson Data:", lessonResponse.data);
    } catch (err) {
      console.error("❌ Lỗi khi tải bài học:", err);
      setError(err.response?.data?.message || "Không thể tải nội dung bài học");
      setLessonData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // 🔹 Gọi API khóa học khi courseId thay đổi
  useEffect(() => {
    if (!courseId) {
      setError("Thiếu ID khóa học");
      setLoading(false);
      return;
    }

    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError(null);

        const courseResponse = await api.get(`/courses/${courseId}`);
        const course = courseResponse.data;
        setCourseData(course);
        console.log("📘 Course Data:", course);

        // Nếu chưa có lessonId => tự động lấy bài đầu tiên
        let initialLessonId =
          lessonId || (course.lessons?.length ? course.lessons[0].id : null);

        if (initialLessonId) {
          await fetchLessonById(initialLessonId);
        } else {
          setLessonData(null);
        }
      } catch (err) {
        console.error("❌ Lỗi khi fetch dữ liệu khóa học:", err);
        setError(err.response?.data?.message || "Lỗi kết nối backend");
        setCourseData(null);
        setLessonData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId, lessonId, fetchLessonById]);

  return {
    courseData,
    lessonData,
    loading,
    error,
    selectedLessonId,
    fetchLessonById, // 👈 dùng để gọi khi chọn bài học mới
  };
};
