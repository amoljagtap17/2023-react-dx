const products = [];

export async function GET(request: Request) {
  return Response.json({ products: [] }, { status: 200 });
}

export async function POST(request: Request) {
  const res = await request.json();

  return Response.json({ res }, { status: 201 });
}
