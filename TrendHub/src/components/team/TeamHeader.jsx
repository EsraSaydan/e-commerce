import React from "react";
import { Link } from "react-router-dom";
import right from "../../assets/team/right.png";

export default function TeamHeader() {
  return (
    <div>
      <main className="text-center pt-10">
        <h5 className="font-bold text-base text-iconGray">WHAT WE DO</h5>
        <h1 className="font-bold text-6xl text-productGraphDesign my-5 mx-20 max-sm:mx-10">
          Innovation tailored for you
        </h1>
        <div className="mb-12 mt-7 flex text-center font-semibold justify-center">
          <Link to="/" className="mx-2 hover:underline text-productGraphDesign">
            Home{" "}
          </Link>
          <img src={right} alt="right" className="w-4 h-4 mt-1 px-1" />
          <Link to="/team" className="text-iconGray mx-2 hover:underline">
            Team
          </Link>
        </div>
      </main>
    </div>
  );
}
