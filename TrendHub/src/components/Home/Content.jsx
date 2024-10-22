import React from "react";
import featuredLeft from "../../assets/featured/futureLeft.png";
import featuredRight from "../../assets/featured/futureRight.png";

export default function Content() {
  return (
    <div>
      <section className="flex justify-center py-20 max-sm:py-10 max-md:py-15">
        <div className="flex justify-center items-center flex-wrap-reverse basis-[80%] gap-[4%] gap-y-5">
          <div className="flex justify-center gap-4 max-md:w-[100%] w-[48%] min-w-[300]">
            <div>
              <img src={featuredLeft} alt="content-left.jpg" />
            </div>
            <div>
              <img src={featuredRight} alt="content-right.jpg" />
            </div>
          </div>
          <div className="flex flex-col  items-start justify-center max-md:w-[80%] w-[48%] gap-5">
            <p className="font-bold text-base text-customLightBlue">
              Featured Products
            </p>
            <h2 className="font-bold text-4xl ">We love what we do</h2>
            <p className="text-secondTextColor">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </p>
            <p className="text-secondTextColor">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
