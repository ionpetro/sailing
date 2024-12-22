export async function GET(request: Request) {
  // TODO: fetch from supabase API
  const tripData = [
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
    {
      id: 1,
      sticky: false,
      title: "QUEEN OF HEARTS",
      name: "Lagoon 52",
      images: [
        {
          url: "/images/lagoon52/lagoon52.jpg",
          alt: "Lagoon 52 - Main",
        },
      ],
      tag1: "weekly",
      tag2: "from €16,000",
      tag3: "🇬🇷 Athens, Greece",
      date: "today",
      location: "Athens",
    },
  ] as const;

  return new Response(JSON.stringify(tripData), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
