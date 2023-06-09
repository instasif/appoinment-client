import React from "react";

const FbBtn = () => {
  return (
    <div className="flex justify-center mt-3">
      <button className="bg-[#1877F2] flex gap-x-3 text-sm sm:text-base items-center justify-center text-white rounded-lg hover:bg-[#1877F2]/80 duration-300 transition-colors border border-transparent px-8 py-2.5 w-full max-w-xs">
        <svg
          className="w-5 h-5 sm:h-6 sm:w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3033_94669)">
            <path
              d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_3033_94669">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <span>Sign in with Facebook</span>
      </button>
    </div>
  );
};

export default FbBtn;
