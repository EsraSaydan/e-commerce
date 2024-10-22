import React from "react";
import shopCards1 from "../../assets/shopContainer/shopCards1.jpg";
import shopCards2 from "../../assets/shopContainer/shopCards2.jpg";
import shopCards3 from "../../assets/shopContainer/shopCards3.jpg";
import shopCards4 from "../../assets/shopContainer/shopCards4.jpg";
import shopCards5 from "../../assets/shopContainer/shopCards5.jpg";

const categories = [
  { id: 1, title: "CLOTHS", img: shopCards1, items: 5 },
  { id: 2, title: "CLOTHS", img: shopCards2, items: 3 },
  { id: 3, title: "CLOTHS", img: shopCards3, items: 4 },
  { id: 4, title: "CLOTHS", img: shopCards4, items: 2 },
  { id: 5, title: "CLOTHS", img: shopCards5, items: 6 },
];

const ShopCard = () => {
  return (
    <div className="lg:px-[80px] bg-bgGray pb-[70px] ">
      <div className="flex justify-center flex-wrap gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative basis-[18%] max-lg:basis-[30%] max-md:basis-[45%] max-sm:basis-[85%] aspect-[1/1.1] hover:scale-105 hover:shadow-sm"
          >
            <img
              src={category.img}
              alt={category.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-75 text-white p-4">
              <h3 className="font-bold text-lg">{category.title}</h3>
              <p>{category.items} Items</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCard;
