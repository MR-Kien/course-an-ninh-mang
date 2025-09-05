import { FaQuoteLeft } from "react-icons/fa6";
// import Image from "next/image";
import RatingStars from "../nurui/rating-star";
export default function TestimonialCard({ position, name, review, marginTop }) {
  return (
    <div
      className={`cursor-pointer md::w-52 lg:w-full p-4 shadow-2xl rounded-lg bg-[var(--glass-color)] dark:bg-[var(--glass-color-2)] border border-[var(--border-color)] relative ${marginTop} animate-slideup`}
    >
      <FaQuoteLeft className=" absolute -top-2 left-[5%] text-[1.3rem] text-[#727272]" />
      <p className="text-text text-[0.9rem] text-center lg:text-left">
        {review}
      </p>

      <div className="flex flex-col lg:flex-row items-center lg:items-start mt-5 justify-between gap-3 lg:gap-0">
        <div className="flex flex-col lg:flex-row items-center gap-2.5">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small_2x/user-profile-icon-free-vector.jpg"
            alt=""
            className="size-8 rounded-full"
            height={0}
            width={0}
            // unoptimized
          />
          <div className="text-center lg:text-start">
            <h2 className="text- font-[600]">{name}</h2>
            <p className="text-sm text-[#727272]">{position}</p>
          </div>
        </div>

        <RatingStars size="size-3" />
      </div>
      <FaQuoteLeft className=" absolute -bottom-2 right-[5%] rotate-[180deg] text-[1.3rem] text-[#727272]" />
    </div>
  );
}
