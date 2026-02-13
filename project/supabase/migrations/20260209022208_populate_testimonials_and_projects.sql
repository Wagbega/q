/*
  # Populate Sample Testimonials and Project Galleries

  1. Add sample testimonials
  2. Add sample projects with images
  3. Data includes various service types: Solar, Amusement, CCTV, Automation

  All data is seeded for demonstration purposes.
*/

-- Insert sample testimonials
INSERT INTO testimonials (author_name, position, company, content, rating, image_url)
VALUES
  ('John Mitchell', 'Facilities Manager', 'Downtown Solar Solutions', 'Their solar installation transformed our energy costs. Professional team, quality work, and exceptional support throughout the process.', 5, NULL),
  ('Sarah Chen', 'Park Director', 'Adventure Park Co.', 'Outstanding service on our amusement ride installations. Safety and reliability are top-notch. Our guests love the new attractions!', 5, NULL),
  ('Marcus Johnson', 'Security Chief', 'Enterprise Security Group', 'The CCTV system they installed provides crystal-clear footage and is incredibly reliable. 24/7 monitoring support is excellent.', 5, NULL),
  ('Emma Rodriguez', 'Operations Manager', 'Smart Manufacturing Inc.', 'Their automation solutions increased our efficiency by 40%. The team was knowledgeable and professional throughout implementation.', 5, NULL),
  ('David Thompson', 'Technical Director', 'Tech Innovations Ltd.', 'Expert technicians and dependable service. They solved complex integration challenges seamlessly. Highly recommended!', 5, NULL),
  ('Lisa Anderson', 'Property Manager', 'Residential Properties Group', 'Professional installation, timely completion, and outstanding customer service. Our home security system is top-tier.', 5, NULL)
ON CONFLICT DO NOTHING;

-- Insert sample projects
INSERT INTO project_galleries (title, description, service_type, images)
VALUES
  (
    'Commercial Solar Array Installation',
    'Large-scale solar installation for a commercial office complex with 450kW capacity. System includes advanced monitoring and achieved 60% energy reduction.',
    'Solar',
    '["https://images.pexels.com/photos/159397/solar-power-plant-159397.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/53621/solar-panel-solar-modules-installation-53621.jpeg?auto=compress&cs=tinysrgb&w=600"]'::jsonb
  ),
  (
    'Amusement Park Ride Installation',
    'Complete installation of modern spinning ride at family entertainment center. Including structural setup, safety systems, and testing.',
    'Amusement',
    '["https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&w=600"]'::jsonb
  ),
  (
    'Enterprise CCTV Security System',
    '4K multi-camera surveillance system installed across a 5-story office building. 24/7 monitoring with AI threat detection capabilities.',
    'CCTV',
    '["https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/9036220/pexels-photo-9036220.jpeg?auto=compress&cs=tinysrgb&w=600"]'::jsonb
  ),
  (
    'Smart Factory Automation System',
    'Complete IoT integration for manufacturing facility. Real-time production monitoring, predictive maintenance, and 35% efficiency improvement.',
    'Automation',
    '["https://images.pexels.com/photos/8566534/pexels-photo-8566534.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/3938016/pexels-photo-3938016.jpeg?auto=compress&cs=tinysrgb&w=600"]'::jsonb
  ),
  (
    'Residential Solar & Battery System',
    'Home solar installation with Tesla battery storage. Provides 100% energy independence and emergency backup power.',
    'Solar',
    '["https://images.pexels.com/photos/159397/solar-power-plant-159397.jpeg?auto=compress&cs=tinysrgb&w=600"]'::jsonb
  ),
  (
    'Multi-Location CCTV Network',
    'Retail chain security system spanning 15 locations with centralized monitoring. HD cameras with integrated loss prevention analytics.',
    'CCTV',
    '["https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600"]'::jsonb
  )
ON CONFLICT DO NOTHING;