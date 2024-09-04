import dbConnect from "../dbConnect";
import Event from "../models/(events)/events";

export default async function getEvents() {
    await dbConnect()
    const events = await Event.find()
    return events;
}