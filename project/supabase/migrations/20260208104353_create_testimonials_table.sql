/*
  # Create testimonials table

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key)
      - `author_name` (text, customer/client name)
      - `position` (text, job title or role)
      - `company` (text, company name)
      - `content` (text, testimonial message)
      - `rating` (integer, 1-5 star rating)
      - `image_url` (text, profile image URL)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `testimonials` table
    - Add policy to allow public read access
    - Add policy to allow anon users to create testimonials
*/

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name text NOT NULL,
  position text NOT NULL,
  company text NOT NULL,
  content text NOT NULL,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  image_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read testimonials"
  ON testimonials
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can submit testimonial"
  ON testimonials
  FOR INSERT
  WITH CHECK (true);
