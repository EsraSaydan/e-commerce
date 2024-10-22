import React from "react";

import { Link } from "react-router-dom";

export default function ProductShopCard({
  title,
  price,
  discount,
  department,
  id,
}) {
  return (
    <Link to={`/shop/product/${id}`}>
      <div className="lg:w-auto mx-auto border-none p-1 text-center justify-center basis-[90%] hover:opacity-75 hover:scale-105 ">
        <img
          src={`https://picsum.photos/seed/${id}/300/360`}
          alt={title}
          className="mx-auto mb-4 "
        />
        <h3 className="text-xl py-3 text-productGraphDesign font-bold mb-2">
          {title}
        </h3>
        <p className="text-sm py-2 font-bold text-iconGray mb-2">
          {department}
        </p>
        <div className="flex items-center justify-center space-x-3">
          <p className="text-productGray font-bold line-through">{price}</p>
          <p className="text-productGreen font-bold">{discount}</p>
        </div>
        <div className="flex gap-1 justify-center my-5">
          <div className="bg-customLightBlue w-[16px] h-[16px] rounded-full"></div>
          <div className="bg-productGreen w-[16px] h-[16px] rounded-full"></div>
          <div className="bg-alert w-[16px] h-[16px] rounded-full"></div>
          <div className="bg-black w-[16px] h-[16px] rounded-full"></div>
        </div>
      </div>
    </Link>
  );
}
