import React from "react";
import Arrow from "../../assets/contact/arrow.png";

export default function ContactCta() {
  return (
    <div>
      {" "}
      <main className="flex flex-col justify-center items-center lg:py-20 bg-white ">
        <img src={Arrow} alt="arrow" />
        <h5 className="my-8 font-bold text-productGraphDesign leading-6 ">
          WE Can{"'"}t WAIT TO MEET YOU
        </h5>
        <h1 className="mb-8 font-bold text-productGraphDesign leading-[80px] text-5xl md:text-6xl">
          Let{"'"}s Talk
        </h1>
        <button className="py-4 px-10 bg-customLightBlue rounded-md font-bold text-white hover:opacity-70">
          Try it free now
        </button>
      </main>
    </div>
  );
}
