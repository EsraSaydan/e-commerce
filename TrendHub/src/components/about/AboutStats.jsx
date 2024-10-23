import React from "react";

export default function AboutStats() {
  return (
    <main className="flex justify-center items-center py-10">
      <div className="flex flex-col justify-center items-center basis-[80%]">
        <article className="py-24 px-5 md:flex justify-between items-center w-full">
          <div className="text-center mb-10 md:mb-0">
            <h1 className="text-productGraphDesign font-bold text-6xl leading-[80px] ">
              15K
            </h1>
            <h5 className="text-iconGray font-bold leading-6 ">
              Happy Customers
            </h5>
          </div>
          <div className="text-center mb-10 md:mb-0">
            <h1 className="text-productGraphDesign font-bold text-6xl leading-[80px] ">
              150K
            </h1>
            <h5 className="text-iconGray font-bold leading-6 ">
              Monthly Visitors
            </h5>
          </div>
          <div className="text-center mb-10 md:mb-0">
            <h1 className="text-productGraphDesign font-bold text-6xl leading-[80px]">
              15
            </h1>
            <h5 className="text-iconGray font-bold leading-6 ">
              Countries Worldwide
            </h5>
          </div>
          <div className="text-center mb-10 md:mb-0">
            <h1 className="text-productGraphDesign font-bold text-6xl leading-[80px] ">
              100+
            </h1>
            <h5 className="text-iconGray font-bold leading-6 ">Top Partners</h5>
          </div>
        </article>
      </div>
    </main>
  );
}
