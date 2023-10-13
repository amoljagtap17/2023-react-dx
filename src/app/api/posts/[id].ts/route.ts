export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  console.log("GET", id);
}

export async function PATCH(
  request: Request,
  context: { params: { id: string } }
) {}

export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {}
