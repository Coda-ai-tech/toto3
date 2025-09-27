-- TOTO CMS Database Schema for Supabase

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Categories table
CREATE TABLE categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  parent_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Products table
CREATE TABLE products (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(500) NOT NULL,
  description TEXT,
  brand VARCHAR(255),
  model_number VARCHAR(255),
  price DECIMAL(10,2),
  availability VARCHAR(50) DEFAULT 'in_stock',
  condition VARCHAR(50) DEFAULT 'new',
  material TEXT[],
  color TEXT[],
  size VARCHAR(255),
  weight VARCHAR(100),
  dimensions VARCHAR(255),
  warranty VARCHAR(255),
  country_of_origin VARCHAR(100),
  gtin VARCHAR(50),
  mpn VARCHAR(100),
  sku VARCHAR(100),
  tags TEXT[],
  is_new BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  seo_title VARCHAR(255),
  seo_description TEXT,
  seo_keywords TEXT,
  features TEXT[],
  technologies TEXT[],
  images TEXT[],
  downloads TEXT[],
  videos TEXT[],
  related_products TEXT[],
  compatible_products TEXT[],
  remarks TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Product categories junction table (many-to-many)
CREATE TABLE product_categories (
  product_id VARCHAR(255) REFERENCES products(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (product_id, category_id)
);

-- Product subcategories junction table
CREATE TABLE product_subcategories (
  product_id VARCHAR(255) REFERENCES products(id) ON DELETE CASCADE,
  subcategory_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (product_id, subcategory_id)
);

-- Banners table
CREATE TABLE banners (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(500),
  link_url VARCHAR(500),
  link_type VARCHAR(50) DEFAULT 'routeLink',
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  start_date TIMESTAMP WITH TIME ZONE,
  end_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Technologies table
CREATE TABLE technologies (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  image_url VARCHAR(500),
  features TEXT[],
  products TEXT[],
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Awards table
CREATE TABLE awards (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(500),
  year INTEGER,
  category VARCHAR(100),
  organization VARCHAR(255),
  products TEXT[],
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Locations table
CREATE TABLE locations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100),
  postal_code VARCHAR(20),
  phone VARCHAR(50),
  email VARCHAR(255),
  website VARCHAR(500),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Content pages table
CREATE TABLE content_pages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug VARCHAR(255) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  content JSONB,
  meta_title VARCHAR(255),
  meta_description TEXT,
  meta_keywords TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_products_name ON products(name);
CREATE INDEX idx_products_brand ON products(brand);
CREATE INDEX idx_products_is_active ON products(is_active);
CREATE INDEX idx_products_created_at ON products(created_at);

CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_categories_is_active ON categories(is_active);

CREATE INDEX idx_banners_is_active ON banners(is_active);
CREATE INDEX idx_banners_sort_order ON banners(sort_order);

CREATE INDEX idx_technologies_slug ON technologies(slug);
CREATE INDEX idx_technologies_is_active ON technologies(is_active);

CREATE INDEX idx_awards_year ON awards(year);
CREATE INDEX idx_awards_is_active ON awards(is_active);

CREATE INDEX idx_locations_city ON locations(city);
CREATE INDEX idx_locations_country ON locations(country);
CREATE INDEX idx_locations_is_active ON locations(is_active);

CREATE INDEX idx_content_pages_slug ON content_pages(slug);
CREATE INDEX idx_content_pages_is_active ON content_pages(is_active);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_banners_updated_at BEFORE UPDATE ON banners
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_technologies_updated_at BEFORE UPDATE ON technologies
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_awards_updated_at BEFORE UPDATE ON awards
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_locations_updated_at BEFORE UPDATE ON locations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_content_pages_updated_at BEFORE UPDATE ON content_pages
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert default categories
INSERT INTO categories (name, slug, description) VALUES
('Neorest', 'neorest', 'Premium smart toilet collection'),
('Commercial', 'commercial', 'Commercial bathroom solutions'),
('Residential', 'residential', 'Home bathroom products'),
('Washlet', 'washlet', 'Bidet toilet seats'),
('Faucet', 'faucet', 'Bathroom faucets and fixtures'),
('Shower', 'shower', 'Shower systems and accessories'),
('Lavatory', 'lavatory', 'Bathroom sinks and vanities');

-- Insert some default subcategories
INSERT INTO categories (name, slug, description, parent_id) VALUES
('Toilet and Urinal', 'toilet-and-urinal', 'Toilets and urinals', (SELECT id FROM categories WHERE slug = 'commercial')),
('Urinal Partition', 'urinal-partition', 'Urinal partitions and dividers', (SELECT id FROM categories WHERE slug = 'toilet-and-urinal')),
('Fixed Shower Head', 'fixed-shower-head', 'Fixed shower head systems', (SELECT id FROM categories WHERE slug = 'shower')),
('Hand Shower', 'hand-shower', 'Handheld shower systems', (SELECT id FROM categories WHERE slug = 'shower'));

-- Enable Row Level Security (RLS)
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE technologies ENABLE ROW LEVEL SECURITY;
ALTER TABLE awards ENABLE ROW LEVEL SECURITY;
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_pages ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read access for categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Public read access for products" ON products FOR SELECT USING (true);
CREATE POLICY "Public read access for banners" ON banners FOR SELECT USING (true);
CREATE POLICY "Public read access for technologies" ON technologies FOR SELECT USING (true);
CREATE POLICY "Public read access for awards" ON awards FOR SELECT USING (true);
CREATE POLICY "Public read access for locations" ON locations FOR SELECT USING (true);
CREATE POLICY "Public read access for content_pages" ON content_pages FOR SELECT USING (true);

-- Create policies for authenticated users (CMS access)
CREATE POLICY "Authenticated users can manage categories" ON categories FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage products" ON products FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage banners" ON banners FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage technologies" ON technologies FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage awards" ON awards FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage locations" ON locations FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage content_pages" ON content_pages FOR ALL USING (auth.role() = 'authenticated');
