import React from "react";
import line from "../../assets/icon/Line.png";
import description from "../../assets/description.png";

export const ProductDescription = () => {
  return (
    <div>
      <section className="flex justify-center pb-10 pt-10  max-sm:py-10 max-md:pb-5">
        <div className="basis-[75%] flex flex-col ">
          <section className="pb-7 text-center ">
            <div className="flex justify-center gap-3 lg:gap-14 font-semibold text-iconGray pb-7">
              <h6 className="text-sm lg:text-lg">Description</h6>
              <h6 className="text-sm lg:text-lg">Additional Information</h6>
              <h6 className="text-sm lg:text-lg">
                Reviews <span className="text-productGreen">(0)</span>
              </h6>
            </div>
          </section>
          <div>
            <img src={line} alt="line" className="lg:w-[2500px]" />
          </div>
          <section className="flex justify-center items-center text-left mt-[40px] max-lg:flex-col">
            <div className="relative basis-[30%]  aspect-[1/1.15]  max-h-96 rounded-md shadow-[0_17px_30px_-15px_rgba(0,0,0,0.3)] shadow-black">
              <img
                src={description}
                alt="Description"
                className="object-contain w-full h-full rounded-md "
              />
            </div>

            <section className="basis-[80%] flex max-sm:flex-col  justify-center gap-10 ">
              <article className="basis-[45%] text-md max-xl:text-sm">
                <h3 className="font-bold text-2xl max-xl:text-xl text-productGraphDesign basis-[35] mb-5 pt-9 lg:pt-0">
                  the quick fox jumps over{" "}
                </h3>
                <p className="mb-2 text-iconGray font-semibold ">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p className="mb-2 text-iconGray font-semibold ">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p className="text-iconGray font-semibold ">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </article>
              <article className="flex flex-col gap-5 ">
                <section className="">
                  <h3 className="font-bold text-2xl max-xl:text-xl mb-5 text-productGraphDesign">
                    the quick fox jumps over
                  </h3>
                  <div className="flex gap-2 text-iconGray max-xl:text-sm py-2 lg:py-1 font-semibold">
                    <i className="fa-solid fa-chevron-right text-iconGray max-xl:text-sm "></i>
                    <h6 className="text-iconGray">
                      the quick fox jumps over the lazy dog
                    </h6>
                  </div>
                  <div className="flex gap-2 text-iconGray max-xl:text-sm py-2 lg:py-1 font-semibold">
                    <i className="fa-solid fa-chevron-right text-iconGray max-xl:text-sm"></i>
                    <h6>the quick fox jumps over the lazy dog</h6>
                  </div>
                  <div className="flex gap-2 text-iconGray max-xl:text-sm py-2 lg:py-1 font-semibold">
                    <i className="fa-solid fa-chevron-right max-xl:text-sm"></i>
                    <h6>the quick fox jumps over the lazy dog</h6>
                  </div>
                  <div className="flex gap-2 text-iconGray max-xl:text-sm py-2 lg:py-1 font-semibold">
                    <i className="fa-solid fa-chevron-right max-xl:text-sm"></i>
                    <h6 className="">the quick fox jumps over the lazy dog</h6>
                  </div>
                </section>
                <section>
                  <h3 className="font-bold text-2xl text-productGraphDesign max-xl:text-xl mb-5">
                    the quick fox jumps over
                  </h3>
                  <div className="flex gap-2 text-iconGray max-xl:text-sm py-2 lg:py-1 font-semibold">
                    <i className="fa-solid fa-chevron-right max-xl:text-sm"></i>
                    <h6>the quick fox jumps over the lazy dog</h6>
                  </div>
                  <div className="flex gap-2 text-iconGray max-xl:text-sm py-2 lg:py-1 font-semibold">
                    <i className="fa-solid fa-chevron-right max-xl:text-sm"></i>
                    <h6>the quick fox jumps over the lazy dog</h6>
                  </div>
                  <div className="flex gap-2 text-iconGray max-xl:text-sm py-2 lg:py-1 font-semibold">
                    <i className="fa-solid fa-chevron-right max-xl:text-sm"></i>
                    <h6>the quick fox jumps over the lazy dog</h6>
                  </div>
                </section>
              </article>
            </section>
          </section>
        </div>
      </section>
    </div>
  );
};
