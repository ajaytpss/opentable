import React from "react";

const layout = ({ children }) => {
  return (
    <div className="p-10 border flex items-center justify-center gap-5 min-h-[80vh]">
      <div className="border w-[400px] p-8 rounded-md bg-gradient-to-r from-[#0f1f47] to-[#5f6984]">
        {children}
      </div>
    </div>
  );
};

export default layout;
