/*
  # Create project galleries table

  1. New Tables
    - `project_galleries`
      - `id` (uuid, primary key)
      - `title` (text, project title)
      - `description` (text, project description)
      - `service_type` (text, related service: solar, amusement, cctv, automation)
      - `images` (jsonb, array of image URLs)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `project_galleries` table
    - Add policy to allow public read access
*/

CREATE TABLE IF NOT EXISTS project_galleries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  service_type text NOT NULL,
  images jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE project_galleries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read project galleries"
  ON project_galleries
  FOR SELECT
  USING (true);
