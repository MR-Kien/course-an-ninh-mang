import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Hoặc icon tùy chọn
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../../../routes/endPoints";
const images = [
  `https://mockprojectgroup3.s3.ap-southeast-2.amazonaws.com/avatar_7cfa2bd8-2534-47e5-8882-572bfffa112f.jpeg`,
  `https://www.uclahealth.org/sites/default/files/styles/landscape_3x2_048000_1920x1280/public/images/1c/03201015-omai-garner-ucla-0350.jpg?h=5ee36490&f=2b3203bd&itok=rcXtMwhJ`,
  `https://www.drweil.com/wp-content/uploads/2017/01/health-wellness_balanced-living_healthy-living_what-blood-tests-do-i-need_1440x1080_514347547-600x450.jpeg`,
  `https://sf1.topsante.com/wp-content/uploads/topsante/2023/09/un-test-depistage-sanguin-pour-diagnostiquer-fibromyalgie-641x427.jpg`,
  `https://alev.biz/wp-content/uploads/2020/07/gwas.jpg`,
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(1); // bắt đầu từ index 1 (vì index 0 là ảnh clone cuối)
  const [transition, setTransition] = useState(true);
  const slideRef = useRef(null);

  const totalSlides = images.length;
  const extendedImages = [images[totalSlides - 1], ...images, images[0]];

  // Tự động chuyển ảnh mỗi 5 giây
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Khi chuyển đến slide clone → bỏ transition và nhảy về ảnh thực
  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(totalSlides);
      }, 300);
    } else if (currentIndex === totalSlides + 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(1);
      }, 300);
    } else {
      setTransition(true);
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index + 1); // vì slide[0] là ảnh clone
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden  h-full">
      {/* Image wrapper */}
      <div className="relative h-[500px]">
        {/* Slide image container */}
        <div
          ref={slideRef}
          className={`flex ${
            transition ? "transition-transform duration-300 ease-in-out" : ""
          }`}
          style={{
            width: `${extendedImages.length * 100}%`,
            transform: `translateX(-${
              currentIndex * (100 / extendedImages.length)
            }%)`,
          }}
        >
          {extendedImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className="w-full flex-shrink-0 object-cover h-[500px]"
              style={{ width: `${100 / extendedImages.length}%`, zIndex: 0 }}
            />
          ))}
        </div>

        {/* Overlay Layer */}
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <div className="w-full h-full flex flex-col justify-center items-center text-white bg-black/40 px-4">
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold">
                Hematology Analyzer
              </h1>
              <h2 className="text-3xl font-bold">MANAGEMENT SYSTEM</h2>
              <p className="text-lg max-w-3xl">
                Automate workflows, optimize operational efficiency, and enhance
                accuracy in every blood analysis. The system connects devices,
                manages results, tracks sample history, and supports rapid
                medical decision-making – all within a single unified platform.
              </p>
              <Link
                to={ENDPOINTS.AUTH.LOGIN}
                className="mt-6 inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-2xl lg:text-3xl font-bold px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                LOGIN
              </Link>
            </div>
          </div>
        </div>

        {/* Nút điều hướng trái/phải */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-20"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-20"
        >
          <ChevronRight />
        </button>
      </div>

      {/* 🔵 Dấu chấm (indicator) */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx + 1 ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
