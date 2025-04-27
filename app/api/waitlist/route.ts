import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/db";
import User from "@/lib/models";
import emailjs from "@emailjs/browser";

emailjs.init(process.env.EMAILJS_PUBLIC_KEY!);

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
    const { email, address } = body;

    // Validate at least one field is provided
    if (!email && !address) {
      return NextResponse.json(
        { success: false, message: "Please provide email or wallet address" },
        { status: 400 }
      );
    }

    // Validate email format if provided
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Validate address format if provided
    if (address && !/^0x[a-fA-F0-9]{40}$/.test(address)) {
      return NextResponse.json(
        { success: false, message: "Invalid wallet address format" },
        { status: 400 }
      );
    }

    await connectToDb();

    // Check for existing records using $or operator
    const existingUser = await User.findOne({
      $or: [
        ...(email ? [{ email }] : []),
        ...(address ? [{ address }] : [])
      ]
    });

    if (existingUser) {
      const conflictField = existingUser.email ? "email" : "address";
      return NextResponse.json(
        { success: false, message: `${conflictField} already registered` },
        { status: 409 }
      );
    }


    // Get waitlist position
    const totalUsers = await User.countDocuments();
    const position = totalUsers;

    // Send email only if email was provided
    if (email) {
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        { 
          email: email,
          position: position,
          date: new Date().toLocaleDateString()
        }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Successfully joined waitlist",
        position,
        user: { email, address }
      },
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