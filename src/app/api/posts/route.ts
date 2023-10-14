import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function GET(request: Request) {
  const posts = await prisma.post.findMany();

  return Response.json({ posts }, { status: 200 });
}

export async function POST(request: Request) {
  const res: Prisma.PostUncheckedCreateInput = await request.json();

  const post = await prisma.post.create({
    data: {
      title: res.title,
      content: res.content,
      authorId: res.authorId,
    },
  });

  return Response.json({ post }, { status: 201 });
}
