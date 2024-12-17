import prisma from "@/lib/prisma";
import { formProjectSchema } from "@/schemas/project";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("id");

  if (query) {
    const response = await prisma.project.findUnique({
      where: {
        id: Number(query),
      },
      include: {
        comments: true,
        tasks: true,
      },
    });
    return NextResponse.json(response);
  }

  const response = await prisma.project.findMany({
    include: {
      comments: true,
      tasks: true,
    },
  });
  return NextResponse.json(response);
};

export const POST = async (req: Request) => {
  const res = await req.json();
  const data = formProjectSchema.parse(res);

  const response = await prisma.project.create({
    data,
  });

  return NextResponse.json(response);
};
