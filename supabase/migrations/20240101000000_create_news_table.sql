-- Create news table
CREATE TABLE IF NOT EXISTS news (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT NOT NULL,
    publication_date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- Create indexes
CREATE INDEX IF NOT EXISTS news_publication_date_idx ON news(publication_date);
CREATE INDEX IF NOT EXISTS news_created_at_idx ON news(created_at);

-- Create trigger to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc', NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_news_updated_at
    BEFORE UPDATE ON news
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Add RLS (Row Level Security) policies
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- Allow read access to all authenticated users
CREATE POLICY "Allow read access for all authenticated users"
ON news FOR SELECT
TO authenticated
USING (true);

-- Allow insert access to authenticated users
CREATE POLICY "Allow insert access for authenticated users"
ON news FOR INSERT
TO authenticated
WITH CHECK (true);

-- Allow update access to authenticated users
CREATE POLICY "Allow update access for authenticated users"
ON news FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Allow delete access to authenticated users
CREATE POLICY "Allow delete access for authenticated users"
ON news FOR DELETE
TO authenticated
USING (true);

-- Add helpful comments
COMMENT ON TABLE news IS 'Table storing company news articles';
COMMENT ON COLUMN news.title IS 'The title of the news article';
COMMENT ON COLUMN news.content IS 'The main content of the news article';
COMMENT ON COLUMN news.image_url IS 'URL to the featured image of the news article';
COMMENT ON COLUMN news.publication_date IS 'The date when the news article should be published';
COMMENT ON COLUMN news.created_at IS 'Timestamp when the record was created';
COMMENT ON COLUMN news.updated_at IS 'Timestamp when the record was last updated'; 