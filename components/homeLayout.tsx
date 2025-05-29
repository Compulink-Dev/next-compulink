import Footer from "@/app/(front)/_components/bottom";
import Hero from "@/app/(front)/_components/hero";
import HeroCarousel from "@/app/(front)/_components/heroCarousel";

import Navbar from "@/app/(front)/_components/navbar";
import React from "react";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <Navbar /> */}
      <main className="">
        <HeroCarousel />
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default HomeLayout;
