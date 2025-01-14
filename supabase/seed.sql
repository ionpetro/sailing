-- First, insert the boats
INSERT INTO boats (
  name, 
  type,
  images,
  capacity, 
  features,
  length_meters,
  beam_meters,
  draft_meters,
  max_speed_knots,
  year_built,
  last_refit,
  manufacturer,
  model,
  cabin_count,
  berth_count,
  specifications
)
VALUES
  (
    'Dufour 37',
    'Sailing Yacht',
    '[
      {
        "url": "/images/dufour/dufour2.jpg",
        "alt": "Dufour 37 - Main"
      },
      {
        "url": "/images/dufour/dufour3.webp",
        "alt": "Dufour 37 - Exterior"
      },
      {
        "url": "/images/dufour/dufour5.jpg",
        "alt": "Dufour 37 - Exterior 2"
      },
      {
        "url": "/images/dufour/dufour4.jpg",
        "alt": "Dufour 37 - Interior"
      }
    ]',
    8,
    '{
      "length": "37 feet",
      "cabins": 3,
      "bathrooms": 1,
      "year": 2020
    }',
    11.28,  -- length_meters (37 feet)
    3.77,   -- beam_meters
    1.90,   -- draft_meters
    8,      -- max_speed_knots
    2020,   -- year_built
    2023,   -- last_refit
    'Dufour',  -- manufacturer
    '37',      -- model
    3,         -- cabin_count
    6,         -- berth_count
    '{
      "sail_area": 65,
      "engine": "Volvo Penta 30HP",
      "fuel_capacity": 200,
      "water_capacity": 330,
      "navigation": ["GPS", "Autopilot", "VHF Radio"]
    }'::jsonb
  ),
  (
    'Bali 4.2',
    'Catamaran',
    '[
      {
        "url": "/images/bali42/Bali-42-Infinity-2-optimized.jpg",
        "alt": "Bali 4.2 - Main"
      },
      {
        "url": "/images/bali42/Bali-42-Infinity-3-optimized.jpg",
        "alt": "Bali 4.2"
      },
      {
        "url": "/images/bali42/Bali-42-Infinity-4-optimized.jpg",
        "alt": "Bali 4.2"
      },
      {
        "url": "/images/bali42/Bali-42-Infinity-5-optimized.jpg",
        "alt": "Bali 4.2"
      },
      {
        "url": "/images/bali42/Bali-42-Infinity-6-optimized.jpg",
        "alt": "Bali 4.2"
      },
      {
        "url": "/images/bali42/Bali-42-Infinity-7-optimized.jpg",
        "alt": "Bali 4.2"
      },
      {
        "url": "/images/bali42/Bali-42-Infinity-8-optimized.jpg",
        "alt": "Bali 4.2"
      },
      {
        "url": "/images/bali42/Bali-42-Infinity-9-optimized.jpg",
        "alt": "Bali 4.2"
      },
      {
        "url": "/images/bali42/Bali-42-Infinity-10-optimized.jpg",
        "alt": "Bali 4.2"
      },
      {
        "url": "/images/bali42/Bali-42-Infinity-11-optimized.jpg",
        "alt": "Bali 4.2"
      },
      {
        "url": "/images/bali42/Bali-42-Infinity-12-optimized.webp",
        "alt": "Bali 4.2"
      },
      {
        "url": "/images/bali42/Bali-42-Infinity-13-optimized.webp",
        "alt": "Bali 4.2"
      },
      {
        "url": "/images/bali42/Bali-42-Infinity-14-optimized.webp",
        "alt": "Bali 4.2"
      },
      {
        "url": "/images/bali42/Layout-Bali-42-optimized.webp",
        "alt": "Bali 4.2"
      }
    ]',
    10,
    '{
      "length": "42 feet",
      "cabins": 6,
      "bathrooms": 5,
      "year": 2024
    }',
    12.28,  -- length_meters
    7.07,   -- beam_meters
    1.22,   -- draft_meters
    10,     -- max_speed_knots (estimated)
    2024,   -- year_built
    null,   -- last_refit (new boat)
    'Bali Catamarans',  -- manufacturer
    '4.2',    -- model
    6,        -- cabin_count (4 double + 2 single)
    10,       -- berth_count
    '{
      "engine": "2×33 hp diesel",
      "fuel_capacity": 640,
      "water_capacity": 860,
      "navigation": ["GPS", "Chartplotter", "Autopilot", "VHF"],
      "equipment": [
        "Air Conditioning",
        "Generator",
        "Watermaker",
        "Solar Panels",
        "Electric Winch",
        "Bimini",
        "Sprayhood",
        "Dinghy with Outboard"
      ]
    }'::jsonb
  );

