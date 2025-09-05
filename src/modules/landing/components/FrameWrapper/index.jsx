import React from "react";

export default function FrameWrapper({ image, text, national }) {
  return (
    <div className=" relative w-[513px] h-[223px] bg-white rounded-[15px] shadow-[3px_3px_10px_#00000014]">
      <img
        className="absolute w-[223px] h-[223px] top-0 left-0 object-cover"
        alt="Rectangle"
        src={image}
      />

      <div className="absolute top-[77px] left-[420px] [font-family:'Open_Sans',Helvetica] font-semibold text-[#000000] text-xl tracking-[0] leading-[normal]">
        {text}
      </div>

      <div className="top-[97px] left-[276px] [font-family:'Open_Sans',Helvetica] font-semibold text-[#000000] text-xl text-center leading-[normal] absolute tracking-[0]">
        {/* Indonesia */}
        {national}
      </div>
    </div>
  );
}
