-- First, insert the boats
INSERT INTO boats (
  name, 
  type, 
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
    'Bali 4.2 Infinity',
    'Catamaran',
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
INSERT INTO trips (sticky, title, images, tag1, tag2, tag3, date, location, price_amount, boat_id)
VALUES
  (
    true,
    'A fun sailing trip',
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
    'daily',
    'from €140',
    '🇬🇷 Athens, Greece',
    'today',
    'Athens',
    140,
    (SELECT id FROM boats WHERE name = 'Dufour 37')
  ),
  (
    false,
    'A lux trip with a catamaran',
    '[
      {
        "url": "/images/lagoon52/lagoon52.jpg",
        "alt": "Lagoon 52 - Main"
      }
    ]',
    'weekly',
    'from €16,000',
    '🇬🇷 Athens, Greece',
    'today',
    'Athens',
    16000,
    (SELECT id FROM boats WHERE name = 'Bali 4.2 Infinity')
  );
