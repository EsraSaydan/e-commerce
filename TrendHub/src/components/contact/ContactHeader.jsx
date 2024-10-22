import React from "react";
import contact from "../../assets/contact/contactHeader.png";

export default function ContactHeader() {
  return (
    <div>
      <main className="flex flex-wrap justify-center items-center py-8 lg:py-10">
        <div className="flex max-md:flex-col justify-between items-center basis-[75%] gap-16">
          <article className="md:w-3/6 text-center lg:text-left basis-[45%]">
            <h5 className="font-bold text-productGraphDesign ">CONTACT US</h5>
            <h1 className="font-bold text-productGraphDesign my-9 text-4xl lg:text-6xl leading-[45px] lg:leading-[80px] ">
              Get in touch today!
            </h1>
            <div>
              <h4 className="font-semibold text-xl text-iconGray lg:w-2/3">
                We know how large objects will act, but things on a small scale
                just do not act that way.
              </h4>
            </div>
            <h3 className="my-9 text-productGraphDesign font-bold text-2xl ">
              Phone : +451 215 215
            </h3>
            <h3 className="mb-9 text-productGraphDesign font-bold text-2xl ">
              Fax : +451 215 215
            </h3>
            <div className="flex items-center text-productGraphDesign text-3xl justify-center lg:justify-normal">
              <i className="fa-brands fa-twitter  mr-7 hover:opacity-70"></i>
              <i className="fa-brands fa-facebook  mr-7 hover:opacity-70"></i>
              <i className="fa-brands fa-instagram mr-7 hover:opacity-70"></i>
              <i className="fa-brands fa-linkedin hover:opacity-70"></i>
            </div>
          </article>
          <article className="relative basis-[45%] ">
            <img className="w-full h-full" src={contact} alt="" />
            <div className="bg-[#977DF4] w-[3%] aspect-square rounded-full absolute left-[-1%] bottom-[40%]"></div>
            <div className="bg-[#977DF4] w-[3%] aspect-square rounded-full absolute right-0 top-[22%]"></div>
            <div className="bg-[#FFE9EA] w-[6%] aspect-square rounded-full absolute right-[2%] top-[38%]"></div>
            <div className="bg-[#FFE9EA] w-[14%] aspect-square rounded-full absolute left-[-6%] top-[8%]"></div>
            <div className="bg-[#FFE9EA] w-[85%] aspect-square  rounded-full absolute left-[5%] top-[7%] z-[-1]"></div>
          </article>
        </div>
      </main>
    </div>
  );
}
