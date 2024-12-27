CREATE TABLE bookings (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    trip_id BIGINT REFERENCES trips(id),
    user_id UUID REFERENCES auth.users(id),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    guest_count INTEGER NOT NULL,
    total_amount DECIMAL NOT NULL,
    status TEXT CHECK (status IN ('pending', 'confirmed', 'cancelled')),
    payment_intent_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT valid_dates CHECK (end_date >= start_date)
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow users to see their own bookings
CREATE POLICY "Users can view own bookings"
    ON bookings FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);

-- Allow users to create bookings
CREATE POLICY "Users can create bookings"
    ON bookings FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);