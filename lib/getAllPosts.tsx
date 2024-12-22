export default async function getAllPosts() {
  // During build time, return mock data directly
  if (process.env.NODE_ENV === "production") {
    return [
      {
        id: 0,
        sticky: true,
        title: "DI CONSTA",
        name: "Dufour 37",
        images: [
          {
            url: "/images/dufour/dufour2.jpg",
            alt: "Dufour 37 - Main",
          },
          {
            url: "/images/dufour/dufour3.webp",
            alt: "Dufour 37 - Exterior",
          },
          {
            url: "/images/dufour/dufour5.jpg",
            alt: "Dufour 37 - Exterior 2",
          },
          {
            url: "/images/dufour/dufour4.jpg",
            alt: "Dufour 37 - Interior",
          },
        ],
        tag1: "daily",
        tag2: "from €140",
        tag3: "🇬🇷 Athens, Greece",
        date: "today",
        location: "Athens",
      },
      // Add more mock data as needed
    ];
  }

  // During development, fetch from API
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/hello`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) throw new Error("failed to fetch data");
  return res.json();
}
