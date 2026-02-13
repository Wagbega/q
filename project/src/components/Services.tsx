import { useState } from 'react';
import { Zap, Lightbulb, Camera, Settings } from 'lucide-react';
import { ServiceModal } from './ServiceModal';

const services = [
  {
    id: 'solar',
    title: 'Solar & Renewable Energy',
    description: 'Professional-grade solar panel systems, inverters, and renewable energy solutions with expert installation and maintenance.',
    icon: Zap,
    features: ['System Design & Procurement', 'Expert Installation', 'Repair Services', 'Preventive Maintenance', 'Performance Monitoring'],
    color: 'from-yellow-400 to-orange-500',
    details: 'We specialize in designing and installing complete solar energy systems tailored to your specific needs. From small residential installations to large-scale industrial solar farms, our team handles every aspect of your renewable energy project.',
    benefits: [
      'Reduce energy costs by up to 70%',
      'Government incentives and tax credits',
      'Environmentally sustainable',
      'Increased property value',
      'Energy independence',
      'Long-term savings guarantee'
    ],
    process: [
      'Initial consultation to assess your energy needs and site conditions',
      'Custom system design optimized for maximum efficiency',
      'Equipment procurement from certified suppliers',
      'Professional installation by certified technicians',
      'System testing and performance optimization',
      'Ongoing monitoring and maintenance support'
    ]
  },
  {
    id: 'amusement',
    title: 'Amusement Park Rides & Games',
    description: 'Complete procurement, installation, and maintenance of commercial-grade amusement rides and gaming equipment.',
    icon: Lightbulb,
    features: ['Equipment Procurement', 'Professional Installation', 'Regular Inspections', 'Repair & Restoration', 'Safety Compliance'],
    color: 'from-pink-400 to-rose-500',
    details: 'From thrilling roller coasters to interactive gaming systems, we manage the complete lifecycle of amusement equipment. Our expertise ensures safe operation, maximum uptime, and guest satisfaction.',
    benefits: [
      'Safety certified equipment',
      '99.8% operational uptime',
      'Scheduled maintenance programs',
      'Emergency repair support',
      'Compliance with all regulations',
      'Revenue optimization'
    ],
    process: [
      'Site assessment and capacity planning',
      'Equipment selection and procurement',
      'Safe installation with full certification',
      'Staff training and operational guidelines',
      'Regular inspections and maintenance',
      'Performance monitoring and upgrades'
    ]
  },
  {
    id: 'cctv',
    title: 'CCTV & Security Systems',
    description: 'Comprehensive CCTV installation and monitoring solutions for residential, commercial, and industrial facilities.',
    icon: Camera,
    features: ['System Design', 'HD/4K Installation', 'Network Setup', 'Maintenance & Support', '24/7 Monitoring Options'],
    color: 'from-blue-400 to-cyan-500',
    details: 'Our CCTV systems provide reliable surveillance with cutting-edge technology. We handle everything from initial design to 24/7 monitoring and support, ensuring your property is protected around the clock.',
    benefits: [
      'HD and 4K camera options',
      'Cloud storage with 30-day backup',
      'AI-powered threat detection',
      '24/7 professional monitoring',
      'Mobile app for remote viewing',
      'Insurance premium reductions'
    ],
    process: [
      'Security needs assessment and site survey',
      'Custom system design with optimal camera placement',
      'Installation of cameras, DVR/NVR, and network infrastructure',
      'System configuration and testing',
      'Staff training on system operations',
      'Ongoing monitoring and maintenance'
    ]
  },
  {
    id: 'automation',
    title: 'Home, Factory & Industrial Automation',
    description: 'Smart automation solutions to optimize efficiency, safety, and control in residential, factory, and industrial environments.',
    icon: Settings,
    features: ['System Integration', 'Smart Controls', 'IoT Solutions', 'Safety Systems', 'Custom Programming'],
    color: 'from-emerald-400 to-teal-500',
    details: 'We transform spaces into intelligent automated environments. Our solutions range from smart home systems to complex industrial automation, improving efficiency, safety, and productivity.',
    benefits: [
      '30-50% energy savings',
      'Improved safety and compliance',
      'Real-time monitoring and analytics',
      'Remote control capabilities',
      'Predictive maintenance',
      'Scalable and future-proof systems'
    ],
    process: [
      'Requirements gathering and system planning',
      'Hardware and software selection',
      'Integration with existing systems',
      'Programming and configuration',
      'Testing and optimization',
      'Training and ongoing support'
    ]
  }
];

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <>
      <section id="services" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Complete solutions across multiple industries with professional expertise, quality equipment, and dedicated support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                    <IconComponent size={40} className="mb-4" />
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase">Key Services:</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-400">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={() => setSelectedService(service)}
                      className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </>
  );
}
