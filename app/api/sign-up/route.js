
import { connectToDatabase } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

import signUpModel from "@/models/sign-up.model";

export async function POST(req) {
    try {

        const { username, email, password } = await req.json()
        console.log(username);

        await connectToDatabase();
        // Check if the user already exists
        const existingUser = await signUpModel.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ success: false, message: "User already exists" }, { status: 400 });
        }
        await signUpModel.create({ username, email, password });

        return NextResponse.json({ success: true, message: "User created successfully" }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
