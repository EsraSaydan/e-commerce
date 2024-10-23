import React from "react";
import aboutHero from "../../assets/about/aboutHeader.png";

export default function AboutHero() {
  return (
    <main className="flex flex-wrap justify-center items-center pt-10">
      <div className="flex max-md:flex-col justify-between items-center basis-[80%] gap-16">
        <article className="md:w-3/6 text-center lg:text-left basis-[45%]">
          <h5 className="font-bold text-productGraphDesign text-2xl ">
            ABOUT COMPANY
          </h5>
          <h5 className="font-bold text-productGraphDesign my-9 text-6xl pb-[30px] ">
            ABOUT US
          </h5>
          <h4 className="font-normal text-xl text-iconGray lg:w-2/3">
            We know how large objects will act, but things on a small scale
          </h4>
          <button className="bg-customLightBlue text-white font-bold text-sm px-8 py-4 my-9 rounded-md hover:opacity-75">
            Get Quote Now
          </button>
        </article>
        <article className="relative basis-[45%] ">
          <img className="w-full h-full" src={aboutHero} alt="" />
          <div className="bg-AboutCirclePurple w-[3%] aspect-square rounded-full absolute left-[-1%] bottom-[40%]"></div>
          <div className="bg-AboutCircleDarkPurple w-[3%] aspect-square rounded-full absolute right-0 top-[22%]"></div>
          <div className="bg-AboutCirclePink w-[6%] aspect-square rounded-full absolute right-[2%] top-[38%]"></div>
          <div className="bg-AboutCircleLightPink w-[14%] aspect-square rounded-full absolute left-[-6%] top-[8%]"></div>
          <div className="bg-AboutCircleLight w-[85%] aspect-square  rounded-full absolute left-[5%] top-[7%] z-[-1]"></div>
        </article>
      </div>
    </main>
  );
}
