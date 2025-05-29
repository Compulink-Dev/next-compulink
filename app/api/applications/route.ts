// app/api/applications/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import ApplicationModel from "@/lib/models/ApplicationModel";

export async function POST(request: Request) {
  await dbConnect();
  
  try {
    const formData = await request.formData();
    
    const application = new ApplicationModel({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      cv: {
        data: Buffer.from(await (formData.get("cv") as File).arrayBuffer()),
        contentType: (formData.get("cv") as File).type,
      },
    });

    await application.save();
    
    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}