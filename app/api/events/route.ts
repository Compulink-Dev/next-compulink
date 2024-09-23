import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnect'
import Event from '@/lib/models/(events)/events'

export async function POST(request: NextRequest) {
    const { title, date, imageUrl, venue, description, link } = await request.json();
    await dbConnect();
    await Event.create({ title, date, imageUrl, venue, description, link });
    return NextResponse.json({ message: "Event created" }, { status: 201 });
}

export async function GET() {
    await dbConnect();
    const events = await Event.find();
    return NextResponse.json({ events });
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    await dbConnect();
    await Event.findByIdAndDelete(id);
    return NextResponse.json(
        { message: "Event deleted" },
        {
            status: 200,
        }
    );
}
