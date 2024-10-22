import React from "react";

export default function ContactContainer() {
  return (
    <div>
      <main className="flex flex-col gap-[50px] lg:gap-[80px] max-md:bg-bgGray">
        <div className="flex flex-col justify-center items-center text-center">
          <h6 className="font-bold text-sm text-productGraphDesign mt-9">
            VISIT OUR OFFICE
          </h6>
          <h2 className="font-bold mt-4 text-2xl lg:text-5xl text-productGraphDesign ">
            We help small businesses
          </h2>
          <h2 className="font-bold mt-4 text-2xl lg:text-5xl text-productGraphDesign">
            with big ideas
          </h2>
        </div>
        <section className="flex flex-wrap justify-center items-center gap-5 ">
          <article className="px-20 py-5 bg-white">
            <div className="text-center text-productGraphDesign">
              <i
                className={
                  "fa-solid fa-phone mb-4 text-customLightBlue text-7xl"
                }
              ></i>
              <h6 className=" font-bold text-sm leading-6">
                georgia.young@example.com
              </h6>
              <h6 className=" font-bold text-sm leading-6">
                georgia.young@ple.com
              </h6>
              <h5 className=" font-bold leading-6 my-4">Get Support</h5>

              <button className="py-4 px-9 font-bold border border-customLightBlue rounded-full text-customLightBlue hover:opacity-40">
                Submit Request
              </button>
            </div>
          </article>
          <article className="px-20 py-16 max-sm:py-20 bg-productGraphDesign">
            <div className="text-center text-white">
              <i
                className={
                  "fa-solid fa-location-dot mb-4 text-customLightBlue text-7xl"
                }
              ></i>
              <h6 className=" font-bold text-sm leading-6">
                georgia.young@example.com
              </h6>
              <h6 className=" font-bold text-sm leading-6">
                georgia.young@ple.com
              </h6>
              <h5 className=" font-bold leading-6 my-4">Get Support</h5>

              <button className="py-4 px-9 font-bold border border-customLightBlue rounded-full text-customLightBlue hover:opacity-70">
                Submit Request
              </button>
            </div>
          </article>
          <article className="px-20 py-20 bg-white">
            <div className="text-center text-productGraphDesign">
              <i
                className={
                  "fa-solid fa-envelope mb-4 text-customLightBlue text-7xl"
                }
              ></i>
              <h6 className="font-bold text-sm leading-6 ">
                georgia.young@example.com
              </h6>
              <h6 className="font-bold text-sm leading-6">
                georgia.young@ple.com
              </h6>
              <h5 className=" font-bold leading-6 my-4">Get Support</h5>

              <button className="py-4 px-9 font-bold border border-customLightBlue rounded-full text-customLightBlue hover:opacity-40">
                Submit Request
              </button>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
