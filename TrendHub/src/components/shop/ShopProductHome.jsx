import React from "react";
import ProductShopCard from "./ProductShopCard";

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
  {
    id: 11,
    title: "Graphic Design",
    price: "$16.48",
    discount: "$6.48",
    department: "English Department",
  },
  {
    id: 12,
    title: "Graphic Design",
    price: "$16.48",
    discount: "$6.48",
    department: "English Department",
  },
];

export default function ShopProductHome() {
  return (
    <div>
      {/* Ürünlerin yan yana sıralandığı bölüm */}
      <div className="grid lg:grid-cols-4 lg:px-[90px] py-4 ">
        {products.map((product) => (
          <ProductShopCard
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
