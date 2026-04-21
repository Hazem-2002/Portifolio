import React from "react";

const ProgressCircle = ({ percentage, label }) => {
  return (
    <div className="flex flex-col items-center gap-2 py-2 p-0">
      <div
        className="relative w-[90px] h-[90px] rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0_0_14px_#7A8F5A] transition duration-200"
        style={{
          background: `conic-gradient(#6B8E23 0%, #7A8F5A ${percentage}%,#1f1f1f ${percentage}%)`,
        }}
      >
        {/* inner circle */}
        <div className="absolute w-[75px] h-[75px] bg-[#0F1A14] rounded-full flex items-center justify-center">
          <span className="text-white text-xl font-bold">{percentage}%</span>
        </div>
      </div>

      <span className="text-white/80 font-semibold">{label}</span>
    </div>
  );
};

export default React.memo(ProgressCircle);