-- Then insert the trips with boat_id references
INSERT INTO trips (
  sticky, 
  title, 
  tag1, 
  tag2, 
  tag3, 
  date, 
  location, 
  price_amount, 
  boat_id,
  description
)
VALUES
  (
    true,
    'A fun sailing trip',
    'daily',
    'from €140',
    '🇬🇷 Athens, Greece',
    'today',
    'Athens',
    140,
    (SELECT id FROM boats WHERE name = 'Dufour 37'),
    '## The experience

The Dufour 37 is a modern sailing yacht designed for comfort, style, and exceptional performance. With its sleek lines and innovative features, it offers a unique sailing experience.

## Highlights

The Dufour 37 combines functionality and elegance, making it perfect for sailing enthusiasts.

- 🍳 Fully equipped galley with stove, oven, refrigerator, and ample storage
- ⚓ Ergonomic cockpit with dual helm stations and folding table
- 🛋️ Interior finishes and comfortable accommodations
- 🎵 Music, WiFi and Watersports on board

## Amenities

Onboard, you''ll find everything you need for an enjoyable journey:

- 🛋️ Premium upholstery, LED lighting, and plenty of ventilation
- 🧭 State-of-the-art navigation instruments, including GPS, autopilot, and chartplotter
- 🎵 Bluetooth-enabled sound system
- 🏊‍♂️ Snorkeling gear, paddleboards, and inflatable toys available upon request'
  ),
  (
    false,
    'A lux trip with a catamaran',
    'daily',
    'from €170',
    '🇬🇷 Athens, Greece',
    'today',
    'Athens',
    170,
    (SELECT id FROM boats WHERE name = 'Bali 4.2'),
    '## The experience

Experience the ultimate luxury sailing adventure aboard our brand new Bali 4.2 catamaran. Perfect for families and groups, this spacious vessel offers exceptional comfort and modern amenities for an unforgettable journey through the Greek Islands.

## Highlights

- 🛥️ Luxurious accommodations for extended sailing trips
- 🏝️ Perfect platform for island hopping
- 👨‍👩‍👧‍👦 Ideal for family gatherings or groups of friends
- ⚓ Stable and comfortable sailing experience
- 🍽️ Spacious outdoor areas for dining and relaxation
- ☀️ Multiple sunbathing spaces
- 🏊‍♂️ Easy water access for swimming and water activities

## Amenities

- 🌡️ Air Conditioning - Stay cool even in Mediterranean heat
- ⚡ Generator - Reliable power supply for all your needs
- 💧 Watermaker - Fresh water production while at sea
- ☀️ Solar Panels - Sustainable energy for extended cruising
- ⚙️ Electric Winch - Effortless sail handling
- ⛱️ Bimini - Protection from sun and elements
- 💨 Sprayhood - Additional weather protection at helm
- 🛟 Dinghy with Outboard - Easy shore access and exploration
- 🧭 Modern Navigation Systems:
  - 📍 GPS - Precise positioning
  - 🗺️ Chartplotter - Digital navigation and route planning
  - 🎯 Autopilot - Automated steering assistance
  - 📡 VHF Radio - Essential communication equipment'
  );
