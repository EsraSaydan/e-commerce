import React from "react";

export default function AboutClients() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center py-10 bg-bgGray">
        <h2 className="text-4xl text-center font-bold px-[200px] text-productGraphDesign">
          Big Companies Are Here
        </h2>
        <p className="text-iconGray font-semibold text-m text-center max-w-[70%]  lg:max-w-[30%]  py-7 lg:py-9 ">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </section>
      <main className="flex justify-center bg-bgGray">
        <div className="basis-[90%] flex justify-center flex-wrap lg:mt-[80px] gap-x-20 lg:gap-x-4 gap-y-10 lg:space-x-[70px] text-9xl lg:text-7xl  text-iconGray p-8 -translate-y-20  ">
          <i className="fa-brands fa-hooli  "></i>
          <i className="fa-brands fa-lyft "></i>
          <i className="fa-brands fa-pied-piper-hat "></i>
          <i className="fa-brands fa-stripe "></i>
          <i className="fa-brands fa-aws "></i>
          <i className="fa-brands fa-reddit-alien "></i>
        </div>
      </main>
    </div>
  );
}
