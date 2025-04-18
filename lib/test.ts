// test-db.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {
    // Try a simple query
    const count = await prisma.waitlistUser.count();
    console.log("Connection successful! User count:", count);
  } catch (error) {
    console.error("Database connection error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
