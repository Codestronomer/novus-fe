// src/app/api/waitlist/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET: Get all users who have joined the waitlist
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  try {
    const waitlistUsers = await prisma.waitlistUser.findMany({
      orderBy: {
        joined_at: "asc",
      },
    });

    return NextResponse.json({ users: waitlistUsers }, { status: 200 });
  } catch (error) {
    console.error("Error fetching waitlist:", error);
    return NextResponse.json(
      { error: "Failed to retrieve waitlist" },
      { status: 500 }
    );
  }
}

// POST: Join waitlist with email or wallet address
export async function POST(request: NextRequest) {
  try {
    const { body } = await request.json();
    const { user_id, connection_type } = body;
    console.log(user_id);

    // Validate request body
    if (!user_id) {
      return NextResponse.json(
        { error: "user_id is required" },
        { status: 400 }
      );
    }

    if (!connection_type || !["email", "wallet"].includes(connection_type)) {
      return NextResponse.json(
        { error: 'connection_type must be either "email" or "wallet"' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.waitlistUser.findFirst({
      where: {
        user_id,
        connection_type,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "You already joined the waitlist", nonce: existingUser.nonce },
        { status: 409 }
      );
    }

    // Get the count of all users to generate the next nonce
    const totalUsers = await prisma.waitlistUser.count();
    const nextNonce = (totalUsers + 1).toString();

    // Create new user
    const newUser = await prisma.waitlistUser.create({
      data: {
        nonce: nextNonce,
        user_id,
        connection_type,
      },
    });

    return NextResponse.json(
      {
        message: "Successfully joined waitlist",
        nonce: newUser.nonce,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error joining waitlist:", error);
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    );
  }
}
