import React from "react";

const FreeTrial = () => {
  return (
    <div className="bg-[#5E54A4] cursor-pointer rounded-[10px] shadow-custom px-20 md:px-8 lg:px-28 py-4">
      <span className=" text-[15px] text-white font-bold leading-[26px] font-poppins">
        Try it free 7 days
        <span className="text-[15px] pl-1 font-normal leading-[26px] font-poppins">
          then $20/mo. thereafter
        </span>
      </span>
    </div>
  );
};

export default FreeTrial;
