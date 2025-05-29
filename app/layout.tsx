//@ts-nocheck
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compulink Systems",
  description: "Compulink Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="zoho-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.$zoho = window.$zoho || {};
            $zoho.salesiq = $zoho.salesiq || { ready: function() {} };
          `,
        }}
      />
      <Script
        id="zsiqscript"
        src="https://salesiq.zohopublic.com/widget?wc=siq6a61bf67115587fafae93f009eb7e42f9d012513d955a5c5c78d2d538bccb90e"
        strategy="lazyOnload"
        defer
      />
      <body className={inter.className}>
        <SessionWrapper>
          {children}
          <Toaster />
        </SessionWrapper>
      </body>
    </html>
  );
}
