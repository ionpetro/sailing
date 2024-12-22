export default async function getAllPosts() {
  // Use relative URL when deployed, falls back to absolute URL in development
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/hello`);

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}
