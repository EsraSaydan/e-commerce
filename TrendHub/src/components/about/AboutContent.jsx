import React from "react";

export default function AboutContent() {
  return (
    <main className="flex justify-center items-center py-10">
      <div className="flex flex-col justify-center items-center basis-[80%]">
        <article className="max-md:text-center m-auto lg:text-left">
          <p className="text-dangerRed font-medium text-sm mt-10 md:mt-0">
            Problems trying
          </p>
          <div className="mt-6 md:flex m-auto">
            <h3 className="text-productGraphDesign font-bold text-2xl mb-10 lg:mb-0 md:mr-10 basis-[40%]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h3>
            <h2 className="text-iconGray font-semibold text-start basis-[60%] lg:ml-[190px]">
              Problems trying to resolve the conflict between the two major
              realms of <br /> Classical physics: Newtonian mechanics
            </h2>
          </div>
        </article>
      </div>
    </main>
  );
}
