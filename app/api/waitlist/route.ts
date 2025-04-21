import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/db";
import User from "@/lib/models";

export async function GET() {
  try {
    await connectToDb();
    const users = await User.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, users }, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { success: false, message: "Server error, please try again later" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body.email as string;

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    await connectToDb();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email already registered" },
        { status: 409 }
      );
    }

    await User.create({ email });

    return NextResponse.json(
      { success: true, message: "Successfully joined waitlist" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in waitlist API:", error);
    return NextResponse.json(
      { success: false, message: "Server error, please try again later" },
      { status: 500 }
    );
  }
}
