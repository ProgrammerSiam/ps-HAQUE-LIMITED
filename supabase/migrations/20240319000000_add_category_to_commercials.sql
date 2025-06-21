ALTER TABLE public.tv_commercials
ADD COLUMN category VARCHAR(255) DEFAULT 'tv_commercial'::character varying NOT NULL; 