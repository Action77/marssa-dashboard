export async function GET() {
  return Response.json({
    success: true,
    method: "GET"
  });
}

export async function POST() {
  return Response.json({
    success: true,
    method: "POST"
  });
}