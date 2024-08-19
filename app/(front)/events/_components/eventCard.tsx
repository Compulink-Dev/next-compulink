import React from "react";
import Image from "next/image";
import FillButton from '../../../../components/fillButton';
import LinkButton from "@/components/linkButton";

const getEvents = async () => {
    try {
        const res = await fetch(`${process.env.API_ROUTE}/api/events`, {
        });
        const data = await res.json()
        console.log("Events :", data);
        if (!res.ok) {
            throw new Error("Failed to fetch events");
        }
        return data;
    } catch (error) {
        console.log(error);
    }
};

async function EventCard() {
    const { events } = await getEvents();
    return (
        <>
            {events.map((event: any) => (
                <div
                    key={event._id}
                    className=" flex md:flex gap-4 w-[100%] h-96 border rounded mt-10"
                >
                    <Image
                        src={event.imageUrl}
                        height={400}
                        width={300}
                        alt=""
                        className="h-72 w-72 rounded object-contain mx-3 my-10"
                    />
                    <div className="flex-col items-center justify-center p-8 ">
                        <h1 className="text-lg font-semibold pb-8">{event.title}</h1>
                        <p className="text-gray-500 pb-8 truncate  h-44 w-44">
                            {event.description}
                        </p>
                        <div className="flex justify-center items-center gap-2 text-sm text-white">
                            <p className="px-2 py-1 rounded bg-red-500">{event.venue}</p>
                            <p className="px-2 py-1 rounded  bg-blue-900">{event.date}</p>
                        </div>
                        <div className="w-28 py-4">
                            <LinkButton name={"Read more"} link={"https://www.evolveictsummit.com/"} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default EventCard;
