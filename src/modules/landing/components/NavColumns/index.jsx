import React from "react";

export default function NavColumns() {
  return (
    // <footer className="bg-white py-16">
    //      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
    //        <div className="grid md:grid-cols-4 gap-8 mb-12">
    //          {/* Logo */}
    //          <div className="flex flex-col items-center md:items-start">
    //             <img
    //               src="https://c.animaapp.com/JykgXKim/img/blood-donation-icon-png-5@2x.png"
    //               alt="Logo"
    //               className="w-[150px] h-[150px] mb-4"
    //             />
    //          </div>

    //          {/* Company */}
    //          <div>
    //            <h3 className="text-xl font-bold text-black mb-6">Company</h3>
    //            <ul className="space-y-4">
    //              <li>
    //                <a
    //                 href="#"
    //                 className="text-brand-darkgray hover:text-black transition-colors"
    //               >
    //                 About
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="text-brand-darkgray hover:text-black transition-colors"
    //               >
    //                 Careers
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="text-brand-darkgray hover:text-black transition-colors"
    //               >
    //                 Mobile
    //               </a>
    //             </li>
    //           </ul>
    //         </div>

    //         {/* Contact */}
    //         <div>
    //           <h3 className="text-xl font-bold text-black mb-6">Contact</h3>
    //           <ul className="space-y-4">
    //             <li>
    //               <a
    //                 href="#"
    //                 className="text-brand-darkgray hover:text-black transition-colors"
    //               >
    //                 Help/FAQ
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="text-brand-darkgray hover:text-black transition-colors"
    //               >
    //                 Press
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="text-brand-darkgray hover:text-black transition-colors"
    //               >
    //                 Affiliates
    //               </a>
    //             </li>
    //           </ul>
    //         </div>

    //         {/* More */}
    //         <div>
    //           <h3 className="text-xl font-bold text-black mb-6">More</h3>
    //           <ul className="space-y-4">
    //             <li>
    //               <a
    //                 href="#"
    //                 className="text-brand-darkgray hover:text-black transition-colors"
    //               >
    //                 Airline fees
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="text-brand-darkgray hover:text-black transition-colors"
    //               >
    //                 Airline
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="text-brand-darkgray hover:text-black transition-colors"
    //               >
    //                 Low fare tips
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>

    //       <div className="border-t border-gray-200 pt-8 text-center">
    //         <p className="text-brand-darkgray">All rights group3.com</p>
    //       </div>
    //     </div>
    //   </footer>
    <footer className="relative w-full min-h-[567px] bg-white overflow-hidden">
      {/* Curved Blue Background */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 left-0 w-full h-[300px] sm:h-[396px]"
          viewBox="0 0 1440 636"
          fill="none"
          xmlns="https://c.animaapp.com/dMPYuAuq/img/image.png"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="bgPattern"
              patternUnits="userSpaceOnUse"
              width="1440"
              height="636"
            >
              <image
                href="https://c.animaapp.com/dMPYuAuq/img/image.png"
                x="0"
                y="0"
                width="1440"
                // height="636"
              />
            </pattern>
          </defs>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 636H1440V60.0175C1200 20.0058 960 0 720 0C480 0 240 20.0058 0 60.0175V636Z"
            fill="url(#bgPattern)"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-0 min-h-[567px]">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full lg:min-h-[567px]">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-12 xl:pl-24 mb-8 lg:mb-0">
            {/* Main Heading */}
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight lg:leading-[80px] mb-6 lg:mb-8 max-w-[562px]">
              Ready to get started?
            </h2>

            {/* CTA Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-white text-lift-dark px-8 sm:px-12 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-medium tracking-widest uppercase hover:bg-gray-50 transition-colors mb-8 lg:mb-12 xl:mb-16"
            >
              Start Now
            </button>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 lg:mb-8 w-full max-w-sm">
              {/* App Store */}
              <a
                href="#"
                className="flex items-center bg-black rounded-3xl px-4 sm:px-6 py-2.5 sm:py-3 hover:bg-gray-800 transition-colors flex-1 min-w-0"
              >
                <div className="w-4 sm:w-5 h-5 sm:h-6 mr-2 sm:mr-3 flex-shrink-0">
                  <svg
                    viewBox="0 0 19 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.3938 3.53765C13.263 2.60055 13.8511 1.29864 13.6906 0C12.4371 0.0450563 10.9185 0.740522 10.0204 1.67726C9.21332 2.50753 8.50795 3.83342 8.69629 5.1059C10.0955 5.20219 11.5228 4.47366 12.3938 3.53765ZM15.0616 12.502C15.0346 9.59118 17.3495 8.19444 17.4534 8.12576C16.1524 6.15019 14.125 5.87949 13.4037 5.84933C11.6791 5.66692 10.0385 6.90197 9.16245 6.90197C8.28966 6.90197 6.93952 5.87367 5.50856 5.90092C3.62804 5.93181 1.89473 7.03496 0.927765 8.78344C-1.026 12.3 0.426605 17.5109 2.3313 20.3629C3.26182 21.7597 4.37058 23.3261 5.82643 23.269C7.23033 23.2131 7.76036 22.3279 9.45615 22.3279C11.1509 22.3279 11.6278 23.269 13.1111 23.2407C14.6204 23.2131 15.5769 21.8174 16.5009 20.4171C17.5685 18.7983 18.008 17.23 18.0347 17.1505C18.0008 17.133 15.0923 15.979 15.0616 12.502Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start min-w-0">
                  <span className="text-white text-xs font-normal leading-tight">
                    Download on the
                  </span>
                  <span className="text-white text-sm sm:text-base font-semibold leading-tight truncate">
                    App Store
                  </span>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="#"
                className="flex items-center bg-black rounded-3xl px-4 sm:px-6 py-2.5 sm:py-3 hover:bg-gray-800 transition-colors flex-1 min-w-0"
              >
                <div className="w-4 sm:w-5 h-5 sm:h-6 mr-2 sm:mr-3 flex-shrink-0">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/96px-Google_Chrome_icon_%28February_2022%29.svg.png"
                    alt="Google Chrome"
                  />
                </div>
                <div className="flex flex-col items-start min-w-0">
                  <span className="text-white text-xs font-normal leading-tight">
                    Get it on
                  </span>
                  <span className="text-white text-sm sm:text-base font-semibold leading-tight truncate">
                    Google Chrome
                  </span>
                </div>
              </a>
            </div>

            {/* LIFT Logo */}
            <div className="inline-flex items-center justify-center rounded-full bg-white border border-white w-[100px] h-[100px]">
              <img
                src="https://c.animaapp.com/dMPYuAuq/img/blood-donation-icon-png-3@2x.png"
                alt="LIFT Logo"
                className="w-[80%] h-[80%] object-contain"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block relative lg:mr-12 xl:mr-24 flex-shrink-0">
            <div className="relative w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
              {/* Circular background with opacity */}
              <div className="absolute inset-0 rounded-full bg-lift-blue opacity-5"></div>
              <div className="absolute inset-3 xl:inset-4 rounded-full bg-lift-blue opacity-5"></div>
              <div className="absolute inset-6 xl:inset-8 rounded-full bg-white opacity-5"></div>

              {/* Main image */}
              <div className="absolute inset-9 xl:inset-12 rounded-full overflow-hidden bg-gray-100">
                <img
                  src="https://m.beckmancoulter.com/rs/213-HFT-078/images/DxH-900-Connected-Workcell-Video-Clip_v1.0.gif"
                  alt="Workspace with laptop and supplies"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative mt-8 lg:absolute lg:bottom-6 xl:bottom-8 left-0 right-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-12 xl:px-24 space-y-4 lg:space-y-0">
          {/* Copyright */}
          <p className="text-white text-xs sm:text-sm text-center lg:text-left order-2 lg:order-1">
            © All rights group3.com
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3 sm:space-x-4 order-1 lg:order-2">
            {/* Facebook */}
            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white border-opacity-25 flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 fill-white"
                viewBox="0 0 20 20"
              >
                <path d="M16.4 0H3.6C1.61 0 0 1.61 0 3.6v12.8C0 18.39 1.61 20 3.6 20h6.89v-7.38H7.94V9.69h2.55V7.53c0-2.51 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56v1.83h2.78l-.45 2.93h-2.33V20h4.83c1.99 0 3.6-1.61 3.6-3.6V3.6C20 1.61 18.39 0 16.4 0z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white border-opacity-25 flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 fill-white"
                viewBox="0 0 20 20"
              >
                <path d="M18.52 0H1.48C.66 0 0 .65 0 1.45v17.1C0 19.35.66 20 1.48 20h17.04c.82 0 1.48-.65 1.48-1.45V1.45C20 .65 19.34 0 18.52 0zM5.93 17.04H2.96V7.5h2.97v9.54zM4.45 6.18c-.95 0-1.72-.77-1.72-1.72s.77-1.72 1.72-1.72 1.72.77 1.72 1.72-.77 1.72-1.72 1.72zM17.04 17.04h-2.97v-4.64c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.72H7.78V7.5h2.85v1.3h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.55v5.23z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white border-opacity-25 flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 fill-white"
                viewBox="0 0 20 20"
              >
                <path d="M19.96 3.97c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.31 1.8-2.27-.79.47-1.67.81-2.6 1-.75-.8-1.81-1.3-2.99-1.3-2.26 0-4.1 1.84-4.1 4.1 0 .32.04.63.11.93C6.44 6.89 3.42 5.29 1.39 2.83c-.35.6-.55 1.3-.55 2.04 0 1.42.72 2.68 1.82 3.41-.67-.02-1.3-.2-1.85-.5v.05c0 1.99 1.41 3.65 3.28 4.02-.34.09-.7.14-1.07.14-.26 0-.52-.03-.77-.07.52 1.63 2.04 2.82 3.83 2.85-1.4 1.1-3.17 1.76-5.09 1.76-.33 0-.66-.02-.98-.06 1.81 1.16 3.96 1.84 6.27 1.84 7.52 0 11.63-6.23 11.63-11.63 0-.18 0-.35-.01-.53.8-.58 1.49-1.3 2.04-2.12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
