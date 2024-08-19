import dbConnect from '../../../lib/dbConnect'
import Gallery from '../../../lib/models/(gallery)/gallery'
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { projectName, company, description } = await request.json();
    await dbConnect();
    await Gallery.create({ projectName, company, description });
    return NextResponse.json({ message: "Gallery created" }, { status: 201 });
}

export async function GET() {
    await dbConnect();
    const gallery = await Gallery.find();
    return NextResponse.json({ gallery });
}
