-- Drop existing tables first (in correct order due to dependencies)
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS brands CASCADE;
DROP TABLE IF EXISTS plants CASCADE;
DROP TABLE IF EXISTS news CASCADE;

-- Drop and recreate the trigger function
DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;

-- Create trigger function for updating timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create brands table
CREATE TABLE brands (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    image_url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create products table
CREATE TABLE products (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    brand_name TEXT NOT NULL,
    original_price NUMERIC NOT NULL,
    selling_price NUMERIC NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create plants table
CREATE TABLE plants (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    category TEXT NOT NULL,
    image_url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create news table
CREATE TABLE news (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT NOT NULL,
    publication_date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS products_category_idx ON products(category);
CREATE INDEX IF NOT EXISTS products_brand_name_idx ON products(brand_name);
CREATE INDEX IF NOT EXISTS plants_category_idx ON plants(category);
CREATE INDEX IF NOT EXISTS news_publication_date_idx ON news(publication_date);
CREATE INDEX IF NOT EXISTS news_created_at_idx ON news(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE plants ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Enable all operations for authenticated users" ON brands;
DROP POLICY IF EXISTS "Enable all operations for authenticated users" ON products;
DROP POLICY IF EXISTS "Enable all operations for authenticated users" ON plants;
DROP POLICY IF EXISTS "Enable all operations for authenticated users" ON news;

-- Create RLS policies for brands
CREATE POLICY "Allow select for everyone" ON brands FOR SELECT USING (true);
CREATE POLICY "Allow insert for authenticated users" ON brands FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow update for authenticated users" ON brands FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow delete for authenticated users" ON brands FOR DELETE TO authenticated USING (true);

-- Create RLS policies for products
CREATE POLICY "Allow select for everyone" ON products FOR SELECT USING (true);
CREATE POLICY "Allow insert for authenticated users" ON products FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow update for authenticated users" ON products FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow delete for authenticated users" ON products FOR DELETE TO authenticated USING (true);

-- Create RLS policies for plants
CREATE POLICY "Allow select for everyone" ON plants FOR SELECT USING (true);
CREATE POLICY "Allow insert for authenticated users" ON plants FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow update for authenticated users" ON plants FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow delete for authenticated users" ON plants FOR DELETE TO authenticated USING (true);

-- Create RLS policies for news
CREATE POLICY "Allow select for everyone" ON news FOR SELECT USING (true);
CREATE POLICY "Allow insert for authenticated users" ON news FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow update for authenticated users" ON news FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow delete for authenticated users" ON news FOR DELETE TO authenticated USING (true);

-- Create triggers for updated_at timestamps
CREATE TRIGGER update_brands_updated_at
    BEFORE UPDATE ON brands
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at
    BEFORE UPDATE ON products
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_plants_updated_at
    BEFORE UPDATE ON plants
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_news_updated_at
    BEFORE UPDATE ON news
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Add helpful comments
COMMENT ON TABLE brands IS 'Table storing brand information';
COMMENT ON TABLE products IS 'Table storing product information';
COMMENT ON TABLE plants IS 'Table storing plant information';
COMMENT ON TABLE news IS 'Table storing company news articles';

-- Add foreign key constraints and checks
ALTER TABLE products ADD CONSTRAINT products_selling_price_check 
    CHECK (selling_price >= 0);
ALTER TABLE products ADD CONSTRAINT products_original_price_check 
    CHECK (original_price >= 0);

-- Remove constraints for stock_quantity and stock_status
-- ALTER TABLE products ADD CONSTRAINT products_stock_quantity_check 
--     CHECK (stock_quantity >= 0);
-- ALTER TABLE products ADD CONSTRAINT products_stock_status_check 
--     CHECK (stock_status IN ('in_stock', 'out_of_stock', 'low_stock')); 