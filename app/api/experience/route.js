

import { NextResponse } from "next/server";


import { connectToDatabase } from "@/utils/dbConnect";
import Experience from "@/models/experience.model";

export async function POST(req) {
    try {

        const { companyName, designation, dateline, location } = await req.json()
        // console.log(name);

        await connectToDatabase();
        await Experience.create({ companyName, designation, dateline, location });

        return NextResponse.json({
            success: true
            , message: "Experience added successfully"
        }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectToDatabase();
        const experiences = await Experience.find({}).sort({ createdAt: -1 });

        return NextResponse.json({ success: true, data: experiences }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}

