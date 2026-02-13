/*
  # Create hero settings table

  1. New Tables
    - `hero_settings`
      - `id` (uuid, primary key)
      - `hero_image_url` (text) - Background image URL for hero section
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS on `hero_settings` table
    - Add policy for public read access (anyone can view hero settings)
    - Add policy for authenticated users to update (admin-only)
*/

CREATE TABLE IF NOT EXISTS hero_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hero_image_url text NOT NULL DEFAULT 'https://images.pexels.com/photos/3962671/pexels-photo-3962671.jpeg?auto=compress&cs=tinysrgb&w=1200',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE hero_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read hero settings"
  ON hero_settings
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can update hero settings"
  ON hero_settings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

INSERT INTO hero_settings (hero_image_url) VALUES ('https://images.pexels.com/photos/3962671/pexels-photo-3962671.jpeg?auto=compress&cs=tinysrgb&w=1200') ON CONFLICT DO NOTHING;
