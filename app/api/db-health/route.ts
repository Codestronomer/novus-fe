// src/app/api/db-health/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    // Attempt to connect
    await prisma.$connect();

    // Try a simple query
    const dbName = prisma.waitlistUser;
    console.log(dbName);

    return NextResponse.json({
      status: "connected",
      database: "",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Database connection check failed:", error);
    return NextResponse.json(
      {
        status: "disconnected",
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
