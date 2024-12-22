export default async function getAllPosts() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/hello`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) throw new Error("failed to fetch data");
  return res.json();
}
