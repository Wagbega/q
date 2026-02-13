/*
  # Create service inquiries table

  1. New Tables
    - `service_inquiries`
      - `id` (uuid, primary key)
      - `name` (text, customer name)
      - `email` (text, customer email)
      - `phone` (text, customer phone)
      - `service_type` (text, type of service requested)
      - `message` (text, inquiry details)
      - `status` (text, inquiry status: pending, contacted, completed)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS on `service_inquiries` table
    - Add policy to allow public users to submit inquiries
*/

CREATE TABLE IF NOT EXISTS service_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_type text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE service_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit service inquiry"
  ON service_inquiries
  FOR INSERT
  WITH CHECK (true);
