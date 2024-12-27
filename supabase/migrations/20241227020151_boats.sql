CREATE TABLE boats (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT,
    capacity INTEGER,
    features JSONB,
    length_meters DECIMAL,
    beam_meters DECIMAL,
    draft_meters DECIMAL,
    max_speed_knots INTEGER,
    year_built INTEGER,
    last_refit INTEGER,
    manufacturer TEXT,
    model TEXT,
    cabin_count INTEGER,
    berth_count INTEGER,
    specifications JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE trips ADD COLUMN boat_id BIGINT;

-- Add a foreign key constraint to link `trips` and `boats`.
ALTER TABLE trips
ADD CONSTRAINT fk_boat
FOREIGN KEY (boat_id)
REFERENCES boats (id)
ON DELETE SET NULL;

-- Update trips with boat_id
UPDATE trips
SET boat_id = (SELECT id FROM boats WHERE name = 'Dufour 37')
WHERE title LIKE '%Dufour 37%';

UPDATE trips
SET boat_id = (SELECT id FROM boats WHERE name = 'Lagoon 52')
WHERE title LIKE '%Lagoon 52%';

ALTER TABLE trips
DROP COLUMN name,
ADD COLUMN price_amount DECIMAL,
ADD COLUMN price_currency TEXT DEFAULT '€',
ADD COLUMN rental_type TEXT CHECK (rental_type IN ('daily', 'weekly', 'monthly')),
ADD COLUMN max_guests INTEGER,
ADD COLUMN description TEXT,
ADD COLUMN available_from DATE,
ADD COLUMN available_until DATE;

-- Convert existing tag1 data to rental_type
UPDATE trips 
SET rental_type = LOWER(tag1)
WHERE tag1 IN ('daily', 'weekly', 'monthly');

-- Extract price from tag2 
UPDATE trips 
SET price_amount = (
  REGEXP_REPLACE(tag2, '[^0-9]', '', 'g')::DECIMAL
)
WHERE tag2 LIKE 'from %';

ALTER TABLE boats ENABLE ROW LEVEL SECURITY;

-- Add RLS policies for boats table
CREATE POLICY "Allow public read access to boats"
    ON boats FOR SELECT
    TO anon
    USING (true);

CREATE POLICY "Allow authenticated create boats"
    ON boats FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Allow authenticated update boats"
    ON boats FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);