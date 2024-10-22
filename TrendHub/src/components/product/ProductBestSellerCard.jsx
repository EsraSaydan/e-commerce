import React from "react";

export default function ProductBestSellerCard({
  title,
  price,
  discount,
  department,
  id,
}) {
  return (
    <div className="w-[343px] lg:w-auto mx-auto border-none p-1 text-center justify-center basis-[90%] hover:opacity-75 hover:scale-105">
      <img
        src={`https://picsum.photos/seed/${id}/295/360`}
        alt={title}
        className="block aspect-[1/1.3] w-full "
      />
      <h3 className="text-xl py-3 text-productGraphDesign font-bold mb-2">
        {title}
      </h3>
      <p className="text-sm py-2 font-bold text-iconGray mb-2">{department}</p>
      <div className="flex items-center justify-center space-x-3">
        <p className="text-productGray font-bold line-through">{price}</p>
        <p className="text-productGreen font-bold">{discount}</p>
      </div>
    </div>
  );
}
