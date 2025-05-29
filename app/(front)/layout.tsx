import React from "react";
import { Header } from "./_components/header";
import Footer from "@/app/(front)/_components/bottom";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
