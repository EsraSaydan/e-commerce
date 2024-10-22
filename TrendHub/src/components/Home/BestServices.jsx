import React from "react";
import Vector from "../../assets/Vector.svg";

export default function BestServices() {
  return (
    <div>
      <section className="flex justify-center  py-3 max-lg:py-1">
        <div className="flex flex-col items-center basis-[80%]">
          <div className="text-center my-20">
            <p className="font-normal text-xl text-iconGray py-1">
              Featured Products
            </p>
            <h2 className="font-bold text-2xl uppercase py-1">
              THE BEST SERVICES
            </h2>
            <p className="font-normal text-sm py-1 text-iconGray">
              Problems trying to resolve the conflict between{" "}
            </p>
          </div>

          <div className="flex justify-around flex-wrap w-full gap-20">
            <div className="basis-[20%] max-md:basis-[100%] text-center">
              <i className="fa-solid fa-book-open-reader text-6xl text-customLightBlue py-2"></i>
              <h3 className="font-bold text-2xl  py-2">Easy Wins</h3>
              <p className="font-normal text-iconGray text-sm  py-2">
                Get your best looking smile now!
              </p>
            </div>
            <div className="basis-[15%] max-md:basis-[100%] text-center ">
              <img
                src={Vector}
                alt="Concrete"
                className="w-23 h-23 mx-auto py-2 lg:-translate-y-1"
              />
              <h3 className="font-bold text-2xl lg:-translate-y-2 py-2">
                Concrete
              </h3>
              <p className="font-normal text-sm text-iconGray">
                Defalcate is most focused in helping you discover your most
                beautiful smile
              </p>
            </div>
            <div className="basis-[20%] max-md:basis-[100%] text-center">
              <i className="fa-solid fa-arrow-trend-up text-6xl text-customLightBlue py-2"></i>
              <h3 className="font-bold text-2xl py-2">Hack Growth</h3>
              <p className="font-normal text-sm text-iconGray py-2">
                Overcame any hurdle or any other problem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
