-- Add new columns for pricing and time slots
ALTER TABLE trips
ADD COLUMN full_day_price DECIMAL,
ADD COLUMN half_day_price DECIMAL,
ADD COLUMN morning_slot_start TIME DEFAULT '10:00',
ADD COLUMN morning_slot_end TIME DEFAULT '15:00',
ADD COLUMN afternoon_slot_start TIME DEFAULT '16:00',
ADD COLUMN afternoon_slot_end TIME DEFAULT '21:00';

-- Update existing prices for Dufour 37
UPDATE trips
SET half_day_price = 450,
    full_day_price = 900
WHERE title LIKE '%Dufour 37%';

-- Update existing prices for Lagoon 52
UPDATE trips
SET half_day_price = 1000,
    full_day_price = 2000
WHERE title LIKE '%Lagoon 52%';

-- Remove the old pricing columns
ALTER TABLE trips
DROP COLUMN price_amount;

