"use client";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RxDashboard, RxSketchLogo, RxPerson } from "react-icons/rx";
import { GrGallery } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import Link from "next/link";

function Sidebar() {
    return (
        <div className="w-20 p-4">
            <div className="flex flex-col items-center">
                <Link href={"/dashboard/home"}>
                    <div className="bg-blue-800 text-white p-3 rounded-lg inline-block">
                        <RxSketchLogo size={20} />
                    </div>
                </Link>
                <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
                <Link href={"/dashboard/home"}>
                    <div className="bg-gray-100 hover:bg-gray-300 cursor-pointer my-4 text-white p-3 rounded-lg inline-block">
                        <RxDashboard size={20} />
                    </div>
                </Link>
                <Link
                    href="/dashboard/customers"
                    className="bg-gray-100 hover:bg-gray-300 cursor-pointer my-4 text-white p-3 rounded-lg inline-block"
                >
                    <div>
                        <RxPerson size={20} />
                    </div>
                </Link>
                <Link href={"/dashboard/events"}>
                    <div className="bg-gray-100 hover:bg-gray-300 cursor-pointer my-4 text-white p-3 rounded-lg inline-block">
                        <HiOutlineShoppingBag size={20} />
                    </div>
                </Link>
                <Link href={"/dashboard/gallery"}>
                    <div className="bg-gray-100 hover:bg-gray-300 cursor-pointer my-4 text-white p-3 rounded-lg inline-block">
                        <GrGallery size={20} />
                    </div>
                </Link>
                <Link href={"/dashboard/settings"}>
                    <div className="bg-gray-100 hover:bg-gray-300 cursor-pointer my-4 text-white p-3 rounded-lg inline-block">
                        <FiSettings size={20} />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
