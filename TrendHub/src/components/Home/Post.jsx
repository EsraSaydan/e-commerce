import React from "react";
import postLeft from "../../assets/post/postLeft.png";
import postRight from "../../assets/post/postRight.png";
import Frame from "../../assets/Frame.png";
import VectorR from "../../assets/featured/VectorR.png";
import Progress from "../../assets/featured/progress.png";

export default function Post() {
  return (
    <>
      <div className=" items-center lg:px-[180px]">
        <div className="text-center my-20">
          <p className="font-normal text-xl text-customLightBlue py-1">
            Practice Advice
          </p>
          <h2 className="font-bold text-2xl uppercase py-1">Featured Posts</h2>
        </div>
        <div className="lg:flex">
          <article className=" shadow-lg pr-5 max-sm:py-4 hover:shadow-2xl hover:shadow-iconGray">
            <div className="flex justify-center gap-4 max-sm:flex-wrap  ">
              <div className="relative basis-[44%] max-sm:basis-[80%] aspect-[2/3.5] max-sm:aspect-[1/1]">
                <img className="w-full h-full" src={postLeft} alt="" />
                <p className="absolute text-sm max-sm:text-lg leading-6 top-5 left-5 bg-error text-white px-3">
                  Sale
                </p>
                <div className="absolute bottom-5 left-[13%] max-lg:left-[25%] max-sm:left-[19%] flex justify-center gap-4 text-xl max-xl:text-sm max-lg:text-xs max-sm:text-2xl">
                  <div className="bg-white rounded-full p-2">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="bg-white rounded-full p-2">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className="bg-white rounded-full p-2">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 basis-[53%] max-sm:basis-[80%] aspect-[1/1]  justify-evenly">
                <div className="flex justify-between">
                  <p className="font-bold text-sm max-sm:text-lg py-1 text-customLightBlue">
                    English Department
                  </p>
                  <div className="flex bg-black gap-1 rounded-3xl py-2 px-3">
                    <i className="fa-solid fa-star text-yellow text-xs max-sm:text-base"></i>
                    <p className="text-xs max-sm:text-base text-white ">4.9</p>
                  </div>
                </div>
                <h3 className="text-base max-sm:text-2xl font-bold">
                  Graphic Design
                </h3>
                <p className="font-semibold text-iconGray text-sm max-sm:text-base">
                  We focus on ergonomics and meeting you where you work. It{"'"}
                  s only a keystroke away.
                </p>
                <div className="flex gap-1">
                  <img src={Frame} alt="Frame" className=" text-iconGray" />
                  <p className="text-sm max-sm:text-lg font-bold text-iconGray">
                    15 Sales
                  </p>
                </div>
                <div className="flex gap-2 text-base max-sm:text-lg ">
                  <p className="text-productGray font-bold  leading-6">
                    $16.48
                  </p>
                  <p className="text-productGreen font-bold leading-6">$6.48</p>
                </div>
                <div className="flex gap-1">
                  <div className="bg-customLightBlue w-[16px] h-[16px] rounded-full"></div>
                  <div className="bg-productGreen w-[16px] h-[16px] rounded-full"></div>
                  <div className="bg-alert w-[16px] h-[16px] rounded-full"></div>
                  <div className="bg-black w-[16px] h-[16px] rounded-full"></div>
                </div>
                <div className="flex space-x-5 items-center">
                  <div className="flex items-center gap-1 text-xs ">
                    <i className="fa-regular fa-clock text-customLightBlue"></i>
                    <p className="text-iconGray font-bold">22h</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <i className="fa-regular fa-chart-bar text-alert"></i>
                    <p className="text-iconGray font-bold">64 Lessons</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <img src={Progress} alt="progress" />
                    <p className="text-iconGray font-bold">Progress</p>
                  </div>
                </div>
                <button className="font-bold flex items-center justify-center text-l max-sm:text-lg leading-9 font-montserrat text-customLightBlue border-solid border-[1px] border-customLightBlue w-[50%] min-w-[80px] px-1 rounded-3xl py-1 mb-5 ">
                  Learn More
                  <img
                    src={VectorR}
                    alt="VectorR"
                    className=" text-customLightBlue ml-2"
                  />
                </button>
              </div>
            </div>
          </article>{" "}
          <article className="shadow-lg pr-5 max-sm:py-4 hover:shadow-2xl hover:shadow-iconGray">
            <div className="flex justify-center gap-4 max-sm:flex-wrap  ">
              <div className="relative basis-[44%] max-sm:basis-[80%] aspect-[2/3.5] max-sm:aspect-[1/1]">
                <img className="w-full h-full" src={postRight} alt="" />
                <p className="absolute text-sm max-sm:text-lg leading-6 top-5 left-5 bg-error text-white px-3">
                  Sale
                </p>
                <div className="absolute bottom-5 left-[13%] max-lg:left-[25%] max-sm:left-[19%] flex justify-center gap-4 text-xl max-xl:text-sm max-lg:text-xs max-sm:text-2xl">
                  <div className="bg-white rounded-full p-2">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="bg-white rounded-full p-2">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className="bg-white rounded-full p-2">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 basis-[53%] max-sm:basis-[80%] aspect-[1/1]  justify-evenly">
                <div className="flex justify-between">
                  <p className="font-bold text-sm max-sm:text-lg py-1 text-customLightBlue">
                    English Department
                  </p>
                  <div className="flex bg-black gap-1 rounded-3xl py-2 px-3">
                    <i className="fa-solid fa-star text-yellow text-xs max-sm:text-base"></i>
                    <p className="text-xs max-sm:text-base text-white ">4.9</p>
                  </div>
                </div>
                <h3 className="text-base max-sm:text-2xl font-bold">
                  Graphic Design
                </h3>
                <p className="font-semibold text-iconGray  text-sm max-sm:text-base">
                  We focus on ergonomics and meeting you where you work. It{"'"}
                  s only a keystroke away.
                </p>
                <div className="flex gap-1">
                  <img src={Frame} alt="Frame" className=" text-iconGray" />
                  <p className="text-sm max-sm:text-lg font-bold text-iconGray">
                    15 Sales
                  </p>
                </div>
                <div className="flex gap-2 text-base max-sm:text-lg ">
                  <p className="text-productGray font-bold  leading-6">
                    $16.48
                  </p>
                  <p className="text-productGreen font-bold leading-6">$6.48</p>
                </div>
                <div className="flex gap-1">
                  <div className="bg-customLightBlue w-[16px] h-[16px] rounded-full"></div>
                  <div className="bg-productGreen w-[16px] h-[16px] rounded-full"></div>
                  <div className="bg-alert w-[16px] h-[16px] rounded-full"></div>
                  <div className="bg-black w-[16px] h-[16px] rounded-full"></div>
                </div>
                <div className="flex space-x-5 items-center">
                  <div className="flex items-center gap-1 text-xs ">
                    <i className="fa-regular fa-clock text-customLightBlue"></i>
                    <p className="text-iconGray font-bold">22h</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <i className="fa-regular fa-chart-bar text-alert"></i>
                    <p className="text-iconGray font-bold">64 Lessons</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <img src={Progress} alt="progress" />
                    <p className="text-iconGray font-bold">Progress</p>
                  </div>
                </div>
                <button className="font-bold flex items-center justify-center text-l max-sm:text-lg leading-9 font-montserrat text-customLightBlue border-solid border-[1px] border-customBlue w-[50%] min-w-[80px] px-1 rounded-3xl py-1 mb-5 ">
                  Learn More
                  <img
                    src={VectorR}
                    alt="VectorR"
                    className=" text-customLightBlue ml-2"
                  />
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
