import React from "react";

const StoreDetail = () => {
  return (
    <div className="h-auto max-h-[22rem] flex items-center justify-center w-screen bg-black p-4 md:p-8 text-white">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-[10rem]">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-light text-lg md:text-2xl">
            TOTAL TRANSACTIONS TODAY
          </span>
          <span className="text-2xl md:text-3xl font-bold">12,235</span>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-light text-lg md:text-2xl">
            TOTAL STORES OPEN
          </span>
          <span className="text-2xl md:text-3xl font-bold">1,234</span>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-light text-lg md:text-2xl">
            TOTAL CUSTOMERS TODAY
          </span>
          <span className="text-2xl md:text-3xl font-bold">9,872</span>
        </div>
      </div>
    </div>
  );
};

export default StoreDetail;
