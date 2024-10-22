import React from "react";
import ProductBestSellerCard from "./ProductBestSellerCard";
import line from "../../assets/icon/Line.png";
const products = [
  {
    id: 1,
    title: "Graphic Design",
    price: "$16.48",
    discount: "$6.48",
    department: "English Department",
  },
  {
    id: 2,
    title: "Graphic Design",
    price: "$16.48",
    discount: "$6.48",
    department: "English Department",
  },
  {
    id: 3,
    title: "Graphic Design",
    price: "$16.48",
    discount: "$6.48",
    department: "English Department",
  },
  {
    id: 4,
    title: "Graphic Design",
    price: "$16.48",
    discount: "$6.48",
    department: "English Department",
  },
  {
    id: 5,
    title: "Graphic Design",
    price: "$16.48",
    discount: "$6.48",
    department: "English Department",
  },
  {
    id: 6,
    title: "Graphic Design",
    price: "$16.48",
    discount: "$6.48",
    department: "English Department",
  },
  {
    id: 7,
    title: "Graphic Design",
    price: "$16.48",
    discount: "$6.48",
    department: "English Department",
  },
  {
    id: 8,
    title: "Graphic Design",
    price: "$16.48",
    discount: "$6.48",
    department: "English Department",
  },
];

export default function BestSellerProduct() {
  return (
    <div>
      <div className="flex lg:px-[220px] pb-20 pt-10 max-sm:py-10 max-md:pb-15 bg-bgGray">
        <div className="px-10 ">
          <h3 className="font-bold text-2xl pb-5 pt-5 text-productGraphDesign">
            BESTSELLER PRODUCTS
          </h3>
          <img src={line} alt="line" className="lg:w-[2500px]" />
        </div>
      </div>

      {/* Ürünlerin yan yana sıralandığı bölüm */}
      <div className="grid lg:grid-cols-4 gap-4 lg:px-[210px] ">
        {products.map((product) => (
          <ProductBestSellerCard
            key={product.id}
            title={product.title}
            price={product.price}
            discount={product.discount}
            department={product.department}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}
