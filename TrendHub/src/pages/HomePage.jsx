import React from "react";
import Hero from "../components/home/Hero";
import Navbar from "../components/Home/Navbar";
import { Clients } from "../components/home/Clients";
import ShopCards from "../components/home/ShopCards";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Clients />
      <ShopCards />
    </div>
  );
}
