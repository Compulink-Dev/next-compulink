"use client";
import Chatbot from "@/components/Chatbot";
import Parnters from "./_components/partners";
import About from "./_components/about";
import Work from "./_components/work";
import Service from "./_components/service";
import Testimonials from "./_components/testimonials";
import HomeCarousel from "./_components/carousel";
import Promotion from "./_components/promotions";
import Hero from "./_components/hero";

export default function Home() {
  return (
    <div>
      <Hero backImage={"web3.webp"} image={""} />
      <div className="">
        <Parnters />
        <About />
        <Work />
        <Service />
        <Testimonials />
        <HomeCarousel />
        <Promotion />
        <Chatbot />
      </div>
    </div>
  );
}
