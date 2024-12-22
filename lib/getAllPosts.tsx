export default async function getAllPosts() {
  const res = await fetch("http://localhost:3000/api/hello");

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}
