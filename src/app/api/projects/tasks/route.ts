import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  // Not making checks here to keep it simple
  const data = await req.json();
  console.log(data);

  const response = await prisma.task.create({
    data,
  });

  return NextResponse.json(response);
};

export const PUT = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("id");
  if (!query) {
    return NextResponse.json({ error: "ID não encontrado" });
  }

  // Not making checks here to keep it simple
  const data = await req.json();

  const response = await prisma.task.update({
    where: {
      id: parseInt(query),
    },
    data,
  });

  return NextResponse.json(response);
};
