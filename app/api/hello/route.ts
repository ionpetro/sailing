export async function GET(request: Request) {
  const data = await import("../../../public/data.json");

  return new Response(JSON.stringify(data.default), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
