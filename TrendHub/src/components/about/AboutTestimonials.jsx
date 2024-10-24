import React from "react";
import aboutPicture from "../../assets/about/aboutPicture.png";

export default function AboutTestimonials() {
  return (
    <main className="flex justify-center items-center ">
      <div className="sm:flex justify-between w-full  ">
        <div className="bg-aboutBlue text-white basis-[60%] max-sm:text-center max-sm:items-center px-40 max-lg:px-28 max-md:px-14 gap-7 max-md:gap-4 flex flex-col justify-center aspect-[7/3] max-sm:aspect-[1/1.2]">
          <h5 className="text-base font-bold">WORK WITH US</h5>
          <h2 className="text-4xl font-bold">Now Let's grow Yours</h2>
          <p className="text-sm">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>
          <button className="text-sm font-bold border-[1px] w-[120px] border-white py-2 rounded-md hover:bg-white hover:text-primary">
            Button
          </button>
        </div>
        <div className="basis-[40%] max-sm:hidden ">
          <img
            src={aboutPicture}
            alt="aboutTest.jpg"
            className="object-cover w-full"
          />
        </div>
      </div>
    </main>
  );
}
