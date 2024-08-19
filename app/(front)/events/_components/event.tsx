import React from "react";
import Image from "next/image";
import FillButton from "../../../../components/fillButton";
import LinkButton from "@/components/linkButton";

const getEvents = async () => {
    try {
        const res = await fetch(`${process.env.API_ROUTE}/api/events`, {
        });
        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

async function Event() {
    const { events } = await getEvents();
    return (
        <>
            {events?.slice(0, 1).map((events: any, index: any) => (
                <div
                    key={index}
                    className="bg-slate-50 -translate-y-20">
                    <h1 className="text-2xl font-semibold text-center py-6">
                        Upcoming Events
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 py-8 px-4">
                        <div className="bg-orange-100 items flex justify-center rounded-lg ">
                            <div className="relative">
                                <Image
                                    className="flex items-center justify-center p-12"
                                    src="/images/event.png"
                                    width={800}
                                    alt=""
                                    height={800}
                                />
                                <div className="absolute bottom-28 md:bottom-32 left-16">
                                    <p className="text-lg md:text-3xl font-bold text-blue-900 w-56">
                                        {events.title}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="items-center justify-center">
                            <h1 className="font-bold text-[30px] px-4 pt-16">
                                {events.title}
                            </h1>
                            <p className="p-6 text-gray-400">{events.description}</p>
                            <h1 className="text-center p-2 font-bold text-[24px]">
                                Category
                            </h1>
                            <h2 className="text-center text-gray-400 ">General</h2>

                            <div className="flex items-center justify-center p-4 gap-4 ">
                                <LinkButton name="27 Oct 2022" link="/" />
                                <LinkButton name="Register" link="/" />
                                <p className="px-4 py-2 bg-red-600 text-white rounded-md">
                                    {events.venue}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Event;
