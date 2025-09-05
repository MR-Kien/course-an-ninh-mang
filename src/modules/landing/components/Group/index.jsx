import { useRef } from "react";

export default function Group({ manage, icon, text }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      className="w-[420px] h-[232px] perspective-[1000px]" // perspective tạo chiều sâu 3D
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="relative w-full h-full bg-white rounded-[15px] shadow-[0px_20px_30px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-in-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          className="absolute w-[45px] h-[45px] top-[35px] left-6"
          alt="Icon"
          src={icon}
        />
        <div className="absolute top-[99px] left-[113px] font-bold text-[#000000] text-2xl text-center">
          {manage}
        </div>
        <p className="absolute top-[168px] left-[46px] font-normal text-[#000000] text-base">
          {text}
        </p>
      </div>
    </div>
  );
}
