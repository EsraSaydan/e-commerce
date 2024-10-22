import React from "react";
import ShopContainer from "../components/shop/ShopContainer";
import ShopCard from "../components/shop/ShopCard";
import Filter from "../components/shop/Filter";
import ShopProductHome from "../components/shop/ShopProductHome";
import { Clients } from "../components/home/Clients";

export default function ShopPage() {
  return (
    <div>
      <ShopContainer />
      <ShopCard />
      <Filter />
      <ShopProductHome />
      <Clients />
    </div>
  );
}
