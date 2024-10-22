import React from "react";

export default function TeamCta() {
  return (
    <div className="flex flex-col items-center px-8 py-20 bg-white  ">
      <h2 className="text-4xl text-center font-bold text-productGraphDesign mb-2">
        Start your 14 days free trial
      </h2>
      <p className="text-iconGray font-semibold text-center py-6 max-w-[600px]">
        Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do met
        sent. RELIT official consequent.
      </p>
      <button className="bg-customLightBlue text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 mb-8">
        Try it free now
      </button>
      <div className="flex justify-center gap-8">
        <a href="#" className="text-blue-500 text-3xl">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-blue-500 text-3xl">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-blue-500 text-3xl">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-blue-500 text-3xl">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}
