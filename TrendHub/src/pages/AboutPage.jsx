import React from "react";
import AboutHero from "../components/about/AboutHero";
import AboutContent from "../components/about/AboutContent";
import AboutStats from "../components/about/AboutStats";
import VideoSection from "../components/about/VideoSection";
import AboutUser from "../components/about/AboutUser";
import AboutClients from "../components/about/AboutClients";
import AboutTestimonials from "../components/about/AboutTestimonials";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutContent />
      <AboutStats />
      <VideoSection />
      <AboutUser />
      <AboutClients />
      <AboutTestimonials />
    </div>
  );
}
