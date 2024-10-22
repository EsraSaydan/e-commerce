import React from "react";

export default function Filter() {
  return (
    <main className="flex justify-center pb-20 pt-10 max-sm:py-10 max-md:pb-15 ">
      <div className="basis-[90%] flex flex-col">
        <div className="flex max-md:flex-col justify-between max-md:justify-center px-[60px] items-center flex-wrap gap-10 pb-10">
          {/* Left-aligned section */}
          <h6 className="font-bold text-m text-iconGray">
            Showing all 12 results
          </h6>

          {/* Center-aligned section */}
          <div className="flex text-sm gap-3 items-center">
            <h6 className="font-bold text-sm text-iconGray">Views:</h6>
            <div className="border-2 border-solid border-lightGray rounded-md py-3 px-5">
              <i className="fa-brands fa-microsoft text-productGraphDesign"></i>
            </div>
            <div className="border-2 border-solid border-lightGray rounded-md py-3 px-5">
              <i className="fa-solid fa-list text-iconGray "></i>
            </div>
          </div>

          {/* Right-aligned section */}
          <div className="flex gap-4 items-center">
            <select
              className="bg-bgInput font-normal text-sm text-iconGray py-[10px] rounded-md pl-4 border-2 border-borderGray w-40"
              name="select"
            >
              <option>Popularity</option>
            </select>
            <button className="font-bold text-sm text-white tracking-wider bg-customLightBlue px-6 py-[12px] rounded-md hover:opacity-70">
              Filter
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
