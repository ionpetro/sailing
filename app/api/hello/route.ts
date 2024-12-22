export async function GET(request: Request) {
  try {
    const data = await import("../../../public/data.json");

    return new Response(JSON.stringify(data.default), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to load data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
