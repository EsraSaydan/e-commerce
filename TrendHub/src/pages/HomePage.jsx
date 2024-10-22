import React from "react";
import Hero from "../components/home/Hero";
import { Clients } from "../components/home/Clients";
import ShopCards from "../components/home/ShopCards";
import Content from "../components/home/Content";
import BestServices from "../components/home/BestServices";
import Post from "../components/home/Post";
import ProductsHome from "../components/home/ProductsHome";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Clients />
      <ShopCards />
      <ProductsHome />
      <Content />
      <BestServices />
      <Post />
    </div>
  );
}
