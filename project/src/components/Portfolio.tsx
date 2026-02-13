import { Award, CheckCircle } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Industrial Solar Farm Installation',
    service: 'Solar & Renewable Energy',
    description: 'Large-scale 500kW solar installation for manufacturing facility',
    image: 'from-yellow-100 to-orange-100',
    results: ['50% energy cost reduction', '99.5% system uptime', 'Full monitoring dashboard']
  },
  {
    id: 2,
    title: 'Theme Park Equipment Installation',
    service: 'Amusement Park Rides',
    description: 'Installation of 8 advanced amusement rides with safety systems',
    image: 'from-pink-100 to-rose-100',
    results: ['Zero downtime operations', 'Safety certified', 'Full maintenance support']
  },
  {
    id: 3,
    title: 'Corporate CCTV Network',
    service: 'CCTV & Security',
    description: 'Multi-site 4K security system installation for corporate offices',
    image: 'from-blue-100 to-cyan-100',
    results: ['120+ cameras deployed', '24/7 monitoring', 'Cloud backup included']
  },
  {
    id: 4,
    title: 'Smart Factory Automation',
    service: 'Industrial Automation',
    description: 'Complete IoT automation system for manufacturing facility',
    image: 'from-emerald-100 to-teal-100',
    results: ['40% efficiency increase', 'Real-time analytics', 'Custom control interfaces']
  },
  {
    id: 5,
    title: 'Residential Solar System',
    service: 'Solar & Renewable Energy',
    description: 'Complete home solar installation with battery backup',
    image: 'from-yellow-100 to-orange-100',
    results: ['Grid-independent capability', 'Smart monitoring', 'Warranty included']
  },
  {
    id: 6,
    title: 'Entertainment Complex Security',
    service: 'CCTV & Security',
    description: 'Integrated security system for amusement complex',
    image: 'from-blue-100 to-cyan-100',
    results: ['AI-powered detection', 'Integrated with rides', 'Emergency response ready']
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award size={28} className="text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Completed Projects</h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Trusted by businesses across multiple sectors for reliable, professional installations and support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-700 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`bg-gradient-to-br ${project.image} h-48 flex items-center justify-center dark:opacity-75`}>
                <div className="text-center">
                  <Award size={48} className="text-gray-400 dark:text-gray-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 dark:text-gray-700">{project.service}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="space-y-2">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
