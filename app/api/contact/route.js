

import { NextResponse } from "next/server";


import { connectToDatabase } from "@/utils/dbConnect";
import Message from '@/models/contactMgs.model';

export async function POST(req) {
    try {

        const { name, email, message } = await req.json()
        console.log(name);

        await connectToDatabase();
        await Message.create({ name, email, message });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}


