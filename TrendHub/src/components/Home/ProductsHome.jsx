import React from "react";
import ProductCard from "./ProductCard";

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
  {
    id: 9,
    title: "Graphic Design",
    price: "$16.48",
    discount: "$6.48",
    department: "English Department",
  },
  {
    id: 10,
    title: "Graphic Design",
    price: "$16.48",
    discount: "$6.48",
    department: "English Department",
  },
];

export default function ProductsHome() {
  return (
    <div>
      <div className="text-center py-10">
        <p className="font-semibold text-xl tracking-wider text-iconGray ">
          Featured Products
        </p>
        <div className="lg:flex py-3 items-center justify-center space-x-2">
          <h3 className="font-bold text-2xl tracking-wide ">BESTSELLER</h3>
          <h3 className="font-bold text-2xl tracking-wide  ">PRODUCTS</h3>
        </div>

        <div className="lg:flex text-center justify-center">
          <p className="font-medium text-sm tracking-wider text-iconGray">
            Problems trying to resolve the{" "}
          </p>
          <p className="font-medium text-sm tracking-wider text-iconGray">
            conflict between
          </p>
        </div>
      </div>

      {/* Ürünlerin yan yana sıralandığı bölüm */}
      <div className="grid lg:grid-cols-5 gap-4 lg:px-[170px] ">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            discount={product.discount}
            department={product.department}
            id={product.id}
          />
        ))}
      </div>

      {/* Load More Butonu */}
      <div className="flex justify-center py-20">
        <button className="font-bold text-customLightBlue text-sm tracking-wider border-2 border-customLightBlue px-14 py-4 mt-6">
          LOAD MORE PRODUCTS
        </button>
      </div>
    </div>
  );
}
