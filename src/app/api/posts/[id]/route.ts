import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const post = await prisma.post.findUniqueOrThrow({
    where: {
      id,
    },
  });

  return Response.json({ post }, { status: 200 });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const data: Prisma.PostUncheckedUpdateInput = await request.json();

  const post = await prisma.post.update({
    where: {
      id,
    },
    data,
  });

  return Response.json({ post }, { status: 200 });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const post = await prisma.post.delete({
    where: {
      id,
    },
  });

  return Response.json({ post }, { status: 200 });
}
