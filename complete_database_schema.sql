-- Complete Database Schema for A.T.Haque Portfolio Project
-- Includes all tables + authentication system

-- Drop existing tables first (in correct order due to dependencies)
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS brands CASCADE;
DROP TABLE IF EXISTS plants CASCADE;
DROP TABLE IF EXISTS blogs CASCADE;
DROP TABLE IF EXISTS news CASCADE;
DROP TABLE IF EXISTS tv_commercials CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Drop and recreate the trigger function
DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ language 'plpgsql';

-- ========================================
-- USERS TABLE (for authentication)
-- ========================================
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user' NOT NULL,
  is_active BOOLEAN DEFAULT true NOT NULL,
  last_login TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Indexes for users table
CREATE INDEX IF NOT EXISTS users_username_idx ON users(username);
CREATE INDEX IF NOT EXISTS users_email_idx ON users(email);
CREATE INDEX IF NOT EXISTS users_role_idx ON users(role);

-- ========================================
-- BRANDS TABLE
-- ========================================
CREATE TABLE brands (
  id uuid default uuid_generate_v4() primary key,
  name text,
  description text,
  image_url text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ========================================
-- PRODUCTS TABLE
-- ========================================
CREATE TABLE products (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  category text not null,
  brand_name text not null,
  stock_status text not null,
  stock_quantity integer not null,
  original_price numeric not null,
  selling_price numeric not null,
  description text not null,
  image_url text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ========================================
-- PLANTS TABLE
-- ========================================
CREATE TABLE IF NOT EXISTS plants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()) NOT NULL
);

-- ========================================
-- NEWS TABLE
-- ========================================
CREATE TABLE IF NOT EXISTS news (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT NOT NULL,
    publication_date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- ========================================
-- BLOGS TABLE
-- ========================================
CREATE TABLE IF NOT EXISTS blogs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    short_description TEXT,
    content TEXT NOT NULL,
    cover_image VARCHAR(255),
    category VARCHAR(100),
    tags TEXT[],
    meta_description TEXT,
    published_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ========================================
-- TV COMMERCIALS TABLE
-- ========================================
CREATE TABLE IF NOT EXISTS tv_commercials (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT,
    description TEXT,
    video_url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ========================================
-- ROW LEVEL SECURITY (RLS)
-- ========================================
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE plants ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE tv_commercials ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Enable all operations" ON brands;
DROP POLICY IF EXISTS "Enable all operations" ON products;
DROP POLICY IF EXISTS "Enable all operations" ON plants;
DROP POLICY IF EXISTS "Enable all operations" ON news;
DROP POLICY IF EXISTS "Enable all operations" ON blogs;
DROP POLICY IF EXISTS "Enable all operations" ON tv_commercials;
DROP POLICY IF EXISTS "Allow users to read their own data" ON users;
DROP POLICY IF EXISTS "Allow authenticated users to update their own data" ON users;

-- Create policies for all operations (public for now, restrict as needed)
CREATE POLICY "Enable all operations" ON brands FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all operations" ON products FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all operations" ON plants FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all operations" ON news FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all operations" ON blogs FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all operations" ON tv_commercials FOR ALL USING (true) WITH CHECK (true);

-- Users table policies (example: only allow users to read/update their own data)
CREATE POLICY "Allow users to read their own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Allow authenticated users to update their own data" ON users
  FOR UPDATE USING (auth.uid() = id);

-- ========================================
-- TRIGGERS FOR UPDATED_AT
-- ========================================
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

CREATE TRIGGER update_blogs_updated_at
  BEFORE UPDATE ON blogs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tv_commercials_updated_at
  BEFORE UPDATE ON tv_commercials
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ========================================
-- COMMENTS FOR DOCUMENTATION
-- ========================================
COMMENT ON TABLE users IS 'Table storing user authentication and authorization data';
COMMENT ON COLUMN users.username IS 'Unique username for login';
COMMENT ON COLUMN users.email IS 'User email address';
COMMENT ON COLUMN users.password_hash IS 'Hashed password using bcrypt';
COMMENT ON COLUMN users.role IS 'User role (admin, user, etc.)';
COMMENT ON COLUMN users.is_active IS 'Whether the user account is active';
COMMENT ON COLUMN users.last_login IS 'Timestamp of last login';

-- ========================================
-- SAMPLE DATA (Optional - for testing)
-- ========================================
-- Uncomment the lines below to insert sample data

-- Sample brands
-- INSERT INTO brands (name, description, image_url) VALUES 
-- ('Brand 1', 'Description for brand 1', 'https://example.com/brand1.jpg'),
-- ('Brand 2', 'Description for brand 2', 'https://example.com/brand2.jpg');

-- Sample products
-- INSERT INTO products (title, category, brand_name, stock_status, stock_quantity, original_price, selling_price, description, image_url) VALUES 
-- ('Product 1', 'Category 1', 'Brand 1', 'In Stock', 100, 100.00, 80.00, 'Description for product 1', 'https://example.com/product1.jpg'),
-- ('Product 2', 'Category 2', 'Brand 2', 'In Stock', 50, 200.00, 150.00, 'Description for product 2', 'https://example.com/product2.jpg');

-- ========================================
-- SETUP INSTRUCTIONS
-- ========================================
-- 1. Run this SQL file in your Supabase SQL editor
-- 2. Run: npm run setup-admin (to create admin user)
-- 3. Test login with: username: admin, password: admin123
-- 4. Update environment variables in your .env.local file 