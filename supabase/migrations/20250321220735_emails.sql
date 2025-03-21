CREATE TABLE emails (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE emails ENABLE ROW LEVEL SECURITY;

-- Allow anyone to create email subscriptions
CREATE POLICY "Allow public create access"
    ON emails FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);