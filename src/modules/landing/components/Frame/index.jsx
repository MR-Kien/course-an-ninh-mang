// import React from "react";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../../../routes/endPoints";
import Subtract from "../../../../assets/images/subtract.png";
export default function Frame() {
  return (
    <div className="relative w-full h-[908px] top-0 left-0 overflow-hidden">
      <div className="absolute w-full h-[1310px] top-[-469px] left-0">
        <img
          className="absolute w-[3000px] h-[846px] top-[464px] left-0 object-cover"
          alt="Union"
          src="https://c.animaapp.com/JykgXKim/img/union.png"
        />

        <img
          className="absolute top-[464px] right-0"
          alt="Subtract"
          src={Subtract}
        />

        <div className="absolute w-[797px] h-[227px] top-[469px] left-[55px]">
          <div className="absolute top-[124px] left-[188px] [font-family:'Inter',Helvetica] font-bold text-[#000000] text-[50px] tracking-[0] leading-[normal]">
            MANAGEMENT SYSTEM
          </div>

          <div className="absolute w-[551px] h-[62px] top-10 left-[188px]">
            <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-bold text-[#010101] text-[50px] tracking-[0] leading-[normal]">
              Hematology&nbsp;&nbsp;&nbsp; Analyzer
            </div>

            <img
              className="absolute w-[106px] h-[55px] top-[7px] left-[263px]"
              alt="Image"
              src="https://c.animaapp.com/JykgXKim/img/image--29--1@2x.png"
            />
          </div>

          <img
            className="w-[188px] h-[180px] top-1.5 left-0 absolute object-cover"
            alt="Blood donation icon"
            src="https://c.animaapp.com/JykgXKim/img/blood-donation-icon-png-2@2x.png"
          />
        </div>

        <div className="absolute w-[657px] h-[332px] top-[858px] left-[326px]">
          <p className="absolute w-[610px] top-[65px] left-[43px] [font-family:'Inter',Helvetica] font-normal text-[#606060] text-xl tracking-[0] leading-7">
            Automate workflows, optimize operational efficiency, and enhance
            accuracy in every blood analysis. The system connects devices,
            manages results, tracks sample history, and supports rapid medical
            decision-making – all within a single unified platform.
          </p>

          <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-bold text-[#000000] text-5xl text-center tracking-[0] leading-[normal]">
            Optimize. Analyze. Manage.
          </div>

          <div className="absolute w-[188px] h-[70px] top-[262px] left-[26px] rounded-[5px] hover:shadow-[0_4px_20px_rgba(255,255,255,0.5)]">
            <Link
              to={ENDPOINTS.AUTH.LOGIN}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-2xl lg:text-3xl font-bold px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
