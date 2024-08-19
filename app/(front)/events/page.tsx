import React from "react";

import MainLayout from "@/components/mainLayout";
import EventCard from "./_components/eventCard"
import Event from './_components/event'

const getEvents = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/events", {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

async function Events() {
    const { events } = await getEvents();
    return (
        <MainLayout backImage='host.webp' image=''>
            <Event />
            <div className=" w-full h-full my-8">
                <h1 className="text-center text-3xl ">All Events</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 mx-10 gap-6">
                    <EventCard />
                </div>
            </div>
        </MainLayout>
    );
}

export default Events;
