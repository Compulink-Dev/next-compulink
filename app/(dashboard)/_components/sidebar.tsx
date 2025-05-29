"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RxDashboard, RxSketchLogo, RxPerson } from "react-icons/rx";
import { GrGallery } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";

const navLinks = [
  { href: "/dashboard/home", icon: <RxDashboard size={20} /> },
  { href: "/dashboard/customers", icon: <RxPerson size={20} /> },
  { href: "/dashboard/events", icon: <HiOutlineShoppingBag size={20} /> },
  { href: "/dashboard/vacancy", icon: <RxPerson size={20} /> },
  { href: "/dashboard/gallery", icon: <GrGallery size={20} /> },
  { href: "/dashboard/settings", icon: <FiSettings size={20} /> },
];

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-20 p-4">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <Link href="/dashboard/home">
          <div className="bg-blue-800 text-white p-3 rounded-lg inline-block">
            <RxSketchLogo size={20} />
          </div>
        </Link>

        <span className="border-b-[1px] border-gray-200 w-full p-2" />

        {/* Navigation Links */}
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;

          return (
            <Link href={link.href} key={index}>
              <div
                className={`my-4 p-3 rounded-lg inline-block cursor-pointer ${
                  isActive
                    ? "bg-blue-800 text-white"
                    : "bg-gray-400 text-white hover:bg-gray-600"
                }`}
              >
                {link.icon}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
