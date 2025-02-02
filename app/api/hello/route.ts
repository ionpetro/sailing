export async function GET(request: Request) {
  const tripData = [
    {
      id: 0,
      sticky: true,
      title: "DI CONSTA",
      name: "Dufour 37",
      images: [
        {
          url: "/images/dufour/diconsta1.png",
          alt: "Dufour 37 - Main",
        },
        {
          url: "/images/dufour/diconsta2.png",
          alt: "Dufour 37 - Exterior",
        },
        {
          url: "/images/dufour/diconsta3.png",
          alt: "Dufour 37 - Exterior 2",
        },
        {
          url: "/images/dufour/diconsta4.png",
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
      id: 2,
      sticky: false,
      title: "DI CONSTA",
      name: "Dufour 37",
      images: [
        {
          url: "/images/dufour/diconsta1.jpg",
          alt: "Dufour 37 - Main",
        },
        {
          url: "/images/dufour/diconsta2.jpg",
          alt: "Dufour 37 - Exterior",
        },
        {
          url: "/images/dufour/diconsta3.jpg",
          alt: "Dufour 37 - Exterior 2",
        },
        {
          url: "/images/dufour/diconsta4.jpg",
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
