-- 1. Create events_gallery table
CREATE TABLE IF NOT EXISTS public.events_gallery (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    city TEXT DEFAULT 'Hyderabad',
    image_url TEXT NOT NULL,
    alt_text TEXT,
    is_featured BOOLEAN DEFAULT FALSE,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.events_gallery ENABLE ROW LEVEL SECURITY;

-- 3. Create Public Read Access Policy
CREATE POLICY "Allow public read access" 
ON public.events_gallery 
FOR SELECT 
USING (true);

-- 4. Create Public/Authenticated Insert & Update Policy (for admin uploads)
CREATE POLICY "Allow write access for authenticated or service" 
ON public.events_gallery 
FOR ALL 
USING (true);
