import React from "react";
import MainLayout from "@/components/mainLayout";
import EventCard from "./_components/eventCard"
import Event from './_components/event'


async function Events() {
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
