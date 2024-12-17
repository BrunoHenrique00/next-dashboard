import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  // Not making checks here to keep it simple
  const data = await req.json();
  console.log(data);

  const response = await prisma.comment.create({
    data,
  });

  return NextResponse.json(response);
};
