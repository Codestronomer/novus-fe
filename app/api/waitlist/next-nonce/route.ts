// src/app/api/waitlist/next-nonce/route.ts
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET: Get the next available nonce
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  try {
    // Count all users to determine the next nonce
    const totalUsers = await prisma.waitlistUser.count();
    const nextNonce = (totalUsers + 1).toString();

    return NextResponse.json({ nextNonce }, { status: 200 });
  } catch (error) {
    console.error("Error retrieving next nonce:", error);
    return NextResponse.json(
      { error: "Failed to retrieve next nonce" },
      { status: 500 }
    );
  }
}
