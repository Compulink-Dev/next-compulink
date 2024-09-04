import React from "react";
import MainLayout from "@/components/mainLayout";
import Event from './_components/event'
import EventCards from "./_components/eventCards";
import EventCard from "./_components/eventCard";


async function Events() {
    return (
        <MainLayout backImage='class1.jpg' image=''>
            <EventCard />
            <div className=" w-full h-full ">
                <h1 className="text-center text-3xl my-8">All Events</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 mx-10 gap-4">
                    <EventCards />
                </div>
            </div>
        </MainLayout>
    );
}

export default Events;
