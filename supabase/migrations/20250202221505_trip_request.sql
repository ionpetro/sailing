CREATE TABLE trip_requests (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    trip_id BIGINT REFERENCES trips(id),
    date DATE NOT NULL,
    guests INTEGER NOT NULL,
    email TEXT NOT NULL,
    trip_title TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE trip_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to create trip requests
CREATE POLICY "Allow public create access"
    ON trip_requests FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);
