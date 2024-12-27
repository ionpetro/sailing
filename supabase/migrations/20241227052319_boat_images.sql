-- First, add the images column to boats table
ALTER TABLE boats
ADD COLUMN images JSONB;

-- Copy images from trips to boats based on boat_id
UPDATE boats
SET images = trips.images
FROM trips
WHERE boats.id = trips.boat_id;

-- Remove images column from trips
ALTER TABLE trips
DROP COLUMN images;
