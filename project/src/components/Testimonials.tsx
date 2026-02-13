import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Testimonial {
  id: string;
  author_name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image_url: string | null;
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (data && data.length === 0) {
          setTestimonials(sampleTestimonials);
        } else {
          setTestimonials(data || []);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setTestimonials(sampleTestimonials);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={18}
        className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-slate-600'}
      />
    ));
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  if (loading) {
    return null;
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See what our satisfied clients have to say about our professional services and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 6).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-slate-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-slate-600">
                {testimonial.image_url ? (
                  <img
                    src={testimonial.image_url}
                    alt={testimonial.author_name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
                    {getInitials(testimonial.author_name)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author_name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sampleTestimonials: Testimonial[] = [
  {
    id: '1',
    author_name: 'John Mitchell',
    position: 'Facilities Manager',
    company: 'Downtown Solar Solutions',
    content: 'Their solar installation transformed our energy costs. Professional team, quality work, and exceptional support throughout the process.',
    rating: 5,
    image_url: null,
  },
  {
    id: '2',
    author_name: 'Sarah Chen',
    position: 'Park Director',
    company: 'Adventure Park Co.',
    content: 'Outstanding service on our amusement ride installations. Safety and reliability are top-notch. Our guests love the new attractions!',
    rating: 5,
    image_url: null,
  },
  {
    id: '3',
    author_name: 'Marcus Johnson',
    position: 'Security Chief',
    company: 'Enterprise Security Group',
    content: 'The CCTV system they installed provides crystal-clear footage and is incredibly reliable. 24/7 monitoring support is excellent.',
    rating: 5,
    image_url: null,
  },
  {
    id: '4',
    author_name: 'Emma Rodriguez',
    position: 'Operations Manager',
    company: 'Smart Manufacturing Inc.',
    content: 'Their automation solutions increased our efficiency by 40%. The team was knowledgeable and professional throughout implementation.',
    rating: 5,
    image_url: null,
  },
  {
    id: '5',
    author_name: 'David Thompson',
    position: 'Technical Director',
    company: 'Tech Innovations Ltd.',
    content: 'Expert technicians and dependable service. They solved complex integration challenges seamlessly. Highly recommended!',
    rating: 5,
    image_url: null,
  },
  {
    id: '6',
    author_name: 'Lisa Anderson',
    position: 'Property Manager',
    company: 'Residential Properties Group',
    content: 'Professional installation, timely completion, and outstanding customer service. Our home security system is top-tier.',
    rating: 5,
    image_url: null,
  },
];
